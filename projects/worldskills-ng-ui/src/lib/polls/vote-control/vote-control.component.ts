import {
  ChangeDetectionStrategy, Component, computed, effect, inject, input, output, signal, TemplateRef,
} from '@angular/core';
import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Poll } from '../models/poll';
import { PollResult } from '../models/result';
import { Vote } from '../models/vote';
import { VoteEntry } from '../models/vote-entry';
import { Track } from '../models/track';
import { OptionHandler } from '../models/option-handler';
import { DefaultOptionHandler } from '../models/default-option-handler';
import { WsAlertService } from '../../alert/alert.service';
import { WsConfirmService } from '../../dialog/confirm.service';
import { StandardPollComponent } from '../standard-poll/standard-poll.component';
import { WeightedPollComponent } from '../weighted-poll/weighted-poll.component';
import { MultiselectPollComponent } from '../multiselect-poll/multiselect-poll.component';
import { PollResultComponent } from '../poll-result/poll-result.component';

type PollState = 'running' | 'not-started' | 'expired';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-vote-control',
  standalone: true,
  imports: [
    NgTemplateOutlet, TranslatePipe,
    ButtonModule, MenuModule,
    StandardPollComponent, WeightedPollComponent,
    MultiselectPollComponent, PollResultComponent,
  ],
  providers: [DatePipe],
  templateUrl: './vote-control.component.html',
})
export class VoteControlComponent {

  // ── Inputs ────────────────────────────────────────────────────────────────

  // Voting context
  personId = input<number | null>(null);

  // Manage button visibility
  showEditButton = input(false);
  showExtendButton = input(false);
  showResetButton = input(false);
  showDeleteButton = input(false);
  showExportButton = input(false);
  showOpenButton = input(false);
  showCloseButton = input(false);
  showCustomView = input(false);

  // Data
  poll = input.required<Poll>();
  results = input<PollResult[]>([]);
  voted = input<Vote>({ hasVoted: false, votes: [], anonymous: false, abstained: false });
  votedDependsOn = input<Vote | null>(null);
  tracks = input<Track[]>([]);

  // Behaviour
  confirmBeforeVote = input(false);
  confirmBeforeAbstain = input(false);
  optionHandler = input<OptionHandler>(new DefaultOptionHandler());
  isOwner = input(false);

  // Template overrides
  titleTemplate = input<TemplateRef<unknown> | null>(null);
  questionTemplate = input<TemplateRef<unknown> | null>(null);
  beforeOptionsTemplate = input<TemplateRef<unknown> | null>(null);
  optionsTemplate = input<TemplateRef<unknown> | null>(null);
  afterOptionsTemplate = input<TemplateRef<unknown> | null>(null);
  beforeResultTemplate = input<TemplateRef<unknown> | null>(null);
  resultTemplate = input<TemplateRef<unknown> | null>(null);
  afterResultTemplate = input<TemplateRef<unknown> | null>(null);
  footerTemplate = input<TemplateRef<unknown> | null>(null);
  customViewTemplate = input<TemplateRef<unknown> | null>(null);

  // ── Outputs ───────────────────────────────────────────────────────────────

  edit = output<Poll>();
  extend = output<Poll>();
  reset = output<Poll>();
  delete = output<Poll>();
  openClicked = output<Poll>();
  closeClicked = output<Poll>();
  voteSelected = output<VoteEntry[]>();
  abstainSelected = output<void>();
  voteRemoved = output<void>();
  exportClicked = output<void>();
  viewChange = output<'question' | 'result'>();

  // ── State ─────────────────────────────────────────────────────────────────

  view = signal<'question' | 'result'>('question');
  state = signal<PollState>('running');
  selection = signal<VoteEntry[]>([]);

  manageItems = computed<MenuItem[]>(() => {
    const t = (key: string) => this.translate.instant(`ws_ui.polls.vote_control.${key}`);
    const poll = this.poll();
    const items: MenuItem[] = [];
    if (this.showExportButton() && this.view() === 'result') {
      items.push({ label: t('menu_export'), icon: 'pi pi-download', command: () => this.exportClicked.emit() });
    }
    if (this.showResetButton()) {
      items.push({ label: t('menu_reset'), icon: 'pi pi-refresh', command: () => this.reset.emit(poll) });
    }
    if (this.showExtendButton()) {
      items.push({ label: t('menu_extend'), icon: 'pi pi-calendar-plus', command: () => this.extend.emit(poll) });
    }
    if (this.showEditButton()) {
      items.push({ label: t('menu_edit'), icon: 'pi pi-pencil', command: () => this.edit.emit(poll) });
    }
    if (this.showDeleteButton()) {
      items.push({ label: t('menu_delete'), icon: 'pi pi-trash', command: () => this.delete.emit(poll) });
    }
    if (this.showOpenButton() && this.state() !== 'running') {
      items.push({ label: t('menu_open'), icon: 'pi pi-play', command: () => this.openClicked.emit(poll) });
    }
    if (this.showCloseButton() && this.state() === 'running') {
      items.push({ label: t('menu_close'), icon: 'pi pi-stop', command: () => this.closeClicked.emit(poll) });
    }
    return items;
  });

  dateRange = computed<string>(() => {
    const poll = this.poll();
    const start = new Date(poll.start);
    const expiry = new Date(poll.expiry);
    const fmt = 'd MMM yyyy';
    const sameMonthYear =
      start.getMonth() === expiry.getMonth() &&
      start.getFullYear() === expiry.getFullYear();
    if (sameMonthYear) {
      return `${this.datePipe.transform(start, 'd')}–${this.datePipe.transform(expiry, fmt)}`;
    }
    return `${this.datePipe.transform(start, fmt)} – ${this.datePipe.transform(expiry, fmt)}`;
  });

  private alertService = inject(WsAlertService);
  private confirmService = inject(WsConfirmService);
  private datePipe = inject(DatePipe);
  private translate = inject(TranslateService);

  constructor() {
    effect(() => {
      const poll = this.poll();
      const voted = this.voted();
      if (!poll || !voted) return;
      this.selection.set(voted.votes ?? []);
      this.calculateState();
    });
  }

  calculateState(): void {
    const now = new Date();
    const start = new Date(this.poll().start);
    const expiry = new Date(this.poll().expiry);

    if (now < start) {
      this.state.set('not-started');
      this.view.set('result');
    } else if (now > expiry) {
      this.state.set('expired');
      this.view.set('result');
    } else {
      this.state.set('running');
    }
  }

  onSelectionChange(entries: VoteEntry[]): void {
    this.selection.set(entries);
  }

  async vote(): Promise<void> {
    if (this.voted().hasVoted) {
      this.alertService.info(this.translate.instant('ws_ui.polls.vote_control.already_voted'));
      return;
    }
    const poll = this.poll();
    const votedDependsOn = this.votedDependsOn();
    if (poll.dependsOn && votedDependsOn && !votedDependsOn.hasVoted) {
      this.alertService.warn(
        this.translate.instant('ws_ui.polls.vote_control.must_vote_on', { title: poll.dependsOn.title.text })
      );
      return;
    }
    if (this.confirmBeforeVote()) {
      const labels = this.selection()
        .map(e => poll.options.find(o => o.id === Number(e.optionId))?.text.text)
        .filter(Boolean)
        .join(', ');
      const confirmed = await this.confirmService.confirm({
        message: this.translate.instant('ws_ui.polls.vote_control.confirm_vote', { labels }),
        acceptLabel: this.translate.instant('ws_ui.polls.vote_control.vote'),
      });
      if (!confirmed) return;
    }
    this.voteSelected.emit(this.selection());
  }

  async abstain(): Promise<void> {
    if (this.voted().hasVoted) {
      this.alertService.info(this.translate.instant('ws_ui.polls.vote_control.already_voted'));
      return;
    }
    const poll = this.poll();
    const votedDependsOn = this.votedDependsOn();
    if (poll.dependsOn && votedDependsOn && !votedDependsOn.hasVoted) {
      this.alertService.warn(
        this.translate.instant('ws_ui.polls.vote_control.must_vote_on', { title: poll.dependsOn.title.text })
      );
      return;
    }
    if (this.confirmBeforeAbstain()) {
      const confirmed = await this.confirmService.confirm({
        message: this.translate.instant('ws_ui.polls.vote_control.confirm_abstain'),
        acceptLabel: this.translate.instant('ws_ui.polls.vote_control.abstain'),
      });
      if (!confirmed) return;
    }
    this.abstainSelected.emit();
  }

  unvote(): void {
    this.voteRemoved.emit();
  }

  changeView(view: 'question' | 'result'): void {
    this.view.set(view);
    this.viewChange.emit(view);
  }

  showVoteButton(): boolean {
    return this.isWhitelisted() && !this.voted().hasVoted && this.view() === 'question' && this.state() === 'running';
  }

  showAbstainButton(): boolean {
    return this.isWhitelisted() && !this.voted().hasVoted && this.poll().allowingAbstain && this.view() === 'question' && this.state() === 'running';
  }

  showClearVoteButton(): boolean {
    return this.voted().hasVoted && this.poll().allowingReVote && this.view() === 'question' && this.state() === 'running';
  }

  showResultsButton(): boolean {
    if (this.view() === 'result' || !this.poll()) return false;
    const poll = this.poll();
    if (poll.anonymousResults) return this.isOwner();
    if (this.isOwner()) return true;
    return poll.showingResults || new Date() > new Date(poll.expiry);
  }

  hasNoVoteSelected(): boolean {
    return !this.selection() || this.selection().length === 0;
  }

  canSeeWhoVoted(): boolean {
    const poll = this.poll();
    return poll ? (poll.anonymousResults ? this.isOwner() : true) : false;
  }

  isWhitelisted(): boolean {
    const poll = this.poll();
    if (!poll.whitelist) return true;
    return (poll.allowedVoters ?? []).some(v => v.id === this.personId());
  }

  getVoteText(entry: VoteEntry): string {
    return this.poll().options.find(o => o.id === Number(entry.optionId))?.text.text ?? '';
  }
}

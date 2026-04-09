import {
  Component, Input, Output, EventEmitter,
  OnInit, OnChanges, TemplateRef, inject
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
  selector: 'ws-ng-ui-vote-control',
  standalone: true,
  imports: [
    DatePipe, NgTemplateOutlet, TranslatePipe,
    ButtonModule, MenuModule,
    StandardPollComponent, WeightedPollComponent,
    MultiselectPollComponent, PollResultComponent,
  ],
  providers: [DatePipe],
  templateUrl: './vote-control.component.html',
})
export class VoteControlComponent implements OnInit, OnChanges {
  // Voting context
  @Input() personId: number | null = null;

  // Manage button visibility
  @Input() showEditButton = false;
  @Input() showExtendButton = false;
  @Input() showResetButton = false;
  @Input() showDeleteButton = false;
  @Input() showExportButton = false;
  @Input() showOpenButton = false;
  @Input() showCloseButton = false;
  @Input() showCustomView = false;

  // Data
  @Input({ required: true }) poll!: Poll;
  @Input() results: PollResult[] = [];
  @Input() voted: Vote = { hasVoted: false, votes: [], anonymous: false, abstained: false };
  @Input() votedDependsOn: Vote | null = null;
  @Input() tracks: Track[] = [];

  // Behaviour
  @Input() confirmBeforeVote = false;
  @Input() confirmBeforeAbstain = false;
  @Input() optionHandler: OptionHandler = new DefaultOptionHandler();
  @Input() isOwner = false;

  // Template overrides
  @Input() titleTemplate: TemplateRef<unknown> | null = null;
  @Input() questionTemplate: TemplateRef<unknown> | null = null;
  @Input() beforeOptionsTemplate: TemplateRef<unknown> | null = null;
  @Input() optionsTemplate: TemplateRef<unknown> | null = null;
  @Input() afterOptionsTemplate: TemplateRef<unknown> | null = null;
  @Input() beforeResultTemplate: TemplateRef<unknown> | null = null;
  @Input() resultTemplate: TemplateRef<unknown> | null = null;
  @Input() afterResultTemplate: TemplateRef<unknown> | null = null;
  @Input() footerTemplate: TemplateRef<unknown> | null = null;
  @Input() customViewTemplate: TemplateRef<unknown> | null = null;

  // Events
  @Output() edit = new EventEmitter<Poll>();
  @Output() extend = new EventEmitter<Poll>();
  @Output() reset = new EventEmitter<Poll>();
  @Output() delete = new EventEmitter<Poll>();
  @Output() openClicked = new EventEmitter<Poll>();
  @Output() closeClicked = new EventEmitter<Poll>();
  @Output() voteSelected = new EventEmitter<VoteEntry[]>();
  @Output() abstainSelected = new EventEmitter<void>();
  @Output() voteRemoved = new EventEmitter<void>();
  @Output() exportClicked = new EventEmitter<void>();
  @Output() viewChange = new EventEmitter<'question' | 'result'>();

  private alertService = inject(WsAlertService);
  private confirmService = inject(WsConfirmService);
  private datePipe = inject(DatePipe);
  private translate = inject(TranslateService);

  view: 'question' | 'result' = 'question';
  state: PollState = 'running';
  selection: VoteEntry[] = [];

  get manageItems(): MenuItem[] {
    const t = (key: string) => this.translate.instant(`ws_ui.polls.vote_control.${key}`);
    const items: MenuItem[] = [];
    if (this.showExportButton && this.view === 'result') {
      items.push({ label: t('menu_export'), icon: 'pi pi-download', command: () => this.exportClicked.emit() });
    }
    if (this.showResetButton) {
      items.push({ label: t('menu_reset'), icon: 'pi pi-refresh', command: () => this.reset.emit(this.poll) });
    }
    if (this.showExtendButton) {
      items.push({ label: t('menu_extend'), icon: 'pi pi-calendar-plus', command: () => this.extend.emit(this.poll) });
    }
    if (this.showEditButton) {
      items.push({ label: t('menu_edit'), icon: 'pi pi-pencil', command: () => this.edit.emit(this.poll) });
    }
    if (this.showDeleteButton) {
      items.push({ label: t('menu_delete'), icon: 'pi pi-trash', command: () => this.delete.emit(this.poll) });
    }
    if (this.showOpenButton && this.state !== 'running') {
      items.push({ label: t('menu_open'), icon: 'pi pi-play', command: () => this.openClicked.emit(this.poll) });
    }
    if (this.showCloseButton && this.state === 'running') {
      items.push({ label: t('menu_close'), icon: 'pi pi-stop', command: () => this.closeClicked.emit(this.poll) });
    }
    return items;
  }

  get dateRange(): string {
    const start = new Date(this.poll.start);
    const expiry = new Date(this.poll.expiry);
    const fmt = 'd MMM yyyy';
    const sameMonthYear =
      start.getMonth() === expiry.getMonth() &&
      start.getFullYear() === expiry.getFullYear();
    if (sameMonthYear) {
      return `${this.datePipe.transform(start, 'd')}–${this.datePipe.transform(expiry, fmt)}`;
    }
    return `${this.datePipe.transform(start, fmt)} – ${this.datePipe.transform(expiry, fmt)}`;
  }

  ngOnInit(): void { this.init(); }
  ngOnChanges(): void { this.init(); }

  init(): void {
    if (!this.poll || !this.voted) return;
    this.selection = this.voted.votes ?? [];
    this.calculateState();
  }

  calculateState(): void {
    const now = new Date();
    const start = new Date(this.poll.start);
    const expiry = new Date(this.poll.expiry);

    if (now < start) {
      this.state = 'not-started';
      this.view = 'result';
    } else if (now > expiry) {
      this.state = 'expired';
      this.view = 'result';
    } else {
      this.state = 'running';
    }
  }

  onSelectionChange(entries: VoteEntry[]): void {
    this.selection = entries;
  }

  async vote(): Promise<void> {
    if (this.voted.hasVoted) {
      this.alertService.info(this.translate.instant('ws_ui.polls.vote_control.already_voted'));
      return;
    }
    if (this.poll.dependsOn && this.votedDependsOn && !this.votedDependsOn.hasVoted) {
      this.alertService.warn(
        this.translate.instant('ws_ui.polls.vote_control.must_vote_on', { title: this.poll.dependsOn.title.text })
      );
      return;
    }
    if (this.confirmBeforeVote) {
      const labels = this.selection
        .map(e => this.poll.options.find(o => o.id === Number(e.optionId))?.text.text)
        .filter(Boolean)
        .join(', ');
      const confirmed = await this.confirmService.confirm({
        message: this.translate.instant('ws_ui.polls.vote_control.confirm_vote', { labels }),
        acceptLabel: this.translate.instant('ws_ui.polls.vote_control.vote'),
      });
      if (!confirmed) return;
    }
    this.voteSelected.emit(this.selection);
  }

  async abstain(): Promise<void> {
    if (this.voted.hasVoted) {
      this.alertService.info(this.translate.instant('ws_ui.polls.vote_control.already_voted'));
      return;
    }
    if (this.poll.dependsOn && this.votedDependsOn && !this.votedDependsOn.hasVoted) {
      this.alertService.warn(
        this.translate.instant('ws_ui.polls.vote_control.must_vote_on', { title: this.poll.dependsOn.title.text })
      );
      return;
    }
    if (this.confirmBeforeAbstain) {
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
    this.view = view;
    this.viewChange.emit(view);
  }

  showVoteButton(): boolean {
    return this.isWhitelisted() && !this.voted.hasVoted && this.view === 'question' && this.state === 'running';
  }

  showAbstainButton(): boolean {
    return this.isWhitelisted() && !this.voted.hasVoted && this.poll.allowingAbstain && this.view === 'question' && this.state === 'running';
  }

  showClearVoteButton(): boolean {
    return this.voted.hasVoted && this.poll.allowingReVote && this.view === 'question' && this.state === 'running';
  }

  showResultsButton(): boolean {
    if (this.view === 'result' || !this.poll) return false;
    if (this.poll.anonymousResults) return this.isOwner;
    if (this.isOwner) return true;
    return this.poll.showingResults || new Date() > new Date(this.poll.expiry);
  }

  hasNoVoteSelected(): boolean {
    return !this.selection || this.selection.length === 0;
  }

  canSeeWhoVoted(): boolean {
    return this.poll ? (this.poll.anonymousResults ? this.isOwner : true) : false;
  }

  isWhitelisted(): boolean {
    if (!this.poll.whitelist) return true;
    return (this.poll.allowedVoters ?? []).some(v => v.id === this.personId);
  }

  getVoteText(entry: VoteEntry): string {
    return this.poll.options.find(o => o.id === Number(entry.optionId))?.text.text ?? '';
  }
}

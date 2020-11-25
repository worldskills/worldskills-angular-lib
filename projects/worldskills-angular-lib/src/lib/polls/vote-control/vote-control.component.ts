import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Poll } from '../models/poll';
import { Result } from '../models/result';
import { Vote } from '../models/vote';
import { Subscription } from 'rxjs';
import { GenericUtil } from '../../common/util/generic.util';
import { VoteEntry } from '../models/vote-entry';
import { OptionHandler } from '../models/optionHandler';
import { toDate } from '../../common/helpers/date.helper';
import { Track } from '../models/track';

@Component({
  selector: 'ws-vote-control',
  templateUrl: './vote-control.component.html',
  styleUrls: ['./vote-control.component.css']
})
export class VoteControlComponent implements OnInit {

  // button flags
  @Input() showEditButton: boolean;
  @Input() showExtendButton: boolean;
  @Input() showResetButton: boolean;
  @Input() showDeleteButton: boolean;
  @Input() showExportButton: boolean;

  // input models
  @Input() poll: Poll;
  @Input() results: Result[];
  @Input() voted: Vote;
  @Input() tracks: Track[];
  @Input() confirmBeforeVote: boolean;
  @Input() confirmBeforeAbstain: boolean;
  @Input() optionHandler: OptionHandler;
  @Input() isOwner: boolean;

  // templates
  @Input() beforeOptionsTemplate: TemplateRef<any>;
  @Input() optionsDefaultTemplate: TemplateRef<any>;
  @Input() optionsTemplate: TemplateRef<any>;
  @Input() afterOptionsTemplate: TemplateRef<any>;
  @Input() beforeResultTemplate: TemplateRef<any>;
  @Input() resultDefaultTemplate: TemplateRef<any>;
  @Input() resultTemplate: TemplateRef<any>;
  @Input() afterResultTemplate: TemplateRef<any>;
  @Input() controlBarLeftTemplate: TemplateRef<any>;
  @Input() controlBarRightTemplate: TemplateRef<any>;
  @Input() titleTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  @Input() questionTemplate: TemplateRef<any>;

  // events
  @Output() edit: EventEmitter<Poll> = new EventEmitter();
  @Output() extend: EventEmitter<Poll> = new EventEmitter();
  // tslint:disable-next-line:no-output-native
  @Output() reset: EventEmitter<Poll> = new EventEmitter();
  @Output() delete: EventEmitter<Poll> = new EventEmitter();

  @Output() viewChange: EventEmitter<string> = new EventEmitter();
  @Output() voteSelected: EventEmitter<VoteEntry[]> = new EventEmitter();
  @Output() abstainSelected: EventEmitter<any> = new EventEmitter();
  @Output() voteRemoved: EventEmitter<VoteEntry[]> = new EventEmitter();
  @Output() exportClicked: EventEmitter<any> = new EventEmitter();

  view: string;
  subscription: Subscription;
  state: string;
  selection: VoteEntry[];

  constructor() { }


  ngOnInit(): void {
    this.view = 'question';
    this.init();
  }

  // tslint:disable-next-line:use-lifecycle-interface typedef
  ngOnChanges(): void {
    this.init();
  }

  init(): void {
    if (this.poll && this.results && this.voted) {
      this.selection = this.voted.votes;
      this.calculateState();
    }
  }

  calculateState(): void {
    this.state = 'running';
    const now = new Date();
    const start = toDate(this.poll.start);
    const expiry = toDate(this.poll.expiry);

    if (now < start) {
      this.state = 'Not yet started';
      this.view = 'result';
      return;
    }

    if (now > expiry) {
      this.state = 'expired';
      this.view = 'result';
      return;
    }
  }

  selected(model: VoteEntry[]): void {
    this.selection = model;
  }

  vote(): void {
    if (this.voted.hasVoted) {
      alert('You have already voted');
    } else {

      if (this.confirmBeforeVote) {
        const voteSelections = [];
        this.selection.forEach(selected => {
          // tslint:disable-next-line:triple-equals
          const option = this.poll.options.find(x => x.id == selected.optionId);
          voteSelections.push(option.text.text);
        });

        if (confirm(`Are you sure you want to vote for (${voteSelections.join(',')})`)) {
          this.voteSelected.emit(this.selection);
        }
      } else {
        this.voteSelected.emit(this.selection);
      }
    }
  }

  abstain(): void {
    if (this.voted.hasVoted) {
      alert('You have already voted');
    } else {
      if (this.confirmBeforeAbstain) {
        if (confirm(`Are you sure you wish to abstain from voting ?`)) {
          this.abstainSelected.emit();
        }
      } else {
        this.abstainSelected.emit();
      }
    }
  }

  unvote(): void {
    this.voteRemoved.emit(this.selection);
  }

  changeView(view: string): void {
    this.view = view;
    this.viewChange.emit(view);
  }

  viewResultsState(): boolean {
    if (this.view === 'result') {
      return false;
    }

    if (!this.poll) {
      return false;
    }

    if (this.poll.anonymousResults) {
      return false;
    }

    // allow the owner to view results at anytime
    if (this.isOwner) {
      return true;
    }

    const time = new Date().getTime();
    const end = toDate(this.poll.expiry).getTime();
    if (this.poll.showingResults || time > end) {
      return true;
    }

    return false;
  }


  hasVotesSelected(): boolean {
    if (GenericUtil.isNullOrUndefined(this.selection)) {
      return true;
    }

    return this.selection.length === 0;
  }

  editClick(poll: Poll): void {
    this.edit.emit(poll);
  }

  extendClick(poll: Poll): void {
    this.extend.emit(poll);
  }

  resetClick(poll: Poll): void {
    this.reset.emit(poll);
  }

  deleteClick(poll: Poll): void {
    this.delete.emit(poll);
  }

  getVoteText(entry: VoteEntry): string {
    // tslint:disable-next-line:triple-equals
    const option = this.poll.options.find(x => x.id == entry.optionId);
    if (option == null) {
      return '';
    }
    return option.text.text;
  }

  showVoteButton(): boolean {
    return this.voted && !this.voted.hasVoted && this.view === 'question' && this.state === 'running';
  }

  showAbstainButton(): boolean {
    return this.voted && !this.voted.hasVoted && this.poll.allowingAbstain && this.view === 'question' && this.state === 'running';
  }

  showClearVoteButton(): boolean {
    return this.poll && this.voted && this.voted.hasVoted && this.view === 'question' && this.poll.allowingReVote
        && this.state === 'running';
  }

  export(): void {
    this.exportClicked.emit(new Date());
  }

}

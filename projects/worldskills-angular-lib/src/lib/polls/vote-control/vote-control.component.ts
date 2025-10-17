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
import { WSIDateFormat } from '../../date/wsi-date-format';
import { WsiToastService } from '../../alerts/wsi-toast.service';

@Component({
  selector: 'ws-vote-control',
  templateUrl: './vote-control.component.html',
  styleUrls: ['./vote-control.component.css']
})
export class VoteControlComponent implements OnInit {
  @Input() personId; // required for WhiteList polls
  @Input() useToastNotifications: boolean
  // button flags
  @Input() showEditButton: boolean;
  @Input() showExtendButton: boolean;
  @Input() showResetButton: boolean;
  @Input() showDeleteButton: boolean;
  @Input() showExportButton: boolean;
  @Input() showOpenButton: boolean;
  @Input() showCloseButton: boolean;
  @Input() showCustomView: boolean;

  // input models
  @Input() poll: Poll;
  @Input() results: Result[];
  @Input() voted: Vote;
  @Input() votedDependsOn: Vote;
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
  @Input() customViewTemplate: TemplateRef<any>;

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
  @Output() openClicked: EventEmitter<Poll> = new EventEmitter();
  @Output() closeClicked: EventEmitter<Poll> = new EventEmitter();


  view: string;
  subscription: Subscription;
  state: string;
  selection: VoteEntry[];
  dateFormat: string;

  constructor(private toasts: WsiToastService) { }


  ngOnInit(): void {
    this.view = 'question';
    this.dateFormat = `${WSIDateFormat.default}`;
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

  notifyInfo(message: string): void {
    if (this.useToastNotifications) {
     this.toasts.showStandard(message);
    } else {
      // Fallback to alert if toast notifications are not used
      alert(message);
    }
  }

  notifySuccess(title: string, message: string): void {
    if (this.useToastNotifications) {
     this.toasts.showSuccess(title, message);
    } else {
      // Fallback to alert if toast notifications are not used
      alert(message);
    }
  }

   notifyError(title: string, message: string): void {
    if (this.useToastNotifications) {
     this.toasts.showError(title, message);
    } else {
      // Fallback to alert if toast notifications are not used
      alert(message);
    }
  }

  selected(model: VoteEntry[]): void {
    this.selection = model;
  }

  vote(): void {
    if (this.voted.hasVoted) {
      this.notifyInfo('You have already voted');
    } else {
      if (this.poll.dependsOn && this.votedDependsOn && !this.votedDependsOn.hasVoted) {
        this.notifyError('Error', `You must vote on the poll "${this.poll.dependsOn.title.text}" before you can vote on this poll.`);
        return;
      }
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
      this.notifyInfo('You have already voted');
    } else {
       if (this.poll.dependsOn && this.votedDependsOn && !this.votedDependsOn.hasVoted) {
        this.notifyError('Error', `You must vote on the poll "${this.poll.dependsOn.title.text}" before you can vote on this poll.`);
        return;
      }
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

    // if results are anonymous, only the owner can view that results
    if (this.poll.anonymousResults) {
      return this.isOwner;
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

  openClick(poll: Poll): void {
    this.openClicked.emit(poll);
  }

  closeClick(poll: Poll): void {
    this.closeClicked.emit(poll);
  }

  getVoteText(entry: VoteEntry): string {
    // tslint:disable-next-line:triple-equals
    const option = this.poll.options.find(x => x.id == entry.optionId);
    if (option == null) {
      return '';
    }
    return option.text.text;
  }

  isWhiteListed(): boolean
  {
    if (this.poll.whitelist) {
      return this.poll.allowedVoters.filter(x => x.id == this.personId).length > 0;
    }
    
    return true;
  }

  showVoteButton(): boolean {
    return this.isWhiteListed() && this.voted && !this.voted.hasVoted && this.view === 'question' && this.state === 'running';
  }

  showAbstainButton(): boolean {
    return this.isWhiteListed() && this.voted && !this.voted.hasVoted && this.poll.allowingAbstain && this.view === 'question' && this.state === 'running';
  }

  showClearVoteButton(): boolean {
    return this.poll && this.voted && this.voted.hasVoted && this.view === 'question' && this.poll.allowingReVote
        && this.state === 'running';
  }

  showManageButton(): boolean {
    return this.showDeleteButton || this.showEditButton || this.showExtendButton
        || this.showResetButton || (this.view === 'result' && this.showExportButton);
  }

  showWhoVoted(): boolean {
    if (GenericUtil.isNullOrUndefined(this.poll)) {
      return false;
    }

    return this.poll.anonymousResults ? this.isOwner : true;
  }

  export(): void {
    this.exportClicked.emit(new Date());
  }

  useDateRange(): boolean {
    if (GenericUtil.isNullOrUndefined(this.poll)) {
      return false;
    }

    const sameMonth = this.poll.start.getMonth() === this.poll.expiry.getMonth();
    const sameYear = this.poll.start.getFullYear() === this.poll.expiry.getFullYear();
    return sameMonth && sameYear;
  }

}

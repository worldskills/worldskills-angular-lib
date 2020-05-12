import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { PollView } from '../../models/votes/poll-view';
import { ResultView } from '../../models/votes/result-view';
import { VotedView } from '../../models/votes/voted-view';
import { AddVoteView } from '../../models/votes/add-vote-view';
import { GenericUtil } from '../../util/generic-util';

// TODO: Move logic out into a `handler` class to allow better overrides
@Component({
  selector: 'ws-vote-control',
  templateUrl: './vote-control.component.html',
  styleUrls: ['./vote-control.component.css']
})
export class VoteControlComponent implements OnInit {

  // button flags
  @Input() showEditButton: boolean;
  @Input() showResetButton: boolean;
  @Input() showDeleteButton: boolean;

  // input models
  @Input() poll: PollView;
  @Input() results: ResultView[];
  @Input() voted: VotedView;

  // events
  @Output() edit: EventEmitter<PollView> = new EventEmitter();
  @Output() reset: EventEmitter<PollView> = new EventEmitter();
  @Output() delete: EventEmitter<PollView> = new EventEmitter();

  @Output() viewChange: EventEmitter<string> = new EventEmitter();
  @Output() voteSelected: EventEmitter<AddVoteView> = new EventEmitter();
  @Output() voteRemoved: EventEmitter<AddVoteView> = new EventEmitter();

  view: string;
  subscription: Subscription;
  state: string;
  selection: AddVoteView;

  constructor() { }


  ngOnInit(): void {
    this.view = 'question';
    this.init();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(): void {
    this.init();
  }

  init() {
    if (this.poll && this.results && this.voted) {
      this.selection = new AddVoteView({votes: this.voted.votes });
      this.calculateState();
    }
  }

  calculateState() {
    this.state = 'running';
    const now = new Date();
    const start = this.parseDate(this.poll.start);
    const expiry = this.parseDate(this.poll.expiry);

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

  selected(model: AddVoteView) {
    this.selection = model;
  }

  vote() {
    if (this.voted.hasVoted) {
      alert('You have already voted');
    } else {
      this.voteSelected.emit(this.selection);
    }
  }

  unvote() {
    this.voteRemoved.emit(this.selection);
  }

  changeView(view: string) {
    this.view = view;
    this.viewChange.emit(view);
  }

  viewResultsState() {
    if (this.view === 'result') {
      return false;
    }

    if (!this.poll) {
      return false;
    }

    if (this.poll.anonymousResults) {
      return false;
    }

    const time = new Date().getTime();
    const end = this.parseDate(this.poll.expiry).getTime();
    if (this.poll.showingResults || time > end) {
      return true;
    }

    return false;
  }

  parseDate(value: any): Date {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
  }

  hasVotesSelected() {
    if (GenericUtil.isNullOrUndefined(this.selection)) {
      return true;
    }

    return this.selection.votes.length === 0;
  }

  editClick(poll: PollView) {
    this.edit.emit(poll);
  }

  resetClick(poll: PollView) {
    this.reset.emit(poll);
  }

  deleteClick(poll: PollView) {
    this.delete.emit(poll);
  }

  showVoteButton() {
    return this.voted && !this.voted.hasVoted && this.view === 'question' && this.state === 'running';
  }

  showClearVoteButton() {
    return this.poll && this.voted && this.voted.hasVoted && this.view === 'question' && this.poll.allowingReVote
        && this.state === 'running';
  }

}

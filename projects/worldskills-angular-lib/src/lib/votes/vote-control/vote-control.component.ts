import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { PollView } from '../../models/votes/poll-view';
import { ResultView } from '../../models/votes/result-view';
import { VotedView } from '../../models/votes/voted-view';
import { AddVoteView } from '../../models/votes/add-vote-view';

@Component({
  selector: 'ws-vote-control',
  templateUrl: './vote-control.component.html',
  styleUrls: ['./vote-control.component.css']
})
export class VoteControlComponent implements OnInit {

  @Input() poll: PollView;
  @Input() results: ResultView[];
  @Input() voted: VotedView;
  @Output() viewChange: EventEmitter<string> = new EventEmitter();
  @Output() voteSelected: EventEmitter<AddVoteView> = new EventEmitter();
  @Output() voteRemoved: EventEmitter<AddVoteView> = new EventEmitter();

  view: string;
  subscription: Subscription;

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

}

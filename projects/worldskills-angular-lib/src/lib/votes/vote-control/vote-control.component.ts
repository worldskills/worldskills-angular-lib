import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { PollView } from '../../models/votes/poll-view';
import { OptionView } from '../../models/votes/option-view';
import { ResultView } from '../../models/votes/result-view';
import { VotedView } from '../../models/votes/voted-view';

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
  @Output() voteSelected: EventEmitter<number> = new EventEmitter();
  @Output() voteRemoved: EventEmitter<number> = new EventEmitter();

  max: number;
  view: string;
  selectedOptionId: number;
  subscription: Subscription;

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
      this.max = this.results.map(x => x.count).reduce((sum, current) => sum + current, 0);
      this.selectedOptionId = this.voted.optionId;
    }
  }

  vote() {
    if (this.voted.hasVoted) {
      alert('You have already voted');
    } else {
      this.voteSelected.emit(this.selectedOptionId);
    }
  }

  unvote() {
    this.voteRemoved.emit(this.selectedOptionId);
  }

  onVoteSelect(option: OptionView) {
  }

  countVotesPercentage(option: OptionView) {
    if (!this.poll || !this.results) {
      return 0;
    }

    if (this.max === 0) {
      return 0;
    }

    const result = this.results.find(x => x.option.id === option.id);
    return result ? Math.round((result.count / this.max) * 100).toFixed(2) : 0;
  }

  countVotes(option: OptionView) {
    if (!this.poll || !this.results) {
      return 0;
    }

    if (this.max === 0) {
      return 0;
    }

    const result = this.results.find(x => x.option.id === option.id);
    return result ? result.count : 0;
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

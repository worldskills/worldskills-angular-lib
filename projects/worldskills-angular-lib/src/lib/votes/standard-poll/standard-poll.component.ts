import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PollView } from '../../models/votes/poll-view';
import { VotedView } from '../../models/votes/voted-view';
import { OptionView } from '../../models/votes/option-view';
import { AddVoteView } from '../../models/votes/add-vote-view';
import { AddVoteEntryView } from '../../models/votes/add-vote-entry-view';

@Component({
  selector: 'ws-standard-poll',
  templateUrl: './standard-poll.component.html',
  styleUrls: ['./standard-poll.component.css']
})
export class StandardPollComponent implements OnInit {

  @Input() poll: PollView;
  @Input() voted: VotedView;
  @Input() initialSelection: AddVoteView;
  @Output() optionSelected: EventEmitter<AddVoteView> = new EventEmitter();

  selection: AddVoteEntryView;

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    this.init();
  }

  init() {
    if (this.initialSelection) {
      if (this.initialSelection.votes.length > 0) {
        this.selection = this.initialSelection.votes[0];
      } else {
        this.loadDefaultSelection();
      }
    } else {
      this.loadDefaultSelection();
    }
  }

  loadDefaultSelection() {
    this.selection = new AddVoteEntryView();
    this.selection.rank = 1;
    this.selection.optionId = this.poll.options[0].id;
  }

  isSelected(option: OptionView) {
    if (!this.selection) {
      return false;
    }

    return this.selection.optionId === option.id;
  }

  onOptionSelect(option: OptionView) {
    const entry = new AddVoteEntryView({ rank: 1, optionId: option.id });
    const model = new AddVoteView({ votes: [entry] });
    this.optionSelected.emit(model);
  }
}

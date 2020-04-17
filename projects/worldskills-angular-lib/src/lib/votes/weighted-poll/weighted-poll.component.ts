import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PollView } from '../../models/votes/poll-view';
import { VotedView } from '../../models/votes/voted-view';
import { AddVoteView } from '../../models/votes/add-vote-view';
import { AddVoteEntryView } from '../../models/votes/add-vote-entry-view';
import { OptionView } from '../../models/votes/option-view';
import { CheckBoxItem } from '../../models/checkbox-item';

@Component({
  selector: 'ws-weighted-poll',
  templateUrl: './weighted-poll.component.html',
  styleUrls: ['./weighted-poll.component.css']
})
export class WeightedPollComponent implements OnInit {

  @Input() poll: PollView;
  @Input() voted: VotedView;
  @Input() initialSelection: AddVoteView;
  @Output() optionSelected: EventEmitter<AddVoteView> = new EventEmitter();

  checkboxes: CheckBoxItem[];

  selection: OptionView[];

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.selection = [];
    this.checkboxes = this.poll.options.map(
      option => new CheckBoxItem({
        value: option.id,
        selected: this.initialSelection.votes.findIndex(x => x.optionId === option.id) !== -1,
        data: option
      })
    );
  }

  onOptionChange(checkbox: CheckBoxItem) {
    if (checkbox.selected) {
      this.selection.push(checkbox.data);
    } else {
      const index = this.selection.findIndex(x => x.id === checkbox.data.id);
      if (index !== -1) {
        this.selection.splice(index, 1);
      }
    }

    const model = new AddVoteView();
    let counter = 1;
    this.selection.forEach((option, i) => {
      const entry = new AddVoteEntryView({rank: counter, optionId: option.id});
      model.votes.push(entry);
      counter++;
    });

    if (this.hasMaxSelections()) {
      this.optionSelected.emit(model);
    }
  }

  hasMaxSelections() {
    return this.selection.length >= this.poll.numberOfSelections;
  }

  isOptionSelected(option: OptionView) {
    return this.selection.findIndex(x => x.id === option.id) !== -1;
  }

  isDisabled(checkbox: CheckBoxItem) {
    return this.voted.hasVoted ? true : this.hasMaxSelections() && this.selection.findIndex(x => x.id === checkbox.data.id) === -1;
  }

  getText(item: CheckBoxItem) {
    if (item) {
      return item.data.text.text;
    }

    return '';
  }
}

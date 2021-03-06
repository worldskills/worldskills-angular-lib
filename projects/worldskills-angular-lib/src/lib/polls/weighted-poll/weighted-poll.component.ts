import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poll } from '../models/poll';
import { Vote } from '../models/vote';
import { VoteEntry } from '../models/vote-entry';
import { OptionHandler } from '../models/optionHandler';

@Component({
  selector: 'ws-weighted-poll',
  templateUrl: './weighted-poll.component.html',
  styleUrls: ['./weighted-poll.component.css']
})
export class WeightedPollComponent implements OnInit {
  @Input() poll: Poll;
  @Input() voted: Vote;
  @Input() initialSelection: VoteEntry[];
  @Input() optionHandler: OptionHandler;
  @Output() optionSelected: EventEmitter<VoteEntry[]> = new EventEmitter();

  // selection: OptionView[];

  numSelections: number[];

  models: string[];

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    // this.selection = [];
    // ensure variables
    this.numSelections = [];
    this.models = [];

    // loop for number of select boxes to show
    this.numSelections = Array(this.poll.numberOfSelections).fill(0).map((x, i) => i);

    // ensure each select box has a model to bind to
    this.numSelections.forEach(num => {
      const selected = this.initialSelection.find(x => x.rank === num + 1);
      if (selected) {
        this.models.push(selected.optionId.toString()); // handle initial selection
      } else {
        this.models.push('0'); // ensure the selection text is displayed
      }
    });
  }

  change(event: any, index): void {
    this.models = this.optionHandler.onOptionSelect(this.poll.type, this.models, event.target.value, index);
    if (event.target.value === '0') {
      this.optionSelected.emit([]);
    } else {
      // emit selection only if all options are selected
      if (this.hasMaxSelections()) {
        const output = [];
        this.models.forEach((id, i) => {
          const entry = {rank: i + 1, optionId: id};
          output.push(entry);
        });
        this.optionSelected.emit(output);
      }
    }
  }

  hasMaxSelections(): boolean {
    // if there are no unset options, we have max selection
    return this.models.filter(x => x === '0').length === 0;
  }

  // convert this to an algorithm if the design works out
  numberToWord(num: number): string {
    if (num < 0 ) {
      return null;
    }
    // TODO: Convert this to an algo
    const word = ['zero', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eight', 'ninth', 'tenth' ];
    return word[num];
  }

  calcPointsForItem(num: number): number {
    return this.poll.numberOfSelections - num;
  }

  isSelected(optionId: number): boolean {
    return this.models.findIndex(x => x === String(optionId)) !== -1;
  }
}

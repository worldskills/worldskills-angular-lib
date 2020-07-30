import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poll } from '../models/poll';
import { Vote } from '../models/vote';
import { VoteEntry } from '../models/vote-entry';
import { Option } from '../models/option';

@Component({
  selector: 'ws-standard-poll',
  templateUrl: './standard-poll.component.html',
  styleUrls: ['./standard-poll.component.css']
})
export class StandardPollComponent implements OnInit {

  @Input() poll: Poll;
  @Input() voted: Vote;
  @Input() initialSelection: VoteEntry[];
  @Output() optionSelected: EventEmitter<VoteEntry[]> = new EventEmitter();

  selection: VoteEntry;

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  // tslint:disable-next-line:use-lifecycle-interface typedef
  ngOnChanges() {
    this.init();
  }

  init(): void {
    if (this.initialSelection) {
      if (this.initialSelection.length > 0) {
        this.selection = this.initialSelection[0];
      } else {
        this.loadDefaultSelection();
      }
    } else {
      this.loadDefaultSelection();
    }
  }

  loadDefaultSelection(): void {
    this.selection = { rank: 1, optionId: null };
  }

  isSelected(option: Option): boolean {
    if (!this.selection) {
      return false;
    }

    return this.selection.optionId === option.id;
  }

  onOptionSelect(option: Option): void {
    const entry = { rank: 1, optionId: option.id };
    this.optionSelected.emit([entry]);
  }
}

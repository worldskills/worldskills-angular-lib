import { Component, Input, Output, EventEmitter, OnInit, OnChanges, inject } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Poll } from '../models/poll';
import { Vote } from '../models/vote';
import { VoteEntry } from '../models/vote-entry';
import { PollOption } from '../models/option';
import { OptionHandler } from '../models/option-handler';

@Component({
  selector: 'ws-ng-ui-multiselect-poll',
  standalone: true,
  imports: [SelectModule, FormsModule],
  templateUrl: './multiselect-poll.component.html',
})
export class MultiselectPollComponent implements OnInit, OnChanges {
  private translate = inject(TranslateService);
  @Input({ required: true }) poll!: Poll;
  @Input({ required: true }) voted!: Vote;
  @Input() initialSelection: VoteEntry[] = [];
  @Input({ required: true }) optionHandler!: OptionHandler;
  @Output() optionSelected = new EventEmitter<VoteEntry[]>();

  selections: string[] = [];
  ranks: number[] = [];

  get sortedOptions(): PollOption[] {
    return [...(this.poll?.options ?? [])].sort((a, b) => a.id - b.id);
  }

  ngOnInit(): void { this.init(); }
  ngOnChanges(): void { this.init(); }

  init(): void {
    this.ranks = Array.from({ length: this.poll.numberOfSelections }, (_, i) => i);
    this.selections = this.ranks.map(i => {
      const found = this.initialSelection.find(x => x.rank === i + 1);
      return found ? String(found.optionId) : '0';
    });
  }

  optionsFor(rankIndex: number): { label: string; value: string; disabled: boolean }[] {
    return this.sortedOptions.map(o => ({
      label: o.text.text,
      value: String(o.id),
      disabled: this.isAlreadySelected(String(o.id), rankIndex),
    }));
  }

  isAlreadySelected(optionId: string, excludeIndex: number): boolean {
    return this.selections.some((s, i) => i !== excludeIndex && s === optionId);
  }

  onChange(newValue: string, index: number): void {
    this.selections = this.optionHandler.onOptionSelect(this.poll.type, this.selections, newValue, index) as string[];
    if (newValue === '0') {
      this.optionSelected.emit([]);
      return;
    }
    if (this.hasAllSelected()) {
      this.optionSelected.emit(
        this.selections.map((id, i) => ({ rank: i + 1, optionId: Number(id) }))
      );
    }
  }

  hasAllSelected(): boolean {
    return this.selections.every(s => s !== '0');
  }

  placeholderFor(rankIndex: number): string {
    const ordinal = this.translate.instant(`ws_ui.polls.ordinal.${rankIndex + 1}`);
    return this.translate.instant('ws_ui.polls.multiselect.placeholder', { ordinal });
  }
}

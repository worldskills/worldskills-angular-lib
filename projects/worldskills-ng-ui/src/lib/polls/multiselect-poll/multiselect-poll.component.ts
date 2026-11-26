import { Component, computed, effect, inject, input, output, signal , ChangeDetectionStrategy } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Poll } from '../models/poll';
import { Vote } from '../models/vote';
import { VoteEntry } from '../models/vote-entry';
import { PollOption } from '../models/option';
import { OptionHandler } from '../models/option-handler';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-multiselect-poll',
  standalone: true,
  imports: [SelectModule, FormsModule],
  templateUrl: './multiselect-poll.component.html',
})
export class MultiselectPollComponent {

  // ── Inputs ────────────────────────────────────────────────────────────────

  poll = input.required<Poll>();
  voted = input.required<Vote>();
  optionHandler = input.required<OptionHandler>();
  initialSelection = input<VoteEntry[]>([]);

  // ── Outputs ───────────────────────────────────────────────────────────────

  optionSelected = output<VoteEntry[]>();

  // ── State ─────────────────────────────────────────────────────────────────

  ranks = signal<number[]>([]);
  selections = signal<string[]>([]);

  sortedOptions = computed<PollOption[]>(() =>
    [...(this.poll()?.options ?? [])].sort((a, b) => a.id - b.id)
  );

  private translate = inject(TranslateService);

  constructor() {
    effect(() => {
      const poll = this.poll();
      const initial = this.initialSelection();
      const r = Array.from({ length: poll.numberOfSelections }, (_, i) => i);
      this.ranks.set(r);
      this.selections.set(r.map(i => {
        const found = initial.find(x => x.rank === i + 1);
        return found ? String(found.optionId) : '0';
      }));
    });
  }

  optionsFor(rankIndex: number): { label: string; value: string; disabled: boolean }[] {
    return this.sortedOptions().map(o => ({
      label: o.text.text,
      value: String(o.id),
      disabled: this.isAlreadySelected(String(o.id), rankIndex),
    }));
  }

  isAlreadySelected(optionId: string, excludeIndex: number): boolean {
    return this.selections().some((s, i) => i !== excludeIndex && s === optionId);
  }

  onChange(newValue: string, index: number): void {
    const updated = this.optionHandler().onOptionSelect(this.poll().type, this.selections(), newValue, index).map(String);
    this.selections.set(updated);
    if (newValue === '0') {
      this.optionSelected.emit([]);
      return;
    }
    if (this.hasAllSelected()) {
      this.optionSelected.emit(
        this.selections().map((id, i) => ({ rank: i + 1, optionId: Number(id) }))
      );
    }
  }

  hasAllSelected(): boolean {
    return this.selections().every(s => s !== '0');
  }

  placeholderFor(rankIndex: number): string {
    const ordinal = this.translate.instant(`ws_ui.polls.ordinal.${rankIndex + 1}`);
    return this.translate.instant('ws_ui.polls.multiselect.placeholder', { ordinal });
  }
}

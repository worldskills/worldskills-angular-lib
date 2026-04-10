import { Component, computed, effect, input, output, signal } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { Poll } from '../models/poll';
import { Vote } from '../models/vote';
import { VoteEntry } from '../models/vote-entry';
import { PollOption } from '../models/option';
import { OptionHandler } from '../models/option-handler';

@Component({
  selector: 'ws-ng-ui-standard-poll',
  standalone: true,
  imports: [RadioButtonModule, FormsModule],
  template: `
    <div class="flex flex-col gap-2">
      @for (option of sortedOptions(); track option.id) {
        <div
          class="flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors cursor-pointer"
          [class.border-primary]="isSelected(option)"
          [class.bg-primary-50]="isSelected(option)"
          [class.border-surface-200]="!isSelected(option)"
          [class.hover:bg-surface-50]="!voted().hasVoted"
          (click)="!voted().hasVoted && onOptionSelect(option)"
        >
          <p-radioButton
            [name]="'poll-' + poll().id"
            [value]="option.id"
            [ngModel]="selectedId()"
            [disabled]="voted().hasVoted"
            (onClick)="onOptionSelect(option)"
          />
          <label class="cursor-pointer text-sm text-color flex-1 select-none">{{ option.text.text }}</label>
        </div>
      }
    </div>
  `,
})
export class StandardPollComponent {

  // ── Inputs ────────────────────────────────────────────────────────────────

  poll = input.required<Poll>();
  voted = input.required<Vote>();
  optionHandler = input.required<OptionHandler>();
  initialSelection = input<VoteEntry[]>([]);

  // ── Outputs ───────────────────────────────────────────────────────────────

  optionSelected = output<VoteEntry[]>();

  // ── State ─────────────────────────────────────────────────────────────────

  selectedId = signal<number | string | null>(null);

  sortedOptions = computed<PollOption[]>(() =>
    [...(this.poll()?.options ?? [])].sort((a, b) => a.id - b.id)
  );

  constructor() {
    effect(() => {
      const initial = this.initialSelection();
      this.selectedId.set(initial?.length > 0 ? initial[0].optionId : null);
    });
  }

  isSelected(option: PollOption): boolean {
    return this.selectedId() != null && Number(this.selectedId()) === option.id;
  }

  onOptionSelect(option: PollOption): void {
    if (this.voted().hasVoted) return;
    const result = this.optionHandler().onOptionSelect(this.poll().type, [this.selectedId()], option.id, 0);
    this.selectedId.set(result[0]);
    this.optionSelected.emit([{ rank: 1, optionId: Number(result[0]) }]);
  }
}

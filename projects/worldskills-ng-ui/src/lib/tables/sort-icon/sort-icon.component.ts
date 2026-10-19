import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WsTableColumn } from '../table-column';

/** Sort icon for a custom-sorted header: `sortBy`/`sortDir` come from your own sort state. */
@Component({
  selector: 'ws-ng-ui-table-sort-icon',
  standalone: true,
  template: `
    @if (sortBy() === col().key) {
      @switch (sortDir()) {
        @case (1) {
          <i class="pi pi-sort-amount-up-alt th-cell-sort-icon"></i>
        }
        @case (-1) {
          <i class="pi pi-sort-amount-down-alt th-cell-sort-icon"></i>
        }
      }
    } @else {
      <i class="pi pi-sort-alt th-cell-sort-icon"></i>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WsTableSortIconComponent {
  readonly sortBy = input.required<string>();
  readonly sortDir = input.required<number>();
  readonly col = input.required<WsTableColumn<never>>();
}

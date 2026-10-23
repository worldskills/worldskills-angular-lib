import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Table, TableModule } from 'primeng/table';
import { Tooltip } from 'primeng/tooltip';
import { WsTableColumn } from '../table-column';

/**
 * Header cell for a `WsTableColumn`: title, sort icon, tooltip and projected content
 * (e.g. `ws-ng-ui-table-column-filter`). Clicks on projected content don't sort.
 *
 * Sorting is wired on the host `<th>` instead of `pSortableColumn`: that directive isn't
 * standalone (can't be a host directive) and its `[class]` binding would wipe the th's classes.
 *
 * @example
 * ```
 * <th wsTableHeaderColumn [column]="col" pFrozenColumn [frozen]="!!col.pinned">
 *   <ws-ng-ui-table-column-filter [field]="col.key" />
 * </th>
 * ```
 */
@Component({
  selector: 'th[wsTableHeaderColumn]',
  standalone: true,
  imports: [TableModule, Tooltip],
  templateUrl: './table-header-column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.p-datatable-sortable-column]': 'sortable()',
    '[class.p-datatable-column-sorted]': 'sortOrder() !== 0',
    '[attr.tabindex]': 'sortable() ? 0 : null',
    '[attr.aria-sort]': 'sortable() ? ariaSort() : null',
    '(click)': 'sort($event)',
    '(keydown.enter)': 'sort($event)',
    '(keydown.space)': 'sort($event)',
  },
})
export class WsTableHeaderColumnComponent {
  private readonly table = inject(Table);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly column = input.required<WsTableColumn<never>>();

  protected readonly sortable = computed(() => !!this.column().sortable);

  private readonly sortChange = toSignal(this.table.tableService.sortSource$);

  /** 1 / -1 when this column is sorted, otherwise 0. */
  protected readonly sortOrder = computed(() => {
    this.sortChange();
    const key = this.column().key;
    if (this.table.sortMode === 'multiple') {
      return this.table.getSortMeta(key)?.order ?? 0;
    }
    return this.table.isSorted(key) ? this.table.sortOrder : 0;
  });

  protected readonly ariaSort = computed(() => ({ 1: 'ascending', [-1]: 'descending' })[this.sortOrder()] ?? 'none');

  protected sort(event: Event) {
    const target = event.target as HTMLElement;
    if (!this.sortable() || target.closest('.ws-th-projected')) {
      return;
    }
    // Keyboard events from a focused control inside the cell (e.g. the filter input) aren't for us
    if (event instanceof KeyboardEvent && target !== this.el.nativeElement) {
      return;
    }
    event.preventDefault();
    this.table.sort({ originalEvent: event, field: this.column().key });
  }
}

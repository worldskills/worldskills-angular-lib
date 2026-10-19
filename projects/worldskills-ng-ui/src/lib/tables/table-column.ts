import { SortEvent } from 'primeng/api';

/** Column definition shared by the `p-table` helpers (cell, header, sort icon, columns settings). */
export interface WsTableColumn<T> {
  key: string;
  headerText: () => string;
  headerTooltip?: () => string;
  sortable?: boolean | ((a: T, b: T) => number);
  // filter key or func
  filterable?: string | ((record: T, value: string) => boolean);
  textRenderer?: (record: T) => unknown;
  hidden?: boolean;
  // Always visible (can't be hidden in columns settings) and frozen on the left on desktop.
  // Pinned columns must come first: PrimeNG offsets frozen columns by all preceding cells.
  pinned?: boolean;
  hasCellRendering?: boolean;
  width?: string | number;
}

/**
 * `(sortFunction)` handler for a `p-table` with `[customSort]="true"`:
 * sorts in place with the column's `sortable` compare function.
 */
export function initializeLocalTableSort<T>(event: SortEvent, columns: WsTableColumn<T>[]) {
  const col = columns.find(c => c.key === event.field);

  if (!col || typeof col.sortable !== 'function') {
    return;
  }

  const data = event.data as T[];
  data.sort(col.sortable);

  if (event.order === -1) {
    data.reverse();
  }
}

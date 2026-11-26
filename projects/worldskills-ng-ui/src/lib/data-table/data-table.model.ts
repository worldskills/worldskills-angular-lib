export interface WsColumn {
  /** Unique field name — maps to the property on each row object. */
  field: string;
  /** Display header label. */
  header: string;
  /** Column width (CSS value, e.g. '200px', '25%'). */
  width?: string;
  /** Whether this column is editable in inline mode. Defaults to false. */
  editable?: boolean;
  /** Input type for inline editing: 'text' | 'number' | 'date'. Defaults to 'text'. */
  editType?: 'text' | 'number' | 'date';
  /** Whether this column is sortable. Defaults to false. */
  sortable?: boolean;
  /** Whether this column is filterable. Defaults to false. */
  filterable?: boolean;
  /** Filter type: 'text' (contains), 'numeric' (equals/range), 'date' (date range). Defaults to 'text'. */
  filterType?: 'text' | 'numeric' | 'date';
}

export type WsEditMode = 'inline' | 'modal' | 'none';

/** Emitted by the table in lazy mode when filters, sorting, or pagination change. */
export interface WsLazyLoadEvent {
  /** Current page offset (first row index). */
  first: number;
  /** Number of rows per page. */
  rows: number;
  /** Field being sorted, or null. */
  sortField: string | null;
  /** Sort order: 1 = ascending, -1 = descending, 0 = unsorted. */
  sortOrder: number;
  /** Active filters — key is the field name, value is the filter metadata. */
  filters: { [field: string]: { value: any; matchMode: string } };
}

import { Component, computed, inject, input, output, signal, TemplateRef , ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { TableModule, TableLazyLoadEvent } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { WsDialogComponent } from '../dialog/dialog.component';
import { WsColumn, WsEditMode, WsLazyLoadEvent } from './data-table.model';
import { WsConfirmService } from '../dialog/confirm.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-data-table',
  standalone: true,
  imports: [
    FormsModule, NgTemplateOutlet, TableModule, ButtonModule, InputTextModule,
    InputNumberModule, DatePickerModule, IconFieldModule, InputIconModule,
    WsDialogComponent,
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class WsDataTableComponent {

  // ── Inputs ────────────────────────────────────────────────────────────────
  /** Column definitions. */
  columns = input.required<WsColumn[]>();

  /** Row data — any array of objects. */
  rows = input.required<any[]>();

  /** Total number of records (for virtual scroll / lazy loading). Defaults to rows.length. */
  totalRecords = input<number | undefined>(undefined);

  /** Number of rows visible at once (virtual scroll viewport). */
  scrollHeight = input('400px');

  /** Row height in pixels for virtual scroll calculation. */
  virtualRowHeight = input(48);

  /** Edit mode: 'inline' for cell editing, 'modal' for dialog editing, 'none' to disable. */
  editMode = input<WsEditMode>('none');

  /** Whether to show a delete button per row. */
  showDelete = input(false);

  /** Whether to show an add button in the header. */
  showAdd = input(false);

  /** Custom row actions template — receives row data as implicit context. */
  actionsTemplate = input<TemplateRef<any> | null>(null);

  /** Dialog title when editing in modal mode. */
  modalTitle = input('Edit Record');

  /** Whether the table columns are sortable. */
  sortable = input(false);

  /** Whether filtering is enabled. */
  filterable = input(false);

  /** Enable lazy mode — sorting, filtering, and pagination are handled by the parent. */
  lazy = input(false);

  /** Global filter placeholder text. */
  globalFilterPlaceholder = input('Search...');

  /** Fields to include in the global filter. Defaults to all filterable column fields. */
  globalFilterFields = input<string[] | undefined>(undefined);

  /** Function that returns the delete confirmation message for a given row. */
  deleteMessage = input<(row: any) => string>(
    () => `Are you sure you want to delete this record?`
  );

  // ── Outputs ───────────────────────────────────────────────────────────────
  /** Emitted when a row is saved (inline or modal). Payload is the updated row object. */
  rowSave = output<any>();

  /** Emitted when a row delete is requested. */
  rowDelete = output<any>();

  /** Emitted when the add button is clicked. */
  addClick = output<void>();

  /** Emitted in lazy mode when filters, sorting, or pagination change. */
  lazyLoad = output<WsLazyLoadEvent>();

  private confirmService = inject(WsConfirmService);

  // ── Internal state ────────────────────────────────────────────────────────
  modalVisible = signal(false);
  editingRow = signal<any>(null);
  editingCopy = signal<any>(null);
  globalFilterValue = signal('');

  editableColumns = computed(() => this.columns().filter(c => c.editable));

  resolvedTotal = computed(() => this.totalRecords() ?? this.rows().length);

  resolvedGlobalFilterFields = computed(() =>
    this.globalFilterFields() ?? this.columns().filter(c => c.filterable).map(c => c.field)
  );

  hasAnyFilter = computed(() =>
    this.filterable() && this.columns().some(c => c.filterable)
  );

  // ── Methods ───────────────────────────────────────────────────────────────
  onRowEditInit(row: any): void {
    this.editingCopy.set({ ...row });
  }

  onRowEditSave(row: any): void {
    this.rowSave.emit(row);
    this.editingCopy.set(null);
  }

  onRowEditCancel(row: any, _index: number): void {
    const copy = this.editingCopy();
    if (copy) {
      Object.assign(row, copy);
    }
    this.editingCopy.set(null);
  }

  openModal(row: any): void {
    this.editingRow.set({ ...row });
    this.modalVisible.set(true);
  }

  saveModal(): void {
    this.rowSave.emit(this.editingRow());
    this.modalVisible.set(false);
    this.editingRow.set(null);
  }

  cancelModal(): void {
    this.modalVisible.set(false);
    this.editingRow.set(null);
  }

  async onDelete(row: any): Promise<void> {
    const confirmed = await this.confirmService.danger({
      title: 'Delete Record',
      message: this.deleteMessage()(row),
    });
    if (confirmed) {
      this.rowDelete.emit(row);
    }
  }

  onAdd(): void {
    this.addClick.emit();
  }

  onLazyLoad(event: TableLazyLoadEvent): void {
    const filters: { [field: string]: { value: any; matchMode: string } } = {};
    if (event.filters) {
      for (const [key, meta] of Object.entries(event.filters)) {
        if (Array.isArray(meta)) {
          const active = meta.find(m => m.value != null);
          if (active) {
            filters[key] = { value: active.value, matchMode: active.matchMode ?? 'contains' };
          }
        } else if (meta && meta.value != null) {
          filters[key] = { value: meta.value, matchMode: meta.matchMode ?? 'contains' };
        }
      }
    }
    this.lazyLoad.emit({
      first: event.first ?? 0,
      rows: event.rows ?? 50,
      sortField: (event.sortField as string) ?? null,
      sortOrder: event.sortOrder ?? 0,
      filters,
    });
  }

  onGlobalFilter(table: any, value: string): void {
    this.globalFilterValue.set(value);
    table.filterGlobal(value, 'contains');
  }

  clearGlobalFilter(table: any): void {
    this.globalFilterValue.set('');
    table.filterGlobal('', 'contains');
  }

  getFilterMatchMode(col: WsColumn): string {
    switch (col.filterType) {
      case 'numeric': return 'equals';
      case 'date': return 'dateIs';
      default: return 'contains';
    }
  }
}

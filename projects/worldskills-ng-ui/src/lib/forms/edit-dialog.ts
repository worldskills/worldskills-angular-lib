import { Signal, computed, signal } from '@angular/core';

export interface EditDialog<T> {
  /** Bind to `ws-ng-ui-dialog [visible]`. */
  visible: Signal<boolean>;
  /** The item being edited, or null when adding. */
  editing: Signal<T | null>;
  /** True when editing an item, false when adding. */
  isEdit: Signal<boolean>;
  openAdd(): void;
  openEdit(item: T): void;
  close(): void;
}

/**
 * State for an add / edit dialog on a list (one dialog, two modes).
 *
 * ```ts
 * dialog = editDialog<Website>();
 * ```
 * ```html
 * <ws-ng-ui-dialog [visible]="dialog.visible()" (visibleChange)="!$event && dialog.close()"
 *   [title]="dialog.isEdit() ? 'Edit website' : 'Add website'" formId="website-form">…</ws-ng-ui-dialog>
 * ```
 */
export function editDialog<T>(): EditDialog<T> {
  const open = signal(false);
  const editing = signal<T | null>(null);
  return {
    visible: open.asReadonly(),
    editing: editing.asReadonly(),
    isEdit: computed(() => editing() !== null),
    openAdd: () => {
      editing.set(null);
      open.set(true);
    },
    openEdit: (item: T) => {
      editing.set(item);
      open.set(true);
    },
    close: () => open.set(false),
  };
}

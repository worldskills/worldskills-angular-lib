import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { FilterMetadata, TreeNode } from 'primeng/api';
import { Checkbox } from 'primeng/checkbox';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TreeSelect } from 'primeng/treeselect';

export type WsTableColumnFilterType = 'text' | 'select' | 'tree' | 'checkbox';

// Value of one entry of `TableFilterEvent.filters` (menu filters wrap it in an array)
export const filterValue = (meta?: FilterMetadata | FilterMetadata[]) =>
  Array.isArray(meta) ? meta[0]?.value : meta?.value;

/**
 * Header menu filter for a lazy `p-table`, applied on change (no Apply/Clear buttons).
 * Must be placed inside the table's header template.
 *
 * @example
 * ```
 * <ws-ng-ui-table-column-filter field="status" type="select" [options]="statuses" optionLabel="name.text" />
 * ```
 */
@Component({
  selector: 'ws-ng-ui-table-column-filter',
  standalone: true,
  imports: [
    TableModule,
    FormsModule,
    TranslatePipe,
    Select,
    TreeSelect,
    Checkbox,
    IconField,
    InputIcon,
    InputText,
  ],
  templateUrl: './table-column-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WsTableColumnFilterComponent {
  readonly field = input.required<string>();
  readonly type = input<WsTableColumnFilterType>('text');
  // `select` options, or `TreeNode`s for `tree`
  readonly options = input<unknown[]>([]);
  readonly optionLabel = input('label');
  readonly checkboxLabel = input('');
  // Accessible name of the filter control, usually the column header
  readonly label = input('');

  protected readonly filterPt = {
    // Hides the empty wrapper PrimeNG renders for the (unused) remove-rule button
    filterRule: { class: '[&>div:empty]:hidden' },
    // Compact icon button so it fits narrow column headers
    pcColumnFilterButton: { root: { class: 'w-6! h-6!' } },
  };

  protected asTreeNodes(options: unknown[]) {
    return options as TreeNode[];
  }
}

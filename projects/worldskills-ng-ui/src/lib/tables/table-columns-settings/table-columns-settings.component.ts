import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { MultiSelect, MultiSelectChangeEvent } from 'primeng/multiselect';
import { WsColumnsVisibilityService } from '../columns-visibility.service';
import { WsTableColumn } from '../table-column';

/**
 * Multi-select to show/hide columns (defaults from `WsTableColumn.hidden`, pinned columns locked).
 * Saved in localStorage under `tableKey`; read the hidden keys with `WsColumnsVisibilityService.load()`.
 */
@Component({
  selector: 'ws-ng-ui-table-columns-settings',
  standalone: true,
  imports: [MultiSelect, FormsModule, Button, TranslatePipe],
  templateUrl: './table-columns-settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WsTableColumnsSettingsComponent {
  private readonly visibility = inject(WsColumnsVisibilityService);

  readonly columns = input.required<WsTableColumn<never>[]>();
  /** localStorage key */
  readonly tableKey = input.required<string>();

  private readonly hiddenColumns = computed(() => this.visibility.load(this.tableKey(), this.columns())());

  // The multi-select needs the shown column objects themselves
  readonly shownColumns = computed(() => this.columns().filter(c => !this.hiddenColumns().includes(c.key)));

  handleOnReset() {
    this.visibility.clear(this.tableKey(), this.columns());
  }

  handleOnChange(event: MultiSelectChangeEvent) {
    const shown = (event.value as WsTableColumn<never>[]).map(c => c.key);
    this.visibility.save(
      this.tableKey(),
      this.columns().filter(c => !shown.includes(c.key)).map(c => c.key),
    );
  }
}

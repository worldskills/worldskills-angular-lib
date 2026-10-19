import { ChangeDetectionStrategy, Component, contentChild, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { WsTableColumn } from '../table-column';

/**
 * Cell of a table rendered from a dynamic column array.
 * Renders `row[column.key]`, `column.textRenderer(row)`, or a `#renderer` template
 * when `column.hasCellRendering` is set.
 *
 * @example
 * ```
 * <td wsTableColumn [column]="col" [row]="item">
 *   <ng-template #renderer let-row let-column="column">
 *     <span>{{ column.key }}: {{ row[column.key] }}</span>
 *   </ng-template>
 * </td>
 * ```
 */
@Component({
  selector: '[wsTableColumn]',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './table-column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WsTableColumnComponent {
  readonly row = input.required<unknown>();
  readonly column = input.required<WsTableColumn<any>>();
  // Fixed row height is required by virtual scroll
  readonly clampLines = input(false);
  readonly renderer = contentChild<TemplateRef<unknown>>('renderer');

  // Native tooltip with the full text, only when the clamp actually cut it
  showFullText(el: HTMLElement) {
    el.title =
      el.scrollHeight > el.clientHeight
        ? (el.textContent ?? '').replace(/\s+/g, ' ').trim()
        : '';
  }
}

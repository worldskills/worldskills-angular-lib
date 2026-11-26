import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MessageModule } from 'primeng/message';

/**
 * "Nothing here yet": a quiet message, optionally followed by a projected action
 * (e.g. Clear filters or Add).
 *
 *   <ws-ng-ui-empty-state text="No contacts yet." />
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-empty-state',
  standalone: true,
  imports: [MessageModule],
  host: { class: 'flex flex-wrap items-center gap-4' },
  template: `
    <p-message severity="secondary" variant="simple">{{ text() }}</p-message>
    <ng-content />
  `,
})
export class WsEmptyStateComponent {

  /** Message text. */
  text = input.required<string>();
}

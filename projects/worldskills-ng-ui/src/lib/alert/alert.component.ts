import { Component, input , ChangeDetectionStrategy } from '@angular/core';
import { MessageModule } from 'primeng/message';
import { AlertSeverity } from './alert.service';

/**
 * Inline alert card — for static contextual messages within the page.
 * For push notifications use WsAlertService + <ws-ng-ui-toast> instead.
 *
 *   <ws-ng-ui-alert severity="warn" title="Heads up" message="This is a warning." />
 *
 * Projected content (e.g. an action button) follows the message:
 *
 *   <ws-ng-ui-alert severity="warn" message="Could not load.">
 *     <p-button label="Try again" size="small" [outlined]="true" (onClick)="reload()" />
 *   </ws-ng-ui-alert>
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-alert',
  template: `
    <p-message
      [severity]="severity()"
      styleClass="w-full ws-alert"
      [closable]="closable()">
      <span class="flex flex-wrap items-center gap-3">
        <span>{{ message() }}</span>
        <ng-content />
      </span>
    </p-message>
  `,
  styleUrls: ['./alert.component.css'],
  standalone: true,
  imports: [MessageModule],
})
export class WsAlertComponent {

  severity = input<AlertSeverity>('info');
  message = input('');
  closable = input(false);
}

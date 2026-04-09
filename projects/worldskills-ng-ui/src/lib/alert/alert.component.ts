import { Component, Input } from '@angular/core';
import { MessageModule } from 'primeng/message';
import { AlertSeverity } from './alert.service';

/**
 * Inline alert card — for static contextual messages within the page.
 * For push notifications use WsAlertService + <ws-ng-ui-toast> instead.
 *
 *   <ws-ng-ui-alert severity="warn" title="Heads up" message="This is a warning." />
 */
@Component({
  selector: 'ws-ng-ui-alert',
  template: `
    <p-message
      [severity]="severity"
      styleClass="w-full ws-alert"
      [closable]="closable">
      {{ message }}
    </p-message>
  `,
  styleUrls: ['./alert.component.css'],
  standalone: true,
  imports: [MessageModule],
})
export class WsAlertComponent {

  @Input() severity: AlertSeverity = 'info';
  @Input() message = '';
  @Input() closable = false;
}

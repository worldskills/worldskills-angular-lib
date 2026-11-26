import { Component , ChangeDetectionStrategy } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

/**
 * Place this component once in your app shell (e.g. app.component.html).
 * It provides the rendering target for WsConfirmService dialogs.
 *
 *   <ws-ng-ui-confirm />
 *
 * Also add ConfirmationService to your app providers:
 *
 *   providers: [ConfirmationService]
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-confirm',
  template: `<p-confirmDialog styleClass="ws-confirm-dialog" />`,
  styleUrls: ['./confirm.component.css'],
  standalone: true,
  imports: [ConfirmDialogModule],
})
export class WsConfirmComponent {}

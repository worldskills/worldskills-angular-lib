import { Component, input , ChangeDetectionStrategy } from '@angular/core';
import { ToastModule } from 'primeng/toast';

/**
 * Place once in your app shell to enable toast notifications.
 * Then inject WsAlertService anywhere to push toasts.
 *
 *   <ws-ng-ui-toast />
 *
 * Also add MessageService to your app providers:
 *
 *   providers: [MessageService]
 *
 * Use [key] to target a specific toast instance (e.g. page-level vs global).
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-toast',
  template: `
    <p-toast
      [key]="key() || undefined"
      [position]="position()"
      [baseZIndex]="1100"
      styleClass="ws-toast" />
  `,
  styleUrls: ['./toast.component.css'],
  standalone: true,
  imports: [ToastModule],
})
export class WsToastComponent {

  /** Match the key used in WsAlertService options to target this instance. */
  key = input('');

  /** Toast position on screen. */
  position = input<'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center' | 'center'>('top-right');
}

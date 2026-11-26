import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { WsAlertComponent } from '../alert/alert.component';

/**
 * Inline "could not be loaded" message with a Try again button. Use it on its own when the
 * rest of the page still works (e.g. a supporting list failed); `<ws-ng-ui-loadable>` uses it too.
 *
 *   <ws-ng-ui-load-error message="The awards could not be loaded." (retry)="awards.reload()" />
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-load-error',
  standalone: true,
  imports: [WsAlertComponent, ButtonModule, TranslatePipe],
  template: `
    <ws-ng-ui-alert
      [severity]="severity()"
      [message]="message() ?? ('ws_ui.load_error.message' | translate)">
      <p-button
        [label]="'ws_ui.actions.retry' | translate"
        size="small"
        [outlined]="true"
        (onClick)="retry.emit()" />
    </ws-ng-ui-alert>
  `,
})
export class WsLoadErrorComponent {

  /** Message text. Defaults to the translated "This could not be loaded." */
  message = input<string>();

  /** "warn" when part of a page failed, "error" when the whole page could not load. */
  severity = input<'warn' | 'error'>('warn');

  /** Emitted by the Try again button. */
  retry = output<void>();
}

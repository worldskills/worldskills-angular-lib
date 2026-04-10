import { Component, ContentChild, input, model, TemplateRef , ChangeDetectionStrategy } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [DialogModule, ButtonModule, NgTemplateOutlet],
})
export class WsDialogComponent {

  /** Controls dialog visibility — supports two-way binding: [(visible)] */
  visible = model(false);

  /** Dialog title shown in the header. */
  title = input('');

  /**
   * Dialog width. Tailwind breakpoints are applied automatically for mobile.
   * Defaults to 32rem (512px).
   */
  width = input('32rem');

  /** When true the dialog closes when the backdrop is clicked. */
  dismissible = input(true);

  /** When true a close button is shown in the header. */
  closable = input(true);

  /**
   * Optional footer template — provide via:
   *   <ng-template #wsDialogFooter>...</ng-template>
   */
  @ContentChild('wsDialogFooter') footerTemplate: TemplateRef<unknown> | null = null;

  onHide() {
    this.visible.set(false);
  }
}

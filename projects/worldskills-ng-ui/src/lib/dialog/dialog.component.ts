import { Component, ContentChild, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ws-ng-ui-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [DialogModule, ButtonModule, NgTemplateOutlet],
})
export class WsDialogComponent {

  /** Controls dialog visibility — supports two-way binding: [(visible)] */
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  /** Dialog title shown in the header. */
  @Input() title = '';

  /**
   * Dialog width. Tailwind breakpoints are applied automatically for mobile.
   * Defaults to 32rem (512px).
   */
  @Input() width = '32rem';

  /** When true the dialog closes when the backdrop is clicked. */
  @Input() dismissible = true;

  /** When true a close button is shown in the header. */
  @Input() closable = true;

  /**
   * Optional footer template — provide via:
   *   <ng-template #wsDialogFooter>...</ng-template>
   */
  @ContentChild('wsDialogFooter') footerTemplate: TemplateRef<unknown> | null = null;

  onHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}

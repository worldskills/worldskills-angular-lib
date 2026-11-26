import { Component, ContentChild, input, model, TemplateRef , ChangeDetectionStrategy } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

/**
 * Reusable modal dialog.
 *
 * For a dialog around a form, set `formId` to get the standard Cancel / Save footer.
 * Save submits the form (as Enter does), so its validation and `(ngSubmit)` run:
 *
 * ```html
 * <ws-ng-ui-dialog [(visible)]="open" title="Add contact" formId="contact-form" [saving]="saving()">
 *   <form id="contact-form" [formGroup]="form" (ngSubmit)="save()">…</form>
 * </ws-ng-ui-dialog>
 * ```
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [DialogModule, ButtonModule, NgTemplateOutlet, TranslatePipe],
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
   * Id of the projected `<form>`. When set (and no `#wsDialogFooter` is given), the dialog
   * shows a Cancel / Save footer and Save submits that form.
   */
  formId = input<string>();

  /** Shows a spinner on Save and blocks it while the form is being saved. */
  saving = input(false);

  /** Disables Save, e.g. while the form is invalid or unchanged. */
  saveDisabled = input(false);

  /** Save button text. Defaults to the translated "Save". */
  saveLabel = input<string>();

  /** Save button icon. */
  saveIcon = input('pi pi-check');

  /** Cancel button text. Defaults to the translated "Cancel". */
  cancelLabel = input<string>();

  /**
   * Optional footer template — provide via:
   *   <ng-template #wsDialogFooter>...</ng-template>
   */
  @ContentChild('wsDialogFooter') footerTemplate: TemplateRef<unknown> | null = null;

  onHide() {
    this.visible.set(false);
  }

  /**
   * Submits the form named by `formId`. A `form` attribute on p-button isn't passed on to its
   * inner button, so the footer submits the form itself; requestSubmit() runs validation and
   * fires the submit event, like pressing Enter.
   */
  submit() {
    const id = this.formId();
    const form = id ? document.getElementById(id) : null;
    if (form instanceof HTMLFormElement) {
      form.requestSubmit();
    }
  }
}

import { ChangeDetectionStrategy, Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { EditorInitEvent, EditorModule } from 'primeng/editor';
import { WS_RICH_TEXT_FORMATS } from './rich-text-formats';

/**
 * A rich text field (PrimeNG Editor / Quill) with a small, fixed toolbar: bold, italic, underline,
 * lists, link and clear formatting. Each toolbar button has a translated accessible name.
 * Form-compatible (ControlValueAccessor); the value is HTML, or null when empty.
 *
 * ```html
 * <label id="notes-label">Notes</label>
 * <ws-ng-ui-rich-text-editor formControlName="notes" labelId="notes-label" />
 * ```
 *
 * Sanitise the HTML on the server to the formats in `WS_RICH_TEXT_FORMATS`. Show it with
 * `<ws-ng-ui-rich-text-view>`.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-rich-text-editor',
  standalone: true,
  imports: [EditorModule, FormsModule, TranslatePipe],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WsRichTextEditorComponent), multi: true },
  ],
  host: { '(focusout)': 'onTouched()' },
  template: `
    <p-editor
      [ngModel]="value()"
      (ngModelChange)="change($event)"
      [readonly]="disabled()"
      [formats]="formats"
      [placeholder]="placeholder() ?? ('ws_ui.rich_text.placeholder' | translate)"
      [style]="{ height: height() }"
      (onInit)="init($event)">
      <ng-template #header>
        <span class="ql-formats">
          <button type="button" class="ql-bold" [attr.aria-label]="'ws_ui.rich_text.bold' | translate"></button>
          <button type="button" class="ql-italic" [attr.aria-label]="'ws_ui.rich_text.italic' | translate"></button>
          <button type="button" class="ql-underline" [attr.aria-label]="'ws_ui.rich_text.underline' | translate"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-list" value="bullet" [attr.aria-label]="'ws_ui.rich_text.bullets' | translate"></button>
          <button type="button" class="ql-list" value="ordered" [attr.aria-label]="'ws_ui.rich_text.numbers' | translate"></button>
        </span>
        <span class="ql-formats">
          <button type="button" class="ql-link" [attr.aria-label]="'ws_ui.rich_text.link' | translate"></button>
          <button type="button" class="ql-clean" [attr.aria-label]="'ws_ui.rich_text.clean' | translate"></button>
        </span>
      </ng-template>
    </p-editor>
  `,
})
export class WsRichTextEditorComponent implements ControlValueAccessor {

  /** Id of the visible label, announced for the editable area. */
  labelId = input<string>();

  /** Placeholder text. Defaults to the translated "Write here…". */
  placeholder = input<string>();

  /** Height of the editable area. */
  height = input('10rem');

  protected readonly formats = WS_RICH_TEXT_FORMATS;
  protected readonly value = signal<string | null>(null);
  protected readonly disabled = signal(false);

  private onChange: (value: string | null) => void = () => undefined;
  protected onTouched: () => void = () => undefined;

  writeValue(value: string | null): void {
    this.value.set(value ?? null);
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected change(value: string | null): void {
    this.value.set(value);
    this.onChange(value);
  }

  protected init(event: EditorInitEvent): void {
    const labelId = this.labelId();
    if (labelId) {
      event.editor.root.setAttribute('aria-labelledby', labelId);
    }
  }
}

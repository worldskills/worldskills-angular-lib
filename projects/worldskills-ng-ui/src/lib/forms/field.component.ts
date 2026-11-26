import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';

/** Translation keys of the messages for common validation errors. */
const DEFAULT_MESSAGES: Record<string, string> = {
  required: 'ws_ui.field.errors.required',
  email: 'ws_ui.field.errors.email',
  minlength: 'ws_ui.field.errors.minlength',
  maxlength: 'ws_ui.field.errors.maxlength',
  min: 'ws_ui.field.errors.min',
  max: 'ws_ui.field.errors.max',
  pattern: 'ws_ui.field.errors.pattern',
};

/**
 * A labelled form field: the label (with `*` when the control is required), the projected
 * control, an optional hint, and the control's first error once it has been touched.
 *
 * Longer explanations can go in `info`: a small "i" after the label that shows them on hover or
 * keyboard focus. Use it where space is tight; roomy forms can keep a visible `hint`.
 *
 * ```html
 * <ws-ng-ui-field label="Code" inputId="code" [control]="form.controls.code">
 *   <input pInputText id="code" formControlName="code" />
 * </ws-ng-ui-field>
 * ```
 *
 * Error messages are translation keys, with the error's value as params (e.g. `requiredLength`).
 * Add or override them per field: `[messages]="{ codeTaken: 'members.code_taken' }"`.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-field',
  standalone: true,
  imports: [MessageModule, TooltipModule, TranslatePipe],
  host: { class: 'flex flex-col gap-2' },
  template: `
    @if (label()) {
      <span class="flex items-center gap-2">
        @if (inputId()) {
          <label [for]="inputId()">{{ label() }}{{ isRequired() ? ' *' : '' }}</label>
        } @else {
          <span>{{ label() }}{{ isRequired() ? ' *' : '' }}</span>
        }
        @if (info()) {
          <i
            class="pi pi-info-circle cursor-help text-sm text-muted-color"
            tabindex="0"
            role="img"
            [attr.aria-label]="info()"
            [pTooltip]="info()"
            tooltipPosition="top"></i>
        }
      </span>
    }
    <ng-content />
    @if (hint()) {
      <p-message severity="secondary" variant="simple" size="small">{{ hint() }}</p-message>
    }
    @if (error(); as e) {
      <p-message severity="error" variant="simple" size="small">{{ e.key | translate: e.params }}</p-message>
    }
  `,
})
export class WsFieldComponent {

  /** Label text. */
  label = input('');

  /** Id of the projected control, for the label's `for`. */
  inputId = input('');

  /** The form control, for the required `*` and the error message. */
  control = input<AbstractControl | null>(null);

  /** Text shown under the control. */
  hint = input('');

  /** More information, behind an "i" after the label (hover or focus). */
  info = input('');

  /** Error name → translation key, added to or replacing the defaults. */
  messages = input<Record<string, string>>({});

  /** Shows the `*` when the control's required rule isn't Validators.required (custom validators). */
  required = input<boolean, boolean | undefined>(false, { transform: v => !!v });

  // controls aren't signals: re-read them whenever they report a change (value, status, touched)
  private readonly changes = signal(0);

  protected readonly isRequired = computed(() => {
    this.changes();
    return this.required() || !!this.control()?.hasValidator(Validators.required);
  });

  protected readonly error = computed(() => {
    this.changes();
    const control = this.control();
    if (!control?.touched || !control.errors) {
      return null;
    }
    const [name, value] = Object.entries(control.errors)[0];
    return {
      key: this.messages()[name] ?? DEFAULT_MESSAGES[name] ?? 'ws_ui.field.errors.invalid',
      params: typeof value === 'object' && value ? value : {},
    };
  });

  constructor() {
    effect(onCleanup => {
      const control = this.control();
      if (!control) {
        return;
      }
      const sub = control.events.subscribe(() => this.changes.update(n => n + 1));
      onCleanup(() => sub.unsubscribe());
    });
  }
}

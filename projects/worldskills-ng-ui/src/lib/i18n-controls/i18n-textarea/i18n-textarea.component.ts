import { Component, computed, forwardRef, input, signal, OnInit , ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { I18nText } from '../../common/models/i18n-text';
import { LangUtil } from '../../common/util/lang.util';
import { I18nLangOption } from '../i18n-input/i18n-input.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-i18n-textarea',
  templateUrl: './i18n-textarea.component.html',
  standalone: true,
  imports: [TextareaModule, SelectModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WsI18nTextareaComponent),
      multi: true,
    },
  ],
})
export class WsI18nTextareaComponent implements ControlValueAccessor, OnInit {

  // ── Inputs ────────────────────────────────────────────────────────────────
  placeholder = input('');
  disableLangChange = input(false);
  rows = input(4);

  // ── State ─────────────────────────────────────────────────────────────────
  // disabled is a signal (not input) because setDisabledState() also writes to it
  disabled = signal(false);

  value = signal<I18nText[]>([]);
  currentCode = signal(LangUtil.getDefaultLanguage().code);
  currentText = signal('');

  langOptions = computed<I18nLangOption[]>(() => {
    const langs = LangUtil.getDefaultLanguages();
    return this.value().map(t => {
      const lang = langs.find(l => l.code === t.lang_code);
      return { value: t.lang_code, label: lang?.name ?? t.lang_code };
    });
  });

  private cvaOnChange = (_: I18nText[]) => {};
  private cvaOnTouched = () => {};

  ngOnInit(): void {
    const stored = sessionStorage.getItem('lang');
    if (stored && LangUtil.getDefaultLanguages().some(l => l.code === stored)) {
      this.currentCode.set(stored);
    }
    this.syncText();
  }

  private syncText(): void {
    const val = this.value();
    if (!val.length) return;
    if (!val.find(t => t.lang_code === this.currentCode())) {
      this.currentCode.set(val[0].lang_code);
    }
    this.currentText.set(val.find(t => t.lang_code === this.currentCode())?.text ?? '');
  }

  onLangChange(code: string): void {
    this.currentCode.set(code);
    this.currentText.set(this.value().find(t => t.lang_code === code)?.text ?? '');
  }

  onTextChange(text: string): void {
    const entry = this.value().find(t => t.lang_code === this.currentCode());
    if (entry) {
      entry.text = text;
      this.cvaOnChange([...this.value()]);
    }
  }

  onBlur(): void { this.cvaOnTouched(); }

  // ── ControlValueAccessor ──────────────────────────────────────────────────
  writeValue(value: I18nText[] | null): void {
    this.value.set(value ?? []);
    this.syncText();
  }

  registerOnChange(fn: (_: I18nText[]) => void): void { this.cvaOnChange = fn; }
  registerOnTouched(fn: () => void): void { this.cvaOnTouched = fn; }
  setDisabledState(disabled: boolean): void { this.disabled.set(disabled); }
}

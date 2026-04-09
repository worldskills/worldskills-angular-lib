import { Component, forwardRef, Input, OnChanges, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { I18nText } from '../../common/models/i18n-text';
import { LangUtil } from '../../common/util/lang.util';

export interface I18nLangOption {
  value: string;
  label: string;
}

@Component({
  selector: 'ws-ng-ui-i18n-input',
  templateUrl: './i18n-input.component.html',
  standalone: true,
  imports: [InputTextModule, SelectModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WsI18nInputComponent),
      multi: true,
    },
  ],
})
export class WsI18nInputComponent implements ControlValueAccessor, OnInit, OnChanges {

  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() disableLangChange = false;

  value: I18nText[] = [];
  currentCode = LangUtil.getDefaultLanguage().code;
  currentText = '';
  langOptions: I18nLangOption[] = [];

  private onChange = (_: I18nText[]) => {};
  private onTouched = () => {};

  ngOnInit(): void {
    const stored = sessionStorage.getItem('lang');
    if (stored) this.currentCode = stored;
    this.refresh();
  }

  ngOnChanges(): void {
    this.refresh();
  }

  private refresh(): void {
    if (!this.value?.length) return;

    const langs = LangUtil.getDefaultLanguages();
    this.langOptions = this.value.map(t => {
      const lang = langs.find(l => l.code === t.lang_code);
      return { value: t.lang_code, label: lang?.name ?? t.lang_code };
    });

    if (!this.value.find(t => t.lang_code === this.currentCode)) {
      this.currentCode = this.value[0].lang_code;
    }

    this.loadText();
  }

  private loadText(): void {
    this.currentText = this.value.find(t => t.lang_code === this.currentCode)?.text ?? '';
  }

  onLangChange(code: string): void {
    this.currentCode = code;
    this.loadText();
  }

  onTextChange(text: string): void {
    const entry = this.value.find(t => t.lang_code === this.currentCode);
    if (entry) {
      entry.text = text;
      this.onChange([...this.value]);
    }
  }

  onBlur(): void { this.onTouched(); }

  // ControlValueAccessor
  writeValue(value: I18nText[] | null): void {
    this.value = value ?? [];
    this.refresh();
  }

  registerOnChange(fn: (_: I18nText[]) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(disabled: boolean): void { this.disabled = disabled; }
}

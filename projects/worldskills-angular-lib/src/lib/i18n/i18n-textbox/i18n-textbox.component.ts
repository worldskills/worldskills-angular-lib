import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { I18nText } from '../../common/models/i18n-text';
import { LangUtil } from '../../common/util/lang.util';
import { GenericUtil } from '../../common/util/generic.util';
import { Language } from '../language';

@Component({
    selector: 'ws-i18n-textbox',
    templateUrl: './i18n-textbox.component.html',
    styleUrls: ['./i18n-textbox.component.css'],
    standalone: false
})
export class I18nTextboxComponent implements OnInit {

  // we can directly repace the "text" array of an object we need to save
  @Output() valueChanged: EventEmitter<I18nText[]> = new EventEmitter();

  // all allowed langs from lib
  allowedLanguages: Language[];

  // default lang from lib
  defaultLanguage: Language;

  currentCode: string;

  text: string;

  show = false;

  // set text values for all languages
  @Input() value: I18nText[];

  // ability to disable the dropdown
  @Input() disaableLangChange = false;

  constructor() { }

  ngOnInit(): void {
    this.defaultLanguage = LangUtil.getDefaultLanguage();
    this.allowedLanguages = LangUtil.getDefaultLanguages();
    // setup default languages - can be overriden with a change
    if (GenericUtil.isNullOrUndefined(this.value)) {
      this.value = this.getValues();
    }
    // get current selected language to determine the focused innpiut
    let current = sessionStorage.getItem('lang');
    if (GenericUtil.isNullOrUndefined(current)) {
      current = this.defaultLanguage.code;
    }

    this.currentCode = current;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void {
    // if therre are no inputs provided, generate them until they are provided
    if (GenericUtil.isNullOrUndefined(this.value)) {
      this.value = this.getValues();
    }
  }

  // useed for looping to cater for missing languages
  getValues(): I18nText[] {
    if (GenericUtil.isNullOrUndefined(this.allowedLanguages)) {
      this.allowedLanguages = LangUtil.getDefaultLanguages();
    }
    if (GenericUtil.isNullOrUndefined(this.value)) {
      this.value = this.allowedLanguages.map(X => {
        return { lang_code: X.code, text: null };
      });
    }

    return this.value;
  }

  textChanged(text: string): void {
    const index = this.value.findIndex(x => x.lang_code === this.currentCode);
    this.value[index].text = text;
    this.valueChanged.emit(this.value);
  }

  selectLang(lang: I18nText): void {
    this.currentCode = lang.lang_code;
    this.loadText();
    this.show = false;
  }

  loadText(): void {
    const index = this.value.findIndex(x => x.lang_code === this.currentCode);
    if (index !== -1) {
      this.text = this.value[index].text;
    } else {
      this.text = null;
    }
  }

  getLang(code: string): string {
    const lang = LangUtil.getDefaultLanguages().find(x => x.code === code);
    return GenericUtil.isNullOrUndefined(lang) ? '' : lang.name;
  }

}

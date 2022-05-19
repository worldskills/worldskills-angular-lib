import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { I18nText } from '../../common/models/i18n-text';
import { LangUtil } from '../../common/util/lang.util';
import { Language } from '../language';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ws-i18n-text',
  templateUrl: './i18n-text.component.html',
  styleUrls: ['./i18n-text.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => I18nTextComponent),
    multi: true,
  }],
})
export class I18nTextComponent implements OnInit, ControlValueAccessor {

  languages: Language[];

  @Input() inputId: string;
  @Input() name: string;
  @Input() placeholder: string = '';
  @Input() required = false;

  model: I18nText = {lang_code: 'en', text: ''};

  private onChange = (_) => {};
  private onTouched = () => {};

  constructor(
    private modalService: NgbModal,
  ) {
  }

  ngOnInit(): void {
    this.languages = LangUtil.getDefaultLanguages();
  }

  switchTranslation(translation) {
    this.model.lang_code = translation.key;
    this.model.text = translation.value;
  }

  editAllTranslations(content) {
    this.modalService.open(content, {size: 'lg'});
  }

  getLanguages() {
    return this.languages.filter(l => l.code in this.model.translations);
  }

  changeTranslation(lang_code, text) {
    if (this.model.translations) {
      this.model.translations[lang_code] = text;
    }
    if (this.model.lang_code == lang_code) {
      this.model.text = text;
    }
    this.onChange(this.model);
  }

  addTranslation(lang_code) {
    this.model.translations[lang_code] = '';
    this.onChange(this.model);
  }

  deleteTranslation(lang_code) {
    delete this.model.translations[lang_code];
    if (this.model.lang_code == lang_code) {
      for (var l in this.model.translations) {
        this.model.lang_code = l;
        this.model.text = this.model.translations[l];
        break;
      }
    }
    this.onChange(this.model);
  }

  blurTranslation() {
    this.onTouched();
  }

  numTranslations() {
    return Object.keys(this.model.translations).length;
  }

  writeValue(value) {
    if (value !== null) {
      this.model = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}

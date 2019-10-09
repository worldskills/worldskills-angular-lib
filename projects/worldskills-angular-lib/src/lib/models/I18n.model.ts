export class I18nModel {
  // tslint:disable-next-line:variable-name
  lang_code: string;

  text: string;

  constructor(obj?: Partial<I18nModel>) {
    this.lang_code = obj && obj.lang_code || 'en';
    this.text = obj && obj.text || '';
  }
}

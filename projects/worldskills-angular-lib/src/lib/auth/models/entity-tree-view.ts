import { I18nText } from '../../common/models/i18n-text';

export class EntityTreeView {
  id: number;
  name: I18nText;
  // tslint:disable-next-line:variable-name
  parent_id: number;
  children: Array<EntityTreeView>;

  constructor(obj?: any) {
    this.id = obj && obj.id || undefined;
    this.name = obj && obj.name || { lang_code: 'en', text: null };
    this.parent_id = obj && obj.parent_id || undefined;
    this.children = obj && obj.children || [];
  }
}

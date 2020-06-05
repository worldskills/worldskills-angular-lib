import { I18nModel } from '../I18n.model';
export class WSEntitySummaryView {
  id: number;
  name: I18nModel;

  constructor(obj?) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || new I18nModel();
  }
}

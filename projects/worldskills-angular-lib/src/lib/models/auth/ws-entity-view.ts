import { I18nModel } from '../I18n.model';
import { WSEntitySummaryView } from './ws-entity-summary-view';
export class WSEntityView {
  id: number;
  name: I18nModel;
  parent: WSEntitySummaryView;
  children: WSEntitySummaryView[];

  constructor(obj?) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || new I18nModel();
    this.parent = obj && obj.parent || null;
    this.children = obj && obj.children || [];
  }
}

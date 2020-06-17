import {I18nModel} from '../I18n.model';

export class EntityTreeView {
  id: number;
  name: I18nModel;
  // tslint:disable-next-line:variable-name
  parent_id: number;
  children: Array<EntityTreeView>;

  constructor(obj?: any) {
    this.id = obj && obj.id || undefined;
    this.name = obj && obj.name || new I18nModel();
    this.parent_id = obj && obj.parent_id || undefined;
    this.children = obj && obj.children || [];
  }
}

export class EntityTreeListView  {

  // tslint:disable-next-line:variable-name
  total_count: number;
  // tslint:disable-next-line:variable-name
  ws_entity_list: Array<EntityTreeView>;

  constructor(obj?: any) {
    this.total_count = obj && obj.total_count || 0;
    this.ws_entity_list = obj && obj.ws_entity_list || [];
  }

}

import { EntityTreeView } from './entity-tree-view';

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

import { RoleView } from './role-view';
import { WSEntityView } from './ws-entity-view';
export class DynamicRoleView {
  id: number;
  role: RoleView;
  // tslint:disable-next-line:variable-name
  ws_entity: WSEntityView;

  constructor(obj?) {
    this.id = obj && obj.id || null;
    this.role = obj && obj.role || null;
    this.ws_entity = obj && obj.ws_entity || null;
  }
}

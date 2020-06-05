import { RoleView } from './role-view';
import { WSEntitySummaryView } from './ws-entity-summary-view';
export class ProfileRoleView {
  id: number;
  role: RoleView;
  // tslint:disable-next-line:variable-name
  ws_entity: WSEntitySummaryView;
  // tslint:disable-next-line:variable-name
  dynamic_entity: boolean;

  constructor(obj?) {
    this.id = obj && obj.id || null;
    this.role = obj && obj.role || new RoleView();
    this.ws_entity = obj && obj.ws_entity || new WSEntitySummaryView();
    this.dynamic_entity = obj && obj.dynamic_entity || false;
  }
}

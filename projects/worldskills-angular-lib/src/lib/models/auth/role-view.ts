import { RoleApplicationView } from './role-application-view';
import { WSEntitySummaryView } from './ws-entity-summary-view';
export class RoleView {
  id: number;
  // tslint:disable-next-line:variable-name
  role_application: RoleApplicationView;
  // tslint:disable-next-line:variable-name
  role_application_id: number;
  name: string;
  description: string;
  // tslint:disable-next-line:variable-name
  apply_per_entity: boolean;
  // tslint:disable-next-line:variable-name
  ws_entity: WSEntitySummaryView;

  constructor(obj?) {
    this.id = obj && obj.id || null;
    this.role_application = obj && obj.role_application || new RoleApplicationView();
    this.name = obj && obj.name || null;
    this.description = obj && obj.description || null;
    this.apply_per_entity = obj && obj.apply_per_entity || false;
    this.ws_entity = obj && obj.ws_entity || new WSEntitySummaryView();
  }
}

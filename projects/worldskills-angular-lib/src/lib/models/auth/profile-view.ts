import { I18nModel } from '../I18n.model';
import { WSEntitySummaryView } from './ws-entity-summary-view';
import { ProfileRoleView } from './profile-role-view';
export class ProfileView {
  id: number;
  name: I18nModel;
  // tslint:disable-next-line:variable-name
  permitted_entities: WSEntitySummaryView[];
  roles: ProfileRoleView[];

  constructor(obj?) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || new I18nModel();
    this.permitted_entities = obj && obj.permitted_entities || [];
    this.roles = obj && obj.roles || [];
  }
}

import { RoleView } from './role-view';
import { UserProfilesView } from './user-profiles-view';
export class UserView {
  id: number;
  // tslint:disable-next-line:variable-name
  person_id: number;
  // tslint:disable-next-line:variable-name
  legacy_id: number;
  // tslint:disable-next-line:variable-name
  first_name: string;
  // tslint:disable-next-line:variable-name
  last_name: string;
  username: string;
  // tslint:disable-next-line:variable-name
  email_addresses: string[];
  roles: RoleView[];
  profiles: UserProfilesView[];
  active: boolean;

  constructor(obj?) {
    this.id = obj && obj.id || null;
    this.person_id = obj && obj.person_id || null;
    this.legacy_id = obj && obj.legacy_id || null;
    this.first_name = obj && obj.first_name || null;
    this.last_name = obj && obj.last_name || null;
    this.email_addresses = obj && obj.email_addresses || [];
    this.roles = obj && obj.roles || [];
    this.profiles = obj && obj.profiles || [];
    this.active = obj && obj.active || false;
  }
}

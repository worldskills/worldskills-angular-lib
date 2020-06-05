import { ProfileView } from './profile-view';
import { DynamicRoleView } from './dynamic-role-view';
export class UserProfilesView {
  id: number;
  profile: ProfileView;
  // tslint:disable-next-line:variable-name
  dynamic_roles: DynamicRoleView[];

  constructor(obj?) {
    this.id = obj && obj.id || null;
    this.profile = obj && obj.profile || new ProfileView();
    this.dynamic_roles = obj && obj.dynamic_roles || [];
  }
}

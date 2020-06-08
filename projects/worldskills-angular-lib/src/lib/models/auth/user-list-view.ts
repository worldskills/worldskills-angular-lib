import { UserView } from './user-view';
export class UserListView {
  // tslint:disable-next-line:variable-name
  total_count: number;
  users: UserView[];

  constructor(obj?) {
    this.total_count = obj && obj.total_count || 0;
    this.users = obj && obj.users || [];
  }
}

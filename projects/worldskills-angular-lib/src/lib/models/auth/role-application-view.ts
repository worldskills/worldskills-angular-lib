export class RoleApplicationView {
  id: number;
  name: string;
  // tslint:disable-next-line:variable-name
  application_code: number;
  // tslint:disable-next-line:variable-name
  manages_own_roles: boolean;

  constructor(obj?) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
    this.application_code = obj && obj.application_code || null;
    this.manages_own_roles = obj && obj.manages_own_roles || false;
  }
}

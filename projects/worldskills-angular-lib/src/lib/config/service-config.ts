export class ServiceConfig {
  public appCode: number;
  public userServiceEndpoint: string;

  constructor(obj?: Partial<ServiceConfig>) {
    this.appCode = obj && obj.appCode || 0;
    this.userServiceEndpoint = obj && obj.userServiceEndpoint || '';
  }

  public userInfoUri(showChildRoles) {
    return `${this.userServiceEndpoint}/users/loggedIn?show_child_roles=${showChildRoles}&app_code=${String(this.appCode)}`;
  }
}

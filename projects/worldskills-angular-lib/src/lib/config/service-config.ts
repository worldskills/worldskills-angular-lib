export class ServiceConfig {
  public appCode: number;
  public userServiceEndpoint: string;

  public userInfoUri = (showChildRoles) => {
    return `${this.userServiceEndpoint}/users/loggedIn?show_child_roles=${showChildRoles}&app_code=${String(this.appCode)}`;
  }
}

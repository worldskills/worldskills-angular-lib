export class ServiceConfig {
  public appCode: number;
  public userServiceEndpoint: string;

  constructor(appCode: number, userServiceEndpoint: string) {
    this.appCode = appCode;

    // ensure endpoint ends with a forward slash
    this.userServiceEndpoint = userServiceEndpoint.endsWith('/')
      ? userServiceEndpoint
      : `${userServiceEndpoint}/`;
  }

  public userInfoUri = (showChildRoles) => {
    return `${this.userServiceEndpoint}users/loggedIn?show_child_roles=${showChildRoles}&app_code=${String(this.appCode)}`;
  }
}

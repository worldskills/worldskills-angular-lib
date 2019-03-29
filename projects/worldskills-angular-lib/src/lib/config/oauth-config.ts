export class OAuthConfig {
  public loginURI: string;
  public clientId: string;
  public oidc: boolean;

  constructor(loginURI: string, clientId: string) {
    this.loginURI = loginURI;
    this.clientId = clientId;
    this.oidc = false;
  }
}

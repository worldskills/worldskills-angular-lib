export class OAuthConfig {
  public loginURI: string;
  public clientId: string;
  public oidc: boolean;

  constructor() {
    this.oidc = false;
  }
}

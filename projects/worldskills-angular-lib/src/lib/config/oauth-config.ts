export class OAuthConfig {
  public loginURI: string;
  public clientId: string;
  public oidc: boolean;

  constructor(obj?: Partial<OAuthConfig>) {
    this.loginURI = obj && obj.loginURI || '';
    this.clientId = obj && obj.clientId || '';
    this.oidc = obj && obj.oidc || false;
  }
}

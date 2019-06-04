import { AuthConfig } from 'angular-oauth2-oidc';

export class OAuthConfig extends AuthConfig {
  constructor(obj?: Partial<OAuthConfig>) {
    super(obj);
  }
}

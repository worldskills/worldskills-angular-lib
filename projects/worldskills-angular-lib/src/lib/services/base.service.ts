import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

export class BaseService {
  constructor(protected http: HttpClient, protected oAuthService: OAuthService) {
  }

  protected getDefaultHeaders() {
    return new HttpHeaders()
      .set('authorization', this.oAuthService.authorizationHeader());
  }
}

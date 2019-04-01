import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

export class BaseService {

  public headers: HttpHeaders;

  constructor(protected http: HttpClient, protected oAuthService: OAuthService) {
    this.headers = new HttpHeaders();
  }

  protected getHeaders() {
    return this.headers
      .set('authorization', this.oAuthService.authorizationHeader());
  }
}

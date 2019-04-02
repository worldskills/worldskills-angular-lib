import { async, TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';
import { HttpClient, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

// NOTE: TestBed only works on Injectable classes, this is Base Class
describe('BaseService', () => {

  class MockHttpHandler extends HttpHandler {
    handle(
      req: import ('@angular/common/http').HttpRequest<any>): import ('rxjs').Observable<import ('@angular/common/http').HttpEvent<any>> {
      return new Observable<HttpEvent<any>>();
    }
  }
  class MockOAuthService extends OAuthService {
  }

  const http = new HttpClient(new MockHttpHandler());
  const oAuthService = new MockOAuthService(null, http, localStorage, null, {}, null, null);

  it('should be created', () => {
    const service = new BaseService(http, oAuthService);
    expect(service).toBeTruthy();
  });
});

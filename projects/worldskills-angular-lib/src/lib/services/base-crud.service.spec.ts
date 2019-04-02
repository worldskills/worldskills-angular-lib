import { TestBed } from '@angular/core/testing';

import { BaseCrudService } from './base-crud.service';
import { BaseService } from './base.service';
import { HttpClient, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';

// NOTE: TestBed only works on Injectable classes
describe('BaseCrudService', () => {
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
    const service = new BaseCrudService(http, oAuthService);
    expect(service).toBeTruthy();
  });
});

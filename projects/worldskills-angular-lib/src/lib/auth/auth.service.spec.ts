import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { OAuthLogger, OAuthService, UrlHelperService } from 'angular-oauth2-oidc';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [OAuthLogger, OAuthService, UrlHelperService, provideHttpClient(withInterceptorsFromDi())]
});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

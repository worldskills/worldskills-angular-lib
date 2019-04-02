import { async, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ModuleConfigService, ServiceConfigToken, OAuthConfigToken } from '../config/module-config.service';
import { ServiceConfig } from '../config/service-config';
import { OAuthConfig } from '../config/oauth-config';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { OAuthService, UrlHelperService, OAuthLogger } from 'angular-oauth2-oidc';

describe('AuthService', () => {
  const serviceConfig = new ServiceConfig();
  const oAuthConfig = new OAuthConfig();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        OAuthService,
        OAuthLogger,
        HttpHandler,
        HttpClient,
        UserService,
        UrlHelperService,
        ModuleConfigService,
        {
          provide: ServiceConfigToken,
          useValue: serviceConfig
        },
        {
          provide: OAuthConfigToken,
          useValue: oAuthConfig
        }
      ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});

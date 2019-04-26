import { async, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ModuleConfigService, ServiceConfigToken, OAuthConfigToken, EncoderConfigToken } from '../config/module-config.service';
import { ServiceConfig } from '../config/service-config';
import { OAuthConfig } from '../config/oauth-config';
import { OAuthService, UrlHelperService, OAuthLogger } from 'angular-oauth2-oidc';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { EncoderConfig } from '../config/encoder-config';

describe('AuthService', () => {
  let httpTestingController: HttpTestingController;

  const serviceConfig = new ServiceConfig();
  serviceConfig.appCode = 500;
  serviceConfig.userServiceEndpoint = 'http://localhost:8081/auth';
  const oAuthConfig = new OAuthConfig();
  oAuthConfig.loginURI = '';
  const encoderConfig = new EncoderConfig();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        OAuthService,
        OAuthLogger,
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
        },
        {
          provide: EncoderConfigToken,
          useValue: encoderConfig
        }
      ]
    })
    .compileComponents();
  }));

  it('should be created', () => {

    httpTestingController = TestBed.get(HttpTestingController);
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });


  it('should login', () => {
    httpTestingController = TestBed.get(HttpTestingController);
    const service: AuthService = TestBed.get(AuthService);
    service.login();
    // we can't test this much further as it is implicit flow
  });

  it('should Keep Alive', () => {
    class Ping {
      pong: boolean;
    }
    const returnObject = {
      pong: true
    };
    httpTestingController = TestBed.get(HttpTestingController);
    const service: AuthService = TestBed.get(AuthService);
    service.keepAlive();
    const req = httpTestingController.expectOne('http://localhost:8081/auth/ping');
    expect(req.request.method).toEqual('GET');
    req.flush(returnObject);
  });

  it('should not Keep Alive', () => {
    const returnObject = { status: 500, statusText: 'Internal Server Error' };

    httpTestingController = TestBed.get(HttpTestingController);
    const service: AuthService = TestBed.get(AuthService);
    service.keepAlive();
    const req = httpTestingController.expectOne('http://localhost:8081/auth/ping');
    expect(req.request.method).toEqual('GET');
    req.flush(returnObject);
  });

  it('should get current user value', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.currentUser = new Observable<UserModel>();
    const result = service.currentUserValue;
    expect(result);
  });

  it('should not be logged in', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.currentUser = new Observable<UserModel>();
    const result = service.isLoggedIn();
    expect(result).toBe(false);
  });

  it('should load user profile', () => {
    const returnObject = {
      id: 1,
      first_name: 'Joe',
      last_name: 'Blogs',
      person_id: 2,
      legacy_id: 0,
      puppeteer: null,
      username: '',
      email_addresses: [],
      roles: [],
      user_profiles: [],
      active: true,
      links: [],
      password: '',
      pin: '',
      has_pin: false
    };

    httpTestingController = TestBed.get(HttpTestingController);
    const service: AuthService = TestBed.get(AuthService);
    service.loadUserProfile((error: any) => {
      console.log(error);
    });
    const req = httpTestingController.expectOne('http://localhost:8081/auth/users/loggedIn?show_child_roles=false&app_code=500');
    expect(req.request.method).toEqual('GET');
    req.flush(returnObject);
    expect(service.currentUserValue.id).toEqual(1);
  });

  it('should not load user profile', () => {
    const returnObject = { status: 500, statusText: 'Internal Server Error' };
    httpTestingController = TestBed.get(HttpTestingController);
    const service: AuthService = TestBed.get(AuthService);
    service.loadUserProfile((error: any) => {
      console.log(error);
    });
    const req = httpTestingController.expectOne('http://localhost:8081/auth/users/loggedIn?show_child_roles=false&app_code=500');
    expect(req.request.method).toEqual('GET');
    req.flush('', returnObject);
    expect(service.currentUser).toBe(null);
  });
});

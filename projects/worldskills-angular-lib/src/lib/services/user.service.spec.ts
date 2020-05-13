import { async, TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { ModuleConfigService, ServiceConfigToken, WSHttpConfigToken, AuthConfigToken } from '../config/module-config.service';
import { ServiceConfig } from '../config/service-config';
import { OAuthService, UrlHelperService, OAuthLogger, AuthConfig } from 'angular-oauth2-oidc';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { UserModel } from '../models/user.model';
import { RoleModel } from '../models/role-model';
import { RoleApplicationModel } from '../models/role-application-model';
import { WSHttpConfig } from '../config/ws-http-config';

// since our service is injectable, we can make use of angular test suite
describe('UserService', () => {
  let httpTestingController: HttpTestingController;

  const serviceConfig = new ServiceConfig();
  serviceConfig.appCode = [500];
  serviceConfig.apiEndpoint = 'http://localhost:8081';
  const oAuthConfig = new AuthConfig();
  oAuthConfig.loginUrl = 'http://localhost:50300/oauth/authorize';
  oAuthConfig.redirectUri = '';
  oAuthConfig.userinfoEndpoint = '';
  const encoderConfig = new WSHttpConfig();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
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
          provide: AuthConfigToken,
          useValue: oAuthConfig
        },
        {
          provide: WSHttpConfigToken,
          useValue: encoderConfig
        }
      ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    httpTestingController = TestBed.get(HttpTestingController);
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should ping', () => {
    class Ping {
      pong: boolean;
    }
    const returnObject = {
      pong: true
    };
    httpTestingController = TestBed.get(HttpTestingController);
    const service: UserService = TestBed.get(UserService);
    service.ping().subscribe(x => {
      const model = x as Ping;
      expect(model.pong).toEqual(true);
    });
    const req = httpTestingController.expectOne('http://localhost:8081/auth/ping');
    expect(req.request.method).toEqual('GET');
    req.flush(returnObject);
  });

  it('should get logged in user', () => {
    const returnObject = new UserModel();
    returnObject.id = 1;
    returnObject.firstName = 'Joe';
    returnObject.lastName = 'Blogs';
    returnObject.personId = 2;

    httpTestingController = TestBed.get(HttpTestingController);
    const service: UserService = TestBed.get(UserService);
    service.getLoggedInUser().subscribe(x => {
      const model = x as UserModel;
      expect(model.id).toEqual(1);
      expect(model.fullname).toEqual('Joe Blogs');
    });
    const req = httpTestingController.expectOne('http://localhost:8081/auth/users/loggedIn?show_child_roles=false&app_code=500');
    expect(req.request.method).toEqual('GET');
    req.flush(returnObject);
  });

  it('should authenticate', () => {
    const roles = ['Admin'];
    const adminRole = new RoleModel();
    adminRole.id = 1;
    adminRole.roleApplication = new RoleApplicationModel();
    adminRole.roleApplication.applicationCode = 500;
    adminRole.name = 'Admin';

    const user = new UserModel();
    user.id = 1;
    user.roles.push(adminRole);
    const service: UserService = TestBed.get(UserService);

    const result = service.authenticate(user, roles);
    expect(result).toEqual(true);
  });

  it('should not authenticate', () => {
    const roles = ['Admin'];
    const adminRole = new RoleModel();
    adminRole.id = 1;
    adminRole.roleApplication = new RoleApplicationModel();
    adminRole.roleApplication.applicationCode = 500;
    adminRole.name = 'ViewAll';

    const user = new UserModel({});
    user.id = 1;
    user.roles.push(adminRole);
    const service: UserService = TestBed.get(UserService);

    const result = service.authenticate(user, roles);
    expect(result).toEqual(false);
  });
});

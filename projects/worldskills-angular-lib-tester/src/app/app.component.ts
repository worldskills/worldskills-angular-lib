import { Component } from '@angular/core';
import { AlertService } from '../../../worldskills-angular-lib/src/lib/alerts/alert.service';
import { AlertType, MenuItem, Language } from '../../../worldskills-angular-lib/src/public-api';
import { WorldskillsAngularLibService } from '../../../worldskills-angular-lib/src/lib/worldskills-angular-lib.service';
import { NgAuthService } from '../../../worldskills-angular-lib/src/lib/auth/ng-auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { User } from '../../../../dist/worldskills-angular-lib/lib/auth/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'worldskills-angular-lib-tester';

  // auth
  user: User;

  // header
  isLoggedIn: boolean;
  menuItems: Array<MenuItem>;

  // breadcrumbs
  showHomeItem = true;
  defaultRoute = '/home';

  languages: Language[];

  constructor(private alerts: AlertService, private wsi: WorldskillsAngularLibService, private oauth: OAuthService,
              private ngAuth: NgAuthService) {
  }



  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.configureLib();
    this.alerts.setAlert('test', AlertType.info, 'Alert!', 'A random alert', false);

    this.languages = [
      { code: 'en', name: 'English' }
    ];
    this.isLoggedIn = false;
    this.menuItems = [
      { label: 'Home', url: '/home', hidden: false, requireLogin: false, requiredRoles: [] },
    ];
    this.ngAuth.loadUserProfile(
      user => {
        this.isLoggedIn = true;
        console.log(user);
        this.user = user;
      },
      error => {
        this.isLoggedIn = false;
        console.log(error);
      }
    );
  }

  login(): void {
    this.ngAuth.login();
  }

  logout(): void {
    this.ngAuth.logout();
  }

  configureLib(): void {
    /*
      Overriding all config is completely options.
      you should probably override AuthConfig at least.
    */
    const appConfig = this.wsi.appConfigSubject.getValue();
    appConfig.notAuthorizedRoute = ['/not-authorized'];
    this.wsi.appConfigSubject.next(appConfig);

    this.wsi.authConfigSubject.next({
      loginUrl: 'http://localhost:50300/oauth/authorize',
      clientId: '7221138f6772',
      redirectUri: 'http://localhost:4200/home',
      userinfoEndpoint: 'http://localhost:8081/users/loggedIn?show_child_roles=false&app_code=500',
      oidc: false
    });


    const httpConfig = this.wsi.httpConfigSubject.getValue();
    httpConfig.encoderUriPatterns = []; //
    httpConfig.authUriPatterns = ['http://localhost:8081'];
    this.wsi.httpConfigSubject.next(httpConfig);

    const serviceConfig = this.wsi.serviceConfigSubject.getValue();
    serviceConfig.appCode = [500];
    serviceConfig.apiEndpoint = 'http://localhost:8081';
    this.wsi.serviceConfigSubject.next(serviceConfig);

  }
}

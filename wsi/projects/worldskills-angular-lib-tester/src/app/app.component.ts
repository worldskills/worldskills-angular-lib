import { Component } from '@angular/core';
import { AlertService } from '../../../worldskills-angular-lib/src/lib/alerts/alert.service';
import { AlertType } from '../../../worldskills-angular-lib/src/public-api';
import { WorldskillsAngularLibService } from '../../../worldskills-angular-lib/src/lib/worldskills-angular-lib.service';
import { WsiNgAuthService } from '../../../worldskills-angular-lib/src/lib/auth/wsi-ng-auth.service';
import { WsiAuthService } from '../../../worldskills-angular-lib/src/lib/auth/wsi-auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'worldskills-angular-lib-tester';

  constructor(private alerts: AlertService, private wsi: WorldskillsAngularLibService, private oauth: OAuthService,
              private ngAuth: WsiNgAuthService) {
  }



  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.configureLib();
    this.alerts.setAlert('test', AlertType.info, 'Alert!', 'A random alert', false);

    // this.oauth.tryLogin();
    this.ngAuth.loadUserProfile(
      user => console.log(user),
      error => console.log(error)
    );
  }

  login(): void {
    this.ngAuth.login();
  }

  logout(): void {
    this.ngAuth.logout();
  }

  configureLib(): void {
    this.wsi.serviceConfig.appCode = [500];
    this.wsi.serviceConfig.apiEndpoint = 'http://localhost:8081';
    this.wsi.authConfig = {
      loginUrl: 'http://localhost:50300/oauth/authorize',
      clientId: '7221138f6772',
      redirectUri: 'http://localhost:4200/home',
      userinfoEndpoint: 'http://localhost:8081/users/loggedIn?show_child_roles=false&app_code=500',
      oidc: false
    };
    this.wsi.httpConfig.encoderUriPatterns = []; //
    this.wsi.httpConfig.authUriPatterns = ['http://localhost:8081'];
    this.wsi.appConfig.notAuthorizedRoute = ['/not-authorized'];
  }
}

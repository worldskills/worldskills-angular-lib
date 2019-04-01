import { Component } from '@angular/core';
import { UserModel } from '../../../worldskills-angular-lib/src/lib/models/user.model';
import { IMenuItem } from '../../../worldskills-angular-lib/src/lib/interfaces/menu-item.interface';
import { AuthService, ModuleConfigService } from 'worldskills-angular-lib';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'worldskills-angular-lib-tester';
  isLoggedIn: boolean;
  menuItems: Array<IMenuItem>;
  currentUser: UserModel;

  appCode: number;
  cliendId: string;

  constructor(
    private moduleConfigService: ModuleConfigService,
    private authService: AuthService) {
    this.appCode = moduleConfigService.serviceConfig.appCode;
    this.cliendId = moduleConfigService.oAuthConfig.clientId;
    this.isLoggedIn = false;
    this.menuItems = [
      // TODO: requiredRoles by rolename and application code
      { label: 'Home', url: '/', hidden: false, requireLogin: false, requiredRoles: [] },
      { label: 'Other', url: '/', hidden: false, requireLogin: true, requiredRoles: [] }
    ];
    this.currentUser = new UserModel();

    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.isLoggedIn = this.currentUser != null;
    });
    this.authService.loadUserProfile();
  }

  login() {
    this.authService.login();
    // this.isLoggedIn = true;
    // this.currentUser = new UserModel();
    // this.currentUser.id = 1;
    // this.currentUser.firstName = 'Test';
    // this.currentUser.lastName = 'User';
  }

  logout() {
    this.authService.logout();

    // this.isLoggedIn = false;
    // this.currentUser = new UserModel();
  }

  saveFn() {
    console.log('saved');
  }
}

import { Component } from '@angular/core';
import { UserModel } from '../../../worldskills-angular-lib/src/lib/models/user.model';
import { IMenuItem } from '../../../worldskills-angular-lib/src/lib/interfaces/menu-item.interface';
import { AuthService, ModuleConfigService } from 'worldskills-angular-lib';
import { ToggleButtonModel } from 'projects/worldskills-angular-lib/src/public_api';

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

  toggleButtons: Array<ToggleButtonModel>;

  activeToggleButton: string;

  constructor(
    private moduleConfigService: ModuleConfigService,
    private authService: AuthService) {
    this.appCode = moduleConfigService.serviceConfig.appCode;
    this.cliendId = moduleConfigService.authConfig.clientId;
    this.isLoggedIn = false;
    console.log(this.currentUser);
    this.menuItems = [
      // TODO: requiredRoles by rolename and application code
      { label: 'Home', url: '/', hidden: false, requireLogin: false, requiredRoles: [] },
      { label: 'Other', url: '/', hidden: false, requireLogin: true, requiredRoles: ['EditForums'] },
      { label: 'Admin', url: '/', hidden: false, requireLogin: true, requiredRoles: ['Admin'] }
    ];
    this.currentUser = new UserModel();

    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.isLoggedIn = this.currentUser != null;
    });
    this.authService.loadUserProfile((error: any) => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.initToggleButtons();
  }

  initToggleButtons() {
    const yesButton = new ToggleButtonModel({name: 'yes', text: 'yes'});
    const noButton = new ToggleButtonModel({name: 'no', text: 'no'});
    this.toggleButtons = new Array<ToggleButtonModel>(yesButton, noButton);
    this.activeToggleButton = 'no';
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
  }

  onButtonClicked(button: ToggleButtonModel) {
    console.log(button);
    this.activeToggleButton = button.name; // switch active state on the toggle button
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

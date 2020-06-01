import { Component } from '@angular/core';
import { UserModel } from '../../../worldskills-angular-lib/src/lib/models/user.model';
import { IMenuItem } from '../../../worldskills-angular-lib/src/lib/interfaces/menu-item.interface';
import { AuthService, ModuleConfigService } from 'worldskills-angular-lib';
import { CollectionModel } from '../../../worldskills-angular-lib/src/lib/models/collection-model';
import { DateRange } from '../../../worldskills-angular-lib/src/lib/models/date-range';
import { DatetimeModel } from '../../../worldskills-angular-lib/src/lib/models/datetime.model';

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

  appCode: number[];
  cliendId: string;

  activeToggleButton: string;

  collection: CollectionModel<string>;

  autoJump: boolean;

  dateRange: DateRange;

  dateTime: DatetimeModel;

  // breadcrumbs
  showHomeItem = true;
  defaultRoute = '/home';

  constructor(
    private moduleConfigService: ModuleConfigService,
    private authService: AuthService) {
    this.appCode = moduleConfigService.serviceConfig.appCode;
    this.cliendId = moduleConfigService.authConfig.clientId;
    this.isLoggedIn = false;
    // console.log(this.currentUser);
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

    this.autoJump = true;
    this.collection = new CollectionModel();
    this.collection.count = 10;
    this.collection.offset = 0;
    this.collection.limit = 10;
    this.collection.total = 1000;
    for (let index = 0; index < this.collection.limit; index++) {
      this.collection.items.push(index.toString());
    }

    this.dateTime = DatetimeModel.asToday();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.dateRange = new DateRange();
    this.dateRange.start = new Date();
    const endDate = new Date();
    endDate.setDate(this.dateRange.start.getDate() + 4);
    this.dateRange.end = endDate;
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
  }


  dateTimeChange(dateTime: DatetimeModel) {
    console.log(dateTime);
    // console.log(this.dateTime);
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

  rangeSelected(event) {
    console.log(event);
  }

}

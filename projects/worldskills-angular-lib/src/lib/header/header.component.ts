import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../models/user.model';
import { IMenuItem } from '../interfaces/menu-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'ws-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() appName: string;
  @Input() public isLoggedIn: boolean;
  @Input() public showLoginAndLogoutButtons: boolean;
  @Input() menuItems: Array<IMenuItem>;
  @Input() currentUser: UserModel;
  @Output() public logoutClick: EventEmitter<any> = new EventEmitter();
  @Output() public loginClick: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {
    this.appName = 'Application';
    this.isLoggedIn = false;
    this.showLoginAndLogoutButtons = false;
    this.menuItems = [];
    this.currentUser = new UserModel();
  }

  ngOnInit() {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {}

  userRoles() {
    if (this.currentUser === undefined || this.currentUser === null) {
      return [];
    }

    if (this.currentUser.roles === undefined || this.currentUser.roles === null) {
      return [];
    }

    return this.currentUser.roles.map(item => {
      return item.name;
    });
  }

  isRouteActive(route) {
    return route === this.router.url;
  }

  login() {
    this.loginClick.emit();
  }

  logout() {
    this.logoutClick.emit();
  }

  getInitials() {
    let s = '';
    if (this.currentUser) {
      if (this.currentUser.firstName) {
        s = this.currentUser.firstName.substr(0, 1);
      }

      if (this.currentUser.lastName) {
        s += this.currentUser.lastName.substr(0, 1);
      }
    }

    return s.toUpperCase();
  }
}

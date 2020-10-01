import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from '../menu-item';
import { User } from '../../auth/models/user';

@Component({
    selector: 'ws-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() appName: string;
    @Input() public isLoggedIn: boolean;
    @Input() public showLoginAndLogoutButtons: boolean;
    @Input() menuItems: Array<MenuItem>;
    @Input() currentUser: User;
    @Input() linkTitle: boolean;
    @Input() appNameTemplate: TemplateRef<any>;
    @Input() menuTemplate: TemplateRef<any>;
    @Input() subMenuTemplate: TemplateRef<any>;
    @Output() public logoutClick: EventEmitter<any> = new EventEmitter();
    @Output() public loginClick: EventEmitter<any> = new EventEmitter();

    constructor(private router: Router, private route: ActivatedRoute) {
        this.appName = 'Application';
        this.isLoggedIn = false;
        this.showLoginAndLogoutButtons = false;
        this.menuItems = [];
        this.currentUser = null;
    }

    // tslint:disable-next-line:use-life-cycle-interface typedef
    ngOnInit() {
    }

    // tslint:disable-next-line:use-lifecycle-interface typedef
    ngOnChanges() {
    }

    userRoles(): string[] {
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

    isRouteActive(item: MenuItem): boolean {
        return item.url === this.router.url || item?.subMenuItems?.some(subItem => subItem.url === this.router.url);
    }

    getActiveParentMenu(): MenuItem {
        return this.menuItems?.find(
            item => item.url === this.router.url || item?.subMenuItems?.some(subItem => subItem.url === this.router.url)
        );
    }

    login(): void {
        this.loginClick.emit();
    }

    logout(): void {
        this.logoutClick.emit();
    }

    getInitials(): string {
        let s = '';
        if (this.currentUser) {
            if (this.currentUser.first_name) {
                s = this.currentUser.first_name.substr(0, 1);
            }

            if (this.currentUser.last_name) {
                s += this.currentUser.last_name.substr(0, 1);
            }
        }

        return s.toUpperCase();
    }
}

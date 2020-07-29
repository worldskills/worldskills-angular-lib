import { OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../menu-item';
import { User } from '../../auth/models/user';
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit {
    private router;
    appName: string;
    isLoggedIn: boolean;
    showLoginAndLogoutButtons: boolean;
    menuItems: Array<MenuItem>;
    currentUser: User;
    logoutClick: EventEmitter<any>;
    loginClick: EventEmitter<any>;
    constructor(router: Router);
    ngOnInit(): void;
    ngOnChanges(): void;
    userRoles(): string[];
    isRouteActive(route: any): boolean;
    login(): void;
    logout(): void;
    getInitials(): string;
    static ɵfac: i0.ɵɵFactoryDef<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HeaderComponent, "ws-header", never, { "appName": "appName"; "isLoggedIn": "isLoggedIn"; "showLoginAndLogoutButtons": "showLoginAndLogoutButtons"; "menuItems": "menuItems"; "currentUser": "currentUser"; }, { "logoutClick": "logoutClick"; "loginClick": "loginClick"; }, never, never>;
}

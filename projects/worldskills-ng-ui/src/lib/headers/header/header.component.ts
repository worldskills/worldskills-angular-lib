import { Component, EventEmitter, Input, OnChanges, Output, TemplateRef, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '@worldskills/ng-auth';
import { GenericUtil } from '../../../lib/common/util/generic.util';
import { MenuItem } from '../menu-item';
import { MenuItem as PrimeMenuItem } from 'primeng/api';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { MenuAccessPipe } from '../menu-access.pipe';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { WordmarkComponent } from '../../logos/wordmark/wordmark.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ws-ng-ui-header',
  imports: [
    CommonModule, MenuAccessPipe, NgTemplateOutlet,
    ButtonModule, MenuModule, MenubarModule,
    RouterModule, WordmarkComponent, TranslatePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnChanges {

    private readonly translate = inject(TranslateService, { optional: true });

    @Input() appName: string;
    @Input() public isLoggedIn: boolean;
    @Input() public showLoginAndLogoutButtons: boolean;
    @Input() menuItems: Array<MenuItem>;
    @Input() dropDownMenuItems: Array<MenuItem>;
    @Input() currentUser: User;
    @Input() linkTitle: boolean;
    @Input() appNameTemplate: TemplateRef<any>;
    @Input() menuTemplate: TemplateRef<any>;
    @Input() subMenuTemplate: TemplateRef<any>;
    @Output() public logoutClick: EventEmitter<any> = new EventEmitter();
    @Output() public loginClick: EventEmitter<any> = new EventEmitter();

    constructor(private router: Router) {
        this.appName = 'Application';
        this.isLoggedIn = false;
        this.showLoginAndLogoutButtons = false;
        this.menuItems = [];
        this.dropDownMenuItems = [];
        this.currentUser = null;
    }

    private isMenuItemVisible(item: MenuItem): boolean {
        if (!item || item.hidden) {
            return false;
        }
        if (item.requireLogin && !this.isLoggedIn) {
            return false;
        }
        if (!item.requiredRoles || item.requiredRoles.length === 0) {
            return true;
        }
        const roles = this.userRoles();
        return item.requiredRoles.some(role => roles.includes(role));
    }

    menubarItems: PrimeMenuItem[] = [];

    ngOnChanges(): void {
        this.menubarItems = (this.menuItems ?? [])
            .filter(item => this.isMenuItemVisible(item))
            .map(item => ({
                label: item.label,
                routerLink: item.url,
                queryParams: item.params,
                items: item.subMenuItems
                    ?.filter(s => this.isMenuItemVisible(s))
                    .map(s => ({ label: s.label, routerLink: s.url, queryParams: s.params }))
            }));
    }

    get dropdownItems(): PrimeMenuItem[] {
        const name = this.currentUser
            ? `${this.currentUser.first_name} ${this.currentUser.last_name}`
            : '';
        return [
            { label: name, disabled: true },
            { separator: true },
            ...(this.dropDownMenuItems ?? [])
                .filter(i => this.isMenuItemVisible(i))
                .map(i => ({ label: i.label, routerLink: i.url })),
            { label: this.translate?.instant('ws_ui.header.logout') ?? 'Logout', command: () => this.logout() }
        ];
    }

    userRoles(): string[] {
        if (this.currentUser === undefined || this.currentUser === null) {
            return [];
        }
        if (this.currentUser.roles === undefined || this.currentUser.roles === null) {
            return [];
        }
        return this.currentUser.roles.map(item => item.name);
    }

    isRouteActive(item: MenuItem): boolean {
        return item.url === this.router.url || item?.subMenuItems?.some(subItem => subItem.url === this.router.url);
    }

    getActiveParentMenu(): MenuItem {
        let parent = this.menuItems.find(item => item.url === this.router.url);
        if (GenericUtil.isNullOrUndefined(parent)) {
            const parents = this.menuItems.filter(item => !GenericUtil.isNullOrUndefined(item.subMenuItems));
            parents.forEach(item => {
                if (GenericUtil.isNullOrUndefined(parent)) {
                    const match = item.subMenuItems.find(subItem => subItem.url === this.router.url);
                    if (!GenericUtil.isNullOrUndefined(match)) {
                        parent = item;
                    }
                }
            });
        }
        return parent;
    }

    hasSubMenuItems(item: MenuItem): boolean {
        if (GenericUtil.isNullOrUndefined(item)) {
            return false;
        }
        return !GenericUtil.isNullOrUndefined(item.subMenuItems);
    }

    getSubMenuItems(item: MenuItem): MenuItem[] {
        if (GenericUtil.isNullOrUndefined(item)) {
            return [];
        }
        if (GenericUtil.isNullOrUndefined(item.subMenuItems)) {
            return [];
        }
        return item.subMenuItems;
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
                s = this.currentUser.first_name.substring(0, 1);
            }
            if (this.currentUser.last_name) {
                s += this.currentUser.last_name.substring(0, 1);
            }
        }
        return s.toUpperCase();
    }

    showMenu(): boolean {
        return this.showLoginAndLogoutButtons ? this.isLoggedIn || !GenericUtil.isNullOrUndefined(this.currentUser) : false;
    }

    showLoginButton(): boolean {
        return this.showLoginAndLogoutButtons ? !this.isLoggedIn || GenericUtil.isNullOrUndefined(this.currentUser) : false;
    }

    readonly menubarPT = {
        start: { class: 'flex-1 flex items-center p-2' },
        submenu: {
            class: 'min-w-[10rem]',
            style: {
                '--ws-menubar-item-color': '#3d0e61',
                '--ws-menubar-item-focus-color': '#3d0e61',
                '--ws-menubar-item-active-color': '#3d0e61',
                '--ws-menubar-item-focus-background': 'rgba(61, 14, 97, 0.05)',
                '--ws-menubar-item-active-background': 'rgba(61, 14, 97, 0.1)',
            }
        },
    };

    readonly userMenuPT = {
        root: { class: 'min-w-[180px]' },
        itemContent: { class: 'px-4 py-2' },
        separator: { class: 'border-t border-gray-200 my-1' },
    };
}

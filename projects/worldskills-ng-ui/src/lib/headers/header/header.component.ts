import { Component, TemplateRef, computed, inject, input, output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Role, User } from '@worldskills/ng-auth';
import { GenericUtil } from '../../../lib/common/util/generic.util';
import { MenuItem } from '../menu-item';
import { MenuItem as PrimeMenuItem } from 'primeng/api';
import { NgTemplateOutlet } from '@angular/common';
import { MenuAccessPipe } from '../menu-access.pipe';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { WordmarkComponent } from '../../logos/wordmark/wordmark.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ws-ng-ui-header',
  imports: [
    MenuAccessPipe, NgTemplateOutlet,
    ButtonModule, MenuModule, MenubarModule,
    RouterModule, WordmarkComponent, TranslatePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  private readonly translate = inject(TranslateService, { optional: true });
  private readonly router = inject(Router);

  // ── Inputs ────────────────────────────────────────────────────────────────
  appName = input<string>('Application');
  isLoggedIn = input<boolean>(false);
  showLoginAndLogoutButtons = input<boolean>(false);
  menuItems = input<MenuItem[]>([]);
  dropDownMenuItems = input<MenuItem[]>([]);
  currentUser = input<User | null>(null);
  linkTitle = input<boolean>(false);
  appNameTemplate = input<TemplateRef<unknown> | null>(null);
  menuTemplate = input<TemplateRef<unknown> | null>(null);
  subMenuTemplate = input<TemplateRef<unknown> | null>(null);

  // ── Outputs ───────────────────────────────────────────────────────────────
  logoutClick = output<void>();
  loginClick = output<void>();

  // ── Computed ──────────────────────────────────────────────────────────────
  userRoles = computed<Role[]>(() => {
    const user = this.currentUser();
    if (!user?.roles) return [];
    return user.roles;
  });

  menubarItems = computed<PrimeMenuItem[]>(() =>
    (this.menuItems() ?? [])
      .filter(item => this.isMenuItemVisible(item))
      .map(item => ({
        label: item.label,
        routerLink: item.url,
        queryParams: item.params,
        items: item.subMenuItems
          ?.filter(s => this.isMenuItemVisible(s))
          .map(s => ({ label: s.label, routerLink: s.url, queryParams: s.params })),
      }))
  );

  dropdownItems = computed<PrimeMenuItem[]>(() => {
    const user = this.currentUser();
    const name = user ? `${user.first_name} ${user.last_name}` : '';
    return [
      { label: name, disabled: true },
      { separator: true },
      ...(this.dropDownMenuItems() ?? [])
        .filter(i => this.isMenuItemVisible(i))
        .map(i => ({ label: i.label, routerLink: i.url })),
      { label: this.translate?.instant('ws_ui.header.logout') ?? 'Logout', command: () => this.logoutClick.emit() },
    ];
  });

  initials = computed<string>(() => {
    const user = this.currentUser();
    if (!user) return '';
    return `${user.first_name?.substring(0, 1) ?? ''}${user.last_name?.substring(0, 1) ?? ''}`.toUpperCase();
  });

  showMenu = computed<boolean>(() =>
    this.showLoginAndLogoutButtons() ? this.isLoggedIn() || !GenericUtil.isNullOrUndefined(this.currentUser()) : false
  );

  showLoginButton = computed<boolean>(() =>
    this.showLoginAndLogoutButtons() ? !this.isLoggedIn() || GenericUtil.isNullOrUndefined(this.currentUser()) : false
  );

  activeParentMenu = computed<MenuItem | undefined>(() => {
    const items = this.menuItems();
    let parent = items.find(item => item.url === this.router.url);
    if (GenericUtil.isNullOrUndefined(parent)) {
      items.filter(item => !GenericUtil.isNullOrUndefined(item.subMenuItems))
        .forEach(item => {
          if (GenericUtil.isNullOrUndefined(parent)) {
            const match = item.subMenuItems.find(sub => sub.url === this.router.url);
            if (!GenericUtil.isNullOrUndefined(match)) parent = item;
          }
        });
    }
    return parent;
  });

  hasSubMenu = computed<boolean>(() => !GenericUtil.isNullOrUndefined(this.activeParentMenu()?.subMenuItems));

  subMenuItems = computed<MenuItem[]>(() => this.activeParentMenu()?.subMenuItems ?? []);

  // ── Methods ───────────────────────────────────────────────────────────────

  isRouteActive(item: MenuItem): boolean {
    return item.url === this.router.url || item?.subMenuItems?.some(sub => sub.url === this.router.url);
  }

  login(): void {
    this.loginClick.emit();
  }

  // ── Pass-through templates ─────────────────────────────────────────────────

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

  private isMenuItemVisible(item: MenuItem): boolean {
    if (!item || item.hidden) return false;
    if (item.requireLogin && !this.isLoggedIn()) return false;
    if (!item.requiredRoles?.length) return true;
    const userRoles = this.userRoles();
    return item.requiredRoles.some(required => {
      if (typeof required === 'string') {
        return userRoles.some(r => r.name === required);
      }
      return userRoles.some(r => {
        if (r.name !== required.name) return false;
        if (required.entityId === null) return r.ws_entity == null;
        return r.ws_entity?.id === required.entityId || r.ws_entity_ids?.includes(required.entityId);
      });
    });
  }
}

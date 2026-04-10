import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BreadcrumbComponent, FooterComponent, HeaderComponent, WsToastComponent } from '@worldskills/ng-ui';
import type { MenuItem } from "@worldskills/ng-ui";
import { NgAuthService, RedirectHandler, User } from "@worldskills/ng-auth";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, BreadcrumbComponent, WsToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private ngAuthService = inject(NgAuthService);
  private redirectHandler = inject(RedirectHandler);
  private router = inject(Router);

  appName = "Tester";
  isLoggedIn = signal(false);
  showLoginAndLogoutButtons = true;
  currentUser = signal<User>(null);
  linkTitle = true;

  menuItems: MenuItem[] = [
    {
      label: "Home",
      url: "/home",
      hidden: false,
      requireLogin: false,
      requiredRoles: [],
    },
    {
      label: "About",
      url: "/about",
      hidden: false,
      requireLogin: false,
      requiredRoles: [],
    },
    {
      label: "Settings",
      url: "/settings",
      hidden: false,
      requireLogin: false,
      requiredRoles: [],
      subMenuItems: [
        { label: "Profile", url: "/settings/profile", hidden: false, requireLogin: false, requiredRoles: [] },
        { label: "Preferences", url: "/settings/preferences", hidden: false, requireLogin: false, requiredRoles: [] },
        { label: "Security", url: "/settings/security", hidden: true, requireLogin: false, requiredRoles: [] },
      ],
    },
    {
      label: "Admin",
      url: "/admin",
      hidden: false,
      requireLogin: true,
      requiredRoles: ["Admin"],
      subMenuItems: [
        { label: "Users", url: "/admin/users", hidden: false, requireLogin: true, requiredRoles: ["Admin"] },
        { label: "Logs", url: "/admin/logs", hidden: false, requireLogin: true, requiredRoles: ["Admin"] },
      ],
    },
    {
      label: "Secret",
      url: "/secret",
      hidden: false,
      requireLogin: true,
      requiredRoles: ["SuperSecretRole"],
    },
    {
      label: "Not Authorized",
      url: "/not-authorized",
      hidden: true,
      requireLogin: false,
      requiredRoles: [],
    },
  ];
  dropDownMenuItems: MenuItem[] = [
    { label: "Profile", url: "/profile", hidden: false, requireLogin: true, requiredRoles: [] },
  ];

  constructor() {
    this.ngAuthService.currentUser$.subscribe(user => {
      this.currentUser.set(user);
      this.isLoggedIn.set(this.ngAuthService.isLoggedIn());
    });

    // Wait for OIDC to process any token in the URL hash after redirect
    this.ngAuthService.ready.then(() => {
      this.isLoggedIn.set(this.ngAuthService.isLoggedIn());
      if (this.ngAuthService.isLoggedIn()) {
        this.ngAuthService.getLoggedInUser().subscribe();
        // Only process redirect if returning from OIDC (returnUrl in sessionStorage)
        if (sessionStorage.getItem('returnUrl')) {
          this.redirectHandler.handle({ defaultRoute: ['/home'] });
        }
      }

      // To auto-login on app load (redirect to OIDC if not authenticated),
      // replace the above block with:
      //
      // this.redirectHandler.handle({ defaultRoute: ['/home'] });
      // if (this.ngAuthService.isLoggedIn()) {
      //   this.ngAuthService.getLoggedInUser().subscribe();
      // }
      //
      // For apps that need a custom landing page resolved from an API:
      //
      // this.redirectHandler.handle({
      //   defaultRoute: ['/home'],
      //   resolveLandingPage: () => this.myService.getUserLandingPage(),
      // });
    });
  }

  login() {
    this.redirectHandler.saveReturnUrl();
    this.ngAuthService.login();
  }

  logout() {
    this.ngAuthService.logout().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}

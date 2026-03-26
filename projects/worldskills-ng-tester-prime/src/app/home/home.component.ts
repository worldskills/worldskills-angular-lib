import { Component } from "@angular/core";
import { HeaderComponent } from "worldskills-ng-ui";
import type { MenuItem } from "worldskills-ng-ui";
import { User } from "worldskills-ng-auth";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  imports: [HeaderComponent, TranslatePipe],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  appName = "Tester";
  isLoggedIn = false;
  showLoginAndLogoutButtons = true;
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
      requiredRoles: ["admin"],
      subMenuItems: [
        { label: "Users", url: "/admin/users", hidden: false, requireLogin: true, requiredRoles: ["admin"] },
        { label: "Logs", url: "/admin/logs", hidden: false, requireLogin: true, requiredRoles: ["admin"] },
      ],
    },
  ];
  dropDownMenuItems = [];
  currentUser: User = null;
  linkTitle = true;

  login() {
    this.isLoggedIn = true;
    this.currentUser = { first_name: "John", last_name: "Doe", roles: [{ name: "admin" }] } as User;
  }
  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
  }
}

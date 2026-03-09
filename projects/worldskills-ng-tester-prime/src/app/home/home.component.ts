import { Component } from "@angular/core";
import { HeaderComponent, WorldskillsNgUi } from "worldskills-ng-ui";

@Component({
  selector: "app-home",
  imports: [WorldskillsNgUi, HeaderComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  appName = "WorldSkills NG Tester Prime";
  isLoggedIn = false;
  showLoginAndLogoutButtons = true;
  menuItems = [
    {
      label: "Home",
      routerLink: "/home",
    },
    {
      label: "About",
      routerLink: "/about",
    },
  ];
  dropDownMenuItems = [];
  currentUser = null;
  linkTitle = true;
}

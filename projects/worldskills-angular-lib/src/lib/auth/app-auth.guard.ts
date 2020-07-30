import { Injectable } from '@angular/core';
import { CanActivate, Route, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { NgAuthService } from './ng-auth.service';
import { Observable } from 'rxjs';
import { AuthGuardAccess } from './models/auth-guard-access';
import { User } from './models/user';
import { GenericUtil } from '../common/util/generic.util';

@Injectable({
  providedIn: 'root'
})
export class AppAuthGuard implements CanActivate {
  constructor(protected auth: NgAuthService, protected wsi: WorldskillsAngularLibService, protected router: Route) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
      : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      const user = sessionStorage.getItem('user.current');

      // ensure the user session exists
      if (GenericUtil.isNullOrUndefined(user)) {
          return this.login(state);
      }

      const userModel = JSON.parse(user) as User;

      // ensure the user model is valid
      if (GenericUtil.isNullOrUndefined(userModel)) {
          return this.login(state);
      }

      const roles = route.data.roles as AuthGuardAccess[];

      if (GenericUtil.isNullOrUndefined(roles)) {
        return false;
      }

      const userRoles = userModel.roles
        .filter( x =>
          roles.findIndex(y => y.appCode === x.role_application.application_code && y.name === x.name) !== -1
        );

      return userRoles.length > 0;
  }

  login(state: RouterStateSnapshot): boolean {
    sessionStorage.setItem('returnUrl', state.url);
    this.auth.login();
    return false;
  }
}

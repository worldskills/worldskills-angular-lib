import { Injectable } from '@angular/core';
import { NgAuthService } from './ng-auth.service';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { Route, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, CanActivate } from '@angular/router';
import { User } from './models/user';
import { GenericUtil } from '../common/util/generic.util';
import { AuthGuardAccess } from './models/auth-guard-access';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(public auth: NgAuthService, public wsi: WorldskillsAngularLibService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('here');
      const user = this.getCurrentUser();

      if (user == null) {
        return this.login(state);
      }

      const roles = next.data.roles as AuthGuardAccess[];

      if (GenericUtil.isNullOrUndefined(roles)) {
        return false;
      }

      const userRoles = user.roles
        .filter( x =>
          roles.findIndex(y => y.appCode === x.role_application.application_code && y.name === x.name) !== -1
        );

      return userRoles.length > 0;
  }

  protected getCurrentUser(): User {
    const user = sessionStorage.getItem('user.current');

    if (GenericUtil.isNullOrUndefined(user)) {
       return null;
    }

    return JSON.parse(user) as User;
  }

  protected login(state: RouterStateSnapshot): boolean {
    sessionStorage.setItem('returnUrl', state.url);
    this.auth.login();
    return false;
  }
}

import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { User } from '../models/user';
import { GenericUtil } from '../util/generic.util';
import { AuthGuardAccess } from '../models/auth-guard-access';
import { Observable } from 'rxjs';
import { NgAuthService } from './ng-auth.service';
import { RETURN_URL_KEY, USER_CURRENT_KEY } from '../constants';
import { LIBRARY_CONFIG } from '../auth-lib-config';

@Injectable({
  providedIn: 'root'
})
export class GuardService  {
  private config = inject(LIBRARY_CONFIG);
  private ngAuthService = inject(NgAuthService);
  private router = inject(Router);
  constructor() {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
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

      const accessible = userRoles.length > 0;

      if (this.config && !accessible) {
        const error = {
          missingRole: !accessible,
          url: state.url
        };
        sessionStorage.setItem('error', JSON.stringify(error));
        this.router.navigate(this.config.app.notAuthorizedRoute, { replaceUrl: true });
      }

      return accessible;
  }

  protected getCurrentUser(): User {
    const user = sessionStorage.getItem(USER_CURRENT_KEY);

    if (GenericUtil.isNullOrUndefined(user)) {
       return null;
    }

    return JSON.parse(user) as User;
  }

  protected login(state: RouterStateSnapshot): boolean {
    sessionStorage.setItem(RETURN_URL_KEY, state.url);
    this.ngAuthService.login();
    return false;
  }
}

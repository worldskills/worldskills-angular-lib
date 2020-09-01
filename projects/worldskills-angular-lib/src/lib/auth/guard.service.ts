import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { User } from './models/user';
import { GenericUtil } from '../common/util/generic.util';
import { AuthGuardAccess } from './models/auth-guard-access';
import { Observable } from 'rxjs';
import { USER_CURRENT_KEY } from './auth.service';
import { RETURN_URL_KEY } from './handlers/redirect.handler';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { AppConfig } from '../config/app.config';
import { NgAuthService } from './ng-auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

    private config: AppConfig;

  constructor(
      private ngAuthService: NgAuthService,
      private wsi: WorldskillsAngularLibService,
      private router: Router,
  ) {
      this.wsi.appConfigSubject.subscribe(config => (this.config = config));
  }

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
          this.router.navigate(this.config.notAuthorizedRoute, {replaceUrl: true});
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

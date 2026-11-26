import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { GenericUtil } from '../util/generic.util';
import { AuthGuardAccess } from '../models/auth-guard-access';
import { NgAuthService } from './ng-auth.service';
import { RETURN_URL_KEY } from '../constants';
import { LIBRARY_CONFIG } from '../auth-lib-config';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  private config = inject(LIBRARY_CONFIG);
  private ngAuthService = inject(NgAuthService);
  private router = inject(Router);

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      return this.checkAccess(next.data['roles'] as AuthGuardAccess[], state);
  }

  /**
   * Starts the login flow when the user is not logged in.
   * When roles are given, the user needs at least one of them, otherwise
   * they are sent to `app.notAuthorizedRoute`. Shared by `canActivate` and `roleGuard`.
   */
  async checkAccess(roles: AuthGuardAccess[] | null | undefined, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      await this.ngAuthService.ready;

      if (!this.ngAuthService.isLoggedIn()) {
        return this.login(state);
      }

      let user = this.ngAuthService.currentUser;
      if (user == null) {
        user = await firstValueFrom(this.ngAuthService.getLoggedInUser(), { defaultValue: null });
      }

      if (user == null) {
        return this.login(state);
      }

      if (GenericUtil.isNullOrUndefined(roles)) {
        return true;
      }

      const accessible = user.roles.some(x =>
        roles.some(y => y.appCode === x.role_application.application_code && y.name === x.name)
      );

      if (!accessible && this.config?.app?.notAuthorizedRoute) {
        sessionStorage.setItem('error', JSON.stringify({ missingRole: true, url: state.url }));
        return this.router.createUrlTree(this.config.app.notAuthorizedRoute);
      }

      return accessible;
  }

  protected login(state: RouterStateSnapshot): boolean {
    sessionStorage.setItem(RETURN_URL_KEY, state.url);
    this.ngAuthService.login();
    return false;
  }
}

import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
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

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      await this.ngAuthService.ready;

      if (!this.ngAuthService.isLoggedIn()) {
        return this.login(state);
      }

      let user = this.ngAuthService.currentUser;
      if (user == null) {
        user = await this.ngAuthService.getLoggedInUser().toPromise();
      }

      if (user == null) {
        return this.login(state);
      }

      const roles = next.data.roles as AuthGuardAccess[];

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

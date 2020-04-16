import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { GenericUtil } from '../util/generic-util';
import { UserModel } from '../models/user.model';
import { ModuleConfigService } from '../config/module-config.service';

@Injectable({
  providedIn: 'root'
})
export class AppAuthGuard implements CanActivate {
  constructor(protected authService: AuthService, protected config: ModuleConfigService, protected router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
      : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      const user = sessionStorage.getItem('user.current');

      // ensure the user session exists
      if (GenericUtil.isNullOrUndefined(user)) {
          this.authService.login();
          return false;
      }

      const userModel = new UserModel(JSON.parse(user));

      // ensure the user model is valid
      if (GenericUtil.isNullOrUndefined(userModel)) {
          this.authService.login();
          return false;
      }

      const roles = route.data.roles as Array<string>;

      // ensure user has the correct role
      if (userModel.roles
        .findIndex(x => roles.includes(x.name) && x.roleApplication.applicationCode === this.config.serviceConfig.appCode) === -1) {
          this.router.navigate(this.config.appConfig.notAuthorizedRoute);
          return false;
      }

      return true;
  }
}

import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

export class WSAuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  protected roles: string[];

  protected redirectRoute: string[];

  constructor(
    protected authService: AuthService,
    protected router: Router,
    protected userService: UserService
) { }

  protected canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      if (this.userService.authenticate(currentUser, this.roles)) {
        return true;
      }
    }

    // at this point we know we are getting an error

    this.handleError(state, currentUser);
    return this.kick(state);
  }

  // details about why we are kicking the current request
  protected handleError(state: RouterStateSnapshot, currentUser: UserModel) {
    if (currentUser) {
      const userDetail = `${currentUser.id} (${currentUser.firstName} ${currentUser.lastName})`;
      this.error(
        `User: ${userDetail}) does not have the required role(s) [${this.roles.join(', ')}] to access ${state.url}`
      );
    } else {
      this.error('Kicking invalid user session out');
    }
  }

  // overidable kick method: should be false unless if we need to do something special
  protected kick(state: RouterStateSnapshot): boolean {
    // kick back to the home screen when not logged in
    this.router.navigate(this.redirectRoute, { queryParams: { returnUrl: state.url } });
    // ensure session is cleared
    this.authService.logout();
    // TODO: kick off an alert
    return false;
  }

  protected error(message: string) {
    console.log(console.error());
  }
}

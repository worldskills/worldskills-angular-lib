import { Router } from '@angular/router';
import { User } from '../models/user';
import { NgAuthService } from '../ng-auth.service';

export const RETURN_URL_KEY = 'returnUrl';
export class RedirectHandler {
  constructor(protected ngAuthService: NgAuthService, protected router: Router) {
  }

  public redirectOrReturn(redirectRoute: string[], failure: (error: any) => void): void {
    if (!this.ngAuthService.isLoggedIn()) {
      this.ngAuthService.login();
    } else {
      if (this.hasReturnUrl()) {
        this.handleReturnUrl(error => failure(error));
      } else {
        this.ngAuthService.getLoggedInUser(false).subscribe(
          next => {
            sessionStorage.removeItem(RETURN_URL_KEY);
            this.redirectUserToRoute(next, redirectRoute);
          },
          error => {
            this.ngAuthService.clearSession();
            failure(error);
          }
        );
      }
    }
  }

  public hasReturnUrl(): boolean {
    const returnUrl = sessionStorage.getItem(RETURN_URL_KEY);
    return returnUrl !== null && returnUrl !== undefined && returnUrl !== 'undefined';
  }

  public handleReturnUrl(failure: (error: any) => void): void {
    const returnUrl = sessionStorage.getItem(RETURN_URL_KEY);
    sessionStorage.removeItem(RETURN_URL_KEY);
    this.ngAuthService.getLoggedInUser(false).subscribe(
      next => this.redirectUserToUrl(next, returnUrl),
      error => failure(error)
    );
  }

  // override this method to catch a user being redirected to a specific returnUrl (when a user pastes a link in the browser)
  public redirectUserToUrl(user: User, returnUrl: string): void {
    this.router.navigateByUrl(returnUrl);
  }

   // override this method to catch a user being redirected to the homepage route. useful if you need to load the homepage from the DB
   public redirectUserToRoute(user: User, route: string[]): void {
    this.router.navigate(route);
  }
}

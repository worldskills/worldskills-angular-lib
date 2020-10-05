import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from '../models/user';
import { NgAuthService } from '../ng-auth.service';
import { Observable } from 'rxjs';
import { RouterUtil } from '../../common/util/router.util';
import { Injectable } from '@angular/core';
import { RETURN_URL_KEY } from '../constants';

export interface RedirectOptions {
  url?: any;
  onlyIfExact?: ActivatedRoute | ActivatedRouteSnapshot;
  showChildRoles?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RedirectHandler {
  constructor(protected ngAuthService: NgAuthService, protected router: Router) {
  }

  public redirectOrReturn(redirectOptions: RedirectOptions): Observable<void> {
    const observable = new Observable<void>(subscriber => {
      if (!this.ngAuthService.isLoggedIn()) {
        this.ngAuthService.login();
        subscriber.next();
        subscriber.complete();
      } else {
        if (this.hasReturnUrl()) {
          this.handleReturnUrl(!!redirectOptions.showChildRoles).subscribe(
              () => subscriber.next(),
              error => subscriber.error(error),
              () => subscriber.complete()
          );
        } else {
          this.ngAuthService.getLoggedInUser(!!redirectOptions.showChildRoles).subscribe(
              next => {
                sessionStorage.removeItem(RETURN_URL_KEY);
                if (redirectOptions.url) {
                  if (!redirectOptions.onlyIfExact ||
                      RouterUtil.getResolvedUrl(
                          redirectOptions.onlyIfExact instanceof ActivatedRoute
                              ? redirectOptions.onlyIfExact.snapshot
                              : redirectOptions.onlyIfExact
                      ) === this.router.routerState.snapshot.url) {
                    this.redirectUserToRoute(next, redirectOptions.url);
                  }
                }
                subscriber.next();
              },
              error => {
                this.ngAuthService.clearSession();
                subscriber.error(error);
              },
              () => subscriber.complete()
          );
        }
      }
    });
    return observable;
  }

  public hasReturnUrl(): boolean {
    const returnUrl = sessionStorage.getItem(RETURN_URL_KEY);
    return returnUrl !== null && returnUrl !== undefined && returnUrl !== 'undefined';
  }

  public handleReturnUrl(showChildRoles = false): Observable<void> {
    const observable = new Observable<void>(subscriber => {
      const returnUrl = sessionStorage.getItem(RETURN_URL_KEY);
      sessionStorage.removeItem(RETURN_URL_KEY);
      this.ngAuthService.getLoggedInUser(showChildRoles).subscribe(
          next => {
            this.redirectUserToUrl(next, returnUrl);
            subscriber.next();
          },
          error => subscriber.error(error),
          () => subscriber.complete()
      );
    });
    return observable;
  }

  // override this method to catch a user being redirected to a specific returnUrl (when a user pastes a link in the browser)
  public redirectUserToUrl(user: User, returnUrl: string): void {
    this.router.navigateByUrl(returnUrl);
  }

   // override this method to catch a user being redirected to the homepage route. useful if you need to load the homepage from the DB
   public redirectUserToRoute(user: User, route: any): void {
    this.router.navigate(route);
  }
}

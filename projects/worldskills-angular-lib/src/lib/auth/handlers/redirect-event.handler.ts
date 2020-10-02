import { Router } from '@angular/router';
import { NgAuthService } from '../ng-auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

export const RETURN_URL_KEY = 'returnUrl';

/*
    A lighter verssion of the URL redirect that places more power in the calling application
*/
@Injectable({
  providedIn: 'root'
})
export class RedirectEventHandler {
  constructor(protected ngAuthService: NgAuthService, protected router: Router) {
  }

  public getReturnUrl(): string {
    return sessionStorage.getItem(RETURN_URL_KEY);
  }

  public getUser(showRoles: boolean): Observable<User> {
      return this.ngAuthService.getLoggedInUser(showRoles);
  }

  public redirectUserToUrl(returnUrl: string): void {
    this.router.navigateByUrl(returnUrl);
  }

  public listen(): Observable<string> {
    const observable = new Observable<string>(subscriber => {
      if (!this.ngAuthService.isLoggedIn()) {
        this.ngAuthService.login();
        subscriber.next('logging-in');
        subscriber.complete();
      } else {
        const returnUrl = this.getReturnUrl();
        if (returnUrl !== null && returnUrl !== undefined && returnUrl !== 'undefined') {
            sessionStorage.removeItem(RETURN_URL_KEY);
            subscriber.next(returnUrl);
            subscriber.complete();
        } else {
            subscriber.next(null);
            subscriber.complete();
        }
      }
    });
    return observable;
  }
}

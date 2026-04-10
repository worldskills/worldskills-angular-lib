import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, isObservable, Observable } from 'rxjs';
import { NgAuthService } from '../services/ng-auth.service';
import { RETURN_URL_KEY } from '../constants';

export interface LoginRedirectOptions {
  /**
   * Fallback route used when no return URL is stored in sessionStorage and
   * resolveLandingPage is not provided (or resolves to null).
   * Passed to router.navigate().
   */
  defaultRoute?: any[];

  /**
   * Optional async callback invoked when no return URL is stored in sessionStorage.
   * Use this to query an API for a user-specific landing page before navigating.
   *
   * Return:
   * - A URL string  → navigated with router.navigateByUrl()
   * - A route array → navigated with router.navigate()
   * - null / undefined → falls back to defaultRoute if provided
   *
   * Accepts either an Observable or a Promise.
   */
  resolveLandingPage?: () => Observable<string | any[] | null> | Promise<string | any[] | null>;
}

@Injectable({ providedIn: 'root' })
export class RedirectHandler {

  private ngAuthService = inject(NgAuthService);
  private router = inject(Router);

  /**
   * Call this once after the OIDC flow completes — typically in AppComponent.ngOnInit.
   *
   * Behaviour:
   * 1. Not logged in            → initiates OIDC login.
   * 2. Logged in + returnUrl    → clears sessionStorage entry and navigates to the saved URL.
   * 3. Logged in + no returnUrl → calls resolveLandingPage (if provided) and navigates to its result,
   *                               or falls back to defaultRoute.
   */
  handle(options: LoginRedirectOptions = {}): void {
    if (!this.ngAuthService.isLoggedIn()) {
      this.ngAuthService.login();
      return;
    }

    const returnUrl = sessionStorage.getItem(RETURN_URL_KEY);
    if (returnUrl && returnUrl !== 'undefined') {
      sessionStorage.removeItem(RETURN_URL_KEY);
      this.router.navigateByUrl(returnUrl);
      return;
    }

    if (options.resolveLandingPage) {
      const result = options.resolveLandingPage();
      const obs: Observable<string | any[] | null> = isObservable(result) ? result : from(result);
      obs.subscribe(destination => this.navigateTo(destination, options.defaultRoute));
      return;
    }

    if (options.defaultRoute) {
      this.router.navigate(options.defaultRoute);
    }
  }

  /**
   * Stores the current URL (or a given URL) in sessionStorage so it can be
   * retrieved after the OIDC redirect completes.
   *
   * Call this before triggering login — typically inside an auth guard when
   * the user tries to access a protected route while unauthenticated.
   */
  saveReturnUrl(url: string = this.router.url): void {
    sessionStorage.setItem(RETURN_URL_KEY, url);
  }

  private navigateTo(destination: string | any[] | null | undefined, fallback?: any[]): void {
    if (destination) {
      typeof destination === 'string'
        ? this.router.navigateByUrl(destination)
        : this.router.navigate(destination);
    } else if (fallback) {
      this.router.navigate(fallback);
    }
  }
}

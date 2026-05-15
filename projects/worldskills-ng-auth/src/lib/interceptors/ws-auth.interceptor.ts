import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LIBRARY_CONFIG } from '../auth-lib-config';

/**
 * Redirects to the OIDC login flow on any 401 response.
 *
 * Only active when `autoRedirectOn401: true` is set in `provideWsNgAuth()`.
 *
 * Register in your app alongside the config flag:
 * ```ts
 * provideWsNgAuth({ autoRedirectOn401: true, ... }),
 * provideHttpClient(withInterceptors([wsAuthInterceptor])),
 * ```
 */
export const wsAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const config = inject(LIBRARY_CONFIG);
  const oauthService = inject(OAuthService);

  return next(req).pipe(
    catchError((err) => {
      if (err instanceof HttpErrorResponse && err.status === 401 && config.autoRedirectOn401 === true) {
        oauthService.initCodeFlow();
      }
      return throwError(() => err);
    })
  );
};

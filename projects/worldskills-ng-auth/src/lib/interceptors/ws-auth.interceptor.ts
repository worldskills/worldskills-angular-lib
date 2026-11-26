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
 * provideWsNgAuth({
 *   autoRedirectOn401: true,
 *   redirectOn401ExcludePatterns: ['/api/public', /\/health$/],
 * }),
 * provideHttpClient(withInterceptors([wsAuthInterceptor])),
 * ```
 */
export const wsAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const config = inject(LIBRARY_CONFIG);
  const oauthService = inject(OAuthService);

  const excludePatterns = config.redirectOn401ExcludePatterns ?? [];

  return next(req).pipe(
    catchError((err) => {
      const isExcluded = excludePatterns.some(p => req.url.match(p));
      if (err instanceof HttpErrorResponse && err.status === 401 && config.autoRedirectOn401 === true && !isExcluded) {
        oauthService.initCodeFlow();
      }
      return throwError(() => err);
    })
  );
};

import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { UI_LIBRARY_CONFIG } from '../ui-lib-config';
import { WsHttpEncoder } from './ws-http.encoder';
import { tap } from 'rxjs/operators';

/**
 * Functional HTTP interceptor that:
 * - Appends `?l=<lang>` and `Accept-Language` header when `http.includeLanguageParam` is enabled.
 * - Re-encodes query params with `encodeURIComponent` for URLs matching `http.encoderUriPatterns`.
 * - Clears the session on 401 responses from the configured API endpoint.
 *
 * Register in your app:
 * ```ts
 * provideHttpClient(withInterceptors([wsHttpInterceptor]))
 * ```
 */
export const wsHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const libConfig = inject(UI_LIBRARY_CONFIG);
  const config = libConfig.http;

  if (!config) return next(req);

  const encoderPatterns = config.encoderUriPatterns ?? [];

  if (config.includeLanguageParam) {
    const lang = sessionStorage.getItem('lang') ?? 'en';
    req = req.clone({
      params: req.params.set('l', lang),
      headers: req.headers.set('Accept-Language', lang),
    });
  }

  if (config.includeAuthToken) {
    const excludePatterns = config.excludeAuthTokenPatterns ?? [];
    const isExcluded = excludePatterns.some(pattern => req.url.match(pattern));
    if (!isExcluded) {
      const token = sessionStorage.getItem('access_token');
      if (token) {
        req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
      }
    }
  }

  if (encoderPatterns.some(pattern => req.url.match(pattern))) {
    const params = new HttpParams({ encoder: new WsHttpEncoder(), fromString: req.params.toString() });
    req = req.clone({ params });
  }

  const apiEndpoint = libConfig.api?.apiEndpoint;

  return next(req).pipe(
    tap({
      error: (err: HttpErrorResponse) => {
        if (err.status === 401 && apiEndpoint && req.url.startsWith(apiEndpoint)) {
          sessionStorage.removeItem('access_token');
          sessionStorage.removeItem('access_token_stored_at');
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('nonce');
          sessionStorage.removeItem('user.current');
          window.dispatchEvent(new CustomEvent('ws-session-expired'));
        }
      }
    })
  );
};

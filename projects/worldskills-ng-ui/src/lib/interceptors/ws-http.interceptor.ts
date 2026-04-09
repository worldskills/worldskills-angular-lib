import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { UI_LIBRARY_CONFIG } from '../ui-lib-config';
import { WsHttpEncoder } from './ws-http.encoder';

/**
 * Functional HTTP interceptor that:
 * - Appends `?l=<lang>` and `Accept-Language` header when `http.includeLanguageParam` is enabled.
 * - Re-encodes query params with `encodeURIComponent` for URLs matching `http.encoderUriPatterns`.
 *
 * Register in your app:
 * ```ts
 * provideHttpClient(withInterceptors([wsHttpInterceptor]))
 * ```
 */
export const wsHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const config = inject(UI_LIBRARY_CONFIG).http;

  if (!config) return next(req);

  const encoderPatterns = config.encoderUriPatterns ?? [];
  const includeLanguageParam = config.includeLanguageParam ?? false;

  if (includeLanguageParam) {
    const lang = sessionStorage.getItem('lang') ?? 'en';
    req = req.clone({
      params: req.params.set('l', lang),
      headers: req.headers.set('Accept-Language', lang),
    });
  }

  if (encoderPatterns.some(pattern => req.url.match(pattern))) {
    const params = new HttpParams({ encoder: new WsHttpEncoder(), fromString: req.params.toString() });
    req = req.clone({ params });
  }

  return next(req);
};

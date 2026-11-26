import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { WS_SENTRY_CONFIG } from './sentry-config';
import { WsSentryService } from './sentry.service';
import { isReportableStatus } from './api-error-event';

/**
 * Reports unexpected API failures (5xx and network errors) to Sentry.
 * 4xx responses (401, 403, 404, validation) are expected and not reported.
 * Does nothing unless `provideWsSentry` is configured and enabled.
 *
 * ```ts
 * provideHttpClient(withInterceptors([wsHttpInterceptor, wsSentryHttpInterceptor]))
 * ```
 */
export const wsSentryHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const config = inject(WS_SENTRY_CONFIG, { optional: true });
  if (!config || config.enabled === false) {
    return next(req);
  }

  const sentry = inject(WsSentryService);
  const ignored = (config.ignoreUrlPatterns ?? []).some(pattern => req.url.match(pattern));

  return next(req).pipe(
    tap({
      error: (error: unknown) => {
        if (!ignored && error instanceof HttpErrorResponse && isReportableStatus(error.status)) {
          sentry.captureApiError(error, { method: req.method });
        }
      },
    }),
  );
};

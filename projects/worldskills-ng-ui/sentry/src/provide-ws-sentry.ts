import { EnvironmentProviders, ErrorHandler, inject, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { NgAuthService } from '@worldskills/ng-auth';
import { WS_SENTRY_CONFIG, WsSentryConfig } from './sentry-config';
import { WsSentryService } from './sentry.service';
import { stripQuery } from './api-error-event';

/**
 * Sets up Sentry error tracking:
 * - initialises the SDK (no personal data, no performance tracing)
 * - reports unhandled errors through Angular's `ErrorHandler`
 * - tags events with the logged-in WorldSkills user id
 * - strips query strings from breadcrumbs
 *
 * With `enabled: false` nothing is initialised and Angular's default `ErrorHandler` is kept.
 * Add `wsSentryHttpInterceptor` to also report failed API calls.
 *
 * ```ts
 * provideWsSentry({ dsn: environment.sentryDsn, environment: 'staging', enabled: environment.sentryEnabled })
 * ```
 */
export function provideWsSentry(config: WsSentryConfig): EnvironmentProviders {
  if (config.enabled === false) {
    return makeEnvironmentProviders([{ provide: WS_SENTRY_CONFIG, useValue: config }]);
  }

  return makeEnvironmentProviders([
    { provide: WS_SENTRY_CONFIG, useValue: config },
    { provide: ErrorHandler, useValue: Sentry.createErrorHandler({ showDialog: false }) },
    provideAppInitializer(() => {
      Sentry.init({
        dsn: config.dsn,
        environment: config.environment,
        release: config.release,
        debug: config.debug ?? false,
        sendDefaultPii: false,
        beforeBreadcrumb: breadcrumb => {
          const data = breadcrumb.data;
          if (data) {
            for (const key of ['url', 'from', 'to']) {
              if (typeof data[key] === 'string') {
                data[key] = stripQuery(data[key]);
              }
            }
          }
          return breadcrumb;
        },
      });

      const sentry = inject(WsSentryService);
      inject(NgAuthService).currentUser$.subscribe(user => sentry.setUserId(user?.id));
    }),
  ]);
}

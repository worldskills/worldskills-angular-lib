import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import * as Sentry from '@sentry/angular';
import { ApiErrorOptions, buildApiErrorEvent } from './api-error-event';

/**
 * Thin wrapper around the Sentry SDK so apps (and tests) don't call it directly.
 * Calls are no-ops when Sentry has not been initialised by `provideWsSentry`.
 */
@Injectable({ providedIn: 'root' })
export class WsSentryService {

  /** Identifies the user by WorldSkills user id only — no names or email addresses. */
  setUserId(id: number | null | undefined): void {
    Sentry.setUser(id == null ? null : { id: String(id) });
  }

  /** Reports a failed API call. Used by `wsSentryHttpInterceptor`; call it yourself for errors you handle. */
  captureApiError(error: HttpErrorResponse, options: ApiErrorOptions = {}): void {
    const event = buildApiErrorEvent(error, options);
    Sentry.withScope(scope => {
      scope.setFingerprint(event.fingerprint);
      scope.setTags(event.tags);
      scope.setContext('api', event.context);
      if (options.extra) {
        scope.setExtras(options.extra);
      }
      Sentry.captureMessage(event.message, 'error');
    });
  }

  /** Reports an error the app caught itself. */
  captureException(error: unknown, extra?: Record<string, unknown>): void {
    Sentry.withScope(scope => {
      if (extra) {
        scope.setExtras(extra);
      }
      Sentry.captureException(error);
    });
  }
}

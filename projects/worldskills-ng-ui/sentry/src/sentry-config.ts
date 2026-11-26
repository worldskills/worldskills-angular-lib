import { InjectionToken } from '@angular/core';

export interface WsSentryConfig {
  /** Project DSN from Sentry. */
  dsn: string;
  /** e.g. `production`, `staging`. */
  environment: string;
  /** Build/version identifier, shown on events. */
  release?: string;
  /** Set to false to disable Sentry (e.g. locally). Defaults to true. */
  enabled?: boolean;
  /** Logs Sentry SDK activity to the console. */
  debug?: boolean;
  /** API URLs that are never reported by `wsSentryHttpInterceptor` (e.g. a ping endpoint). */
  ignoreUrlPatterns?: (string | RegExp)[];
}

export const WS_SENTRY_CONFIG = new InjectionToken<WsSentryConfig>('WorldSkills Sentry configuration');

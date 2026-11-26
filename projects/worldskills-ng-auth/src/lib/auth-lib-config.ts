// config.token.ts
import { InjectionToken } from '@angular/core';
import { ServiceConfig } from './models/service.config';
import { AppConfig } from './models/app.config';
import { AuthConfig } from 'angular-oauth2-oidc';

export interface AuthLibConfig {
  enableLogging?: boolean;
  auth?: AuthConfig;
  api?: ServiceConfig;
  app?: AppConfig;
  /** Trigger `OAuthService.initCodeFlow()` on any 401 response. Opt-in; defaults to false. */
  autoRedirectOn401?: boolean;
  /** URL patterns exempt from the 401 redirect even when `autoRedirectOn401` is true. */
  redirectOn401ExcludePatterns?: (string | RegExp)[];
}

export const LIBRARY_CONFIG = new InjectionToken<AuthLibConfig>(
  'Auth Library configuration token',
  {
    // Optional: default fallback (usually not used, but nice for dev)
    providedIn: 'root',
    factory: () => ({ enableLogging: false })  // minimal safe default
  }
);
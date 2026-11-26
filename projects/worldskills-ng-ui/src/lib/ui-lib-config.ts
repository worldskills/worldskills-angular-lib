import { InjectionToken } from '@angular/core';

export interface AuthConfig {
  [key: string]: unknown;
}

export interface ServiceConfig {
  appCode: number[];
  apiEndpoint: string;
}

export interface AppConfig {
  notAuthorizedRoute: string[];
  supportEmailAddress?: string;
}

export interface HttpInterceptorConfig {
  /** Append ?l=<lang> query param and Accept-Language header to all requests. */
  includeLanguageParam?: boolean;
  /** URL patterns (regex strings) whose query params should be re-encoded with encodeURIComponent. */
  encoderUriPatterns?: string[];
  /**
   * Append Authorization: Bearer <token> header to all requests.
   * Reads the token from sessionStorage key 'access_token' (set by angular-oauth2-oidc).
   */
  includeAuthToken?: boolean;
  /**
   * URL patterns (regex strings) that should NOT receive the Authorization header,
   * even when includeAuthToken is true. Useful for third-party or public endpoints.
   */
  excludeAuthTokenPatterns?: string[];
}

export interface UiLibConfig {
  enableLogging?: boolean;
  auth?: AuthConfig;
  api?: ServiceConfig;
  app?: AppConfig;
  http?: HttpInterceptorConfig;
}

export const UI_LIBRARY_CONFIG = new InjectionToken<UiLibConfig>(
  'UI Library configuration token',
  {
    providedIn: 'root',
    factory: () => ({ enableLogging: false }),
  }
);

// config.token.ts
import { InjectionToken } from '@angular/core';
import { ServiceConfig } from './models/service.config';
import { AppConfig } from './models/app.config';
import { AuthConfig } from 'angular-oauth2-oidc';

export interface AuthLibConfig {
  enableLogging?: boolean;
  auth?: AuthConfig;
  api?: ServiceConfig
  app?: AppConfig;
}

export const LIBRARY_CONFIG = new InjectionToken<AuthLibConfig>(
  'Auth Library configuration token',
  {
    // Optional: default fallback (usually not used, but nice for dev)
    providedIn: 'root',
    factory: () => ({ enableLogging: false })  // minimal safe default
  }
);
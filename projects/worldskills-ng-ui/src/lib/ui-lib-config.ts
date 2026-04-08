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

export interface UiLibConfig {
  enableLogging?: boolean;
  auth?: AuthConfig;
  api?: ServiceConfig;
  app?: AppConfig;
}

export const UI_LIBRARY_CONFIG = new InjectionToken<UiLibConfig>(
  'UI Library configuration token',
  {
    providedIn: 'root',
    factory: () => ({ enableLogging: false }),
  }
);

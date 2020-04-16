import { ServiceConfig } from './service-config';
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { WSHttpConfig } from './ws-http-config';
import { AuthConfig } from 'angular-oauth2-oidc';
import { AppConfig } from './app-config';

export const ServiceConfigToken = new InjectionToken<ServiceConfig>('ServiceConfig');
export const AuthConfigToken = new InjectionToken<AuthConfig>('AuthConfig');
export const WSHttpConfigToken = new InjectionToken<WSHttpConfig>('WSHttpConfig');
export const AppConfigToken = new InjectionToken<AppConfig>('AppConfig');

@Injectable()
export class ModuleConfigService {

  constructor(
    @Inject(ServiceConfigToken) public serviceConfig: ServiceConfig,
    @Inject(AuthConfigToken) public authConfig: AuthConfig,
    @Inject(WSHttpConfigToken) public wsHttpConfigConfig: WSHttpConfig,
    @Inject(AppConfigToken) public appConfig: AppConfig
  ) {
  }
}

import { ServiceConfig } from './service-config';
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { OAuthConfig } from './oauth-config';

export const ServiceConfigToken = new InjectionToken<ServiceConfig>('ServiceConfig');
export const OAuthConfigToken = new InjectionToken<OAuthConfig>('OAuthConfig');


@Injectable()
export class ModuleConfigService {

  constructor(
    @Inject(ServiceConfigToken) public serviceConfig: ServiceConfig,
    @Inject(OAuthConfigToken) public oAuthConfig: OAuthConfig
  ) {
  }
}

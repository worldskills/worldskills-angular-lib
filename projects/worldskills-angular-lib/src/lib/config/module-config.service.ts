import { ServiceConfig } from './service-config';
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { OAuthConfig } from './oauth-config';
import { WSHttpConfig } from './ws-http-config';

export const ServiceConfigToken = new InjectionToken<ServiceConfig>('ServiceConfig');
export const OAuthConfigToken = new InjectionToken<OAuthConfig>('OAuthConfig');
export const WSHttpConfigToken = new InjectionToken<WSHttpConfig>('WSHttpConfig');


@Injectable()
export class ModuleConfigService {

  constructor(
    @Inject(ServiceConfigToken) public serviceConfig: ServiceConfig,
    @Inject(OAuthConfigToken) public oAuthConfig: OAuthConfig,
    @Inject(WSHttpConfigToken) public wsHttpConfigConfig: WSHttpConfig
  ) {
  }
}

import { ServiceConfig } from './service-config';
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { OAuthConfig } from './oauth-config';
import { EncoderConfig } from './encoder-config';

export const ServiceConfigToken = new InjectionToken<ServiceConfig>('ServiceConfig');
export const OAuthConfigToken = new InjectionToken<OAuthConfig>('OAuthConfig');
export const EncoderConfigToken = new InjectionToken<EncoderConfig>('EncoderConfig');


@Injectable()
export class ModuleConfigService {

  constructor(
    @Inject(ServiceConfigToken) public serviceConfig: ServiceConfig,
    @Inject(OAuthConfigToken) public oAuthConfig: OAuthConfig,
    @Inject(EncoderConfigToken) public encoderConfig: EncoderConfig
  ) {
  }
}

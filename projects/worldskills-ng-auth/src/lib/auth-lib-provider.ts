// config.provider.ts
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { AuthLibConfig,LIBRARY_CONFIG } from './auth-lib-config';

export function provideWsNgAuth(config: AuthLibConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: LIBRARY_CONFIG,
      useValue: config,           // static value
      // OR useFactory if you need runtime computation / env injection:
      // useFactory: () => ({ ...config, apiBaseUrl: inject(ENV).apiUrl }),
      // deps: [ENV]   // if needed
    }
  ]);
}
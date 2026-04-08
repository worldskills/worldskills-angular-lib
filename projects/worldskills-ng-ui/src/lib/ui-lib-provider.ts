import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { UI_LIBRARY_CONFIG, UiLibConfig } from './ui-lib-config';

export function provideWsNgUi(config: UiLibConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: UI_LIBRARY_CONFIG,
      useValue: config,
    },
  ]);
}

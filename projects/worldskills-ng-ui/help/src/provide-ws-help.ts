import { EnvironmentProviders, isDevMode, makeEnvironmentProviders } from '@angular/core';
import { WS_HELP_CONFIG, WsHelpConfig } from './help-config';

/**
 * Page help: register the app's help pages, add `<ws-ng-ui-help-overlay />` to the app shell,
 * `data: { help: '<page>' }` to the page's route, and `wsHelp="<point>"` to each section.
 *
 * ```ts
 * providers: [provideWsHelp({ pages: HELP_PAGES })]
 * ```
 */
export function provideWsHelp(config: WsHelpConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: WS_HELP_CONFIG,
      useValue: {
        pages: config.pages,
        textPrefix: config.textPrefix ?? 'help',
        warnings: config.warnings ?? isDevMode(),
      },
    },
  ]);
}

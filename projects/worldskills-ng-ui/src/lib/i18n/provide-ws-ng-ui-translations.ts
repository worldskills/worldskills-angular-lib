import { APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { wsNgUiTranslations } from './translations';

export function provideWsNgUiTranslations(): EnvironmentProviders {
    return makeEnvironmentProviders([{
        provide: APP_INITIALIZER,
        useFactory: (translate: TranslateService) => () => {
            Object.entries(wsNgUiTranslations).forEach(([lang, obj]) => {
                translate.setTranslation(lang, obj as any, true);
            });
        },
        deps: [TranslateService],
        multi: true,
    }]);
}

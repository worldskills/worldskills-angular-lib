import { APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangUtil } from '../common/util/lang.util';
import { wsNgUiTranslations } from './translations';

export function provideWsNgUiTranslations(): EnvironmentProviders {
    return makeEnvironmentProviders([{
        provide: APP_INITIALIZER,
        useFactory: (translate: TranslateService) => () => {
            Object.entries(wsNgUiTranslations).forEach(([lang, obj]) => {
                translate.setTranslation(lang, obj as any, true);
            });
            // Restore the language picked in the footer before a refresh.
            const stored = sessionStorage.getItem('lang');
            if (stored && LangUtil.getDefaultLanguages().some(l => l.code === stored)) {
                translate.use(stored);
            }
        },
        deps: [TranslateService],
        multi: true,
    }]);
}

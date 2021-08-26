import { Language } from '../../i18n/language';
export class LangUtil {
    static getDefaultLanguages(): Language[] {
        return [
            {code: 'ar_AE', name: 'Arabic'},
            {code: 'pt_BR', name: 'Brazilian'},
            {code: 'zh_CN', name: 'Chinese'},
            {code: 'en', name: 'English'},
            {code: 'fr', name: 'French'},
            {code: 'de', name: 'German'},
            {code: 'ru_RU', name: 'Russian'},
            {code: 'tt_RU', name: 'Tatar'},
          ];
    }

    static getDefaultLanguage(): Language {
        return {code: 'en', name: 'English'};
    }
}

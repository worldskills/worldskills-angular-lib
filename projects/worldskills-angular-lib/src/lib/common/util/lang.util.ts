import { Language } from '../../i18n/language';
export class LangUtil {
    static getDefaultLanguages(): Language[] {
        return [
            {code: 'ar_AE', name: 'Arabic', alt: []},
            {code: 'pt_BR', name: 'Brazilian', alt: []},
            {code: 'zh_CN', name: 'Chinese', alt: [ 'zh' ]},
            {code: 'en', name: 'English', alt: []},
            {code: 'de', name: 'German', alt: []},
            {code: 'fr', name: 'French', alt: []},
            {code: 'fi', name: 'Finnish', alt: []},
            {code: 'de', name: 'German', alt: []},
            {code: 'ru_RU', name: 'Russian', alt: []},
            {code: 'tt_RU', name: 'Tatar', alt: []},
          ];
    }

    static getDefaultLanguage(): Language {
        return {code: 'en', name: 'English', alt: []};
    }
}

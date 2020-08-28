import { I18nText } from '../models/i18n-text';

export class I18nUtil {
    static instanceOfI18nModel(object: any): object is I18nText {
        return typeof object === 'object' && object.hasOwnProperty('lang_code') && object.hasOwnProperty('text');
    }

    static setObjectI18n(object: any, langCode: string): any {
        if (typeof object === 'object') {
            if (Array.isArray(object)) {
                for (let i = 0; i < object.length; i++) {
                    if (I18nUtil.instanceOfI18nModel(object[i])) {
                        object[i].lang_code = langCode;
                    } else {
                        object[i] = I18nUtil.setObjectI18n(object[i], langCode);
                    }
                }
            } else {
                for (const key in object) {
                    if (object.hasOwnProperty(key)) {
                        if (I18nUtil.instanceOfI18nModel(object[key])) {
                            object[key].lang_code = langCode;
                        } else {
                            object[key] = I18nUtil.setObjectI18n(object[key], langCode);
                        }
                    }
                }
            }
        }
        return object;
    }

}

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangUtil } from '../common/util/lang.util';
import { GenericUtil } from '../common/util/generic.util';
import { Language } from './language';
import { ar_AE } from './ar_AE.json';
import { en } from './en.json';
import { fr } from './fr.json';
import { pt_BR } from './pt_BR.json';
import { ru_RU } from './ru_RU.json';
import { tt_RU } from './tt_RU.json';
import { zh_CN } from './zh_CN.json';
import { fi } from './fi.json';
import { Subject } from 'rxjs';
import { User } from '../auth/models/user';
import { de } from './de.json';

@Injectable({
  providedIn: 'root'
})
export class WsiTranslateService {
  public availableLanguages = { ar_AE, en, de, fr, fi, pt_BR, ru_RU, tt_RU, zh_CN };

  // a fallback change event as lazy loaded events may not produce the default on-lang-changed
  // will be fixed inn future angular versions
  public onLangChanged: Subject<Language>;

  constructor(public translator: TranslateService) {
    this.onLangChanged = new Subject();
    const lang = this.getSelectedLanguage();
    this.translator.setDefaultLang(LangUtil.getDefaultLanguage().code);
    this.translator.use(lang.code).subscribe(
      next => {},
      error => {
        console.warn(`Failed to load lang '${lang.code}', default language will be used`);
      },
      () => {
        this.init(lang.code);
      }
    );

    // update language on changes
    this.translator.onLangChange.subscribe(newCode => {
      sessionStorage.setItem('lang', newCode.lang);
    });
  }

  /*
    Initialize a specific lang code
  */
  public init(code: string): any {
    const current = this.getCurrentOrDefaultCode();

    sessionStorage.setItem('lang', code);
    let lang = this.availableLanguages[code];
    if (GenericUtil.isNullOrUndefined(lang)) {
      lang = en;
    }
    if (code !== 'en') {
      lang = this.mergeMissingKeys(lang, en);
    }

    this.translator.setTranslation(code, lang, true);

    if (current !== code)
    {
      this.onLangChanged.next(this.getSelectedLanguage());
    }
  }

  public mergeMissingKeys(obj, context): any {
    if (GenericUtil.isNullOrUndefined(obj)) {
      return obj;
    }
    Object.keys(context).forEach(key => {
      const actual = Object.keys(obj).find(x => x === key);
      if (!actual) {
        // replace missing keys or objects
        obj[key] = context[key];
      } else {
        // loop through nested objects that were not replace
        if (typeof actual === 'object') {
          obj[key] = this.mergeMissingKeys(obj[key], context[key]);
        }
      }
    });

    return obj;
  }

  /*
    Set user preffered language from a user object
  */
  public setUserLanguage(user: User): void {
    if (user && user.preferred_lang) {
      this.init(user.preferred_lang);
    }
  }

  /*
    Get the sselected language code
  */
  public getCurrentOrDefaultCode(): string {
    let code = sessionStorage.getItem('lang');
    if (GenericUtil.isNullOrUndefined(code)) {
      code = LangUtil.getDefaultLanguage().code;
    }
    return code;
  }

  /*
    Get the current selected language
  */
  public getSelectedLanguage(): Language {
    const code = this.getCurrentOrDefaultCode();
    const matches = LangUtil.getDefaultLanguages().filter(x => x.code === code || x.alt.includes(code));
    if (!GenericUtil.isNullOrUndefined(matches) && matches.length > 0) {
      return matches[0];
    }

    return LangUtil.getDefaultLanguage();
  }
}

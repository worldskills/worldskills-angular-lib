import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Language } from '../../i18n/language';
import { User } from '../../auth/models/user';
import { GenericUtil } from '../../common/util/generic.util';
import { MISSING_LANGUAGE_MESSAGE } from '../footer.const';
import { WorldskillsAngularLibService } from '../../worldskills-angular-lib.service';
import { LangUtil } from '../../common/util/lang.util';
import { WsiTranslateService } from '../../i18n/wsi-translate.service';

@Component({
    selector: 'ws-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: false
})
export class FooterComponent implements OnInit {
  date;

  languages: Language[];
  selectedLanguage: Language;
  @Input() isLoggedIn: boolean;
  @Input() currentUser: User;
  @Input() col1Template: TemplateRef<any>;
  @Input() col2Template: TemplateRef<any>;
  @Input() col3Template: TemplateRef<any>;
  @Input() col4Template: TemplateRef<any>;
  @Input() col5Template: TemplateRef<any>;
  @Input() col6Template: TemplateRef<any>;

  @Output() logoutClick: EventEmitter<any> = new EventEmitter();
  @Output() loginClick: EventEmitter<any> = new EventEmitter();

  @ViewChild('#col1DefaultTemplate')
  col1DefaultTemplate: TemplateRef<any>;

  @ViewChild('#col6DefaultTemplate')
  col6DefaultTemplate: TemplateRef<any>;

  @ViewChild('#colDefaultTemplate')
  colDefaultTemplate: TemplateRef<any>;

  supportEmail?: string;

  constructor(private wsi: WorldskillsAngularLibService, private translator: WsiTranslateService) {
    this.wsi.appConfigSubject.subscribe(appConfig => {
      this.supportEmail = appConfig.supportEmailAddress;
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.date = new Date();
    this.languages = LangUtil.getDefaultLanguages();
    this.selectedLanguage = this.translator.getSelectedLanguage();
  }

  login(): void {
    this.loginClick.emit();
  }

  logout(): void {
    this.logoutClick.emit();
  }

  changeLanguage(model: Language): void {
    this.selectedLanguage = model;
    this.translator.init(model.code);
  }

  isLanguageSelected(model: Language): boolean {
    if (GenericUtil.isNullOrUndefined(this.selectedLanguage)) {
      return model.code === LangUtil.getDefaultLanguage().code;
    }

    return model.code === this.selectedLanguage.code;
  }

  languagePrompt(): void {
    alert(MISSING_LANGUAGE_MESSAGE(this.supportEmail || this.wsi.defaultSupportEmailAddress));
  }

  // get list of languages - backward compatible for apps that still want to define their own language
  getLanguages(): Language[] {
    if (GenericUtil.isNullOrUndefined(this.languages) || this.languages.length === 0) {
        return LangUtil.getDefaultLanguages();
    }

    return this.languages;
}

}

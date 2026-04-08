import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, inject } from '@angular/core';
import { NgTemplateOutlet, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenericUtil } from '../../common/util/generic.util';
import { LangUtil } from '../../common/util/lang.util';
import { User } from 'worldskills-ng-auth';
import { Language } from '../../common/models/language';
import { UI_LIBRARY_CONFIG } from '../../ui-lib-config';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LogoComponent } from '../../logos/logo/logo.component';
import { SelectModule } from 'primeng/select';

export const MISSING_LANGUAGE_MESSAGE = (email: string) => `Please email us at WorldSkills (${email}) if you are able to help us translate our interface into your language.`;

@Component({
    selector: 'ws-ng-ui-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    imports: [NgTemplateOutlet, DatePipe, TranslatePipe, LogoComponent, SelectModule, FormsModule],
})
export class FooterComponent implements OnInit {
  private config = inject(UI_LIBRARY_CONFIG);
  private ngxTranslate = inject(TranslateService);

  date: Date;
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

  supportEmail?: string;

  readonly langSelectPT = {
    root: { style: { 'min-width': '10rem', background: 'transparent', 'border-color': 'rgba(255,255,255,0.3)' } },
    label: { style: { color: '#ffffff' } },
    dropdown: { style: { color: 'rgba(255,255,255,0.7)' } },
    option: { style: { padding: '0.6rem 1rem' } },
    listContainer: { style: { 'max-height': '16rem' } },
  };

  constructor() {
    this.supportEmail = this.config.app?.supportEmailAddress;
  }

  ngOnInit() {
    this.date = new Date();
    this.languages = LangUtil.getDefaultLanguages();
    const currentLang = this.ngxTranslate.getCurrentLang();
    this.selectedLanguage = this.languages.find(
      lang => lang.code === (currentLang ?? LangUtil.getDefaultLanguage().code)
    );
  }

  login(): void {
    this.loginClick.emit();
  }

  logout(): void {
    this.logoutClick.emit();
  }

  changeLanguage(model: Language): void {
    this.selectedLanguage = model;
    this.ngxTranslate.use(model.code);
  }

  isLanguageSelected(model: Language): boolean {
    if (GenericUtil.isNullOrUndefined(this.selectedLanguage)) {
      return model.code === LangUtil.getDefaultLanguage().code;
    }
    return model.code === this.selectedLanguage.code;
  }

  languagePrompt(): void {
    alert(MISSING_LANGUAGE_MESSAGE(this.supportEmail));
  }

  getLanguages(): Language[] {
    if (GenericUtil.isNullOrUndefined(this.languages) || this.languages.length === 0) {
      return LangUtil.getDefaultLanguages();
    }
    return this.languages;
  }
}

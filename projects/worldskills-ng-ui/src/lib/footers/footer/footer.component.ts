import { Component, input, output, TemplateRef, inject, signal } from '@angular/core';
import { NgTemplateOutlet, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LangUtil } from '../../common/util/lang.util';
import { User } from '@worldskills/ng-auth';
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
export class FooterComponent {
  private config = inject(UI_LIBRARY_CONFIG);
  private ngxTranslate = inject(TranslateService);

  // ── Inputs ────────────────────────────────────────────────────────────────
  isLoggedIn = input<boolean>(false);
  currentUser = input<User | null>(null);
  col1Template = input<TemplateRef<unknown> | null>(null);
  col2Template = input<TemplateRef<unknown> | null>(null);
  col3Template = input<TemplateRef<unknown> | null>(null);
  col4Template = input<TemplateRef<unknown> | null>(null);
  col5Template = input<TemplateRef<unknown> | null>(null);
  col6Template = input<TemplateRef<unknown> | null>(null);

  // ── Outputs ───────────────────────────────────────────────────────────────
  logoutClick = output<void>();
  loginClick = output<void>();
  languageChange = output<Language>();

  // ── State ─────────────────────────────────────────────────────────────────
  readonly date = new Date();
  readonly languages = LangUtil.getDefaultLanguages();
  readonly supportEmail = this.config.app?.supportEmailAddress;

  selectedLanguage = signal<Language>(
    this.languages.find(l => l.code === (this.ngxTranslate.getCurrentLang() ?? LangUtil.getDefaultLanguage().code))
    ?? LangUtil.getDefaultLanguage()
  );

  readonly langSelectPT = {
    root: { style: { 'min-width': '10rem', background: 'transparent', 'border-color': 'rgba(255,255,255,0.3)' } },
    label: { style: { color: '#ffffff' } },
    dropdown: { style: { color: 'rgba(255,255,255,0.7)' } },
    option: { style: { padding: '0.6rem 1rem' } },
    listContainer: { style: { 'max-height': '16rem' } },
  };

  // ── Methods ───────────────────────────────────────────────────────────────

  changeLanguage(lang: Language): void {
    this.selectedLanguage.set(lang);
    this.ngxTranslate.use(lang.code);
    this.languageChange.emit(lang);
  }

  languagePrompt(): void {
    alert(MISSING_LANGUAGE_MESSAGE(this.supportEmail));
  }
}

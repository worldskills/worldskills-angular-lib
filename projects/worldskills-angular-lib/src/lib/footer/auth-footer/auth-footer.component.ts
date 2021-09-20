import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Language} from '../../i18n/language';
import {User} from '../../auth/models/user';
import {GenericUtil} from '../../common/util/generic.util';
import {NgAuthService} from '../../auth/ng-auth.service';
import { MISSING_LANGUAGE_MESSAGE } from '../footer.const';
import { WorldskillsAngularLibService } from '../../worldskills-angular-lib.service';
import { LangUtil } from '../../common/util/lang.util';
import { WsiTranslateService } from '../../i18n/wsi-translate.service';

@Component({
    selector: 'ws-auth-footer',
    templateUrl: './auth-footer.component.html',
    styleUrls: ['./auth-footer.component.css']
})
export class AuthFooterComponent implements OnInit {
    date;

    languages: Language[];
    selectedLanguage: Language;
    @Input() col1Template: TemplateRef<any>;
    @Input() col2Template: TemplateRef<any>;
    @Input() col3Template: TemplateRef<any>;
    @Input() col4Template: TemplateRef<any>;
    @Input() col5Template: TemplateRef<any>;
    @Input() col6Template: TemplateRef<any>;
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onLogin: EventEmitter<void> = new EventEmitter<void>();
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onLogout: EventEmitter<void> = new EventEmitter<void>();
    @Input() loginLabel = 'Log in';
    @Input() logoutLabel = 'Log out';
    @Output() languageChange: EventEmitter<Language> = new EventEmitter();
    @Input() autoLoginOnLogout = false;
    currentUser: User;

    @ViewChild('#col1DefaultTemplate')
    col1DefaultTemplate: TemplateRef<any>;

    @ViewChild('#col6DefaultTemplate')
    col6DefaultTemplate: TemplateRef<any>;

    @ViewChild('#colDefaultTemplate')
    colDefaultTemplate: TemplateRef<any>;

    supportEmail?: string;

    constructor(private ngAuthService: NgAuthService, private wsi: WorldskillsAngularLibService, private translator: WsiTranslateService) {
    }

    ngOnInit(): void {
        this.date = new Date();
        this.ngAuthService.currentUser.subscribe(user => (this.currentUser = user));
        this.wsi.appConfigSubject.subscribe(appConfig => {
            this.supportEmail = appConfig.supportEmailAddress;
        });
        this.languages = LangUtil.getDefaultLanguages();
        this.selectedLanguage = this.translator.getSelectedLanguage();
    }

    login(): void {
        this.ngAuthService.login();
        if (this.onLogin) {
            this.onLogin.emit();
        }
    }

    logout(): void {
        this.ngAuthService.logout().subscribe(() => {
            if (this.onLogout) {
                this.onLogout.emit();
            }
            if (this.autoLoginOnLogout) {
                this.login();
            }
        });
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

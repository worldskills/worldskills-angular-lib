import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Language} from '../../i18n/language';
import {User} from '../../auth/models/user';
import {GenericUtil} from '../../common/util/generic.util';
import {NgAuthService} from '../../auth/ng-auth.service';

@Component({
    selector: 'ws-auth-footer',
    templateUrl: './auth-footer.component.html',
    styleUrls: ['./auth-footer.component.css']
})
export class AuthFooterComponent implements OnInit {
    date;

    @Input() languages: Language[];
    @Input() selectedLanguage: Language;
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

    constructor(private ngAuthService: NgAuthService) {
    }

    ngOnInit(): void {
        this.date = new Date();
        this.ngAuthService.currentUser.subscribe(user => (this.currentUser = user));
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
        this.languageChange.emit(model);
    }

    isLanguageSelected(model: Language): boolean {
        if (GenericUtil.isNullOrUndefined(this.selectedLanguage)) {
            return model.code === 'en';
        }

        return model.code === this.selectedLanguage.code;
    }

}

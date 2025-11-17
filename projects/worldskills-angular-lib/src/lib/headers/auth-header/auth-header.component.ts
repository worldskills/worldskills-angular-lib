import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from '../menu-item';
import {User} from '../../auth/models/user';
import {NgAuthService} from '../../auth/ng-auth.service';

@Component({
    selector: 'ws-auth-header',
    templateUrl: './auth-header.component.html',
    styleUrls: ['./auth-header.component.css'],
    standalone: false
})
export class AuthHeaderComponent implements OnInit {

    @Input() appName = 'Application';
    @Input() menuItems: Array<MenuItem> = [];
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onLogin: EventEmitter<void> = new EventEmitter<void>();
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onLogout: EventEmitter<void> = new EventEmitter<void>();
    @Input() appNameTemplate: TemplateRef<any>;
    @Input() menuTemplate: TemplateRef<any>;
    @Input() autoLoginOnLogout = false;
    currentUser: User;

    constructor(private router: Router, private ngAuthService: NgAuthService) {
    }

    ngOnInit(): void {
        this.ngAuthService.currentUser.subscribe(user => (this.currentUser = user));
    }

    isRouteActive(route): boolean {
        return route === this.router.url;
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

    get userRoles(): string[] {
        return this.currentUser && this.currentUser.roles ? this.currentUser.roles.map(item => item.name) : [];
    }

    get initials(): string {
        let s = '';
        if (this.currentUser) {
            if (this.currentUser.first_name) {
                s = this.currentUser.first_name.substr(0, 1);
            }

            if (this.currentUser.last_name) {
                s += this.currentUser.last_name.substr(0, 1);
            }
        }

        return s.toUpperCase();
    }
}

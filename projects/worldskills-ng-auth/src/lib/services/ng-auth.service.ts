import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { share } from 'rxjs/operators';
import { USER_CURRENT_KEY } from '../constants';
import { LIBRARY_CONFIG } from '../auth-lib-config';

// TODO: This class can be cleanup up and optimized
// TODO: Generate auth state
@Injectable({
    providedIn: 'root'
})
export class NgAuthService {
    private config = inject(LIBRARY_CONFIG);
    private oAuthService = inject(OAuthService);
    private authService = inject(AuthService);
    currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor() {
        this.oAuthService.configure(this.config.auth);
        const user = JSON.parse(sessionStorage.getItem(USER_CURRENT_KEY));
        this.currentUser.next(user);
        this.oAuthService.setStorage(sessionStorage);
        this.oAuthService.tryLogin();
    }

    public keepAlive(): Observable<any> {
        const observable = this.authService.ping().pipe(share());
        observable.subscribe(
            error => {
                console.log(error);
                this.logout();
            }
        );
        return observable;
    }

    public isLoggedIn(): boolean {
        return this.oAuthService.hasValidAccessToken();
    }

    public getLoggedInUser(showChildRoles: boolean = false): Observable<User> {
        const observable = this.authService.getLoggedInUser(showChildRoles).pipe(share());
        observable.subscribe(
            next => {
                if (next != null) {
                    sessionStorage.setItem(USER_CURRENT_KEY, JSON.stringify(next));
                    this.currentUser.next(next);
                }
            },
            () => {
                this.currentUser.next(null);
            },
        );

        return observable;
    }

    public login(): void {
        this.oAuthService.initImplicitFlow();
    }

    public logout(): Observable<any> {
        const observable = this.authService.logout().pipe(share());
        observable.subscribe(
            () => this.clearSession(),
            () => this.clearSession(),
            () => {}
        );
        return observable;
    }

    public clearSession(): void {
        sessionStorage.removeItem('nonce');
        sessionStorage.removeItem(USER_CURRENT_KEY);
        sessionStorage.removeItem('access_token_stored_at');
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('token');
        this.oAuthService.logOut();
        this.currentUser.next(null);
    }
}

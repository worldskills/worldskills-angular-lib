import { inject, Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { catchError, share, tap } from 'rxjs/operators';
import {
    OAUTH_ACCESS_TOKEN_KEY,
    OAUTH_ACCESS_TOKEN_STORED_AT_KEY,
    OAUTH_NONCE_KEY,
    OAUTH_TOKEN_KEY,
    USER_CURRENT_KEY,
} from '../constants';
import { LIBRARY_CONFIG } from '../auth-lib-config';

@Injectable({
    providedIn: 'root'
})
export class NgAuthService {
    private config = inject(LIBRARY_CONFIG);
    private oAuthService = inject(OAuthService);
    private authService = inject(AuthService);
    private ngZone = inject(NgZone);

    private _currentUser = new BehaviorSubject<User>(null);
    readonly currentUser$ = this._currentUser.asObservable();

    get currentUser(): User {
        return this._currentUser.value;
    }

    /** Resolves once the OIDC token (if present in the URL hash) has been processed. */
    readonly ready: Promise<void>;

    constructor() {
        this.oAuthService.configure(this.config.auth);
        const user = JSON.parse(sessionStorage.getItem(USER_CURRENT_KEY));
        this._currentUser.next(user);
        this.oAuthService.setStorage(sessionStorage);
        this.ready = this.oAuthService.tryLogin({
            disableNonceCheck: true,
            disableOAuth2StateCheck: true,
        }).then(() => {});

        this.listenForVisibilityChange();
        this.listenForSessionExpiry();
    }

    public keepAlive(): Observable<any> {
        const observable = this.authService.ping().pipe(share());
        observable.subscribe({ error: () => this.logout() });
        return observable;
    }

    public isLoggedIn(): boolean {
        return this.oAuthService.hasValidAccessToken();
    }

    public getLoggedInUser(showCollapsedChildRoles: boolean = true): Observable<User> {
        return this.authService.getLoggedInUser(showCollapsedChildRoles).pipe(
            tap(user => {
                if (user != null) {
                    sessionStorage.setItem(USER_CURRENT_KEY, JSON.stringify(user));
                    this._currentUser.next(user);
                }
            }),
            catchError(() => {
                this._currentUser.next(null);
                return EMPTY;
            }),
            share()
        );
    }

    public login(): void {
        this.oAuthService.initImplicitFlow();
    }

    public logout(): Observable<any> {
        const observable = this.authService.logout().pipe(share());
        observable.subscribe({
            next: () => this.clearSession(),
            error: () => this.clearSession(),
        });
        return observable;
    }

    public clearSession(): void {
        sessionStorage.removeItem(OAUTH_NONCE_KEY);
        sessionStorage.removeItem(OAUTH_ACCESS_TOKEN_KEY);
        sessionStorage.removeItem(OAUTH_ACCESS_TOKEN_STORED_AT_KEY);
        sessionStorage.removeItem(OAUTH_TOKEN_KEY);
        sessionStorage.removeItem(USER_CURRENT_KEY);
        this.oAuthService.logOut();
        this._currentUser.next(null);
    }

    private listenForVisibilityChange(): void {
        // Run outside Angular zone to avoid triggering change detection on every visibility event
        this.ngZone.runOutsideAngular(() => {
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible' && this.isLoggedIn()) {
                    // Ping the server to verify the session is still valid.
                    // If it returns a 401, the HTTP interceptor clears the session.
                    // Run the subscription inside the zone so the UI updates.
                    this.ngZone.run(() => this.keepAlive());
                }
            });
        });
    }

    private listenForSessionExpiry(): void {
        // The HTTP interceptor dispatches 'ws-session-expired' on 401 from the API.
        // Clear auth state immediately so the UI updates without waiting for a ping.
        this.ngZone.runOutsideAngular(() => {
            window.addEventListener('ws-session-expired', () => {
                this.ngZone.run(() => {
                    this._currentUser.next(null);
                });
            });
        });
    }
}

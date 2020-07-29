import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { User } from './models/user';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { WsiAuthService } from './wsi-auth.service';
import * as i0 from "@angular/core";
export declare class WsiNgAuthService {
    private wsi;
    private oAuthService;
    private router;
    service: WsiAuthService;
    private currentUserSubject;
    currentUser: Observable<User>;
    constructor(wsi: WorldskillsAngularLibService, oAuthService: OAuthService, router: Router, service: WsiAuthService);
    keepAlive(): void;
    get currentUserValue(): User;
    isLoggedIn(): boolean;
    loadUserProfile(success: (user: User) => void, failure: (error: any) => void): Promise<void>;
    login(): void;
    logout(): void;
    protected clearSession(): void;
    static ɵfac: i0.ɵɵFactoryDef<WsiNgAuthService, never>;
    static ɵprov: i0.ɵɵInjectableDef<WsiNgAuthService>;
}

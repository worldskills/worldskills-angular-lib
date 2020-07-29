import { WsiNgAuthService } from '../wsi-ng-auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
export declare const RETURN_URL_KEY = "returnUrl";
export declare class RedirectHandler {
    protected service: WsiNgAuthService;
    protected router: Router;
    constructor(service: WsiNgAuthService, router: Router);
    redirectOrReturn(redirectRoute: string[], failure: (error: any) => void): void;
    hasReturnUrl(): boolean;
    handleReturnUrl(failure: (error: any) => void): void;
    redirectUserToUrl(user: User, returnUrl: string): void;
    redirectUserToRoute(user: User, route: string[]): void;
}

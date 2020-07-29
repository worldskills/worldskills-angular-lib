import { CanActivate, Route, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { WsiNgAuthService } from './wsi-ng-auth.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AppAuthGuard implements CanActivate {
    protected auth: WsiNgAuthService;
    protected wsi: WorldskillsAngularLibService;
    protected router: Route;
    constructor(auth: WsiNgAuthService, wsi: WorldskillsAngularLibService, router: Route);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
    login(state: RouterStateSnapshot): boolean;
    static ɵfac: i0.ɵɵFactoryDef<AppAuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDef<AppAuthGuard>;
}

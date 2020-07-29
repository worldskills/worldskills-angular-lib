import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import * as i0 from "@angular/core";
export declare class WsHttpInterceptor implements HttpInterceptor {
    private wsi;
    private oAuthService;
    constructor(wsi: WorldskillsAngularLibService, oAuthService: OAuthService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDef<WsHttpInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDef<WsHttpInterceptor>;
}

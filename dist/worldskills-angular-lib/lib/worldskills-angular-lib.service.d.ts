import { AppConfig } from './config/app.config';
import { HttpConfig } from './config/http.config';
import { ServiceConfig } from './config/service.config';
import { AuthConfig } from 'angular-oauth2-oidc';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class WorldskillsAngularLibService {
    appConfigSubject: BehaviorSubject<AppConfig>;
    httpConfigSubject: BehaviorSubject<HttpConfig>;
    serviceConfigSubject: BehaviorSubject<ServiceConfig>;
    authConfigSubject: BehaviorSubject<AuthConfig>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<WorldskillsAngularLibService, never>;
    static ɵprov: i0.ɵɵInjectableDef<WorldskillsAngularLibService>;
}

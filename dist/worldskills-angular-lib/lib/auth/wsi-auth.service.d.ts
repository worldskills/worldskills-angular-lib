import { OAuthService } from 'angular-oauth2-oidc';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { UserList } from './models/user-list';
import { GetUsersParams } from './models/get-user-params';
import * as i0 from "@angular/core";
export declare class WsiAuthService {
    protected wsi: WorldskillsAngularLibService;
    protected http: HttpClient;
    protected oAuthService: OAuthService;
    protected appCode: number[];
    protected endpoint: string;
    constructor(wsi: WorldskillsAngularLibService, http: HttpClient, oAuthService: OAuthService);
    ping(): Observable<any>;
    getLoggedInUser(showChildRoles?: boolean): Observable<User>;
    logout(): Observable<any>;
    listUsers(filter: GetUsersParams): Observable<UserList>;
    getUser(id: number): Observable<User>;
    getUserByPerson(id: number): Observable<User>;
    addRole(userId: number, roleId: number): Observable<any>;
    addRoleWithEntity(userId: number, roleId: number, entityId: number): Observable<any>;
    deleteRole(userId: number, roleId: number): Observable<any>;
    deleteRoleWithEntity(userId: number, roleId: number, entityId: number): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<WsiAuthService, never>;
    static ɵprov: i0.ɵɵInjectableDef<WsiAuthService>;
}

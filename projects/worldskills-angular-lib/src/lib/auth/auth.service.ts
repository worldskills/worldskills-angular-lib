import { Injectable } from '@angular/core';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/user';
import { UserList } from './models/user-list';
import { GetUsersParams } from './models/get-user-params';
import { HttpUtil } from '../common/util/http.util';
import { OAuthService } from 'angular-oauth2-oidc';
import { share } from 'rxjs/operators';

export const USER_CURRENT_KEY = 'user.current';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected appCode: number[];
  protected endpoint: string;
  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(protected wsi: WorldskillsAngularLibService, protected http: HttpClient, private oAuthService: OAuthService) {
    // listen for config changes
    this.wsi.serviceConfigSubject.subscribe(
      next => {
        this.appCode = next.appCode;
        this.endpoint = next.apiEndpoint + '/auth';
      }
    );
    this.wsi.authConfigSubject.subscribe(
        next => {
          this.oAuthService.configure(next);
          const user = JSON.parse(sessionStorage.getItem(USER_CURRENT_KEY));
          this.currentUser.next(user);
          this.oAuthService.setStorage(sessionStorage);
          this.oAuthService.tryLogin();
        }
    );
  }

  public keepAlive(): void {
    this.ping().subscribe(
        error => {
          console.log(error);
          this.logout();
        }
    );
  }

  public isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  public getLoggedInUser(showChildRoles: boolean = false): Observable<User> {
    let params = new HttpParams();
    params = params.set('show_child_roles', String(showChildRoles));
    this.appCode.forEach(code => {
      if (params.has('app_code')) {
        params = params.append('app_code', String(code));
      } else {
        params = params.set('app_code', String(code));
      }
    });
    const url = `${this.endpoint}/users/loggedIn`;
    const observable = this.http.get<User>(url, {params}).pipe(share());

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
    const authUrl = `${this.endpoint}/sessions/logout`;
    const observable = this.http.post(authUrl, {}).pipe(share());
    observable.subscribe(
        () => this.clearSession(),
        () => this.clearSession(),
        () => {}
    );
    return observable;
  }

  public clearSession(): void {
    sessionStorage.removeItem('nonce');
    sessionStorage.removeItem('user.current');
    sessionStorage.removeItem('access_token_stored_at');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('token');
    this.oAuthService.logOut();
    this.currentUser.next(null);
  }

  public ping(): Observable<any> {
    const url = `${this.endpoint}/ping`;
    return this.http.get(url, {});
  }

  /*
    User
  */

  public listUsers(filter: GetUsersParams): Observable<UserList> {
    const params = HttpUtil.objectToParams(filter);
    const url = `${this.endpoint}/users`;
    return this.http.get<UserList>(url, {params});
  }

  public getUser(id: number): Observable<User> {
    const url = `${this.endpoint}/users/${id}`;
    return this.http.get<User>(url);
  }

  public getUserByPerson(id: number): Observable<User> {
    const url = `${this.endpoint}/users/person/${id}`;
    return this.http.get<User>(url);
  }

  /*
    User Roles
  */

  public addRole(userId: number, roleId: number): Observable<any> {
    const url = `${this.endpoint}/users/${userId}/roles`;
    const data = { role_id: roleId };
    return this.http.post(url, data);
  }
  public addRoleWithEntity(userId: number, roleId: number, entityId: number): Observable<any> {
    const url = `${this.endpoint}/users/${userId}/roles`;
    const data = { role_id: roleId, ws_entity_id: entityId };
    return this.http.post(url, data);
  }

  public deleteRole(userId: number, roleId: number): Observable<any> {
    const url = `${this.endpoint}/users/${userId}/roles/${roleId}`;
    return this.http.delete(url);
  }
  public deleteRoleWithEntity(userId: number, roleId: number, entityId: number): Observable<any> {
    const url = `${this.endpoint}/users/${userId}/roles/${roleId}?ws_entity_id=${entityId}`;
    return this.http.delete(url);
  }
}

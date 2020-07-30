import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { Role } from './models/role';
import { UserList } from './models/user-list';
import { GetUsersParams } from './models/get-user-params';
import { HttpUtil } from '../common/util/http.util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected appCode: number[];
  protected endpoint: string;

  constructor(protected wsi: WorldskillsAngularLibService, protected http: HttpClient, protected oAuthService: OAuthService) {
    // listen for config changes
    this.wsi.serviceConfigSubject.subscribe(
      next => {
        this.appCode = next.appCode;
        this.endpoint = next.apiEndpoint + '/auth';
      }
    );
  }

  public ping(): Observable<any> {
    const url = `${this.endpoint}/ping`;
    return this.http.get(url, {} );
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
    return this.http.get<User>(url, {params});
  }

  public logout(): Observable<any> {
    const authUrl = `${this.endpoint}/sessions/logout`;
    return this.http.post(authUrl, {});

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

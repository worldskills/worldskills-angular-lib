import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserList } from '../models/user-list';
import { GetUsersParams } from '../models/get-user-params';
import { HttpUtil } from '../util/http.util';
import { GenericUtil } from '../util/generic.util';
import { LIBRARY_CONFIG } from '../auth-lib-config';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private config = inject(LIBRARY_CONFIG);
  private http = inject(HttpClient);
  protected appCode: number[];
  protected endpoint: string;

  constructor() {
    this.appCode = this.config.api?.appCode || [];
    this.endpoint = this.config.api?.apiEndpoint ? `${this.config.api.apiEndpoint}/auth` : '';
  }

  public getLoggedInUser(showCollapsedChildRoles: boolean = true): Observable<User> {
    let params = new HttpParams()
      .set('show_child_roles', 'false')
      .set('show_collapsed_child_roles', String(showCollapsedChildRoles));

    if (!GenericUtil.isNullOrUndefined(this.appCode)) {
      this.appCode.forEach(code => params = params.append('app_code', String(code)));
    }

    return this.http.get<User>(`${this.endpoint}/users/loggedIn`, { params });
  }

  public logout(): Observable<any> {
    return this.http.post(`${this.endpoint}/sessions/logout`, {});
  }

  public ping(): Observable<any> {
    return this.http.get(`${this.endpoint}/ping`);
  }

  /*
    User
  */

  public listUsers(filter: GetUsersParams): Observable<UserList> {
    const params = HttpUtil.objectToParams(filter);
    return this.http.get<UserList>(`${this.endpoint}/users`, { params });
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.endpoint}/users/${id}`);
  }

  public getUserByPerson(id: number): Observable<User> {
    return this.http.get<User>(`${this.endpoint}/users/person/${id}`);
  }

  /*
    User Roles
  */

  public addRole(userId: number, roleId: number): Observable<any> {
    return this.http.post(`${this.endpoint}/users/${userId}/roles`, { role_id: roleId });
  }

  public addRoleWithEntity(userId: number, roleId: number, entityId: number): Observable<any> {
    return this.http.post(`${this.endpoint}/users/${userId}/roles`, { role_id: roleId, ws_entity_id: entityId });
  }

  public deleteRole(userId: number, roleId: number): Observable<any> {
    return this.http.delete(`${this.endpoint}/users/${userId}/roles/${roleId}`);
  }

  public deleteRoleWithEntity(userId: number, roleId: number, entityId: number): Observable<any> {
    const params = new HttpParams().set('ws_entity_id', String(entityId));
    return this.http.delete(`${this.endpoint}/users/${userId}/roles/${roleId}`, { params });
  }
}

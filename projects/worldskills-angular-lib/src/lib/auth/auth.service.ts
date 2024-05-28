import { Injectable } from '@angular/core';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { UserList } from './models/user-list';
import { GetUsersParams } from './models/get-user-params';
import { HttpUtil } from '../common/util/http.util';
import { share } from 'rxjs/operators';
import { GenericUtil } from '../common/util/generic.util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected appCode: number[];
  protected endpoint: string;

  constructor(protected wsi: WorldskillsAngularLibService, protected http: HttpClient) {
    this.wsi.serviceConfigSubject.subscribe(
      next => {
        this.appCode = next.appCode;
        this.endpoint = next.apiEndpoint + '/auth';
      }
    );
  }

  public getLoggedInUser(showCollapsedChildRoles: boolean = false): Observable<User> {
    let params = new HttpParams();
    params = params.set('show_child_roles', 'false');
    params = params.set('show_collapsed_child_roles', String(showCollapsedChildRoles));
    if (!GenericUtil.isNullOrUndefined(this.appCode)) {
      this.appCode.forEach(code => {
        if (params.has('app_code')) {
          params = params.append('app_code', String(code));
        } else {
          params = params.set('app_code', String(code));
        }
      });
    }
    
    const url = `${this.endpoint}/users/loggedIn`;
    return this.http.get<User>(url, {params}).pipe(share());
  }

  public logout(): Observable<any> {
    const authUrl = `${this.endpoint}/sessions/logout`;
    return this.http.post(authUrl, {});
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

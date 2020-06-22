import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { OAuthService } from 'angular-oauth2-oidc';
import { ModuleConfigService } from '../config/module-config.service';
import { RoleModel } from '../models/role-model';
import { GetUsersParams } from '../models/auth/get-users-params';
import { UserListView } from '../models/auth/user-list-view';
import { UserView } from '../models/auth/user-view';

// TODO: Find a better way to handle apiAuthCode and UserInfoUrl
// TODO: Re-look authneticate method

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private appCode: number[];
  private endpoint: string;

  constructor(private configService: ModuleConfigService, protected http: HttpClient, protected oAuthService: OAuthService) {
    this.appCode = this.configService.serviceConfig.appCode;
    this.endpoint = this.configService.serviceConfig.apiEndpoint + '/auth';
  }

  public ping() {
    const url = `${this.endpoint}/ping`;
    return this.http.get(url, {} );
  }

  public getLoggedInUser(showChildRoles: boolean = false) {

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
    return this.http.get(url, {params});
  }

  // check if a user has at least one listed permission
  // TODO: more robustness needed. right now it's just an OR function
  public hasPermission(user: UserModel, permissions: string[]) {
    permissions = permissions || [];
    const result = user.roles.filter(role => {
      return permissions.indexOf(role.name) > -1 && this.appCode.includes(role.roleApplication.applicationCode);
    });

    return result;
  }

  public authenticate(user: UserModel, roles: string[]) {
    return this.hasPermission(user, roles).length > 0;
  }

  public logout() {
    const authUrl = `${this.endpoint}/sessions/logout`;
    return this.http.post(authUrl, {});

  }

  public listUsers(search: GetUsersParams) {
    let params = new HttpParams();
    search.toParams().forEach((param) => {
      params = params.set(param.name, param.value);
    });
    const url = `${this.endpoint}/users`;
    return this.http.get<UserListView>(url, {params});
  }

  public getUser(id: number) {
    const url = `${this.endpoint}/users/${id}`;
    return this.http.get<UserView>(url);
  }

  public getUserByPerson(id: number) {
    const url = `${this.endpoint}/users/person/${id}`;
    return this.http.get<UserView>(url);
  }

  public addRole(userId: number, roleId: number) {
    // 'https://api.worldskills.org/auth/users/${userid}/roles';
    const url = `${this.endpoint}/users/${userId}/roles`;
    const data = { role_id: roleId };
    return this.http.post(url, data);
  }
  public addRoleWithEntity(userId: number, roleId: number, entityId: number) {
    // 'https://api.worldskills.org/auth/users/${userid}/roles';
    const url = `${this.endpoint}/users/${userId}/roles`;
    const data = { role_id: roleId, ws_entity_id: entityId };
    return this.http.post(url, data);
  }

  public deleteRole(userId: number, roleId: number) {
    // 'https://api.worldskills.org/auth/users/${userid}/roles/${roleId}';
    const url = `${this.endpoint}/users/${userId}/roles/${roleId}`;
    return this.http.delete(url);
  }
  public deleteRoleWithEntity(userId: number, roleId: number, entityId: number) {
    // 'https://api.worldskills.org/auth/users/${userid}/roles/${roleId}?ws_entity_id=';
    const url = `${this.endpoint}/users/${userId}/roles/${roleId}?ws_entity_id=${entityId}`;
    return this.http.delete(url);
  }
}

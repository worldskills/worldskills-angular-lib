import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { OAuthService } from 'angular-oauth2-oidc';
import { ModuleConfigService } from '../config/module-config.service';
import { RoleModel } from '../models/role-model';

// TODO: Find a better way to handle apiAuthCode and UserInfoUrl
// TODO: Re-look authneticate method

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private appCode: number;
  private endpoint: string;

  constructor(protected configService: ModuleConfigService, protected http: HttpClient, protected oAuthService: OAuthService) {
    this.appCode = this.configService.serviceConfig.appCode;
    this.endpoint = this.configService.serviceConfig.apiEndpoint + '/auth';
  }

  public ping() {
    const url = `${this.endpoint}/ping`;
    return this.http.get(url, {} );
  }

  public getLoggedInUser(showChildRoles: boolean = false) {
    const url = `${this.endpoint}/users/loggedIn?show_child_roles=${showChildRoles}&app_code=${String(this.appCode)}`;
    return this.http.get(url, {});
  }

  // check if a user has at least one listed permission
  // TODO: more robustness needed. right now it's just an OR function
  public hasPermission(user: UserModel, permissions: string[]) {
    permissions = permissions || [];
    const result = user.roles.filter(role => {
      return permissions.indexOf(role.name) > -1 && role.roleApplication.applicationCode === this.appCode;
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

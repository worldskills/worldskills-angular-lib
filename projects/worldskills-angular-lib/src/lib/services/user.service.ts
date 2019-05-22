import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { OAuthService } from 'angular-oauth2-oidc';
import { BaseService } from './base.service';
import { ModuleConfigService } from '../config/module-config.service';

// TODO: Find a better way to handle apiAuthCode and UserInfoUrl
// TODO: Re-look authneticate method

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  private appCode: number;
  private endpoint: string;

  constructor(protected configService: ModuleConfigService, protected http: HttpClient, protected oAuthService: OAuthService) {
    super(http, oAuthService);
    this.appCode = this.configService.serviceConfig.appCode;
    this.endpoint = this.configService.serviceConfig.userServiceEndpoint;
  }

  public ping() {
    const headers = this.getHeaders();
    const url = `${this.endpoint}/ping`;
    return this.http.get(url, {headers} );
  }

  public getLoggedInUser(showChildRoles: boolean = false) {
    const headers = this.getHeaders();
    const url = `${this.endpoint}/users/loggedIn?show_child_roles=${showChildRoles}&app_code=${String(this.appCode)}`;
    return this.http.get(url, {
      headers
    });
  }

  // check if a user has at least one listed permission
  // TODO: more robustness needed. right now it's just an OR function
  public hasPermission(user: UserModel, permissions: string[]) {
    const result = user.roles.filter(role => {
      return permissions.indexOf(role.name) > -1 && role.roleApplication.applicationCode === this.appCode;
    });

    return result;
  }

  public authenticate(user: UserModel, roles: string[]) {
    return this.hasPermission(user, roles).length > 0;
  }
}

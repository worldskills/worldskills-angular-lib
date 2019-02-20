import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { OAuthService } from 'angular-oauth2-oidc';
import { BaseService } from './base.service';

// TODO: Find a better way to handle apiAuthCode and UserInfoUrl
// TODO: Re-look authneticate method

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(protected http: HttpClient, protected oAuthService: OAuthService) {
    super(http, oAuthService);
  }

  public async getLoggedInUser(userInfoURI: string) {
    const headers = this.getDefaultHeaders();

    return await this.http.get(userInfoURI, {
      headers
    }).toPromise();
  }

  // check if a user has at least one listed permission
  // TODO: more robustness needed. right now it's just an OR function
  public hasPermission(user: UserModel, authCode: number, permissions: string[]) {
    const result = user.roles.filter(role => {
      if (permissions.indexOf(role.name) > -1 && role.roleApplication.applicationCode === authCode) {
        return true;
      }
    });

    return result;
  }

  public authenticate(apiAuthCode: number, user: UserModel) {
    return this.hasPermission(user, apiAuthCode, ['Admin', 'CreateResource']).length > 0;
  }
}

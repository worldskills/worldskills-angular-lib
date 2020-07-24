import { Injectable } from '@angular/core';
import { AppConfig } from './config/app.config';
import { HttpConfig } from './config/http.config';
import { ServiceConfig } from './config/service.config';
import { AuthConfig } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class WorldskillsAngularLibService {

  public appConfig: AppConfig;
  public httpConfig: HttpConfig;
  public serviceConfig: ServiceConfig;
  public authConfig: AuthConfig;

  constructor() {
    this.appConfig = { notAuthorizedRoute: ['/not-authorized'] };
    this.httpConfig = { encoderUriPatterns: [], authUriPatterns: [] };
    this.serviceConfig = { appCode: [], apiEndpoint: ''};
    this.authConfig = {};
  }
}

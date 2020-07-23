import { Injectable } from '@angular/core';
import { AppConfig } from './config/app.config';
import { HttpConfig } from './config/http.config';
import { ServiceConfig } from './config/service.config';

@Injectable({
  providedIn: 'root'
})
export class WorldskillsAngularLibService {

  public appConfig: AppConfig;
  public httpConfig: HttpConfig;
  public serviceConfig: ServiceConfig;

  constructor() {
    this.appConfig = { notAuthorizedRoute: ['/not-authorized'] };
    this.httpConfig = { encoderUriPatterns: [], authUriPatterns: [] };
    this.serviceConfig = { appCode: [], apiEndpoint: ''};
  }
}

import { Injectable } from '@angular/core';
import { AppConfig } from './config/app.config';
import { HttpConfig } from './config/http.config';
import { ServiceConfig } from './config/service.config';
import { AuthConfig } from 'angular-oauth2-oidc';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldskillsAngularLibService {

  // behaviour subjects to listen for cconfig change
  public appConfigSubject: BehaviorSubject<AppConfig>;
  public httpConfigSubject: BehaviorSubject<HttpConfig>;
  public serviceConfigSubject: BehaviorSubject<ServiceConfig>;
  public authConfigSubject: BehaviorSubject<AuthConfig>;

  constructor() {
    // default configuration
    this.appConfigSubject = new BehaviorSubject({ notAuthorizedRoute: ['/not-authorized'] });
    this.httpConfigSubject = new BehaviorSubject({ encoderUriPatterns: [], authUriPatterns: [] });
    this.serviceConfigSubject = new BehaviorSubject({ appCode: [], apiEndpoint: ''});
    this.authConfigSubject = new BehaviorSubject({});
  }
}

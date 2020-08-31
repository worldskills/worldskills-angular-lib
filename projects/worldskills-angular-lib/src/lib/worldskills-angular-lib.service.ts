import { Injectable } from '@angular/core';
import { AppConfig } from './config/app.config';
import { HttpConfig } from './config/http.config';
import { ServiceConfig } from './config/service.config';
import { AuthConfig } from 'angular-oauth2-oidc';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldskillsAngularLibService {

  // behaviour subjects to listen for config change
  public appConfigSubject: ReplaySubject<AppConfig>;
  public httpConfigSubject: ReplaySubject<HttpConfig>;
  public serviceConfigSubject: ReplaySubject<ServiceConfig>;
  public authConfigSubject: ReplaySubject<AuthConfig>;

  constructor() {
    // default configuration
    this.appConfigSubject = new ReplaySubject(1);
    this.httpConfigSubject = new ReplaySubject(1);
    this.serviceConfigSubject = new ReplaySubject(1);
    this.authConfigSubject = new ReplaySubject(1);
    this.appConfigSubject.next({ notAuthorizedRoute: ['/not-authorized'] });
  }
}

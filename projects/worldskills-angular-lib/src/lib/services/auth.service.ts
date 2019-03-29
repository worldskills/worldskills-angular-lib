import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { OAuthService, OAuthModule } from 'angular-oauth2-oidc';
import { UserService } from './user.service';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
import { ModuleConfigService } from '../config/module-config.service';

// TODO: This class can be cleanup up and optimized
// TODO: Generate auth state
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;

  constructor(private configService: ModuleConfigService, private oAuthService: OAuthService, private userService: UserService) {
    this.configureAuth();
    console.log(this.oAuthService.authorizationHeader());
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('user.current')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public keepAlive(): void {
    localStorage.setItem('user.timestamp', new Date().getTime().toString());
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  public isValid() {
    return this.oAuthService.hasValidAccessToken();
  }

  public isLoggedIn(authExpireMinutes: number) {
    return this.isValid() && this.isCacheValid(authExpireMinutes);
  }

  public getToken() {
    return this.isValid() ? localStorage.getItem('user.token') : '';
  }

  public isCacheValid(authExpireMinutes: number) {
    const ts = Number.parseInt(localStorage.getItem('user.timestamp').toString(), 10);
    const now = new Date();
    const expiry = new Date();
    expiry.setMinutes(now.getMinutes() + authExpireMinutes);
    return ts === undefined || ts === null ? false : ts < expiry.getTime();
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  loadUserProfile() {
    if (this.isValid()) {
      const token = this.oAuthService.getAccessToken();
      this.keepAlive();
      localStorage.setItem('user.token', token);
      this.userService.getLoggedInUser().then(result => {
        const converter = new JsonConvert();
        converter.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
        const currentUser = new UserModel(converter.deserialize(result, UserModel));
        localStorage.setItem('user.current', JSON.stringify(currentUser));
        this.currentUserSubject.next(currentUser);
      });
    }
  }

  logout() {
    localStorage.removeItem('user.current');
    localStorage.removeItem('user.token');
    this.oAuthService.logOut();
    this.currentUserSubject.next(null);
  }

  private configureAuth(): void {
    this.oAuthService.configure({
      loginUrl: this.configService.oAuthConfig.loginURI,
      clientId: this.configService.oAuthConfig.clientId,
      oidc: this.configService.oAuthConfig.oidc,
      redirectUri: window.location.origin,
      userinfoEndpoint: this.configService.serviceConfig.userInfoUri('false')
    });

    this.oAuthService.setStorage(sessionStorage);
    this.oAuthService.tryLogin();
  }
}

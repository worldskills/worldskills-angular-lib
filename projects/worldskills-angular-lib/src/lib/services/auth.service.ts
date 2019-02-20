import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { OAuthService, OAuthModule } from 'angular-oauth2-oidc';
import { UserService } from './user.service';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';

// TODO: This class can be cleanup up and optimized
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;

  constructor(private oAuthService: OAuthService, private userService: UserService) {
    console.log(this.oAuthService.authorizationHeader());
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('user.current')));
    this.currentUser = this.currentUserSubject.asObservable();

    // below should be done by the instatiating object
    // this.loadUserProfile();

    // if (this.isCacheValid()) {
    //   this.keepAlive();
    // } else {
    //   this.login();
    // }
  }

  private keepAlive(): void {
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

  loadUserProfile(userInfoURI: string) {
    if (this.isValid()) {
      const token = this.oAuthService.getAccessToken();
      this.keepAlive();
      localStorage.setItem('user.token', token);
      this.userService.getLoggedInUser(userInfoURI).then(result => {
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

  public configureAuth(loginURI: string, clientId: string, userInfoURI: string): void {
    this.oAuthService.configure({
      loginUrl: loginURI,
      clientId,
      oidc: false,
      redirectUri: window.location.origin,
      userinfoEndpoint: userInfoURI
    });

    this.oAuthService.setStorage(sessionStorage);
    this.oAuthService.tryLogin();
  }
}

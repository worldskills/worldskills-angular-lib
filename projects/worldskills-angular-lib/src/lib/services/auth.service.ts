import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { OAuthService } from 'angular-oauth2-oidc';
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
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('user.current')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public keepAlive() {
    this.userService.ping().subscribe(
      error => {
        console.log(error);
        this.logout();
      }
    );
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  public isLoggedIn() {
    return this.oAuthService.hasValidAccessToken();
  }

  public async loadUserProfile(callback: (error: any) => any) {
    this.userService.getLoggedInUser().subscribe(
      result => {
        if (result != null) {
          const converter = new JsonConvert();
          converter.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
          const currentUser = new UserModel(converter.deserialize(result, UserModel));
          localStorage.setItem('user.current', JSON.stringify(currentUser));
          this.currentUserSubject.next(currentUser);
          callback(currentUser);
        }
      },
      error => {
        this.currentUser = null;
        callback(error);
      }
    );
  }

  public login() {
    this.oAuthService.initImplicitFlow();
  }

  public logout() {
    localStorage.removeItem('user.current');
    this.oAuthService.logOut();
    this.currentUserSubject.next(null);
  }

  private configureAuth(): void {
    this.oAuthService.configure(this.configService.authConfig);

    this.oAuthService.setStorage(sessionStorage);
    this.oAuthService.tryLogin();
  }
}

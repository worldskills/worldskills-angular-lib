import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { OAuthService } from 'angular-oauth2-oidc';
import { UserService } from './user.service';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
import { ModuleConfigService } from '../config/module-config.service';
import { Router } from '@angular/router';

// TODO: This class can be cleanup up and optimized
// TODO: Generate auth state
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;

  public returnUrlKey: string;

  constructor(private configService: ModuleConfigService, private oAuthService: OAuthService, private router: Router,
              public userService: UserService) {
    this.returnUrlKey = 'returnUrl';
    this.configureAuth();
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(sessionStorage.getItem('user.current')));
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
          sessionStorage.setItem('user.current', JSON.stringify(currentUser));
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
    this.userService.logout().subscribe(result => {
      sessionStorage.removeItem('nonce');
      sessionStorage.removeItem('user.current');
      sessionStorage.removeItem('access_token_stored_at');
      sessionStorage.removeItem('access_token');
      sessionStorage.removeItem('token');
      this.oAuthService.logOut();
      this.currentUserSubject.next(null);
    });
  }

  private configureAuth(): void {
    this.oAuthService.configure(this.configService.authConfig);

    this.oAuthService.setStorage(sessionStorage);
    this.oAuthService.tryLogin();
  }

  public redirectOrReturn(redirectRoute: string[]) {
    if (!this.isLoggedIn()) {
      this.login();
    } else {
      if (this.hasReturnUrl()) {
        this.handleReturnUrl();
      } else {
        this.loadUserProfile(result => {
          sessionStorage.removeItem(this.returnUrlKey);
          this.router.navigate(redirectRoute);
        });
      }
    }
  }

  public hasReturnUrl() {
    const returnUrl = sessionStorage.getItem(this.returnUrlKey);
    return returnUrl !== null && returnUrl !== undefined && returnUrl !== 'undefined';
  }

  public handleReturnUrl() {
    const returnUrl = sessionStorage.getItem(this.returnUrlKey);
    sessionStorage.removeItem(this.returnUrlKey);
    this.loadUserProfile(() => {
      this.router.navigateByUrl(returnUrl);
    });
  }
}

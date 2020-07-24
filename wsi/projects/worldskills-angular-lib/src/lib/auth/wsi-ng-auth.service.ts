import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { User } from './models/user';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { WsiAuthService } from './wsi-auth.service';

// TODO: This class can be cleanup up and optimized
// TODO: Generate auth state
@Injectable({
  providedIn: 'root'
})
export class WsiNgAuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private wsi: WorldskillsAngularLibService, private oAuthService: OAuthService, private router: Router,
              public service: WsiAuthService) {
    this.loadExternalConfig();

  }

  protected loadExternalConfig(): void {
    this.oAuthService.configure(this.wsi.authConfig);
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('user.current')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.oAuthService.setStorage(sessionStorage);
    this.oAuthService.tryLogin();
  }

  public keepAlive(): void {
    this.loadExternalConfig();
    this.service.ping().subscribe(
      error => {
        console.log(error);
        this.logout();
      }
    );
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public isLoggedIn(): boolean {
    this.loadExternalConfig();
    return this.oAuthService.hasValidAccessToken();
  }

  public async loadUserProfile(success: (user: User) => void, failure: (error: any) => void): Promise<void> {
    this.loadExternalConfig();
    this.service.getLoggedInUser().subscribe(
      next => {
        if (next != null) {
          sessionStorage.setItem('user.current', JSON.stringify(next));
          this.currentUserSubject.next(next);
        }
      },
      error => {
        this.currentUser = null;
        failure(error);
      },
      () => success(this.currentUserSubject.value)
    );
  }

  public login(): void {
    this.loadExternalConfig();
    this.oAuthService.initImplicitFlow();
  }

  public logout(): void {
    this.service.logout().subscribe(
      result => this.clearSession(),
      error => this.clearSession(),
      () => {}
    );
  }

  protected clearSession(): void {
    sessionStorage.removeItem('nonce');
    sessionStorage.removeItem('user.current');
    sessionStorage.removeItem('access_token_stored_at');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('token');
    this.oAuthService.logOut();
    this.currentUserSubject.next(null);
  }


}

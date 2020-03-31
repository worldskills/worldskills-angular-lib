import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';
import { MenuAccessPipe } from '../pipes/menu-access.pipe';
import { UserModel } from '../models/user.model';
import { RoleModel } from '../models/role-model';
import { LogoComponent } from '../logos/logo/logo.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LogoComponent, MenuAccessPipe, HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.appName = 'test';

    component.menuItems = [];
    fixture.detectChanges();
  });


  it('should create', () => {
    component.ngOnChanges();
    expect(component).toBeTruthy();
  });

  it('should emit on login', () => {
    component.isLoggedIn = false;
    component.showLoginAndLogoutButtons = true;
    fixture.detectChanges();
    // spy on event emitter
    spyOn(component.loginClick, 'emit');
    // trigger the click
    const loginButton = fixture.nativeElement.querySelector('.wsi-login');
    loginButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.loginClick.emit).toHaveBeenCalled();
 });

  it('should emit on logout', () => {
    component.isLoggedIn = true;
    component.showLoginAndLogoutButtons = true;
    fixture.detectChanges();
    // spy on event emitter
    spyOn(component.logoutClick, 'emit');
    // trigger the click
    const logoutButton = fixture.nativeElement.querySelector('.wsi-logout');
    logoutButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.logoutClick.emit).toHaveBeenCalled();
  });

  it('should have active route', () => {
    const result = component.isRouteActive('/');
    expect(result).toBe(true);
  });

  it('should not have active route', () => {
    const result = component.isRouteActive('/somewhere');
    expect(result).toBe(false);
  });

  it('should return user Role Ids - missing user', () => {
    component.currentUser = null;
    fixture.detectChanges();
    const result = component.userRoles();
    expect(result).toEqual([]);
  });

  it('should return user Role Ids - missing roles', () => {
    component.currentUser = new UserModel();
    component.currentUser.roles = null;
    fixture.detectChanges();
    const result = component.userRoles();
    expect(result).toEqual([]);
  });

  it('should return user Role Ids', () => {
    const role = new RoleModel();
    role.id = 1;
    role.name = 'Admin';
    component.currentUser = new UserModel();
    component.currentUser.roles = [];
    component.currentUser.roles.push(role);
    fixture.detectChanges();
    const result = component.userRoles();
    expect(result).toEqual(['Admin']);
  });
});

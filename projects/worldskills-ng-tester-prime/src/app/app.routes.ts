import { Routes } from '@angular/router';
import { GuardService, AuthGuardAccess } from '@worldskills/ng-auth';

const adminRoles: AuthGuardAccess[] = [
  { appCode: 300, name: 'Admin' }
];

const secretRoles: AuthGuardAccess[] = [
  { appCode: 300, name: 'SuperSecretRole' }
];

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
    data: { breadcrumb: 'About' }
  },
  {
    path: 'settings',
    data: { breadcrumb: 'Settings' },
    children: [
      {
        path: '',
        loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('./settings/profile/profile.component').then(m => m.ProfileComponent),
        data: { breadcrumb: 'Profile' }
      },
      {
        path: 'preferences',
        loadComponent: () => import('./settings/preferences/preferences.component').then(m => m.PreferencesComponent),
        data: { breadcrumb: 'Preferences' }
      },
    ]
  },
  {
    path: 'admin',
    data: { breadcrumb: 'Admin' },
    canActivate: [GuardService],
    children: [
      {
        path: '',
        loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
        data: { roles: adminRoles }
      },
      {
        path: 'users',
        loadComponent: () => import('./admin/users/users.component').then(m => m.UsersComponent),
        canActivate: [GuardService],
        data: { breadcrumb: 'Users', roles: adminRoles }
      },
      {
        path: 'logs',
        loadComponent: () => import('./admin/logs/logs.component').then(m => m.LogsComponent),
        canActivate: [GuardService],
        data: { breadcrumb: 'Logs', roles: adminRoles }
      },
    ]
  },
  {
    path: 'secret',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    canActivate: [GuardService],
    data: { breadcrumb: 'Secret', roles: secretRoles }
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.UserProfileComponent),
    canActivate: [GuardService],
    data: { breadcrumb: 'Profile' }
  },
  {
    path: 'not-authorized',
    loadComponent: () => import('./not-authorized/not-authorized.component').then(m => m.NotAuthorizedComponent),
    data: { breadcrumb: 'Not Authorized' }
  },
  { path: '**', redirectTo: '/home' }
];

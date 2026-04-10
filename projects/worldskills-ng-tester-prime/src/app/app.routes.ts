// projects/.../src/app/app.routes.ts
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
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  {
    path: 'secret',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    canActivate: [GuardService],
    data: { roles: secretRoles }
  },
  {
    path: 'admin/logs',
    loadComponent: () => import('./admin/logs/logs.component').then(m => m.LogsComponent),
    canActivate: [GuardService],
    data: { roles: adminRoles }
  },
  { path: 'not-authorized', loadComponent: () => import('./not-authorized/not-authorized.component').then(m => m.NotAuthorizedComponent) },
  { path: '**', redirectTo: '/home' }
];
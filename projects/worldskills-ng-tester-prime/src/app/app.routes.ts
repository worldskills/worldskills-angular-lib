// projects/.../src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  // Add your routes here later
  { path: '', redirectTo: '/home', pathMatch: 'full' },   // optional default redirect
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: '**', redirectTo: '/home' }  // wildcard / 404 fallback
];
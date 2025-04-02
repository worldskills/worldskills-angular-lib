import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { appTranslationConfig } from './app.config';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'home',
        component: AppComponent,
        providers: []
    },
    {path: '',pathMatch: 'full', redirectTo: 'home'},
    {path: '**', redirectTo: ''},
];

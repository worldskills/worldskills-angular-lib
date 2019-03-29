import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldskillsAngularLibModule, ServiceConfig, OAuthConfig } from 'worldskills-angular-lib';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

// these should ideally exist wtihin the environment.ts
const serviceConfig = new ServiceConfig(1, 'http://someurl/auth');
const oAuthConfig = new OAuthConfig('http://someurl/login', 'some_client_id');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WorldskillsAngularLibModule.forConfig(serviceConfig, oAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

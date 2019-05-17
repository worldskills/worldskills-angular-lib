import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldskillsAngularLibModule, ServiceConfig, OAuthConfig } from 'worldskills-angular-lib';
import { Routes, RouterModule } from '@angular/router';
import { config } from '../environments/environment';
import { OAuthModule } from 'angular-oauth2-oidc';
import { SampleComponent } from './sample/sample.component';


const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'sample', component: SampleComponent, data: { breadcrumb: 'Sample', hidden: '' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    OAuthModule.forRoot(),
    WorldskillsAngularLibModule.forConfig(config.service, config.oauth, config.http),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

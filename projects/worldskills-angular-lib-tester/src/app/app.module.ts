import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldskillsAngularLibModule, WsHttpInterceptor } from 'worldskills-angular-lib';
import { Routes, RouterModule } from '@angular/router';
import { serviceConfig, oAuthConfig, httpConfig } from '../environments/environment';
import { OAuthModule } from 'angular-oauth2-oidc';
import { SampleComponent } from './sample/sample.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


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
    WorldskillsAngularLibModule.forConfig(serviceConfig, oAuthConfig, httpConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WsHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

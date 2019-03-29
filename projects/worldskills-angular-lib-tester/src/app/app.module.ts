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

/*
export class TestServicConfig implements ServiceConfig {
  authCode: number;
  userServiceUrl: string;

  constructor(authCode: number, userServiceUrl: string) {
    this.authCode = authCode;
    this.userServiceUrl = userServiceUrl;
  }
}

const serviceConfig = new TestServicConfig(1, 'http://something/auth');
*/
const serviceConfig = new ServiceConfig();
serviceConfig.appCode = 1;
serviceConfig.userServiceEndpoint = 'http://someurl/auth';

const oAuthConfig = new OAuthConfig();
oAuthConfig.clientId = 'some_client_id';
oAuthConfig.loginURI = 'http://someurl/login';

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

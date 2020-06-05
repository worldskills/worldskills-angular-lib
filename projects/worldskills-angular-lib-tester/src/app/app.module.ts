import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldskillsAngularLibModule, WsHttpInterceptor, AppAuthGuard } from 'worldskills-angular-lib';
import { Routes, RouterModule } from '@angular/router';
import { serviceConfig, oAuthConfig, httpConfig, appConfig } from '../environments/environment';
import { OAuthModule } from 'angular-oauth2-oidc';
import { SampleComponent } from './sample/sample.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SimpleRouterComponent } from './simple-router/simple-router.component';
import { HomeComponent } from './home/home.component';
import { KeyChangeComponent } from './key-change/key-change.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';




const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sample', component: SampleComponent, data: { breadcrumb: 'Sample' } },
  { path: 'simple', component: SimpleRouterComponent, data: { breadcrumb: 'Simple' }, children: [
    { path: '', component: SampleComponent },
    { path: 'sample', component: SampleComponent, data: { breadcrumb: 'Sample' } },
    { path: 'change', component: KeyChangeComponent, data: { breadcrumb: '[key]' } },
  ] },
  { path: 'manage', component: SampleComponent,
    canActivate: [AppAuthGuard], data: {roles: ['Admin'] }
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SimpleRouterComponent,
    HomeComponent,
    KeyChangeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    WorldskillsAngularLibModule.forConfig(serviceConfig, oAuthConfig, httpConfig, appConfig),
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WsHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

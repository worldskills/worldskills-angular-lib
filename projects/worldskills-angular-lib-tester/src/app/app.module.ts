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
import { EntityTreeSelectorComponent } from './entity-tree-selector/entity-tree-selector.component';
import { EntityTreeSelectorCacheComponent } from './entity-tree-selector-cache/entity-tree-selector-cache.component';
import {
  EntityTreeSelectorCustomizationsComponent
} from './entity-tree-selector-customizations/entity-tree-selector-customizations.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectComponent } from './select/select.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sample', component: SampleComponent, data: { breadcrumb: 'Sample', roles: [{ appCode: 500, name: 'Admin' }] } },
  { path: 'simple', component: SimpleRouterComponent, data: { breadcrumb: 'Simple' }, children: [
    { path: '', component: SampleComponent },
    { path: 'sample', component: SampleComponent, data: { breadcrumb: 'Sample' } },
    { path: 'change', component: KeyChangeComponent, data: { breadcrumb: '[key]' } },
  ] },
  { path: 'manage', component: SampleComponent,
    canActivate: [AppAuthGuard], data: {roles: [{ appCode: 500, name: 'Admin' }] }
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
    KeyChangeComponent,
    EntityTreeSelectorComponent,
    EntityTreeSelectorCacheComponent, ,
    EntityTreeSelectorCustomizationsComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    WorldskillsAngularLibModule.forConfig(serviceConfig, oAuthConfig, httpConfig, appConfig),
    RouterModule.forRoot(appRoutes),
    NgbModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WsHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldskillsAngularLibModule } from '../../../worldskills-angular-lib/src/lib/worldskills-angular-lib.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WsHttpInterceptor } from '../../../worldskills-angular-lib/src/lib/interceptors/ws-http.interceptor';
import { AnotherPageComponent } from './another-page/another-page.component';
import { AnotherRouteComponent } from './another-route/another-route.component';
import { NestedPageComponent } from './nested-page/nested-page.component';
import { NgSelectModule } from '@ng-select/ng-select';


const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

const appRoutes: Routes = [
  // /home
  { path: 'home', component: HomeComponent },

  { path: 'another', component: AnotherPageComponent,
    data: {
      breadcrumb: { key: 'another', label: 'Another' }
    }
  },

  { path: 'nest', component: AnotherRouteComponent,
    children: [
      { path: '', component: AnotherPageComponent,
        data: {
          breadcrumb: { key: 'another', label: 'Another' }
        }
      },
      { path: 'nested', component: NestedPageComponent,
        data: {
          breadcrumb: { key: 'nested', label: 'Nested Page' }
        }
      },
    ]
  },
  // { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnotherPageComponent,
    AnotherRouteComponent,
    NestedPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot(appRoutes, routerOptions),
    WorldskillsAngularLibModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WsHttpInterceptor, multi: true },
  ],  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldskillsAngularLibModule } from '../../../worldskills-angular-lib/src/lib/worldskills-angular-lib.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

const appRoutes: Routes = [
  // /home
  { path: 'home', component: HomeComponent },
  // { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot(appRoutes, routerOptions),
    WorldskillsAngularLibModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

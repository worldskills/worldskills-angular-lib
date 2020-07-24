import { NgModule } from '@angular/core';
import { WorldskillsAngularLibComponent } from './worldskills-angular-lib.component';
import { AlertComponent } from './alerts/alert/alert.component';
import { AlertsComponent } from './alerts/alerts/alerts.component';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule } from 'angular-oauth2-oidc';




@NgModule({
  declarations: [WorldskillsAngularLibComponent, AlertComponent, AlertsComponent],
  imports: [
    BrowserModule,
    OAuthModule.forRoot()
  ],
  exports: [WorldskillsAngularLibComponent, AlertComponent, AlertsComponent]
})
export class WorldskillsAngularLibModule { }

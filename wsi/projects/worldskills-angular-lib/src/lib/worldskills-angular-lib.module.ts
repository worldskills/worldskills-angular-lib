import { NgModule } from '@angular/core';
import { WorldskillsAngularLibComponent } from './worldskills-angular-lib.component';
import { AlertComponent } from './alerts/alert/alert.component';
import { AlertsComponent } from './alerts/alerts/alerts.component';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule } from 'angular-oauth2-oidc';
import { PuppeteerBannerComponent } from './banners/puppeteer-banner/puppeteer-banner.component';
import { StagingBannerComponent } from './banners/staging-banner/staging-banner.component';




@NgModule({
  declarations: [
    WorldskillsAngularLibComponent, AlertComponent, AlertsComponent, PuppeteerBannerComponent, StagingBannerComponent
  ],
  imports: [
    BrowserModule,
    OAuthModule.forRoot()
  ],
  exports: [
    WorldskillsAngularLibComponent, AlertComponent, AlertsComponent, PuppeteerBannerComponent, StagingBannerComponent
  ]
})
export class WorldskillsAngularLibModule { }

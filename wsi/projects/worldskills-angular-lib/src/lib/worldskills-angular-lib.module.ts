import { NgModule } from '@angular/core';
import { WorldskillsAngularLibComponent } from './worldskills-angular-lib.component';
import { AlertComponent } from './alerts/alert/alert.component';
import { AlertsComponent } from './alerts/alerts/alerts.component';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule } from 'angular-oauth2-oidc';
import { PuppeteerBannerComponent } from './banners/puppeteer-banner/puppeteer-banner.component';
import { StagingBannerComponent } from './banners/staging-banner/staging-banner.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './headers/header/header.component';
import { LogoComponent } from './logos/logo/logo.component';
import { WordmarkComponent } from './logos/wordmark/wordmark.component';
import { MenuAccessPipe } from './headers/menu-access.pipe';
import { FooterComponent } from './footer/footer/footer.component';
import { DateRangeComponent } from './date/date-range/date-range.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatetimePickerComponent } from './date/datetime-picker/datetime-picker.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    WorldskillsAngularLibComponent,
    AlertComponent, AlertsComponent,
    PuppeteerBannerComponent,
    StagingBannerComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    LogoComponent, WordmarkComponent,
    MenuAccessPipe,
    FooterComponent,
    DateRangeComponent, DatetimePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OAuthModule.forRoot(),
    NgbModule
  ],
  exports: [
    WorldskillsAngularLibComponent,
    AlertComponent, AlertsComponent,
    PuppeteerBannerComponent,
    StagingBannerComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    LogoComponent, WordmarkComponent,
    MenuAccessPipe,
    FooterComponent,
    DateRangeComponent, DatetimePickerComponent
  ]
})
export class WorldskillsAngularLibModule { }

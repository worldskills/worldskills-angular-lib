import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuAccessPipe } from './pipes/menu-access.pipe';
import { FooterComponent } from './footer/footer.component';
import {
  ModuleConfigService, ServiceConfigToken, WSHttpConfigToken, AuthConfigToken, AppConfigToken
} from './config/module-config.service';
import { ServiceConfig } from './config/service-config';
import { SortPipe } from './pipes/sort.pipe';
import { WSHttpConfig } from './config/ws-http-config';
import { AuthConfig } from 'angular-oauth2-oidc';
import { GetCollectionItemsPipe } from './pipes/get-collection-items.pipe';
import { GetObjectPropertyPipe } from './pipes/get-object-property.pipe';
import { AlertComponent } from './alert/alert.component';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PuppeteerBannerComponent } from './banners/puppeteer-banner/puppeteer-banner.component';
import { StagingBannerComponent } from './banners/staging-banner/staging-banner.component';
import { WordmarkComponent } from './logos/wordmark/wordmark.component';
import { LogoComponent } from './logos/logo/logo.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VoteControlComponent } from './votes/vote-control/vote-control.component';
import { FormsModule } from '@angular/forms';
import { AppConfig } from './config/app-config';
import { PollResultGraphComponent } from './votes/poll-result-graph/poll-result-graph.component';
import { StandardPollComponent } from './votes/standard-poll/standard-poll.component';
import { WeightedPollComponent } from './votes/weighted-poll/weighted-poll.component';
import { DatetimePickerComponent } from './datetime-picker/datetime-picker.component';
import { EntityTreeSelectComponent } from './entity-tree-select/entity-tree-select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectDirective } from './directives/select/select.directive';

@NgModule({
  declarations: [
    AlertComponent,
    BreadcrumbsComponent,
    FooterComponent,
    GetCollectionItemsPipe,
    GetObjectPropertyPipe,
    HeaderComponent,
    MenuAccessPipe,
    RelativeDatePipe,
    SortPipe,
    PuppeteerBannerComponent,
    StagingBannerComponent,
    WordmarkComponent,
    LogoComponent,
    DateRangeComponent,
    VoteControlComponent,
    PollResultGraphComponent,
    StandardPollComponent,
    WeightedPollComponent,
    DatetimePickerComponent,
    EntityTreeSelectComponent,
    SelectDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    NgSelectModule
  ],
  exports: [
    AlertComponent,
    BreadcrumbsComponent,
    FooterComponent,
    GetCollectionItemsPipe,
    GetObjectPropertyPipe,
    HeaderComponent,
    MenuAccessPipe,
    RelativeDatePipe,
    SortPipe,
    PuppeteerBannerComponent,
    StagingBannerComponent,
    WordmarkComponent,
    LogoComponent,
    DateRangeComponent,
    VoteControlComponent,
    PollResultGraphComponent,
    StandardPollComponent,
    WeightedPollComponent,
    DatetimePickerComponent,
    EntityTreeSelectComponent,
    SelectDirective,
  ]
})
export class WorldskillsAngularLibModule {

  service: ServiceConfig;
  auth: AuthConfig;
  encoder: WSHttpConfig;
  app: AppConfig;

  constructor() {
    this.service = new ServiceConfig();
    this.auth = new AuthConfig();
    this.encoder = new WSHttpConfig();
    this.app = new AppConfig();
  }

  static forConfig(service: ServiceConfig, auth: AuthConfig, encoder: WSHttpConfig, app?: AppConfig)
         : ModuleWithProviders<WorldskillsAngularLibModule> {

    return {
      ngModule: WorldskillsAngularLibModule,
      providers: [
        ModuleConfigService,
        {
          provide: ServiceConfigToken,
          useValue: service
        },
        {
          provide: AuthConfigToken,
          useValue: auth
        },
        {
          provide: WSHttpConfigToken,
          useValue: encoder
        },
        {
          provide: AppConfigToken,
          useValue: app
        }
      ]
    };
  }

  static forFn(callback: (obj: WorldskillsAngularLibModule) => WorldskillsAngularLibModule)
  : ModuleWithProviders<WorldskillsAngularLibModule> {
    const instance = new WorldskillsAngularLibModule();
    return callback(instance).build();
  }

  build(): ModuleWithProviders<WorldskillsAngularLibModule>  {
    return {
      ngModule: WorldskillsAngularLibModule,
      providers: [
        ModuleConfigService,
        {
          provide: ServiceConfigToken,
          useValue: this.service
        },
        {
            provide: AuthConfigToken,
            useValue: this.auth
        },
        {
            provide: WSHttpConfigToken,
            useValue: this.encoder
        },
        {
          provide: AppConfigToken,
          useValue: this.app
        }
      ]
    };
  }
}


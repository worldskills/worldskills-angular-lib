import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuAccessPipe } from './pipes/menu-access.pipe';
import { FooterComponent } from './footer/footer.component';
import { ModuleConfigService, ServiceConfigToken, OAuthConfigToken, WSHttpConfigToken } from './config/module-config.service';
import { ServiceConfig } from './config/service-config';
import { OAuthConfig } from './config/oauth-config';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { PagerComponent } from './pager/pager.component';
import { SortPipe } from './pipes/sort.pipe';
import { WSHttpConfig } from './config/ws-http-config';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    ButtonToggleComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MenuAccessPipe,
    PagerComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent,
    ButtonToggleComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MenuAccessPipe,
    PagerComponent,
    SortPipe
  ]
})
export class WorldskillsAngularLibModule {

  static forConfig(serviceConfig: ServiceConfig, oAuthConfig: OAuthConfig, encoderConfig: WSHttpConfig) {

    return {
      ngModule: WorldskillsAngularLibModule,
      providers: [
        ModuleConfigService,
        {
          provide: ServiceConfigToken,
          useValue: serviceConfig
        },
        {
          provide: OAuthConfigToken,
          useValue: oAuthConfig
        },
        {
          provide: WSHttpConfigToken,
          useValue: encoderConfig
        }
      ]
    };
  }
}


/*
@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MenuAccessPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MenuAccessPipe
  ]
})
*/

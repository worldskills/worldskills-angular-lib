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
import { ModuleConfigService, ServiceConfigToken, OAuthConfigToken } from './config/module-config.service';
import { ServiceConfig } from './config/service-config';
import { OAuthConfig } from './config/oauth-config';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { PagerComponent } from './pager/pager.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MenuAccessPipe,
    ButtonToggleComponent,
    PagerComponent
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
    MenuAccessPipe
  ]
})
export class WorldskillsAngularLibModule {

  static forConfig(serviceConfig: ServiceConfig, oAuthConfig: OAuthConfig) {

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

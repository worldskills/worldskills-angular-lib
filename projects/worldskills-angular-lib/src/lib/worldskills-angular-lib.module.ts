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
import { ModuleConfigService, ServiceConfigToken, WSHttpConfigToken, AuthConfigToken } from './config/module-config.service';
import { ServiceConfig } from './config/service-config';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { PagerComponent } from './pager/pager.component';
import { SortPipe } from './pipes/sort.pipe';
import { WSHttpConfig } from './config/ws-http-config';
import { AuthConfig } from 'angular-oauth2-oidc';
import { GetCollectionItemsPipe } from './pipes/get-collection-items.pipe';
import { GetObjectPropertyPipe } from './pipes/get-object-property.pipe';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    ButtonToggleComponent,
    FooterComponent,
    GetCollectionItemsPipe,
    GetObjectPropertyPipe,
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
    GetCollectionItemsPipe,
    GetObjectPropertyPipe,
    HeaderComponent,
    LogoComponent,
    MenuAccessPipe,
    PagerComponent,
    SortPipe,
  ]
})
export class WorldskillsAngularLibModule {

  static forConfig(serviceConfig: ServiceConfig, authConfig: AuthConfig, encoderConfig: WSHttpConfig) {

    return {
      ngModule: WorldskillsAngularLibModule,
      providers: [
        ModuleConfigService,
        {
          provide: ServiceConfigToken,
          useValue: serviceConfig
        },
        {
          provide: AuthConfigToken,
          useValue: authConfig
        },
        {
          provide: WSHttpConfigToken,
          useValue: encoderConfig
        }
      ]
    };
  }
}


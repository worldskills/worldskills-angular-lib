import { NgModule, ModuleWithProviders } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuAccessPipe } from './pipes/menu-access.pipe';
import { FooterComponent } from './footer/footer.component';
import { ModuleConfigService, ServiceConfigToken, WSHttpConfigToken, AuthConfigToken } from './config/module-config.service';
import { ServiceConfig } from './config/service-config';
import { SortPipe } from './pipes/sort.pipe';
import { WSHttpConfig } from './config/ws-http-config';
import { AuthConfig } from 'angular-oauth2-oidc';
import { GetCollectionItemsPipe } from './pipes/get-collection-items.pipe';
import { GetObjectPropertyPipe } from './pipes/get-object-property.pipe';
import { AlertComponent } from './alert/alert.component';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AlertComponent,
    BreadcrumbsComponent,
    FooterComponent,
    GetCollectionItemsPipe,
    GetObjectPropertyPipe,
    HeaderComponent,
    LogoComponent,
    MenuAccessPipe,
    RelativeDatePipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    AlertComponent,
    BreadcrumbsComponent,
    FooterComponent,
    GetCollectionItemsPipe,
    GetObjectPropertyPipe,
    HeaderComponent,
    LogoComponent,
    MenuAccessPipe,
    RelativeDatePipe,
    SortPipe,
  ]
})
export class WorldskillsAngularLibModule {

  static forConfig(serviceConfig: ServiceConfig, authConfig: AuthConfig, encoderConfig: WSHttpConfig)
         : ModuleWithProviders<WorldskillsAngularLibModule> {
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


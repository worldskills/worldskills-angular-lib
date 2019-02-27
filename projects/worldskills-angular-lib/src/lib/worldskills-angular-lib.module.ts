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
export class WorldskillsAngularLibModule { }

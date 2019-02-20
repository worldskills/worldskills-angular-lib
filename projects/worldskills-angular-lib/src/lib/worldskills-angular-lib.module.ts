import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuAccessPipe } from './pipes/menu-access.pipe';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
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
  exports: [BreadcrumbsComponent, HeaderComponent, LogoComponent, MenuAccessPipe]
})
export class WorldskillsAngularLibModule { }

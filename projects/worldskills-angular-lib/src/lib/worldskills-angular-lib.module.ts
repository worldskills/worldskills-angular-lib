import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadcrumbsComponent, LogoComponent],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [BreadcrumbsComponent, LogoComponent]
})
export class WorldskillsAngularLibModule { }

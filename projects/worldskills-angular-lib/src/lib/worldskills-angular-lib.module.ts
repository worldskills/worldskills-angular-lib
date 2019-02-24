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
import { ContentComponent } from './content/content.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MenuAccessPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MenuAccessPipe,
    ModalComponent
  ]
})
export class WorldskillsAngularLibModule { }

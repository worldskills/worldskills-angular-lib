import { NgModule } from '@angular/core';
import { WorldskillsAngularLibComponent } from './worldskills-angular-lib.component';
import { AlertComponent } from './alerts/alert/alert.component';
import { AlertsComponent } from './alerts/alerts/alerts.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [WorldskillsAngularLibComponent, AlertComponent, AlertsComponent],
  imports: [
    BrowserModule
  ],
  exports: [WorldskillsAngularLibComponent, AlertComponent, AlertsComponent]
})
export class WorldskillsAngularLibModule { }

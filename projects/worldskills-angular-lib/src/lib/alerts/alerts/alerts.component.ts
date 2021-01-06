import { Component, Input, OnInit } from '@angular/core';
import { Alert } from '../alert';
import { AlertService } from '../alert.service';
import { GenericUtil } from "../../common/util/generic.util";

@Component({
  selector: 'ws-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input() wsAlertComponentId: string = '';

  constructor(public alertService: AlertService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  get hasAlerts(): boolean {
    return this.alertService.alerts.length > 0;
  }

  getMyAlertList(){
    return this.alertService.alerts.filter(a => a.wsAlertComponentId === '' ? true:  a.wsAlertComponentId === this.wsAlertComponentId);
  }
}

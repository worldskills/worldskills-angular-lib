import { Component, OnInit } from '@angular/core';
import { Alert } from '../alert';
import { AlertService } from '../alert.service';

@Component({
  selector: 'ws-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(public alertService: AlertService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  get hasAlerts(): boolean {
    return this.alertService.alerts.length > 0;
  }
}

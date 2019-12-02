import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { GenericUtil } from '../util/generic-util';
import { AlertModel } from '../models/alert.model';


@Component({
  selector: 'ws-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(public alertService: AlertService) { }

  ngOnInit() {
  }

  get hasAlerts() {
    return this.alertService.alerts.length > 0;
  }

  isStringNullOrEmpty(s: string) {
    return GenericUtil.isNullOrUndefined(s) ? true : s.length === 0;
  }

  canClose(model: AlertModel) {
    return model.closable;
  }

  dismiss(model: AlertModel) {
    this.alertService.remove(model.id);
  }
}

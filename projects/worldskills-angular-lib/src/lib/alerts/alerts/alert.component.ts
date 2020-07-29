import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { Alert } from '../alert';

@Component({
  selector: 'ws-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(public alertService: AlertService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnChanges() {
  }

  get hasAlerts(): boolean {
    return this.alertService.alerts.length > 0;
  }

  hasMessage(model: Alert): boolean {
    return model.message && model.message.length > 0;
  }

  hasTitle(model: Alert): boolean {
    return model.title && model.title.length > 0;
  }

  canClose(model: Alert): boolean {
    return model.closable;
  }

  dismiss(model: Alert): void {
    this.alertService.remove(model.id);
  }

}

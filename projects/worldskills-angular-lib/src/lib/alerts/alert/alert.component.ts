import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../alert.service';
import { Alert } from '../alert';

@Component({
    selector: 'ws-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css'],
    standalone: false
})
export class AlertComponent implements OnInit {

  @Input() alert: Alert;

  @Input() closeStyle = 'cross'; // cross | button

  constructor(public alertService: AlertService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnChanges() {
  }

  hasMessage(): boolean {
    return this.alert.message && this.alert.message.length > 0;
  }

  hasTitle(): boolean {
    return this.alert.title && this.alert.title.length > 0;
  }

  canClose(): boolean {
    return this.alert.closable;
  }

  dismiss(): void {
    this.alertService.remove(this.alert.id);
  }

}

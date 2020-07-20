import { Component } from '@angular/core';
import { AlertService } from '../../../worldskills-angular-lib/src/lib/alerts/alert.service';
import { AlertType } from '../../../worldskills-angular-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'worldskills-angular-lib-tester';

  constructor(private alerts: AlertService) {}

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.alerts.setAlert('test', AlertType.info, 'Alert!', 'A random alert', false);
  }
}

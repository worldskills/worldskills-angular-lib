import { Component } from '@angular/core';
import { AlertService } from '../../../worldskills-angular-lib/src/lib/alerts/alert.service';
import { AlertType } from '../../../worldskills-angular-lib/src/public-api';
import { WorldskillsAngularLibService } from '../../../worldskills-angular-lib/src/lib/worldskills-angular-lib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'worldskills-angular-lib-tester';

  constructor(private alerts: AlertService, private wsi: WorldskillsAngularLibService) {}

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.wsi.serviceConfig.appCode = [500];
    this.alerts.setAlert('test', AlertType.info, 'Alert!', 'A random alert', false);
  }
}

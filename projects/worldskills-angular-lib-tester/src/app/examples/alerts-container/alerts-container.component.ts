import { Component } from '@angular/core';
import { AlertService, AlertType } from 'worldskills-angular-lib';

@Component({
  selector: 'app-alerts-container',
  standalone: false,
  templateUrl: './alerts-container.component.html',
  styleUrl: './alerts-container.component.css',
})
export class AlertsContainerComponent {
  constructor(private alerts: AlertService) {}

  ngOnInit(): void {
    // Add a test alert
    const alertId = "alert-id-1"; // the ID for this alert, this will allow you to programatically remove it or check if the alert is already present
    const alertComponentId = 'AlertsContainerComponent';; // useful if you need to know which component raised the alert

    this.alerts.remove(alertId); // remove any existing alert with the same ID preventing duplicate alerts
    this.alerts.setAlert(alertId, AlertType.info, "Info", "This is an info alert from AlertsContainerComponent", true), alertComponentId;
  }
}

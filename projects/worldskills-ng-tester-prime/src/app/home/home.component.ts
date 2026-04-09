import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { WsAlertComponent, WsAlertService } from 'worldskills-ng-ui';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, WsAlertComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private alerts: WsAlertService) {}

  showSuccess() { this.alerts.success('The record was saved successfully.'); }
  showInfo()    { this.alerts.info('Your session will expire in 5 minutes.'); }
  showWarn()    { this.alerts.warn('This action will affect 14 related records.', 'Warning'); }
  showError()   { this.alerts.error('Failed to connect to the server. Please try again.'); }
  showSticky()  { this.alerts.info('This message stays until dismissed.', 'Sticky', { sticky: true }); }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { WsAlertComponent, WsAlertService, EntityTreeSelectComponent, EntityService } from 'worldskills-ng-ui';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, FormsModule, InputTextModule, WsAlertComponent, EntityTreeSelectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private alerts = inject(WsAlertService);
  private entityService = inject(EntityService);

  accessToken = sessionStorage.getItem('access_token') ?? '';
  entitySelectVisible = true;

  applyToken(): void {
    sessionStorage.setItem('access_token', this.accessToken);
    this.entityService.clearCache();
    this.entitySelectVisible = false;
    setTimeout(() => { this.entitySelectVisible = true; }, 0);
  }

  showSuccess() { this.alerts.success('The record was saved successfully.'); }
  showInfo()    { this.alerts.info('Your session will expire in 5 minutes.'); }
  showWarn()    { this.alerts.warn('This action will affect 14 related records.', 'Warning'); }
  showError()   { this.alerts.error('Failed to connect to the server. Please try again.'); }
  showSticky()  { this.alerts.info('This message stays until dismissed.', 'Sticky', { sticky: true }); }
}

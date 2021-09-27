import { Injectable } from '@angular/core';
import { Alert } from './alert';
import { AlertType } from './alert-type';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alerts: Alert[];

  constructor() {
    this.alerts = [];
  }

  public remove(id: string): void {
    const index = this.alerts.findIndex(item => item.id === id);
    if (index !== -1) {
      this.alerts.splice(index, 1);
    }
  }

  public setAlert(id: string, type: AlertType, title?: string, message?: string, closable?: boolean, wsAlertComponentId?: string): void  {
    title = title || '';
    message = message || '';
    closable = closable || false;
    wsAlertComponentId = wsAlertComponentId || '';

    this.alerts.push({
      id, type, title, message, closable, wsAlertComponentId
    });
  }
}

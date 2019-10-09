import { Injectable } from '@angular/core';
import { AlertModel } from '../models/alert.model';
import { AlertType } from '../models/alert.type';

// Likely to be moved to library
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alerts: AlertModel[];

  constructor() {
    this.alerts = [];
  }

  public remove(id: string) {
    const index = this.alerts.findIndex(item => item.id === id);
    if (index !== -1) {
      this.alerts.splice(index, 1);
    }
  }

  public setAlert(id: string, type: AlertType, error: any, title?: string, message?: string, closable?: boolean)  {
    title = title || '';
    message = message || '';
    closable = closable || false;
    this.alerts.push(new AlertModel({
      id,
      type,
      title,
      message,
      closable
    }));
  }

  public setInfo(id: string, title?: string, message?: string)  {
    this.setAlert(id, AlertType.info, null, title, message, true);
  }

  public setError(id: string, error: any, title?: string, message?: string)  {
    this.setAlert(id, AlertType.error, error, title, message, true);
  }

  public setWarning(id: string, title: string, message: string) {
    this.setAlert(id, AlertType.warning, null, title, message, true);
  }
}

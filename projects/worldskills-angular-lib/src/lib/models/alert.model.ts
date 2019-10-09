import { AlertType } from './alert.type';
export class AlertModel {
  id: string;
  type: AlertType;
  title: string;
  message: string;
  closable: boolean;

  constructor(obj?: Partial<AlertModel>) {
    this.id = obj && obj.id || '';
    this.type = obj && obj.type || AlertType.info;
    this.title = obj && obj.title || '';
    this.message = obj && obj.message || '';
    this.closable = obj && obj.closable || false;
  }
}

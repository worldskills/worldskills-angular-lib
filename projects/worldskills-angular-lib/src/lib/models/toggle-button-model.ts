import { Action } from 'rxjs/internal/scheduler/Action';

export class ToggleButtonModel {
  name: string;
  text: string;
  htmlClass: string;

  constructor(obj?: any) {
    this.name = obj && obj.name || '';
    this.text = obj && obj.text || '';
    this.htmlClass = obj && obj.htmlClass || 'btn btn-primary btn-sm';
  }
}

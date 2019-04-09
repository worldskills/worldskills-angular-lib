import { Action } from 'rxjs/internal/scheduler/Action';

export class ToggleButtonModel {
  name: string;
  text: string;
  active: boolean;
  htmlClass: string;

  constructor(obj?: any) {
    this.name = obj && obj.name || '';
    this.text = obj && obj.text || '';
    this.active = obj && obj.active || false;
    this.htmlClass = obj && obj.htmlClass || 'btn btn-primary btn-sm';
  }

  get buttonClass() {
    return this.active ? this.htmlClass + ' active' : this.htmlClass;
  }
}

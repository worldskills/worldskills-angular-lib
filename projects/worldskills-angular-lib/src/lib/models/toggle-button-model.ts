import { Action } from 'rxjs/internal/scheduler/Action';

export class ToggleButtonModel {
  name: string;
  text: string;
  active: boolean;
  htmlClass: string;

  constructor() {
    this.htmlClass = 'btn btn-primary btn-sm';
  }

  get buttonClass() {
    return this.active ? this.htmlClass + ' active' : this.htmlClass;
  }
}

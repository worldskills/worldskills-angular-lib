import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToggleButtonModel } from '../models/toggle-button-model';

@Component({
  selector: 'ws-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent implements OnInit {

  @Input() buttons: Array<ToggleButtonModel>;

  @Input() activeButtonName: string;


  @Output() buttonClickedEvent: EventEmitter<ToggleButtonModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {}

  buttonClicked(model: ToggleButtonModel) {
    this.activeButtonName = model.name;
    this.buttonClickedEvent.emit(model);
  }

  buttonClass(model: ToggleButtonModel) {
    return this.activeButtonName === model.name
      ? model.htmlClass + ' active'
      : model.htmlClass;
  }

}

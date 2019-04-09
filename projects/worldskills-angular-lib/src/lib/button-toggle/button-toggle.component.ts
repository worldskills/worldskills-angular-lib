import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToggleButtonModel } from '../models/toggle-button-model';

@Component({
  selector: 'ws-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent implements OnInit {

  @Input() buttons: Array<ToggleButtonModel>;

  @Output() buttonClickedEvent: EventEmitter<ToggleButtonModel> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {}

  buttonClicked(model: ToggleButtonModel) {
    if (model.active) {
      return;
    }

    this.buttons.forEach(item => {
      item.active = item.name === model.name;
    });

    model.active = true;

    this.buttonClickedEvent.emit(model);
  }

}

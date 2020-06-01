// modified datetime picker from https://stackblitz.com/edit/angular-datetimepicker

import { Component, Input, forwardRef, EventEmitter, Output, HostBinding, ViewChild } from '@angular/core';
import { NgbTimeStruct, NgbDate, NgbPopoverConfig, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DatetimeModel } from '../models/datetime.model';

@Component({
  selector: 'ws-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css'],
  providers: [
    DatePipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatetimePickerComponent),
      multi: true
    }
  ]
})
export class DatetimePickerComponent implements ControlValueAccessor {

  @Input() disabled = false;
  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  @Input()
  inputDatetimeFormat = 'dd/MM/yyyy HH:mm';

  @Input() hourStep = 1;

  @Input() minuteStep = 1;

  @Input() secondStep = 30;

  @Input() seconds = false;

  showTimePickerToggle = false;

  value: DatetimeModel;

  model: NgbDate | null;

  @ViewChild('popOver')
  popover: NgbPopover;

  // tslint:disable-next-line:no-output-native
  @Output() change = new EventEmitter<DatetimeModel>();

  // Function to call when the range changes.
  onChange = (value: DatetimeModel) => {};

  // Function to call when the input is touched.
  onTouched = () => {};

  constructor(private config: NgbPopoverConfig) {
    config.autoClose = 'outside';
    config.placement = 'auto';
  }

  writeValue(obj: DatetimeModel) {
    // report value back to the model
    if (obj && !this.disabled) {
      this.model = this.toNgbDate(new Date(obj.toString()));
      this.value = obj;
      this.onChange(obj);
      this.change.emit(obj);
    } else {
      // when there's no input model registered
      this.value = DatetimeModel.asToday();
      this.change.emit(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange($event: any) {
    const value = $event.target.value;
    const dt = DatetimeModel.fromLocalString(value);

    if (dt) {
      this.writeValue(dt);
    } else if (value.trim() === '') {
      this.writeValue(new DatetimeModel());
    }
  }

  toggleDateTimeState() {
    this.showTimePickerToggle = !this.showTimePickerToggle;
  }

  onDateChange(date: NgbDate) {
    if (!this.value) {
      this.value = new DatetimeModel();
    }

    this.value.year = date.year;
    this.value.month = date.month;
    this.value.day = date.day;
    this.writeValue(this.value);
  }

  onTimeChange(event: NgbTimeStruct) {
    this.value.hour = event.hour;
    this.value.minute = event.minute;
    this.value.second = event.second;
    this.writeValue(this.value);
  }

  onAccept() {
    if (this.popover.isOpen()) {
      this.popover.close();
    }
  }

  inputBlur($event) {
    this.onTouched();
  }

  toNgbDate(date: Date): NgbDate {
    date = this.parseDate(date);
    return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }

  parseDate(value: any): Date {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
  }
}

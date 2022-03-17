import { Component, Input, HostBinding, ViewChild, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgbDate, NgbPopover, NgbPopoverConfig, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { toDate } from '../../common/helpers/date.helper';
import { Datetime } from '../datetime';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';

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
  @Input() readonly = false;
  @HostBinding('style.opacity')
  get opacity(): number {
    return this.disabled ? 0.25 : 1;
  }

  @Input()
  inputDatetimeFormat = 'dd/MM/yyyy HH:mm';

  @Input() hourStep = 1;

  @Input() minuteStep = 1;

  @Input() secondStep = 30;

  @Input() seconds = false;

  @Input() maxDate: NgbDateStruct;

  @Input() minDate: NgbDateStruct = new NgbDate(1900, 1, 1);

  showTimePickerToggle = false;

  value: Datetime;

  model: NgbDate | null;

  @ViewChild('popOver')
  popover: NgbPopover;

  // tslint:disable-next-line:no-output-native
  @Output() change = new EventEmitter<Datetime>();

  // Function to call when the range changes.
  onChange = (value: Datetime) => {};

  // Function to call when the input is touched.
  onTouched = () => {};

  constructor(private config: NgbPopoverConfig) {
    config.autoClose = 'outside';
    config.placement = 'auto';
  }

  writeValue(obj: Datetime): void {
    // report value back to the model
    if (obj && !this.disabled) {
      this.model = this.toNgbDate(new Date(obj.toString()));
      this.value = obj;
      this.onChange(obj);
      this.change.emit(obj);
    } else {
      // when there's no input model registered
      this.value = Datetime.asToday();
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

  onInputChange($event: any): void {
    const value = $event.target.value;
    const dt = Datetime.fromLocalString(value);
    if (dt) {
      this.writeValue(dt);
    } else if (value.trim() === '') {
      this.writeValue(new Datetime());
    }
  }

  toggleDateTimeState(): void {
    this.showTimePickerToggle = !this.showTimePickerToggle;
  }

  onDateChange(date: NgbDate): void {
    if (!this.value) {
      this.value = new Datetime();
    }

    this.value.year = date.year;
    this.value.month = date.month;
    this.value.day = date.day;
    this.writeValue(this.value);
  }

  onTimeChange(event: NgbTimeStruct): void {
    this.value.hour = event.hour;
    this.value.minute = event.minute;
    this.value.second = event.second;
    this.writeValue(this.value);
  }

  onAccept(): void {
    if (this.popover.isOpen()) {
      this.popover.close();
    }
  }

  inputBlur($event): void {
    this.onTouched();
  }

  toNgbDate(date: Date): NgbDate {
    date = toDate(date);
    return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }

}

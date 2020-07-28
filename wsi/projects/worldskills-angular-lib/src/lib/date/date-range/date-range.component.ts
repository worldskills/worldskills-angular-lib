import { Component, OnInit, Input, HostBinding, forwardRef, Output, EventEmitter } from '@angular/core';
import { toDate } from '../../helpers/date.helper';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DateRange } from '../date-range';

@Component({
  selector: 'ws-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangeComponent),
      multi: true
    }
  ]
})
export class DateRangeComponent implements ControlValueAccessor  {

  @Input() disabled = false;
  @HostBinding('style.opacity')
  get opacity(): number {
    return this.disabled ? 0.25 : 1;
  }

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  value: DateRange;

  // tslint:disable-next-line:no-output-native
  @Output() change = new EventEmitter<DateRange>();

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
  }

  onDateSelection(date: NgbDate): void {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    if (this.fromDate && this.toDate) {
      if (!this.value) {
        this.value = { start: new Date(), end: new Date() };
      }
      this.value.start = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day);
      this.value.end = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day);
      this.writeValue(this.value);
    }
  }

  isHovered(date: NgbDate): boolean {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate): boolean {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate): boolean {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  // Function to call when the range changes.
  onChange = (range: DateRange) => {};

  // Function to call when the input is touched.
  onTouched = () => {};

  writeValue(obj: DateRange): void {
    if (obj && !this.disabled) {
      this.fromDate =  this.toNgbDate(obj.start);
      this.toDate =  this.toNgbDate(obj.end);
      this.value = obj;
      this.onChange(obj);
      this.change.emit(obj);
    }
  }

  toNgbDate(date: Date): NgbDate {
    date = toDate(date);
    return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
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
}

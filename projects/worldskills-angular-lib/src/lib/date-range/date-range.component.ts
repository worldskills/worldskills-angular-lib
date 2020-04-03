import { Component, EventEmitter, Input, Output, forwardRef, HostBinding } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateRange } from '../models/date-range';


// TODO: Move to library once working correctly
/* NOTE: This is not a direct copy and paste as the ng-bootstrap example did not work properly
  some enhancement were also done to make this re-usable
  font-awesome icons were used instead of bootstrap icons (for consistency)
*/
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
export class DateRangeComponent implements ControlValueAccessor {

  @Input() disabled = false;
  @HostBinding('style.opacity')
  get opacity() {
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

  onDateSelection(date: NgbDate) {
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
        this.value = new DateRange();
      }
      this.value.start = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day);
      this.value.end = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day);
      this.writeValue(this.value);
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
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
    date = this.parseDate(date);
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

  parseDate(value: any): Date {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
  }

}

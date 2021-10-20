import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from '../../common/helpers/date.helper';

@Component({
  selector: 'ws-relative-date',
  templateUrl: './relative-date.component.html',
  styleUrls: ['./relative-date.component.css']
})
export class RelativeDateComponent implements OnInit {

  @Input() date: Date;
  @Input() format: string;
  @Input() locale: string;

  // number of daays relative proessing is calculated for
  @Input() tresholdInDays = 30;

  output: string;
  isPastDate: boolean;
  isRelative: boolean;
  diff: number;
  daydiff: number;

  calculateDelta = (now, date) => Math.round(Math.abs(now - date) / 1000);

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void {
    this.calcRelativeDate();
  }

  calcRelativeDate(): void {
    const dt =  new Date(this.date);
    const isDateValid = dt.toString() !== 'Invalid Date';
    if (!isDateValid) {
      this.output = formatDate(this.date, this.format, this.locale);
      return;
    }

    this.format = this.format || 'MMM-dd-yyyy';
    this.locale = this.locale || 'en';
    const v = Number(this.date);
    const dif = Math.floor(((Date.now() - v) / 1000) / 86400);

    if (dif < this.tresholdInDays) {
      this.isRelative = true;
      const now = new Date();
      this.isPastDate = this.date.getTime() <= now.getTime();
      if (this.isPastDate) {
        this.diff = ((now.getTime() - this.date.getTime()) / 1000);
      } else {
        this.diff = (( this.date.getTime() - now.getTime()) / 1000);
      }
      this.daydiff = Math.floor(this.diff / 86400);
    } else {
      this.isRelative = false;
      this.output = formatDate(this.date, this.format, this.locale);
    }
  }

  isNotValid(): boolean {
    return isNaN(this.daydiff) || this.daydiff < 0 || this.daydiff >= 31;
  }

  ceil(value): number {
    return Math.ceil(value);
  }

  floor(value): number {
    return Math.floor(value);
  }
}

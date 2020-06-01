import { NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { GenericUtil } from '../util/generic-util';

export interface NgbDatetimeStruct extends NgbDateStruct, NgbTimeStruct { }

export class DatetimeModel implements NgbDatetimeStruct {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;

  timeZoneOffset: number;

  public constructor( init?: Partial<DatetimeModel>) {
    Object.assign(this, init);
  }

  public static asToday() {
    const date = new Date();

    return new DatetimeModel({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      timeZoneOffset: date.getTimezoneOffset()
    });
  }

  public static fromLocalString(dateString: string): DatetimeModel {
    dateString = dateString.trim();
    const pieces = dateString.split(' ');
    let date: Date;

    if (pieces.length > 0) {
      let dateParts = [];
      let timeParts = [];
      if (pieces[0].indexOf('/') > -1) {
        dateParts = pieces[0].split('/');
      }
      if (pieces.length > 1) {
        timeParts = pieces[1].split(':');
      }
      if (timeParts.length === 0) {
        date = new Date(dateParts[2].substr(0, 4) + '-' + dateParts[1] + '-' + dateParts[0]);
      } else {
        date = new Date(dateParts[2].substr(0, 4) + '-' + dateParts[1] + '-' + dateParts[0] + ' ' + timeParts.join(':'));
      }

    } else {
      date = new Date(dateString);
    }

    const isValidDate = !isNaN(date.valueOf());

    if (!dateString || !isValidDate) {
      return null;
    }

    return new DatetimeModel({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      timeZoneOffset: date.getTimezoneOffset()
    });
  }

  private isInteger(value: any): value is number {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  }

  public toString(): string {
    if (this.isInteger(this.year) && this.isInteger(this.month) && this.isInteger(this.day)) {
      const year = this.year.toString().padStart(2, '0');
      const month = this.month.toString().padStart(2, '0');
      const day = this.day.toString().padStart(2, '0');

      if (!this.hour) {
        this.hour = 0;
      }
      if (!this.minute) {
        this.minute = 0;
      }
      if (!this.second) {
        this.second = 0;
      }
      if (!this.timeZoneOffset) {
        this.timeZoneOffset = new Date().getTimezoneOffset();
      }

      const hour = this.hour.toString().padStart(2, '0');
      const minute = this.minute.toString().padStart(2, '0');
      const second = this.second.toString().padStart(2, '0');

      const tzo = -this.timeZoneOffset;
      const dif = tzo >= 0 ? '+' : '-';
      const pad = (num) => {
        const norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
      };

      // tslint:disable-next-line:max-line-length
      const isoString = `${pad(year)}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}:${pad(second)}${dif}${pad(tzo / 60)}:${pad(tzo % 60)}`;
      return isoString;
    }

    return null;
  }
}


import { Pipe, PipeTransform } from '@angular/core';

import { DatePipe } from '@angular/common';
// based of: http://www.angulartutorial.net/2017/10/how-to-show-date-is-today-or-yesterday.html

@Pipe({
  name: 'relativeDate',
})
export class RelativeDatePipe implements PipeTransform {
  transform(value: Date, format?: string) {
    format = format || 'MMM-dd-yyyy';
    const v = Number(value);
    const dif = Math.floor(((Date.now() - v) / 1000) / 86400);

    if (dif < 30) {
      return convertToNiceDate(value);
    } else {
      return value.toString();
    }
  }
}

function convertToNiceDate(date: Date) {
  const diff = (((new Date()).getTime() - date.getTime()) / 1000);
  const daydiff = Math.floor(diff / 86400);

  if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31) {
    return '';
  }

  return daydiff === 0 && (
    diff < 60 && 'Just now' ||
    diff < 120 && '1 minute ago' ||
    diff < 3600 && Math.floor(diff / 60) + ' minutes ago' ||
    diff < 7200 && '1 hour ago' ||
    diff < 86400 && Math.floor(diff / 3600) + ' hours ago') ||
    daydiff === 1 && 'Yesterday' ||
    daydiff < 7 && daydiff + ' days ago' ||
    daydiff < 31 && Math.ceil(daydiff / 7) + ' week(s) ago';
}

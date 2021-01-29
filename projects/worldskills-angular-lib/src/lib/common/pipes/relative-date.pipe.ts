import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
// based of: http://www.angulartutorial.net/2017/10/how-to-show-date-is-today-or-yesterday.html
@Pipe({
  name: 'relativeDate',
})
export class RelativeDatePipe implements PipeTransform {
  transform(value: Date, format?: string, locale?: string): string {
    const dt =  new Date(value);
    const isDateValid = dt.toString() !== 'Invalid Date';

    if (!isDateValid) {
      return formatDate(value, format, locale);
    }

    format = format || 'MMM-dd-yyyy';
    locale = locale || 'en';
    const v = Number(value);
    const dif = Math.floor(((Date.now() - v) / 1000) / 86400);

    if (dif < 30) {
      return convertToNiceDate(value);
    } else {
      return formatDate(value, format, locale);
    }
  }
}

function convertToNiceDate(date: Date): string {
  const now = new Date();
  return date.getTime() < now.getTime() ? handlePastDate(date) : handleFutureDate(date);
}

function handlePastDate(date: Date): string {
  const now = new Date();
  const diff = ((now.getTime() - date.getTime()) / 1000);
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

function handleFutureDate(date: Date): string {
  const now = new Date();
  const diff = (( date.getTime() - now.getTime()) / 1000);
  const daydiff = Math.floor(diff / 86400);

  if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31) {
    return '';
  }

  return daydiff === 0 && (
    diff < 60 && 'Just now' ||
    diff < 120 && '1 minute from now' ||
    diff < 3600 && Math.floor(diff / 60) + ' minutes from now' ||
    diff < 7200 && '1 hour from now' ||
    diff < 86400 && Math.floor(diff / 3600) + ' hours from now') ||
    daydiff === 1 && 'Tomorrow' ||
    daydiff < 7 && daydiff + ' days from now' ||
    daydiff < 31 && Math.ceil(daydiff / 7) + ' week(s) from now';
}

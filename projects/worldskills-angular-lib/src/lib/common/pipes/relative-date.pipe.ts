import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
import { RelativeDateProcessor } from '../processors/relative-date/relative-date-processor';
import { DefaultRelativeDateProccessor } from '../processors/relative-date/default-relative-date-processor';
// based of: http://www.angulartutorial.net/2017/10/how-to-show-date-is-today-or-yesterday.html
@Pipe({
    name: 'relativeDate',
    standalone: false
})
export class RelativeDatePipe implements PipeTransform {
  /**
   * @deprecated The method should not be used. use tthe relative-date component instead
   */
  transform(value: Date, format?: string, locale?: string, processor?: RelativeDateProcessor): string {
    processor = processor || new DefaultRelativeDateProccessor();
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
      const now = new Date();
      return value.getTime() < now.getTime() ? processor.handlePastDate(value) : processor.handleFutureDate(value);
    } else {
      return formatDate(value, format, locale);
    }
  }
}


import { formatDate } from '@angular/common';

export class DateUtil {
  // example: '2019-04-25T16:10:25+0200'
  static toJavaDateString(date: Date, locale: string): string {
    return formatDate(date, 'yyyy-MM-ddTHH:mm:ssZ', locale);
  }
}

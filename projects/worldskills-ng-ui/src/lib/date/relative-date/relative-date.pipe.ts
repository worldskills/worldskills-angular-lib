import { Pipe, PipeTransform, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'wsRelativeDate',
  standalone: true,
  pure: false, // impure so it reacts to language changes from TranslateService
})
export class RelativeDatePipe implements PipeTransform {

  private translate = inject(TranslateService);
  private datePipe = new DatePipe('en');

  transform(
    date: Date | string | null | undefined,
    format = 'mediumDate',
    locale = 'en',
    thresholdInDays = 30,
  ): string {
    if (!date) return '';

    const dt = date instanceof Date ? date : new Date(date as string);
    if (isNaN(dt.getTime())) return String(date);

    const now = Date.now();
    const diffMs = now - dt.getTime();
    const diffDays = Math.floor(Math.abs(diffMs) / 86_400_000);

    if (diffDays >= thresholdInDays) {
      return this.datePipe.transform(dt, format, undefined, locale) ?? '';
    }

    const isPast = diffMs >= 0;
    const diffSeconds = Math.floor(Math.abs(diffMs) / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffSeconds / 3600);
    const diffWeeks = Math.ceil(diffDays / 7);

    const t = (key: string, params?: object) =>
      this.translate.instant(`ws_ui.relative_date.${key}`, params);

    if (isPast) {
      if (diffSeconds < 60)  return t('just_now');
      if (diffSeconds < 120) return t('minute_ago');
      if (diffSeconds < 3600) return t('minutes_ago', { count: diffMinutes });
      if (diffSeconds < 7200) return t('hour_ago');
      if (diffSeconds < 86400) return t('hours_ago', { count: diffHours });
      if (diffDays === 1) return t('yesterday');
      if (diffDays < 7)   return t('days_ago', { count: diffDays });
      if (diffDays === 7) return t('week_ago');
      return t('weeks_ago', { count: diffWeeks });
    } else {
      if (diffSeconds < 60)  return t('soon');
      if (diffSeconds < 120) return t('in_a_minute');
      if (diffSeconds < 3600) return t('in_n_minutes', { count: diffMinutes });
      if (diffSeconds < 7200) return t('in_an_hour');
      if (diffSeconds < 86400) return t('in_n_hours', { count: diffHours });
      if (diffDays === 1) return t('tomorrow');
      if (diffDays < 7)   return t('in_n_days', { count: diffDays });
      if (diffDays === 7) return t('in_a_week');
      return t('in_n_weeks', { count: diffWeeks });
    }
  }
}

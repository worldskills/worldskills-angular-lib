import { RelativeDateProcessor } from '../../../worldskills-angular-lib/src/lib/common/processors/relative-date/relative-date-processor';
export class RelativeDateProc implements RelativeDateProcessor {
    handlePastDate(date: Date): string {
        const now = new Date();
        const diff = ((now.getTime() - date.getTime()) / 1000);
        const daydiff = Math.floor(diff / 86400);

        if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31) {
            return '';
        }

        return daydiff === 0 && (
            diff < 60 && 'Just now' ||
            diff < 120 && '1 minute' ||
            diff < 3600 && Math.floor(diff / 60) + ' minutes' ||
            diff < 7200 && '1 hour' ||
            diff < 86400 && Math.floor(diff / 3600) + ' hours') ||
            daydiff === 1 && 'Yesterday' ||
            daydiff < 7 && daydiff + ' days' ||
            daydiff === 7 && '1 week' ||
            daydiff < 31 && Math.ceil(daydiff / 7) + ' weeks';
    }
    handleFutureDate(date: Date): string {
        const now = new Date();
        const diff = (( date.getTime() - now.getTime()) / 1000);
        const daydiff = Math.floor(diff / 86400);

        if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31) {
            return '';
        }

        return daydiff === 0 && (
            diff < 60 && 'Soon' ||
            diff < 120 && '1 minute from now' ||
            diff < 3600 && Math.floor(diff / 60) + ' minutes from now' ||
            diff < 7200 && '1 hour from now' ||
            diff < 86400 && Math.floor(diff / 3600) + ' hours from now') ||
            daydiff === 1 && 'Tomorrow' ||
            daydiff < 7 && daydiff + ' days from now' ||
            daydiff === 7 && '1 week from now' ||
            daydiff < 31 && Math.ceil(daydiff / 7) + ' weeks from now';
    }
}

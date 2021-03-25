import { RelativeDateProcessor } from './relative-date-processor';
export class DefaultRelativeDateProccessor implements RelativeDateProcessor {
    handlePastDate(date: Date): string {
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
            daydiff === 7 && '1 week ago' ||
            daydiff < 31 && Math.ceil(daydiff / 7) + ' weeks ago';
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

export interface RelativeDateProcessor {
    handlePastDate(date: Date): string;
    handleFutureDate(date: Date): string;
}

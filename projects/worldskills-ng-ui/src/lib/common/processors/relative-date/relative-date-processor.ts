/**
 * @deprecated The method should not be used. use tthe relative-date component instead
 */
export interface RelativeDateProcessor {
    handlePastDate(date: Date): string;
    handleFutureDate(date: Date): string;
}

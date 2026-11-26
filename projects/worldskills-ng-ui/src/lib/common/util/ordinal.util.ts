/**
 * Utility class for converting numbers to ordinal format (1st, 2nd, 3rd, 4th, etc.)
 * Supports multiple locales and formatting options
 */
export class OrdinalUtil {

  /**
   * Converts a number to its ordinal representation in English (e.g., 1 → "1st", 2 → "2nd")
   * @param num - The number to convert to ordinal format
   * @param options - Optional formatting options
   * @returns The ordinal string representation
   * @throws Error if input is not a valid number
   * 
   * @example
   * OrdinalUtil.toOrdinal(1) // "1st"
   * OrdinalUtil.toOrdinal(22) // "22nd"
   * OrdinalUtil.toOrdinal(103) // "103rd"
   */
  public static toOrdinal(num: number, options: OrdinalOptions = {}): string {
    // Input validation
    if (!Number.isFinite(num)) {
      throw new Error('Input must be a finite number');
    }

    const { 
      locale = 'en',
      absoluteValue = false,
      includeNumber = true 
    } = options;

    // Handle negative numbers
    const absNum = absoluteValue ? Math.abs(num) : num;
    const isNegative = num < 0 && !absoluteValue;

    // Convert to integer for ordinal calculation
    const intNum = Math.floor(Math.abs(num));

    let ordinalString: string;

    switch (locale) {
      case 'en':
      default:
        ordinalString = this.getEnglishOrdinal(intNum, includeNumber);
        break;
    }

    return isNegative ? `-${ordinalString}` : ordinalString;
  }

  /**
   * Legacy method name for backward compatibility
   * @deprecated Use toOrdinal() instead
   */
  public static applyDefault(i: number): string {
    return this.toOrdinal(i);
  }

  /**
   * Gets just the ordinal suffix for a number (st, nd, rd, th)
   * @param num - The number to get the suffix for
   * @param locale - The locale for the suffix (default: 'en')
   * @returns The ordinal suffix
   * 
   * @example
   * OrdinalUtil.getOrdinalSuffix(1) // "st"
   * OrdinalUtil.getOrdinalSuffix(22) // "nd"
   */
  public static getOrdinalSuffix(num: number, locale: string = 'en'): string {
    if (!Number.isFinite(num)) {
      throw new Error('Input must be a finite number');
    }

    const intNum = Math.floor(Math.abs(num));

    switch (locale) {
      case 'en':
      default:
        return this.getEnglishSuffix(intNum);
    }
  }

  /**
   * Converts an array of numbers to their ordinal representations
   * @param numbers - Array of numbers to convert
   * @param options - Optional formatting options
   * @returns Array of ordinal strings
   */
  public static toOrdinalArray(numbers: number[], options: OrdinalOptions = {}): string[] {
    if (!Array.isArray(numbers)) {
      throw new Error('Input must be an array of numbers');
    }

    return numbers.map(num => this.toOrdinal(num, options));
  }

  /**
   * Checks if a string is a valid ordinal number
   * @param str - The string to check
   * @param locale - The locale to check against (default: 'en')
   * @returns True if the string is a valid ordinal
   * 
   * @example
   * OrdinalUtil.isOrdinal("1st") // true
   * OrdinalUtil.isOrdinal("22nd") // true
   * OrdinalUtil.isOrdinal("invalid") // false
   */
  public static isOrdinal(str: string, locale: string = 'en'): boolean {
    if (typeof str !== 'string') {
      return false;
    }

    switch (locale) {
      case 'en':
      default:
        return /^-?\d+(st|nd|rd|th)$/i.test(str.trim());
    }
  }

  /**
   * Parses an ordinal string back to its numeric value
   * @param ordinalStr - The ordinal string to parse (e.g., "1st", "22nd")
   * @param locale - The locale of the ordinal string (default: 'en')
   * @returns The numeric value
   * @throws Error if the string is not a valid ordinal
   * 
   * @example
   * OrdinalUtil.parseOrdinal("1st") // 1
   * OrdinalUtil.parseOrdinal("22nd") // 22
   */
  public static parseOrdinal(ordinalStr: string, locale: string = 'en'): number {
    if (!this.isOrdinal(ordinalStr, locale)) {
      throw new Error(`"${ordinalStr}" is not a valid ordinal number`);
    }

    switch (locale) {
      case 'en':
      default:
        const match = ordinalStr.match(/^(-?\d+)(st|nd|rd|th)$/i);
        return match ? parseInt(match[1], 10) : NaN;
    }
  }

  /**
   * Private method to get English ordinal representation
   */
  private static getEnglishOrdinal(num: number, includeNumber: boolean): string {
    const suffix = this.getEnglishSuffix(num);
    return includeNumber ? `${num}${suffix}` : suffix;
  }

  /**
   * Private method to get English ordinal suffix following standard rules:
   * - Numbers ending in 1 (except 11) get "st"
   * - Numbers ending in 2 (except 12) get "nd" 
   * - Numbers ending in 3 (except 13) get "rd"
   * - All others get "th"
   */
  private static getEnglishSuffix(num: number): string {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    // Handle special cases for 11, 12, 13 which always use "th"
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return 'th';
    }

    // Standard rules based on last digit
    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  /**
   * Gets a range of ordinal numbers
   * @param start - Starting number
   * @param end - Ending number (inclusive)
   * @param options - Optional formatting options
   * @returns Array of ordinal strings
   * 
   * @example
   * OrdinalUtil.getOrdinalRange(1, 5) // ["1st", "2nd", "3rd", "4th", "5th"]
   */
  public static getOrdinalRange(start: number, end: number, options: OrdinalOptions = {}): string[] {
    if (!Number.isFinite(start) || !Number.isFinite(end)) {
      throw new Error('Start and end must be finite numbers');
    }

    if (start > end) {
      throw new Error('Start must be less than or equal to end');
    }

    const range: number[] = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return this.toOrdinalArray(range, options);
  }
}

/**
 * Options for ordinal formatting
 */
export interface OrdinalOptions {
  /** The locale for formatting (default: 'en') */
  locale?: string;
  /** Whether to use absolute value for negative numbers (default: false) */
  absoluteValue?: boolean;
  /** Whether to include the number in the output (default: true) */
  includeNumber?: boolean;
}

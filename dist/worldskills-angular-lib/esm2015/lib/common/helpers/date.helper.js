"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = exports.isoStringToDate = exports.toDate = exports.formatDate = exports.ISO8601_DATE_REGEX = void 0;
// Source: https://github.com/angular/angular/blob/d1ea1f4c7f3358b730b0d94e65b00bc28cae279c/packages/common/src/i18n/format_date.ts
const common_1 = require("@angular/common");
exports.ISO8601_DATE_REGEX = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
//    1        2       3         4          5          6          7          8  9     10      11
const NAMED_FORMATS = {};
const DATE_FORMATS_SPLIT = 
// tslint:disable-next-line:max-line-length
/((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
var ZoneWidth;
(function (ZoneWidth) {
    ZoneWidth[ZoneWidth["Short"] = 0] = "Short";
    ZoneWidth[ZoneWidth["ShortGMT"] = 1] = "ShortGMT";
    ZoneWidth[ZoneWidth["Long"] = 2] = "Long";
    ZoneWidth[ZoneWidth["Extended"] = 3] = "Extended";
})(ZoneWidth || (ZoneWidth = {}));
var DateType;
(function (DateType) {
    DateType[DateType["FullYear"] = 0] = "FullYear";
    DateType[DateType["Month"] = 1] = "Month";
    DateType[DateType["Date"] = 2] = "Date";
    DateType[DateType["Hours"] = 3] = "Hours";
    DateType[DateType["Minutes"] = 4] = "Minutes";
    DateType[DateType["Seconds"] = 5] = "Seconds";
    DateType[DateType["FractionalSeconds"] = 6] = "FractionalSeconds";
    DateType[DateType["Day"] = 7] = "Day";
})(DateType || (DateType = {}));
var TranslationType;
(function (TranslationType) {
    TranslationType[TranslationType["DayPeriods"] = 0] = "DayPeriods";
    TranslationType[TranslationType["Days"] = 1] = "Days";
    TranslationType[TranslationType["Months"] = 2] = "Months";
    TranslationType[TranslationType["Eras"] = 3] = "Eras";
})(TranslationType || (TranslationType = {}));
/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a date according to locale rules.
 *
 * @param value The date to format, as a Date, or a number (milliseconds since UTC epoch)
 * or an [ISO date-time string](https://www.w3.org/TR/NOTE-datetime).
 * @param format The date-time components to include. See `DatePipe` for details.
 * @param locale A locale code for the locale format rules to use.
 * @param timezone The time zone. A time zone offset from GMT (such as `'+0430'`),
 * or a standard UTC/GMT or continental US time zone abbreviation.
 * If not specified, uses host system settings.
 *
 * @returns The formatted date string.
 *
 * @see `DatePipe`
 * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
 *
 * @publicApi
 */
function formatDate(value, format, locale, timezone) {
    let date = toDate(value);
    const namedFormat = getNamedFormat(locale, format);
    format = namedFormat || format;
    let parts = [];
    let match;
    while (format) {
        match = DATE_FORMATS_SPLIT.exec(format);
        if (match) {
            parts = parts.concat(match.slice(1));
            const part = parts.pop();
            if (!part) {
                break;
            }
            format = part;
        }
        else {
            parts.push(format);
            break;
        }
    }
    let dateTimezoneOffset = date.getTimezoneOffset();
    if (timezone) {
        dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
        date = convertTimezoneToLocal(date, timezone, true);
    }
    let text = '';
    // tslint:disable-next-line:no-shadowed-variable
    parts.forEach(value => {
        const dateFormatter = getDateFormatter(value);
        text += dateFormatter ?
            dateFormatter(date, locale, dateTimezoneOffset) :
            value === '\'\'' ? '\'' : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
    });
    return text;
}
exports.formatDate = formatDate;
function getNamedFormat(locale, format) {
    const localeId = common_1.getLocaleId(locale);
    NAMED_FORMATS[localeId] = NAMED_FORMATS[localeId] || {};
    if (NAMED_FORMATS[localeId][format]) {
        return NAMED_FORMATS[localeId][format];
    }
    let formatValue = '';
    switch (format) {
        case 'shortDate':
            formatValue = common_1.getLocaleDateFormat(locale, common_1.FormatWidth.Short);
            break;
        case 'mediumDate':
            formatValue = common_1.getLocaleDateFormat(locale, common_1.FormatWidth.Medium);
            break;
        case 'longDate':
            formatValue = common_1.getLocaleDateFormat(locale, common_1.FormatWidth.Long);
            break;
        case 'fullDate':
            formatValue = common_1.getLocaleDateFormat(locale, common_1.FormatWidth.Full);
            break;
        case 'shortTime':
            formatValue = common_1.getLocaleTimeFormat(locale, common_1.FormatWidth.Short);
            break;
        case 'mediumTime':
            formatValue = common_1.getLocaleTimeFormat(locale, common_1.FormatWidth.Medium);
            break;
        case 'longTime':
            formatValue = common_1.getLocaleTimeFormat(locale, common_1.FormatWidth.Long);
            break;
        case 'fullTime':
            formatValue = common_1.getLocaleTimeFormat(locale, common_1.FormatWidth.Full);
            break;
        case 'short':
            const shortTime = getNamedFormat(locale, 'shortTime');
            const shortDate = getNamedFormat(locale, 'shortDate');
            formatValue = formatDateTime(common_1.getLocaleDateTimeFormat(locale, common_1.FormatWidth.Short), [shortTime, shortDate]);
            break;
        case 'medium':
            const mediumTime = getNamedFormat(locale, 'mediumTime');
            const mediumDate = getNamedFormat(locale, 'mediumDate');
            formatValue = formatDateTime(common_1.getLocaleDateTimeFormat(locale, common_1.FormatWidth.Medium), [mediumTime, mediumDate]);
            break;
        case 'long':
            const longTime = getNamedFormat(locale, 'longTime');
            const longDate = getNamedFormat(locale, 'longDate');
            formatValue =
                formatDateTime(common_1.getLocaleDateTimeFormat(locale, common_1.FormatWidth.Long), [longTime, longDate]);
            break;
        case 'full':
            const fullTime = getNamedFormat(locale, 'fullTime');
            const fullDate = getNamedFormat(locale, 'fullDate');
            formatValue =
                formatDateTime(common_1.getLocaleDateTimeFormat(locale, common_1.FormatWidth.Full), [fullTime, fullDate]);
            break;
    }
    if (formatValue) {
        NAMED_FORMATS[localeId][format] = formatValue;
    }
    return formatValue;
}
// tslint:disable-next-line:variable-name
function formatDateTime(str, opt_values) {
    if (opt_values) {
        // tslint:disable-next-line:only-arrow-functions
        str = str.replace(/\{([^}]+)}/g, function (match, key) {
            return (opt_values != null && key in opt_values) ? opt_values[key] : match;
        });
    }
    return str;
}
function padNumber(num, digits, minusSign = '-', trim, negWrap) {
    let neg = '';
    if (num < 0 || (negWrap && num <= 0)) {
        if (negWrap) {
            num = -num + 1;
        }
        else {
            num = -num;
            neg = minusSign;
        }
    }
    let strNum = String(num);
    while (strNum.length < digits) {
        strNum = '0' + strNum;
    }
    if (trim) {
        strNum = strNum.substr(strNum.length - digits);
    }
    return neg + strNum;
}
function formatFractionalSeconds(milliseconds, digits) {
    const strMs = padNumber(milliseconds, 3);
    return strMs.substr(0, digits);
}
/**
 * Returns a date formatter that transforms a date into its locale digit representation
 */
function dateGetter(name, size, offset = 0, trim = false, negWrap = false) {
    // tslint:disable-next-line:only-arrow-functions
    return function (date, locale) {
        let part = getDatePart(name, date);
        if (offset > 0 || part > -offset) {
            part += offset;
        }
        if (name === DateType.Hours) {
            if (part === 0 && offset === -12) {
                part = 12;
            }
        }
        else if (name === DateType.FractionalSeconds) {
            return formatFractionalSeconds(part, size);
        }
        const localeMinus = common_1.getLocaleNumberSymbol(locale, common_1.NumberSymbol.MinusSign);
        return padNumber(part, size, localeMinus, trim, negWrap);
    };
}
function getDatePart(part, date) {
    switch (part) {
        case DateType.FullYear:
            return date.getFullYear();
        case DateType.Month:
            return date.getMonth();
        case DateType.Date:
            return date.getDate();
        case DateType.Hours:
            return date.getHours();
        case DateType.Minutes:
            return date.getMinutes();
        case DateType.Seconds:
            return date.getSeconds();
        case DateType.FractionalSeconds:
            return date.getMilliseconds();
        case DateType.Day:
            return date.getDay();
        default:
            throw new Error(`Unknown DateType value "${part}".`);
    }
}
/**
 * Returns a date formatter that transforms a date into its locale string representation
 */
function dateStrGetter(name, width, form = common_1.FormStyle.Format, extended = false) {
    // tslint:disable-next-line:only-arrow-functions
    return function (date, locale) {
        return getDateTranslation(date, locale, name, width, form, extended);
    };
}
/**
 * Returns the locale translation of a date for a given form, type and width
 */
// tslint:disable-next-line:typedef
function getDateTranslation(date, locale, name, width, form, extended) {
    switch (name) {
        case TranslationType.Months:
            return common_1.getLocaleMonthNames(locale, form, width)[date.getMonth()];
        case TranslationType.Days:
            return common_1.getLocaleDayNames(locale, form, width)[date.getDay()];
        case TranslationType.DayPeriods:
            const currentHours = date.getHours();
            const currentMinutes = date.getMinutes();
            if (extended) {
                const rules = common_1.getLocaleExtraDayPeriodRules(locale);
                const dayPeriods = common_1.getLocaleExtraDayPeriods(locale, form, width);
                const index = rules.findIndex(rule => {
                    if (Array.isArray(rule)) {
                        // morning, afternoon, evening, night
                        const [from, to] = rule;
                        const afterFrom = currentHours >= from.hours && currentMinutes >= from.minutes;
                        const beforeTo = (currentHours < to.hours ||
                            (currentHours === to.hours && currentMinutes < to.minutes));
                        // We must account for normal rules that span a period during the day (e.g. 6am-9am)
                        // where `from` is less (earlier) than `to`. But also rules that span midnight (e.g.
                        // 10pm - 5am) where `from` is greater (later!) than `to`.
                        //
                        // In the first case the current time must be BOTH after `from` AND before `to`
                        // (e.g. 8am is after 6am AND before 10am).
                        //
                        // In the second case the current time must be EITHER after `from` OR before `to`
                        // (e.g. 4am is before 5am but not after 10pm; and 11pm is not before 5am but it is
                        // after 10pm).
                        if (from.hours < to.hours) {
                            if (afterFrom && beforeTo) {
                                return true;
                            }
                        }
                        else if (afterFrom || beforeTo) {
                            return true;
                        }
                    }
                    else { // noon or midnight
                        if (rule.hours === currentHours && rule.minutes === currentMinutes) {
                            return true;
                        }
                    }
                    return false;
                });
                if (index !== -1) {
                    return dayPeriods[index];
                }
            }
            // if no rules for the day periods, we use am/pm by default
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            return common_1.getLocaleDayPeriods(locale, form, width)[currentHours < 12 ? 0 : 1];
        case TranslationType.Eras:
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            return common_1.getLocaleEraNames(locale, width)[date.getFullYear() <= 0 ? 0 : 1];
        default:
            // This default case is not needed by TypeScript compiler, as the switch is exhaustive.
            // However Closure Compiler does not understand that and reports an error in typed mode.
            // The `throw new Error` below works around the problem, and the unexpected: never variable
            // makes sure tsc still checks this code is unreachable.
            const unexpected = name;
            throw new Error(`unexpected translation type ${unexpected}`);
    }
}
/**
 * Returns a date formatter that transforms a date and an offset into a timezone with ISO8601 or
 * GMT format depending on the width (eg: short = +0430, short:GMT = GMT+4, long = GMT+04:30,
 * extended = +04:30)
 */
function timeZoneGetter(width) {
    // tslint:disable-next-line:only-arrow-functions typedef
    return function (date, locale, offset) {
        const zone = -1 * offset;
        const minusSign = common_1.getLocaleNumberSymbol(locale, common_1.NumberSymbol.MinusSign);
        const hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
        switch (width) {
            case ZoneWidth.Short:
                return ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) +
                    padNumber(Math.abs(zone % 60), 2, minusSign);
            case ZoneWidth.ShortGMT:
                return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber(hours, 1, minusSign);
            case ZoneWidth.Long:
                return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) + ':' +
                    padNumber(Math.abs(zone % 60), 2, minusSign);
            case ZoneWidth.Extended:
                if (offset === 0) {
                    return 'Z';
                }
                else {
                    return ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) + ':' +
                        padNumber(Math.abs(zone % 60), 2, minusSign);
                }
            default:
                throw new Error(`Unknown zone width "${width}"`);
        }
    };
}
const JANUARY = 0;
const THURSDAY = 4;
function getFirstThursdayOfYear(year) {
    const firstDayOfYear = (new Date(year, JANUARY, 1)).getDay();
    return new Date(year, 0, 1 + ((firstDayOfYear <= THURSDAY) ? THURSDAY : THURSDAY + 7) - firstDayOfYear);
}
function getThursdayThisWeek(datetime) {
    return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (THURSDAY - datetime.getDay()));
}
function weekGetter(size, monthBased = false) {
    // tslint:disable-next-line:only-arrow-functions typedef
    return function (date, locale) {
        let result;
        if (monthBased) {
            const nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
            const today = date.getDate();
            result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
        }
        else {
            const firstThurs = getFirstThursdayOfYear(date.getFullYear());
            const thisThurs = getThursdayThisWeek(date);
            const diff = thisThurs.getTime() - firstThurs.getTime();
            result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week
        }
        return padNumber(result, size, common_1.getLocaleNumberSymbol(locale, common_1.NumberSymbol.MinusSign));
    };
}
const DATE_FORMATS = {};
// Based on CLDR formats:
// See complete list: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
// See also explanations: http://cldr.unicode.org/translation/date-time
// TODO(ocombe): support all missing cldr formats: Y, U, Q, D, F, e, c, j, J, C, A, v, V, X, x
function getDateFormatter(format) {
    if (DATE_FORMATS[format]) {
        return DATE_FORMATS[format];
    }
    let formatter;
    switch (format) {
        // Era name (AD/BC)
        case 'G':
        case 'GG':
        case 'GGG':
            formatter = dateStrGetter(TranslationType.Eras, common_1.TranslationWidth.Abbreviated);
            break;
        case 'GGGG':
            formatter = dateStrGetter(TranslationType.Eras, common_1.TranslationWidth.Wide);
            break;
        case 'GGGGG':
            formatter = dateStrGetter(TranslationType.Eras, common_1.TranslationWidth.Narrow);
            break;
        // 1 digit representation of the year, e.g. (AD 1 => 1, AD 199 => 199)
        case 'y':
            formatter = dateGetter(DateType.FullYear, 1, 0, false, true);
            break;
        // 2 digit representation of the year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
        case 'yy':
            formatter = dateGetter(DateType.FullYear, 2, 0, true, true);
            break;
        // 3 digit representation of the year, padded (000-999). (e.g. AD 2001 => 01, AD 2010 => 10)
        case 'yyy':
            formatter = dateGetter(DateType.FullYear, 3, 0, false, true);
            break;
        // 4 digit representation of the year (e.g. AD 1 => 0001, AD 2010 => 2010)
        case 'yyyy':
            formatter = dateGetter(DateType.FullYear, 4, 0, false, true);
            break;
        // Month of the year (1-12), numeric
        case 'M':
        case 'L':
            formatter = dateGetter(DateType.Month, 1, 1);
            break;
        case 'MM':
        case 'LL':
            formatter = dateGetter(DateType.Month, 2, 1);
            break;
        // Month of the year (January, ...), string, format
        case 'MMM':
            formatter = dateStrGetter(TranslationType.Months, common_1.TranslationWidth.Abbreviated);
            break;
        case 'MMMM':
            formatter = dateStrGetter(TranslationType.Months, common_1.TranslationWidth.Wide);
            break;
        case 'MMMMM':
            formatter = dateStrGetter(TranslationType.Months, common_1.TranslationWidth.Narrow);
            break;
        // Month of the year (January, ...), string, standalone
        case 'LLL':
            formatter =
                dateStrGetter(TranslationType.Months, common_1.TranslationWidth.Abbreviated, common_1.FormStyle.Standalone);
            break;
        case 'LLLL':
            formatter =
                dateStrGetter(TranslationType.Months, common_1.TranslationWidth.Wide, common_1.FormStyle.Standalone);
            break;
        case 'LLLLL':
            formatter =
                dateStrGetter(TranslationType.Months, common_1.TranslationWidth.Narrow, common_1.FormStyle.Standalone);
            break;
        // Week of the year (1, ... 52)
        case 'w':
            formatter = weekGetter(1);
            break;
        case 'ww':
            formatter = weekGetter(2);
            break;
        // Week of the month (1, ...)
        case 'W':
            formatter = weekGetter(1, true);
            break;
        // Day of the month (1-31)
        case 'd':
            formatter = dateGetter(DateType.Date, 1);
            break;
        case 'dd':
            formatter = dateGetter(DateType.Date, 2);
            break;
        // Day of the Week
        case 'E':
        case 'EE':
        case 'EEE':
            formatter = dateStrGetter(TranslationType.Days, common_1.TranslationWidth.Abbreviated);
            break;
        case 'EEEE':
            formatter = dateStrGetter(TranslationType.Days, common_1.TranslationWidth.Wide);
            break;
        case 'EEEEE':
            formatter = dateStrGetter(TranslationType.Days, common_1.TranslationWidth.Narrow);
            break;
        case 'EEEEEE':
            formatter = dateStrGetter(TranslationType.Days, common_1.TranslationWidth.Short);
            break;
        // Generic period of the day (am-pm)
        case 'a':
        case 'aa':
        case 'aaa':
            formatter = dateStrGetter(TranslationType.DayPeriods, common_1.TranslationWidth.Abbreviated);
            break;
        case 'aaaa':
            formatter = dateStrGetter(TranslationType.DayPeriods, common_1.TranslationWidth.Wide);
            break;
        case 'aaaaa':
            formatter = dateStrGetter(TranslationType.DayPeriods, common_1.TranslationWidth.Narrow);
            break;
        // Extended period of the day (midnight, at night, ...), standalone
        case 'b':
        case 'bb':
        case 'bbb':
            formatter = dateStrGetter(TranslationType.DayPeriods, common_1.TranslationWidth.Abbreviated, common_1.FormStyle.Standalone, true);
            break;
        case 'bbbb':
            formatter = dateStrGetter(TranslationType.DayPeriods, common_1.TranslationWidth.Wide, common_1.FormStyle.Standalone, true);
            break;
        case 'bbbbb':
            formatter = dateStrGetter(TranslationType.DayPeriods, common_1.TranslationWidth.Narrow, common_1.FormStyle.Standalone, true);
            break;
        // Extended period of the day (midnight, night, ...), standalone
        case 'B':
        case 'BB':
        case 'BBB':
            formatter = dateStrGetter(TranslationType.DayPeriods, common_1.TranslationWidth.Abbreviated, common_1.FormStyle.Format, true);
            break;
        case 'BBBB':
            formatter =
                dateStrGetter(TranslationType.DayPeriods, common_1.TranslationWidth.Wide, common_1.FormStyle.Format, true);
            break;
        case 'BBBBB':
            formatter = dateStrGetter(TranslationType.DayPeriods, common_1.TranslationWidth.Narrow, common_1.FormStyle.Format, true);
            break;
        // Hour in AM/PM, (1-12)
        case 'h':
            formatter = dateGetter(DateType.Hours, 1, -12);
            break;
        case 'hh':
            formatter = dateGetter(DateType.Hours, 2, -12);
            break;
        // Hour of the day (0-23)
        case 'H':
            formatter = dateGetter(DateType.Hours, 1);
            break;
        // Hour in day, padded (00-23)
        case 'HH':
            formatter = dateGetter(DateType.Hours, 2);
            break;
        // Minute of the hour (0-59)
        case 'm':
            formatter = dateGetter(DateType.Minutes, 1);
            break;
        case 'mm':
            formatter = dateGetter(DateType.Minutes, 2);
            break;
        // Second of the minute (0-59)
        case 's':
            formatter = dateGetter(DateType.Seconds, 1);
            break;
        case 'ss':
            formatter = dateGetter(DateType.Seconds, 2);
            break;
        // Fractional second
        case 'S':
            formatter = dateGetter(DateType.FractionalSeconds, 1);
            break;
        case 'SS':
            formatter = dateGetter(DateType.FractionalSeconds, 2);
            break;
        case 'SSS':
            formatter = dateGetter(DateType.FractionalSeconds, 3);
            break;
        // Timezone ISO8601 short format (-0430)
        case 'Z':
        case 'ZZ':
        case 'ZZZ':
            formatter = timeZoneGetter(ZoneWidth.Short);
            break;
        // Timezone ISO8601 extended format (-04:30)
        case 'ZZZZZ':
            formatter = timeZoneGetter(ZoneWidth.Extended);
            break;
        // Timezone GMT short format (GMT+4)
        case 'O':
        case 'OO':
        case 'OOO':
        // Should be location, but fallback to format O instead because we don't have the data yet
        case 'z':
        case 'zz':
        case 'zzz':
            formatter = timeZoneGetter(ZoneWidth.ShortGMT);
            break;
        // Timezone GMT long format (GMT+0430)
        case 'OOOO':
        case 'ZZZZ':
        // Should be location, but fallback to format O instead because we don't have the data yet
        case 'zzzz':
            formatter = timeZoneGetter(ZoneWidth.Long);
            break;
        default:
            return null;
    }
    DATE_FORMATS[format] = formatter;
    return formatter;
}
function timezoneToOffset(timezone, fallback) {
    // Support: IE 9-11 only, Edge 13-15+
    // IE/Edge do not "understand" colon (`:`) in timezone
    timezone = timezone.replace(/:/g, '');
    const requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
}
function addDateMinutes(date, minutes) {
    date = new Date(date.getTime());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
}
function convertTimezoneToLocal(date, timezone, reverse) {
    const reverseValue = reverse ? -1 : 1;
    const dateTimezoneOffset = date.getTimezoneOffset();
    const timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
    return addDateMinutes(date, reverseValue * (timezoneOffset - dateTimezoneOffset));
}
/**
 * Converts a value to date.
 *
 * Supported input formats:
 * - `Date`
 * - number: timestamp
 * - string: numeric (e.g. "1234"), ISO and date strings in a format supported by
 *   [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
 *   Note: ISO strings without time return a date without timeoffset.
 *
 * Throws if unable to convert to a date.
 */
function toDate(value) {
    if (isDate(value)) {
        return value;
    }
    if (typeof value === 'number' && !isNaN(value)) {
        return new Date(value);
    }
    if (typeof value === 'string') {
        value = value.trim();
        const parsedNb = parseFloat(value);
        // any string that only contains numbers, like "1234" but not like "1234hello"
        if (!isNaN(value - parsedNb)) {
            return new Date(parsedNb);
        }
        if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
            /* For ISO Strings without time the day, month and year must be extracted from the ISO String
            before Date creation to avoid time offset and errors in the new Date.
            If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
            date, some browsers (e.g. IE 9) will throw an invalid Date error.
            If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
            is applied.
            Note: ISO months are 0 for January, 1 for February, ... */
            const [y, m, d] = value.split('-').map((val) => +val);
            return new Date(y, m - 1, d);
        }
        let match;
        // tslint:disable-next-line:no-conditional-assignment
        if (match = value.match(exports.ISO8601_DATE_REGEX)) {
            return isoStringToDate(match);
        }
    }
    const date = new Date(value);
    if (!isDate(date)) {
        throw new Error(`Unable to convert "${value}" into a date`);
    }
    return date;
}
exports.toDate = toDate;
/**
 * Converts a date in ISO8601 to a Date.
 * Used instead of `Date.parse` because of browser discrepancies.
 */
function isoStringToDate(match) {
    const date = new Date(0);
    let tzHour = 0;
    let tzMin = 0;
    // match[8] means that the string contains "Z" (UTC) or a timezone like "+01:00" or "+0100"
    const dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
    const timeSetter = match[8] ? date.setUTCHours : date.setHours;
    // if there is a timezone defined like "+01:00" or "+0100"
    if (match[9]) {
        tzHour = Number(match[9] + match[10]);
        tzMin = Number(match[9] + match[11]);
    }
    dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    const h = Number(match[4] || 0) - tzHour;
    const m = Number(match[5] || 0) - tzMin;
    const s = Number(match[6] || 0);
    const ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
    timeSetter.call(date, h, m, s, ms);
    return date;
}
exports.isoStringToDate = isoStringToDate;
function isDate(value) {
    return value instanceof Date && !isNaN(value.valueOf());
}
exports.isDate = isDate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL2NvbW1vbi9oZWxwZXJzL2RhdGUuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7OztBQUVILG1JQUFtSTtBQUVuSSw0Q0FJeUI7QUFFWixRQUFBLGtCQUFrQixHQUMzQixzR0FBc0csQ0FBQztBQUMzRyxnR0FBZ0c7QUFDaEcsTUFBTSxhQUFhLEdBQXFELEVBQUUsQ0FBQztBQUMzRSxNQUFNLGtCQUFrQjtBQUNwQiwyQ0FBMkM7QUFDM0MsbU1BQW1NLENBQUM7QUFFeE0sSUFBSyxTQUtKO0FBTEQsV0FBSyxTQUFTO0lBQ1osMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7SUFDUix5Q0FBSSxDQUFBO0lBQ0osaURBQVEsQ0FBQTtBQUNWLENBQUMsRUFMSSxTQUFTLEtBQVQsU0FBUyxRQUtiO0FBRUQsSUFBSyxRQVNKO0FBVEQsV0FBSyxRQUFRO0lBQ1gsK0NBQVEsQ0FBQTtJQUNSLHlDQUFLLENBQUE7SUFDTCx1Q0FBSSxDQUFBO0lBQ0oseUNBQUssQ0FBQTtJQUNMLDZDQUFPLENBQUE7SUFDUCw2Q0FBTyxDQUFBO0lBQ1AsaUVBQWlCLENBQUE7SUFDakIscUNBQUcsQ0FBQTtBQUNMLENBQUMsRUFUSSxRQUFRLEtBQVIsUUFBUSxRQVNaO0FBRUQsSUFBSyxlQUtKO0FBTEQsV0FBSyxlQUFlO0lBQ2xCLGlFQUFVLENBQUE7SUFDVixxREFBSSxDQUFBO0lBQ0oseURBQU0sQ0FBQTtJQUNOLHFEQUFJLENBQUE7QUFDTixDQUFDLEVBTEksZUFBZSxLQUFmLGVBQWUsUUFLbkI7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFDSCxTQUFnQixVQUFVLENBQ3RCLEtBQXlCLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxRQUFpQjtJQUM5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LENBQUMsRUFBRTtRQUNaLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDekMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDeEMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNqRSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFyQkQsMENBcUJDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLEtBQVU7SUFDL0IsT0FBTyxLQUFLLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFGRCx3QkFFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi9kMWVhMWY0YzdmMzM1OGI3MzBiMGQ5NGU2NWIwMGJjMjhjYWUyNzljL3BhY2thZ2VzL2NvbW1vbi9zcmMvaTE4bi9mb3JtYXRfZGF0ZS50c1xuXG5pbXBvcnQge1xuICBGb3JtYXRXaWR0aCwgRm9ybVN0eWxlLCBnZXRMb2NhbGVEYXRlRm9ybWF0LCBnZXRMb2NhbGVEYXRlVGltZUZvcm1hdCwgZ2V0TG9jYWxlRGF5TmFtZXMsIGdldExvY2FsZURheVBlcmlvZHMsXG4gIGdldExvY2FsZUVyYU5hbWVzLCBnZXRMb2NhbGVFeHRyYURheVBlcmlvZFJ1bGVzLCBnZXRMb2NhbGVFeHRyYURheVBlcmlvZHMsIGdldExvY2FsZUlkLCBnZXRMb2NhbGVNb250aE5hbWVzLFxuICBnZXRMb2NhbGVOdW1iZXJTeW1ib2wsIGdldExvY2FsZVRpbWVGb3JtYXQsIE51bWJlclN5bWJvbCwgVGltZSwgVHJhbnNsYXRpb25XaWR0aFxufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgSVNPODYwMV9EQVRFX1JFR0VYID1cbiAgICAvXihcXGR7NH0pLT8oXFxkXFxkKS0/KFxcZFxcZCkoPzpUKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlxcLihcXGQrKSk/KT8pPyhafChbKy1dKShcXGRcXGQpOj8oXFxkXFxkKSk/KT8kLztcbi8vICAgIDEgICAgICAgIDIgICAgICAgMyAgICAgICAgIDQgICAgICAgICAgNSAgICAgICAgICA2ICAgICAgICAgIDcgICAgICAgICAgOCAgOSAgICAgMTAgICAgICAxMVxuY29uc3QgTkFNRURfRk9STUFUUzoge1tsb2NhbGVJZDogc3RyaW5nXToge1tmb3JtYXQ6IHN0cmluZ106IHN0cmluZ319ID0ge307XG5jb25zdCBEQVRFX0ZPUk1BVFNfU1BMSVQgPVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAvKCg/OlteR3lNTHdXZEVhYkJoSG1zU3paTyddKyl8KD86Jyg/OlteJ118JycpKicpfCg/Okd7MSw1fXx5ezEsNH18TXsxLDV9fEx7MSw1fXx3ezEsMn18V3sxfXxkezEsMn18RXsxLDZ9fGF7MSw1fXxiezEsNX18QnsxLDV9fGh7MSwyfXxIezEsMn18bXsxLDJ9fHN7MSwyfXxTezEsM318ensxLDR9fFp7MSw1fXxPezEsNH0pKShbXFxzXFxTXSopLztcblxuZW51bSBab25lV2lkdGgge1xuICBTaG9ydCxcbiAgU2hvcnRHTVQsXG4gIExvbmcsXG4gIEV4dGVuZGVkXG59XG5cbmVudW0gRGF0ZVR5cGUge1xuICBGdWxsWWVhcixcbiAgTW9udGgsXG4gIERhdGUsXG4gIEhvdXJzLFxuICBNaW51dGVzLFxuICBTZWNvbmRzLFxuICBGcmFjdGlvbmFsU2Vjb25kcyxcbiAgRGF5XG59XG5cbmVudW0gVHJhbnNsYXRpb25UeXBlIHtcbiAgRGF5UGVyaW9kcyxcbiAgRGF5cyxcbiAgTW9udGhzLFxuICBFcmFzXG59XG5cbi8qKlxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogRm9ybWF0cyBhIGRhdGUgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIGRhdGUgdG8gZm9ybWF0LCBhcyBhIERhdGUsIG9yIGEgbnVtYmVyIChtaWxsaXNlY29uZHMgc2luY2UgVVRDIGVwb2NoKVxuICogb3IgYW4gW0lTTyBkYXRlLXRpbWUgc3RyaW5nXShodHRwczovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZSkuXG4gKiBAcGFyYW0gZm9ybWF0IFRoZSBkYXRlLXRpbWUgY29tcG9uZW50cyB0byBpbmNsdWRlLiBTZWUgYERhdGVQaXBlYCBmb3IgZGV0YWlscy5cbiAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICogQHBhcmFtIHRpbWV6b25lIFRoZSB0aW1lIHpvbmUuIEEgdGltZSB6b25lIG9mZnNldCBmcm9tIEdNVCAoc3VjaCBhcyBgJyswNDMwJ2ApLFxuICogb3IgYSBzdGFuZGFyZCBVVEMvR01UIG9yIGNvbnRpbmVudGFsIFVTIHRpbWUgem9uZSBhYmJyZXZpYXRpb24uXG4gKiBJZiBub3Qgc3BlY2lmaWVkLCB1c2VzIGhvc3Qgc3lzdGVtIHNldHRpbmdzLlxuICpcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcuXG4gKlxuICogQHNlZSBgRGF0ZVBpcGVgXG4gKiBAc2VlIFtJbnRlcm5hdGlvbmFsaXphdGlvbiAoaTE4bikgR3VpZGVdKGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pMThuKVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoXG4gICAgdmFsdWU6IHN0cmluZ3xudW1iZXJ8RGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nLCB0aW1lem9uZT86IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBkYXRlID0gdG9EYXRlKHZhbHVlKTtcbiAgY29uc3QgbmFtZWRGb3JtYXQgPSBnZXROYW1lZEZvcm1hdChsb2NhbGUsIGZvcm1hdCk7XG4gIGZvcm1hdCA9IG5hbWVkRm9ybWF0IHx8IGZvcm1hdDtcblxuICBsZXQgcGFydHM6IHN0cmluZ1tdID0gW107XG4gIGxldCBtYXRjaDtcbiAgd2hpbGUgKGZvcm1hdCkge1xuICAgIG1hdGNoID0gREFURV9GT1JNQVRTX1NQTElULmV4ZWMoZm9ybWF0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHBhcnRzID0gcGFydHMuY29uY2F0KG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0cy5wb3AoKTtcbiAgICAgIGlmICghcGFydCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGZvcm1hdCA9IHBhcnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRzLnB1c2goZm9ybWF0KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGxldCBkYXRlVGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIGlmICh0aW1lem9uZSkge1xuICAgIGRhdGVUaW1lem9uZU9mZnNldCA9IHRpbWV6b25lVG9PZmZzZXQodGltZXpvbmUsIGRhdGVUaW1lem9uZU9mZnNldCk7XG4gICAgZGF0ZSA9IGNvbnZlcnRUaW1lem9uZVRvTG9jYWwoZGF0ZSwgdGltZXpvbmUsIHRydWUpO1xuICB9XG5cbiAgbGV0IHRleHQgPSAnJztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXG4gIHBhcnRzLmZvckVhY2godmFsdWUgPT4ge1xuICAgIGNvbnN0IGRhdGVGb3JtYXR0ZXIgPSBnZXREYXRlRm9ybWF0dGVyKHZhbHVlKTtcbiAgICB0ZXh0ICs9IGRhdGVGb3JtYXR0ZXIgP1xuICAgICAgICBkYXRlRm9ybWF0dGVyKGRhdGUsIGxvY2FsZSwgZGF0ZVRpbWV6b25lT2Zmc2V0KSA6XG4gICAgICAgIHZhbHVlID09PSAnXFwnXFwnJyA/ICdcXCcnIDogdmFsdWUucmVwbGFjZSgvKF4nfCckKS9nLCAnJykucmVwbGFjZSgvJycvZywgJ1xcJycpO1xuICB9KTtcblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gZ2V0TmFtZWRGb3JtYXQobG9jYWxlOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgbG9jYWxlSWQgPSBnZXRMb2NhbGVJZChsb2NhbGUpO1xuICBOQU1FRF9GT1JNQVRTW2xvY2FsZUlkXSA9IE5BTUVEX0ZPUk1BVFNbbG9jYWxlSWRdIHx8IHt9O1xuXG4gIGlmIChOQU1FRF9GT1JNQVRTW2xvY2FsZUlkXVtmb3JtYXRdKSB7XG4gICAgcmV0dXJuIE5BTUVEX0ZPUk1BVFNbbG9jYWxlSWRdW2Zvcm1hdF07XG4gIH1cblxuICBsZXQgZm9ybWF0VmFsdWUgPSAnJztcbiAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICBjYXNlICdzaG9ydERhdGUnOlxuICAgICAgZm9ybWF0VmFsdWUgPSBnZXRMb2NhbGVEYXRlRm9ybWF0KGxvY2FsZSwgRm9ybWF0V2lkdGguU2hvcnQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWVkaXVtRGF0ZSc6XG4gICAgICBmb3JtYXRWYWx1ZSA9IGdldExvY2FsZURhdGVGb3JtYXQobG9jYWxlLCBGb3JtYXRXaWR0aC5NZWRpdW0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbG9uZ0RhdGUnOlxuICAgICAgZm9ybWF0VmFsdWUgPSBnZXRMb2NhbGVEYXRlRm9ybWF0KGxvY2FsZSwgRm9ybWF0V2lkdGguTG9uZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmdWxsRGF0ZSc6XG4gICAgICBmb3JtYXRWYWx1ZSA9IGdldExvY2FsZURhdGVGb3JtYXQobG9jYWxlLCBGb3JtYXRXaWR0aC5GdWxsKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Nob3J0VGltZSc6XG4gICAgICBmb3JtYXRWYWx1ZSA9IGdldExvY2FsZVRpbWVGb3JtYXQobG9jYWxlLCBGb3JtYXRXaWR0aC5TaG9ydCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtZWRpdW1UaW1lJzpcbiAgICAgIGZvcm1hdFZhbHVlID0gZ2V0TG9jYWxlVGltZUZvcm1hdChsb2NhbGUsIEZvcm1hdFdpZHRoLk1lZGl1bSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsb25nVGltZSc6XG4gICAgICBmb3JtYXRWYWx1ZSA9IGdldExvY2FsZVRpbWVGb3JtYXQobG9jYWxlLCBGb3JtYXRXaWR0aC5Mb25nKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Z1bGxUaW1lJzpcbiAgICAgIGZvcm1hdFZhbHVlID0gZ2V0TG9jYWxlVGltZUZvcm1hdChsb2NhbGUsIEZvcm1hdFdpZHRoLkZ1bGwpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2hvcnQnOlxuICAgICAgY29uc3Qgc2hvcnRUaW1lID0gZ2V0TmFtZWRGb3JtYXQobG9jYWxlLCAnc2hvcnRUaW1lJyk7XG4gICAgICBjb25zdCBzaG9ydERhdGUgPSBnZXROYW1lZEZvcm1hdChsb2NhbGUsICdzaG9ydERhdGUnKTtcbiAgICAgIGZvcm1hdFZhbHVlID0gZm9ybWF0RGF0ZVRpbWUoXG4gICAgICAgICAgZ2V0TG9jYWxlRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBGb3JtYXRXaWR0aC5TaG9ydCksIFtzaG9ydFRpbWUsIHNob3J0RGF0ZV0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgIGNvbnN0IG1lZGl1bVRpbWUgPSBnZXROYW1lZEZvcm1hdChsb2NhbGUsICdtZWRpdW1UaW1lJyk7XG4gICAgICBjb25zdCBtZWRpdW1EYXRlID0gZ2V0TmFtZWRGb3JtYXQobG9jYWxlLCAnbWVkaXVtRGF0ZScpO1xuICAgICAgZm9ybWF0VmFsdWUgPSBmb3JtYXREYXRlVGltZShcbiAgICAgICAgICBnZXRMb2NhbGVEYXRlVGltZUZvcm1hdChsb2NhbGUsIEZvcm1hdFdpZHRoLk1lZGl1bSksIFttZWRpdW1UaW1lLCBtZWRpdW1EYXRlXSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsb25nJzpcbiAgICAgIGNvbnN0IGxvbmdUaW1lID0gZ2V0TmFtZWRGb3JtYXQobG9jYWxlLCAnbG9uZ1RpbWUnKTtcbiAgICAgIGNvbnN0IGxvbmdEYXRlID0gZ2V0TmFtZWRGb3JtYXQobG9jYWxlLCAnbG9uZ0RhdGUnKTtcbiAgICAgIGZvcm1hdFZhbHVlID1cbiAgICAgICAgICBmb3JtYXREYXRlVGltZShnZXRMb2NhbGVEYXRlVGltZUZvcm1hdChsb2NhbGUsIEZvcm1hdFdpZHRoLkxvbmcpLCBbbG9uZ1RpbWUsIGxvbmdEYXRlXSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmdWxsJzpcbiAgICAgIGNvbnN0IGZ1bGxUaW1lID0gZ2V0TmFtZWRGb3JtYXQobG9jYWxlLCAnZnVsbFRpbWUnKTtcbiAgICAgIGNvbnN0IGZ1bGxEYXRlID0gZ2V0TmFtZWRGb3JtYXQobG9jYWxlLCAnZnVsbERhdGUnKTtcbiAgICAgIGZvcm1hdFZhbHVlID1cbiAgICAgICAgICBmb3JtYXREYXRlVGltZShnZXRMb2NhbGVEYXRlVGltZUZvcm1hdChsb2NhbGUsIEZvcm1hdFdpZHRoLkZ1bGwpLCBbZnVsbFRpbWUsIGZ1bGxEYXRlXSk7XG4gICAgICBicmVhaztcbiAgfVxuICBpZiAoZm9ybWF0VmFsdWUpIHtcbiAgICBOQU1FRF9GT1JNQVRTW2xvY2FsZUlkXVtmb3JtYXRdID0gZm9ybWF0VmFsdWU7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFZhbHVlO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWUoc3RyOiBzdHJpbmcsIG9wdF92YWx1ZXM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgaWYgKG9wdF92YWx1ZXMpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6b25seS1hcnJvdy1mdW5jdGlvbnNcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFx7KFtefV0rKX0vZywgZnVuY3Rpb24obWF0Y2gsIGtleSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKG9wdF92YWx1ZXMgIT0gbnVsbCAmJiBrZXkgaW4gb3B0X3ZhbHVlcykgPyBvcHRfdmFsdWVzW2tleV0gOiBtYXRjaDtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiBwYWROdW1iZXIoXG4gICAgbnVtOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyLCBtaW51c1NpZ24gPSAnLScsIHRyaW0/OiBib29sZWFuLCBuZWdXcmFwPzogYm9vbGVhbik6IHN0cmluZyB7XG4gIGxldCBuZWcgPSAnJztcbiAgaWYgKG51bSA8IDAgfHwgKG5lZ1dyYXAgJiYgbnVtIDw9IDApKSB7XG4gICAgaWYgKG5lZ1dyYXApIHtcbiAgICAgIG51bSA9IC1udW0gKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBudW0gPSAtbnVtO1xuICAgICAgbmVnID0gbWludXNTaWduO1xuICAgIH1cbiAgfVxuICBsZXQgc3RyTnVtID0gU3RyaW5nKG51bSk7XG4gIHdoaWxlIChzdHJOdW0ubGVuZ3RoIDwgZGlnaXRzKSB7XG4gICAgc3RyTnVtID0gJzAnICsgc3RyTnVtO1xuICB9XG4gIGlmICh0cmltKSB7XG4gICAgc3RyTnVtID0gc3RyTnVtLnN1YnN0cihzdHJOdW0ubGVuZ3RoIC0gZGlnaXRzKTtcbiAgfVxuICByZXR1cm4gbmVnICsgc3RyTnVtO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRGcmFjdGlvbmFsU2Vjb25kcyhtaWxsaXNlY29uZHM6IG51bWJlciwgZGlnaXRzOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBzdHJNcyA9IHBhZE51bWJlcihtaWxsaXNlY29uZHMsIDMpO1xuICByZXR1cm4gc3RyTXMuc3Vic3RyKDAsIGRpZ2l0cyk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGRhdGUgZm9ybWF0dGVyIHRoYXQgdHJhbnNmb3JtcyBhIGRhdGUgaW50byBpdHMgbG9jYWxlIGRpZ2l0IHJlcHJlc2VudGF0aW9uXG4gKi9cbmZ1bmN0aW9uIGRhdGVHZXR0ZXIoXG4gICAgbmFtZTogRGF0ZVR5cGUsIHNpemU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIgPSAwLCB0cmltID0gZmFsc2UsXG4gICAgbmVnV3JhcCA9IGZhbHNlKTogRGF0ZUZvcm1hdHRlciB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvbmx5LWFycm93LWZ1bmN0aW9uc1xuICByZXR1cm4gZnVuY3Rpb24oZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBwYXJ0ID0gZ2V0RGF0ZVBhcnQobmFtZSwgZGF0ZSk7XG4gICAgaWYgKG9mZnNldCA+IDAgfHwgcGFydCA+IC1vZmZzZXQpIHtcbiAgICAgIHBhcnQgKz0gb2Zmc2V0O1xuICAgIH1cblxuICAgIGlmIChuYW1lID09PSBEYXRlVHlwZS5Ib3Vycykge1xuICAgICAgaWYgKHBhcnQgPT09IDAgJiYgb2Zmc2V0ID09PSAtMTIpIHtcbiAgICAgICAgcGFydCA9IDEyO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gRGF0ZVR5cGUuRnJhY3Rpb25hbFNlY29uZHMpIHtcbiAgICAgIHJldHVybiBmb3JtYXRGcmFjdGlvbmFsU2Vjb25kcyhwYXJ0LCBzaXplKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbGVNaW51cyA9IGdldExvY2FsZU51bWJlclN5bWJvbChsb2NhbGUsIE51bWJlclN5bWJvbC5NaW51c1NpZ24pO1xuICAgIHJldHVybiBwYWROdW1iZXIocGFydCwgc2l6ZSwgbG9jYWxlTWludXMsIHRyaW0sIG5lZ1dyYXApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREYXRlUGFydChwYXJ0OiBEYXRlVHlwZSwgZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIHN3aXRjaCAocGFydCkge1xuICAgIGNhc2UgRGF0ZVR5cGUuRnVsbFllYXI6XG4gICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNhc2UgRGF0ZVR5cGUuTW9udGg6XG4gICAgICByZXR1cm4gZGF0ZS5nZXRNb250aCgpO1xuICAgIGNhc2UgRGF0ZVR5cGUuRGF0ZTpcbiAgICAgIHJldHVybiBkYXRlLmdldERhdGUoKTtcbiAgICBjYXNlIERhdGVUeXBlLkhvdXJzOlxuICAgICAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjYXNlIERhdGVUeXBlLk1pbnV0ZXM6XG4gICAgICByZXR1cm4gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgY2FzZSBEYXRlVHlwZS5TZWNvbmRzOlxuICAgICAgcmV0dXJuIGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGNhc2UgRGF0ZVR5cGUuRnJhY3Rpb25hbFNlY29uZHM6XG4gICAgICByZXR1cm4gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICBjYXNlIERhdGVUeXBlLkRheTpcbiAgICAgIHJldHVybiBkYXRlLmdldERheSgpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gRGF0ZVR5cGUgdmFsdWUgXCIke3BhcnR9XCIuYCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZGF0ZSBmb3JtYXR0ZXIgdGhhdCB0cmFuc2Zvcm1zIGEgZGF0ZSBpbnRvIGl0cyBsb2NhbGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gKi9cbmZ1bmN0aW9uIGRhdGVTdHJHZXR0ZXIoXG4gICAgbmFtZTogVHJhbnNsYXRpb25UeXBlLCB3aWR0aDogVHJhbnNsYXRpb25XaWR0aCwgZm9ybTogRm9ybVN0eWxlID0gRm9ybVN0eWxlLkZvcm1hdCxcbiAgICBleHRlbmRlZCA9IGZhbHNlKTogRGF0ZUZvcm1hdHRlciB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvbmx5LWFycm93LWZ1bmN0aW9uc1xuICByZXR1cm4gZnVuY3Rpb24oZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXREYXRlVHJhbnNsYXRpb24oZGF0ZSwgbG9jYWxlLCBuYW1lLCB3aWR0aCwgZm9ybSwgZXh0ZW5kZWQpO1xuICB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGxvY2FsZSB0cmFuc2xhdGlvbiBvZiBhIGRhdGUgZm9yIGEgZ2l2ZW4gZm9ybSwgdHlwZSBhbmQgd2lkdGhcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWZcbmZ1bmN0aW9uIGdldERhdGVUcmFuc2xhdGlvbihcbiAgICBkYXRlOiBEYXRlLCBsb2NhbGU6IHN0cmluZywgbmFtZTogVHJhbnNsYXRpb25UeXBlLCB3aWR0aDogVHJhbnNsYXRpb25XaWR0aCwgZm9ybTogRm9ybVN0eWxlLFxuICAgIGV4dGVuZGVkOiBib29sZWFuKSB7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgVHJhbnNsYXRpb25UeXBlLk1vbnRoczpcbiAgICAgIHJldHVybiBnZXRMb2NhbGVNb250aE5hbWVzKGxvY2FsZSwgZm9ybSwgd2lkdGgpW2RhdGUuZ2V0TW9udGgoKV07XG4gICAgY2FzZSBUcmFuc2xhdGlvblR5cGUuRGF5czpcbiAgICAgIHJldHVybiBnZXRMb2NhbGVEYXlOYW1lcyhsb2NhbGUsIGZvcm0sIHdpZHRoKVtkYXRlLmdldERheSgpXTtcbiAgICBjYXNlIFRyYW5zbGF0aW9uVHlwZS5EYXlQZXJpb2RzOlxuICAgICAgY29uc3QgY3VycmVudEhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgY29uc3QgY3VycmVudE1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgIGlmIChleHRlbmRlZCkge1xuICAgICAgICBjb25zdCBydWxlcyA9IGdldExvY2FsZUV4dHJhRGF5UGVyaW9kUnVsZXMobG9jYWxlKTtcbiAgICAgICAgY29uc3QgZGF5UGVyaW9kcyA9IGdldExvY2FsZUV4dHJhRGF5UGVyaW9kcyhsb2NhbGUsIGZvcm0sIHdpZHRoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBydWxlcy5maW5kSW5kZXgocnVsZSA9PiB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocnVsZSkpIHtcbiAgICAgICAgICAgIC8vIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgbmlnaHRcbiAgICAgICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSBydWxlO1xuICAgICAgICAgICAgY29uc3QgYWZ0ZXJGcm9tID0gY3VycmVudEhvdXJzID49IGZyb20uaG91cnMgJiYgY3VycmVudE1pbnV0ZXMgPj0gZnJvbS5taW51dGVzO1xuICAgICAgICAgICAgY29uc3QgYmVmb3JlVG8gPVxuICAgICAgICAgICAgICAgIChjdXJyZW50SG91cnMgPCB0by5ob3VycyB8fFxuICAgICAgICAgICAgICAgICAoY3VycmVudEhvdXJzID09PSB0by5ob3VycyAmJiBjdXJyZW50TWludXRlcyA8IHRvLm1pbnV0ZXMpKTtcbiAgICAgICAgICAgIC8vIFdlIG11c3QgYWNjb3VudCBmb3Igbm9ybWFsIHJ1bGVzIHRoYXQgc3BhbiBhIHBlcmlvZCBkdXJpbmcgdGhlIGRheSAoZS5nLiA2YW0tOWFtKVxuICAgICAgICAgICAgLy8gd2hlcmUgYGZyb21gIGlzIGxlc3MgKGVhcmxpZXIpIHRoYW4gYHRvYC4gQnV0IGFsc28gcnVsZXMgdGhhdCBzcGFuIG1pZG5pZ2h0IChlLmcuXG4gICAgICAgICAgICAvLyAxMHBtIC0gNWFtKSB3aGVyZSBgZnJvbWAgaXMgZ3JlYXRlciAobGF0ZXIhKSB0aGFuIGB0b2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSW4gdGhlIGZpcnN0IGNhc2UgdGhlIGN1cnJlbnQgdGltZSBtdXN0IGJlIEJPVEggYWZ0ZXIgYGZyb21gIEFORCBiZWZvcmUgYHRvYFxuICAgICAgICAgICAgLy8gKGUuZy4gOGFtIGlzIGFmdGVyIDZhbSBBTkQgYmVmb3JlIDEwYW0pLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEluIHRoZSBzZWNvbmQgY2FzZSB0aGUgY3VycmVudCB0aW1lIG11c3QgYmUgRUlUSEVSIGFmdGVyIGBmcm9tYCBPUiBiZWZvcmUgYHRvYFxuICAgICAgICAgICAgLy8gKGUuZy4gNGFtIGlzIGJlZm9yZSA1YW0gYnV0IG5vdCBhZnRlciAxMHBtOyBhbmQgMTFwbSBpcyBub3QgYmVmb3JlIDVhbSBidXQgaXQgaXNcbiAgICAgICAgICAgIC8vIGFmdGVyIDEwcG0pLlxuICAgICAgICAgICAgaWYgKGZyb20uaG91cnMgPCB0by5ob3Vycykge1xuICAgICAgICAgICAgICBpZiAoYWZ0ZXJGcm9tICYmIGJlZm9yZVRvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWZ0ZXJGcm9tIHx8IGJlZm9yZVRvKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7ICAvLyBub29uIG9yIG1pZG5pZ2h0XG4gICAgICAgICAgICBpZiAocnVsZS5ob3VycyA9PT0gY3VycmVudEhvdXJzICYmIHJ1bGUubWludXRlcyA9PT0gY3VycmVudE1pbnV0ZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gZGF5UGVyaW9kc1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGlmIG5vIHJ1bGVzIGZvciB0aGUgZGF5IHBlcmlvZHMsIHdlIHVzZSBhbS9wbSBieSBkZWZhdWx0XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW5nbGUtYnJhY2tldC10eXBlLWFzc2VydGlvblxuICAgICAgcmV0dXJuIGdldExvY2FsZURheVBlcmlvZHMobG9jYWxlLCBmb3JtLCA8VHJhbnNsYXRpb25XaWR0aD4gd2lkdGgpW2N1cnJlbnRIb3VycyA8IDEyID8gMCA6IDFdO1xuICAgIGNhc2UgVHJhbnNsYXRpb25UeXBlLkVyYXM6XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW5nbGUtYnJhY2tldC10eXBlLWFzc2VydGlvblxuICAgICAgcmV0dXJuIGdldExvY2FsZUVyYU5hbWVzKGxvY2FsZSwgPFRyYW5zbGF0aW9uV2lkdGg+IHdpZHRoKVtkYXRlLmdldEZ1bGxZZWFyKCkgPD0gMCA/IDAgOiAxXTtcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gVGhpcyBkZWZhdWx0IGNhc2UgaXMgbm90IG5lZWRlZCBieSBUeXBlU2NyaXB0IGNvbXBpbGVyLCBhcyB0aGUgc3dpdGNoIGlzIGV4aGF1c3RpdmUuXG4gICAgICAvLyBIb3dldmVyIENsb3N1cmUgQ29tcGlsZXIgZG9lcyBub3QgdW5kZXJzdGFuZCB0aGF0IGFuZCByZXBvcnRzIGFuIGVycm9yIGluIHR5cGVkIG1vZGUuXG4gICAgICAvLyBUaGUgYHRocm93IG5ldyBFcnJvcmAgYmVsb3cgd29ya3MgYXJvdW5kIHRoZSBwcm9ibGVtLCBhbmQgdGhlIHVuZXhwZWN0ZWQ6IG5ldmVyIHZhcmlhYmxlXG4gICAgICAvLyBtYWtlcyBzdXJlIHRzYyBzdGlsbCBjaGVja3MgdGhpcyBjb2RlIGlzIHVucmVhY2hhYmxlLlxuICAgICAgY29uc3QgdW5leHBlY3RlZDogbmV2ZXIgPSBuYW1lO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmV4cGVjdGVkIHRyYW5zbGF0aW9uIHR5cGUgJHt1bmV4cGVjdGVkfWApO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGRhdGUgZm9ybWF0dGVyIHRoYXQgdHJhbnNmb3JtcyBhIGRhdGUgYW5kIGFuIG9mZnNldCBpbnRvIGEgdGltZXpvbmUgd2l0aCBJU084NjAxIG9yXG4gKiBHTVQgZm9ybWF0IGRlcGVuZGluZyBvbiB0aGUgd2lkdGggKGVnOiBzaG9ydCA9ICswNDMwLCBzaG9ydDpHTVQgPSBHTVQrNCwgbG9uZyA9IEdNVCswNDozMCxcbiAqIGV4dGVuZGVkID0gKzA0OjMwKVxuICovXG5mdW5jdGlvbiB0aW1lWm9uZUdldHRlcih3aWR0aDogWm9uZVdpZHRoKTogRGF0ZUZvcm1hdHRlciB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvbmx5LWFycm93LWZ1bmN0aW9ucyB0eXBlZGVmXG4gIHJldHVybiBmdW5jdGlvbihkYXRlOiBEYXRlLCBsb2NhbGU6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpIHtcbiAgICBjb25zdCB6b25lID0gLTEgKiBvZmZzZXQ7XG4gICAgY29uc3QgbWludXNTaWduID0gZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKGxvY2FsZSwgTnVtYmVyU3ltYm9sLk1pbnVzU2lnbik7XG4gICAgY29uc3QgaG91cnMgPSB6b25lID4gMCA/IE1hdGguZmxvb3Ioem9uZSAvIDYwKSA6IE1hdGguY2VpbCh6b25lIC8gNjApO1xuICAgIHN3aXRjaCAod2lkdGgpIHtcbiAgICAgIGNhc2UgWm9uZVdpZHRoLlNob3J0OlxuICAgICAgICByZXR1cm4gKCh6b25lID49IDApID8gJysnIDogJycpICsgcGFkTnVtYmVyKGhvdXJzLCAyLCBtaW51c1NpZ24pICtcbiAgICAgICAgICAgIHBhZE51bWJlcihNYXRoLmFicyh6b25lICUgNjApLCAyLCBtaW51c1NpZ24pO1xuICAgICAgY2FzZSBab25lV2lkdGguU2hvcnRHTVQ6XG4gICAgICAgIHJldHVybiAnR01UJyArICgoem9uZSA+PSAwKSA/ICcrJyA6ICcnKSArIHBhZE51bWJlcihob3VycywgMSwgbWludXNTaWduKTtcbiAgICAgIGNhc2UgWm9uZVdpZHRoLkxvbmc6XG4gICAgICAgIHJldHVybiAnR01UJyArICgoem9uZSA+PSAwKSA/ICcrJyA6ICcnKSArIHBhZE51bWJlcihob3VycywgMiwgbWludXNTaWduKSArICc6JyArXG4gICAgICAgICAgICBwYWROdW1iZXIoTWF0aC5hYnMoem9uZSAlIDYwKSwgMiwgbWludXNTaWduKTtcbiAgICAgIGNhc2UgWm9uZVdpZHRoLkV4dGVuZGVkOlxuICAgICAgICBpZiAob2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuICdaJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKCh6b25lID49IDApID8gJysnIDogJycpICsgcGFkTnVtYmVyKGhvdXJzLCAyLCBtaW51c1NpZ24pICsgJzonICtcbiAgICAgICAgICAgICAgcGFkTnVtYmVyKE1hdGguYWJzKHpvbmUgJSA2MCksIDIsIG1pbnVzU2lnbik7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB6b25lIHdpZHRoIFwiJHt3aWR0aH1cImApO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgSkFOVUFSWSA9IDA7XG5jb25zdCBUSFVSU0RBWSA9IDQ7XG5mdW5jdGlvbiBnZXRGaXJzdFRodXJzZGF5T2ZZZWFyKHllYXI6IG51bWJlcik6IERhdGUge1xuICBjb25zdCBmaXJzdERheU9mWWVhciA9IChuZXcgRGF0ZSh5ZWFyLCBKQU5VQVJZLCAxKSkuZ2V0RGF5KCk7XG4gIHJldHVybiBuZXcgRGF0ZShcbiAgICAgIHllYXIsIDAsIDEgKyAoKGZpcnN0RGF5T2ZZZWFyIDw9IFRIVVJTREFZKSA/IFRIVVJTREFZIDogVEhVUlNEQVkgKyA3KSAtIGZpcnN0RGF5T2ZZZWFyKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGh1cnNkYXlUaGlzV2VlayhkYXRldGltZTogRGF0ZSk6IERhdGUge1xuICByZXR1cm4gbmV3IERhdGUoXG4gICAgICBkYXRldGltZS5nZXRGdWxsWWVhcigpLCBkYXRldGltZS5nZXRNb250aCgpLFxuICAgICAgZGF0ZXRpbWUuZ2V0RGF0ZSgpICsgKFRIVVJTREFZIC0gZGF0ZXRpbWUuZ2V0RGF5KCkpKTtcbn1cblxuZnVuY3Rpb24gd2Vla0dldHRlcihzaXplOiBudW1iZXIsIG1vbnRoQmFzZWQgPSBmYWxzZSk6IERhdGVGb3JtYXR0ZXIge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6b25seS1hcnJvdy1mdW5jdGlvbnMgdHlwZWRlZlxuICByZXR1cm4gZnVuY3Rpb24oZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChtb250aEJhc2VkKSB7XG4gICAgICBjb25zdCBuYkRheXNCZWZvcmUxc3REYXlPZk1vbnRoID1cbiAgICAgICAgICBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSkuZ2V0RGF5KCkgLSAxO1xuICAgICAgY29uc3QgdG9kYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgIHJlc3VsdCA9IDEgKyBNYXRoLmZsb29yKCh0b2RheSArIG5iRGF5c0JlZm9yZTFzdERheU9mTW9udGgpIC8gNyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpcnN0VGh1cnMgPSBnZXRGaXJzdFRodXJzZGF5T2ZZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICBjb25zdCB0aGlzVGh1cnMgPSBnZXRUaHVyc2RheVRoaXNXZWVrKGRhdGUpO1xuICAgICAgY29uc3QgZGlmZiA9IHRoaXNUaHVycy5nZXRUaW1lKCkgLSBmaXJzdFRodXJzLmdldFRpbWUoKTtcbiAgICAgIHJlc3VsdCA9IDEgKyBNYXRoLnJvdW5kKGRpZmYgLyA2LjA0OGU4KTsgIC8vIDYuMDQ4ZTggbXMgcGVyIHdlZWtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFkTnVtYmVyKHJlc3VsdCwgc2l6ZSwgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKGxvY2FsZSwgTnVtYmVyU3ltYm9sLk1pbnVzU2lnbikpO1xuICB9O1xufVxuXG50eXBlIERhdGVGb3JtYXR0ZXIgPSAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbmNvbnN0IERBVEVfRk9STUFUUzoge1tmb3JtYXQ6IHN0cmluZ106IERhdGVGb3JtYXR0ZXJ9ID0ge307XG5cbi8vIEJhc2VkIG9uIENMRFIgZm9ybWF0czpcbi8vIFNlZSBjb21wbGV0ZSBsaXN0OiBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbi8vIFNlZSBhbHNvIGV4cGxhbmF0aW9uczogaHR0cDovL2NsZHIudW5pY29kZS5vcmcvdHJhbnNsYXRpb24vZGF0ZS10aW1lXG4vLyBUT0RPKG9jb21iZSk6IHN1cHBvcnQgYWxsIG1pc3NpbmcgY2xkciBmb3JtYXRzOiBZLCBVLCBRLCBELCBGLCBlLCBjLCBqLCBKLCBDLCBBLCB2LCBWLCBYLCB4XG5mdW5jdGlvbiBnZXREYXRlRm9ybWF0dGVyKGZvcm1hdDogc3RyaW5nKTogRGF0ZUZvcm1hdHRlcnxudWxsIHtcbiAgaWYgKERBVEVfRk9STUFUU1tmb3JtYXRdKSB7XG4gICAgcmV0dXJuIERBVEVfRk9STUFUU1tmb3JtYXRdO1xuICB9XG4gIGxldCBmb3JtYXR0ZXI7XG4gIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgLy8gRXJhIG5hbWUgKEFEL0JDKVxuICAgIGNhc2UgJ0cnOlxuICAgIGNhc2UgJ0dHJzpcbiAgICBjYXNlICdHR0cnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZVN0ckdldHRlcihUcmFuc2xhdGlvblR5cGUuRXJhcywgVHJhbnNsYXRpb25XaWR0aC5BYmJyZXZpYXRlZCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdHR0dHJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLkVyYXMsIFRyYW5zbGF0aW9uV2lkdGguV2lkZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdHR0dHRyc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFRyYW5zbGF0aW9uVHlwZS5FcmFzLCBUcmFuc2xhdGlvbldpZHRoLk5hcnJvdyk7XG4gICAgICBicmVhaztcblxuICAgIC8vIDEgZGlnaXQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHllYXIsIGUuZy4gKEFEIDEgPT4gMSwgQUQgMTk5ID0+IDE5OSlcbiAgICBjYXNlICd5JzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVHZXR0ZXIoRGF0ZVR5cGUuRnVsbFllYXIsIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIDIgZGlnaXQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHllYXIsIHBhZGRlZCAoMDAtOTkpLiAoZS5nLiBBRCAyMDAxID0+IDAxLCBBRCAyMDEwID0+IDEwKVxuICAgIGNhc2UgJ3l5JzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVHZXR0ZXIoRGF0ZVR5cGUuRnVsbFllYXIsIDIsIDAsIHRydWUsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gMyBkaWdpdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgeWVhciwgcGFkZGVkICgwMDAtOTk5KS4gKGUuZy4gQUQgMjAwMSA9PiAwMSwgQUQgMjAxMCA9PiAxMClcbiAgICBjYXNlICd5eXknOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZUdldHRlcihEYXRlVHlwZS5GdWxsWWVhciwgMywgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gNCBkaWdpdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgeWVhciAoZS5nLiBBRCAxID0+IDAwMDEsIEFEIDIwMTAgPT4gMjAxMClcbiAgICBjYXNlICd5eXl5JzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVHZXR0ZXIoRGF0ZVR5cGUuRnVsbFllYXIsIDQsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gTW9udGggb2YgdGhlIHllYXIgKDEtMTIpLCBudW1lcmljXG4gICAgY2FzZSAnTSc6XG4gICAgY2FzZSAnTCc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLk1vbnRoLCAxLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ01NJzpcbiAgICBjYXNlICdMTCc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLk1vbnRoLCAyLCAxKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gTW9udGggb2YgdGhlIHllYXIgKEphbnVhcnksIC4uLiksIHN0cmluZywgZm9ybWF0XG4gICAgY2FzZSAnTU1NJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLk1vbnRocywgVHJhbnNsYXRpb25XaWR0aC5BYmJyZXZpYXRlZCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdNTU1NJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLk1vbnRocywgVHJhbnNsYXRpb25XaWR0aC5XaWRlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLk1vbnRocywgVHJhbnNsYXRpb25XaWR0aC5OYXJyb3cpO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBNb250aCBvZiB0aGUgeWVhciAoSmFudWFyeSwgLi4uKSwgc3RyaW5nLCBzdGFuZGFsb25lXG4gICAgY2FzZSAnTExMJzpcbiAgICAgIGZvcm1hdHRlciA9XG4gICAgICAgICAgZGF0ZVN0ckdldHRlcihUcmFuc2xhdGlvblR5cGUuTW9udGhzLCBUcmFuc2xhdGlvbldpZHRoLkFiYnJldmlhdGVkLCBGb3JtU3R5bGUuU3RhbmRhbG9uZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdMTExMJzpcbiAgICAgIGZvcm1hdHRlciA9XG4gICAgICAgICAgZGF0ZVN0ckdldHRlcihUcmFuc2xhdGlvblR5cGUuTW9udGhzLCBUcmFuc2xhdGlvbldpZHRoLldpZGUsIEZvcm1TdHlsZS5TdGFuZGFsb25lKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgIGZvcm1hdHRlciA9XG4gICAgICAgICAgZGF0ZVN0ckdldHRlcihUcmFuc2xhdGlvblR5cGUuTW9udGhzLCBUcmFuc2xhdGlvbldpZHRoLk5hcnJvdywgRm9ybVN0eWxlLlN0YW5kYWxvbmUpO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBXZWVrIG9mIHRoZSB5ZWFyICgxLCAuLi4gNTIpXG4gICAgY2FzZSAndyc6XG4gICAgICBmb3JtYXR0ZXIgPSB3ZWVrR2V0dGVyKDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd3cnOlxuICAgICAgZm9ybWF0dGVyID0gd2Vla0dldHRlcigyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gV2VlayBvZiB0aGUgbW9udGggKDEsIC4uLilcbiAgICBjYXNlICdXJzpcbiAgICAgIGZvcm1hdHRlciA9IHdlZWtHZXR0ZXIoMSwgdHJ1ZSk7XG4gICAgICBicmVhaztcblxuICAgIC8vIERheSBvZiB0aGUgbW9udGggKDEtMzEpXG4gICAgY2FzZSAnZCc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLkRhdGUsIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGQnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZUdldHRlcihEYXRlVHlwZS5EYXRlLCAyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gRGF5IG9mIHRoZSBXZWVrXG4gICAgY2FzZSAnRSc6XG4gICAgY2FzZSAnRUUnOlxuICAgIGNhc2UgJ0VFRSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFRyYW5zbGF0aW9uVHlwZS5EYXlzLCBUcmFuc2xhdGlvbldpZHRoLkFiYnJldmlhdGVkKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZVN0ckdldHRlcihUcmFuc2xhdGlvblR5cGUuRGF5cywgVHJhbnNsYXRpb25XaWR0aC5XaWRlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLkRheXMsIFRyYW5zbGF0aW9uV2lkdGguTmFycm93KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFRyYW5zbGF0aW9uVHlwZS5EYXlzLCBUcmFuc2xhdGlvbldpZHRoLlNob3J0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gR2VuZXJpYyBwZXJpb2Qgb2YgdGhlIGRheSAoYW0tcG0pXG4gICAgY2FzZSAnYSc6XG4gICAgY2FzZSAnYWEnOlxuICAgIGNhc2UgJ2FhYSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFRyYW5zbGF0aW9uVHlwZS5EYXlQZXJpb2RzLCBUcmFuc2xhdGlvbldpZHRoLkFiYnJldmlhdGVkKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZVN0ckdldHRlcihUcmFuc2xhdGlvblR5cGUuRGF5UGVyaW9kcywgVHJhbnNsYXRpb25XaWR0aC5XaWRlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLkRheVBlcmlvZHMsIFRyYW5zbGF0aW9uV2lkdGguTmFycm93KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gRXh0ZW5kZWQgcGVyaW9kIG9mIHRoZSBkYXkgKG1pZG5pZ2h0LCBhdCBuaWdodCwgLi4uKSwgc3RhbmRhbG9uZVxuICAgIGNhc2UgJ2InOlxuICAgIGNhc2UgJ2JiJzpcbiAgICBjYXNlICdiYmInOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZVN0ckdldHRlcihcbiAgICAgICAgICBUcmFuc2xhdGlvblR5cGUuRGF5UGVyaW9kcywgVHJhbnNsYXRpb25XaWR0aC5BYmJyZXZpYXRlZCwgRm9ybVN0eWxlLlN0YW5kYWxvbmUsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYmJiYic6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFxuICAgICAgICAgIFRyYW5zbGF0aW9uVHlwZS5EYXlQZXJpb2RzLCBUcmFuc2xhdGlvbldpZHRoLldpZGUsIEZvcm1TdHlsZS5TdGFuZGFsb25lLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVTdHJHZXR0ZXIoXG4gICAgICAgICAgVHJhbnNsYXRpb25UeXBlLkRheVBlcmlvZHMsIFRyYW5zbGF0aW9uV2lkdGguTmFycm93LCBGb3JtU3R5bGUuU3RhbmRhbG9uZSwgdHJ1ZSk7XG4gICAgICBicmVhaztcblxuICAgIC8vIEV4dGVuZGVkIHBlcmlvZCBvZiB0aGUgZGF5IChtaWRuaWdodCwgbmlnaHQsIC4uLiksIHN0YW5kYWxvbmVcbiAgICBjYXNlICdCJzpcbiAgICBjYXNlICdCQic6XG4gICAgY2FzZSAnQkJCJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVTdHJHZXR0ZXIoXG4gICAgICAgICAgVHJhbnNsYXRpb25UeXBlLkRheVBlcmlvZHMsIFRyYW5zbGF0aW9uV2lkdGguQWJicmV2aWF0ZWQsIEZvcm1TdHlsZS5Gb3JtYXQsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQkJCQic6XG4gICAgICBmb3JtYXR0ZXIgPVxuICAgICAgICAgIGRhdGVTdHJHZXR0ZXIoVHJhbnNsYXRpb25UeXBlLkRheVBlcmlvZHMsIFRyYW5zbGF0aW9uV2lkdGguV2lkZSwgRm9ybVN0eWxlLkZvcm1hdCwgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdCQkJCQic6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlU3RyR2V0dGVyKFxuICAgICAgICAgIFRyYW5zbGF0aW9uVHlwZS5EYXlQZXJpb2RzLCBUcmFuc2xhdGlvbldpZHRoLk5hcnJvdywgRm9ybVN0eWxlLkZvcm1hdCwgdHJ1ZSk7XG4gICAgICBicmVhaztcblxuICAgIC8vIEhvdXIgaW4gQU0vUE0sICgxLTEyKVxuICAgIGNhc2UgJ2gnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZUdldHRlcihEYXRlVHlwZS5Ib3VycywgMSwgLTEyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2hoJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVHZXR0ZXIoRGF0ZVR5cGUuSG91cnMsIDIsIC0xMik7XG4gICAgICBicmVhaztcblxuICAgIC8vIEhvdXIgb2YgdGhlIGRheSAoMC0yMylcbiAgICBjYXNlICdIJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVHZXR0ZXIoRGF0ZVR5cGUuSG91cnMsIDEpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gSG91ciBpbiBkYXksIHBhZGRlZCAoMDAtMjMpXG4gICAgY2FzZSAnSEgnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZUdldHRlcihEYXRlVHlwZS5Ib3VycywgMik7XG4gICAgICBicmVhaztcblxuICAgIC8vIE1pbnV0ZSBvZiB0aGUgaG91ciAoMC01OSlcbiAgICBjYXNlICdtJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVHZXR0ZXIoRGF0ZVR5cGUuTWludXRlcywgMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtbSc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLk1pbnV0ZXMsIDIpO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBTZWNvbmQgb2YgdGhlIG1pbnV0ZSAoMC01OSlcbiAgICBjYXNlICdzJzpcbiAgICAgIGZvcm1hdHRlciA9IGRhdGVHZXR0ZXIoRGF0ZVR5cGUuU2Vjb25kcywgMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzcyc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLlNlY29uZHMsIDIpO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBGcmFjdGlvbmFsIHNlY29uZFxuICAgIGNhc2UgJ1MnOlxuICAgICAgZm9ybWF0dGVyID0gZGF0ZUdldHRlcihEYXRlVHlwZS5GcmFjdGlvbmFsU2Vjb25kcywgMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdTUyc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLkZyYWN0aW9uYWxTZWNvbmRzLCAyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1NTUyc6XG4gICAgICBmb3JtYXR0ZXIgPSBkYXRlR2V0dGVyKERhdGVUeXBlLkZyYWN0aW9uYWxTZWNvbmRzLCAzKTtcbiAgICAgIGJyZWFrO1xuXG5cbiAgICAvLyBUaW1lem9uZSBJU084NjAxIHNob3J0IGZvcm1hdCAoLTA0MzApXG4gICAgY2FzZSAnWic6XG4gICAgY2FzZSAnWlonOlxuICAgIGNhc2UgJ1paWic6XG4gICAgICBmb3JtYXR0ZXIgPSB0aW1lWm9uZUdldHRlcihab25lV2lkdGguU2hvcnQpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gVGltZXpvbmUgSVNPODYwMSBleHRlbmRlZCBmb3JtYXQgKC0wNDozMClcbiAgICBjYXNlICdaWlpaWic6XG4gICAgICBmb3JtYXR0ZXIgPSB0aW1lWm9uZUdldHRlcihab25lV2lkdGguRXh0ZW5kZWQpO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBUaW1lem9uZSBHTVQgc2hvcnQgZm9ybWF0IChHTVQrNClcbiAgICBjYXNlICdPJzpcbiAgICBjYXNlICdPTyc6XG4gICAgY2FzZSAnT09PJzpcbiAgICAvLyBTaG91bGQgYmUgbG9jYXRpb24sIGJ1dCBmYWxsYmFjayB0byBmb3JtYXQgTyBpbnN0ZWFkIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGUgZGF0YSB5ZXRcbiAgICBjYXNlICd6JzpcbiAgICBjYXNlICd6eic6XG4gICAgY2FzZSAnenp6JzpcbiAgICAgIGZvcm1hdHRlciA9IHRpbWVab25lR2V0dGVyKFpvbmVXaWR0aC5TaG9ydEdNVCk7XG4gICAgICBicmVhaztcbiAgICAvLyBUaW1lem9uZSBHTVQgbG9uZyBmb3JtYXQgKEdNVCswNDMwKVxuICAgIGNhc2UgJ09PT08nOlxuICAgIGNhc2UgJ1paWlonOlxuICAgIC8vIFNob3VsZCBiZSBsb2NhdGlvbiwgYnV0IGZhbGxiYWNrIHRvIGZvcm1hdCBPIGluc3RlYWQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHRoZSBkYXRhIHlldFxuICAgIGNhc2UgJ3p6enonOlxuICAgICAgZm9ybWF0dGVyID0gdGltZVpvbmVHZXR0ZXIoWm9uZVdpZHRoLkxvbmcpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG4gIERBVEVfRk9STUFUU1tmb3JtYXRdID0gZm9ybWF0dGVyO1xuICByZXR1cm4gZm9ybWF0dGVyO1xufVxuXG5mdW5jdGlvbiB0aW1lem9uZVRvT2Zmc2V0KHRpbWV6b25lOiBzdHJpbmcsIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICAvLyBTdXBwb3J0OiBJRSA5LTExIG9ubHksIEVkZ2UgMTMtMTUrXG4gIC8vIElFL0VkZ2UgZG8gbm90IFwidW5kZXJzdGFuZFwiIGNvbG9uIChgOmApIGluIHRpbWV6b25lXG4gIHRpbWV6b25lID0gdGltZXpvbmUucmVwbGFjZSgvOi9nLCAnJyk7XG4gIGNvbnN0IHJlcXVlc3RlZFRpbWV6b25lT2Zmc2V0ID0gRGF0ZS5wYXJzZSgnSmFuIDAxLCAxOTcwIDAwOjAwOjAwICcgKyB0aW1lem9uZSkgLyA2MDAwMDtcbiAgcmV0dXJuIGlzTmFOKHJlcXVlc3RlZFRpbWV6b25lT2Zmc2V0KSA/IGZhbGxiYWNrIDogcmVxdWVzdGVkVGltZXpvbmVPZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGFkZERhdGVNaW51dGVzKGRhdGU6IERhdGUsIG1pbnV0ZXM6IG51bWJlcik6IERhdGUge1xuICBkYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xuICBkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgKyBtaW51dGVzKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUaW1lem9uZVRvTG9jYWwoZGF0ZTogRGF0ZSwgdGltZXpvbmU6IHN0cmluZywgcmV2ZXJzZTogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCByZXZlcnNlVmFsdWUgPSByZXZlcnNlID8gLTEgOiAxO1xuICBjb25zdCBkYXRlVGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gdGltZXpvbmVUb09mZnNldCh0aW1lem9uZSwgZGF0ZVRpbWV6b25lT2Zmc2V0KTtcbiAgcmV0dXJuIGFkZERhdGVNaW51dGVzKGRhdGUsIHJldmVyc2VWYWx1ZSAqICh0aW1lem9uZU9mZnNldCAtIGRhdGVUaW1lem9uZU9mZnNldCkpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgdmFsdWUgdG8gZGF0ZS5cbiAqXG4gKiBTdXBwb3J0ZWQgaW5wdXQgZm9ybWF0czpcbiAqIC0gYERhdGVgXG4gKiAtIG51bWJlcjogdGltZXN0YW1wXG4gKiAtIHN0cmluZzogbnVtZXJpYyAoZS5nLiBcIjEyMzRcIiksIElTTyBhbmQgZGF0ZSBzdHJpbmdzIGluIGEgZm9ybWF0IHN1cHBvcnRlZCBieVxuICogICBbRGF0ZS5wYXJzZSgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlL3BhcnNlKS5cbiAqICAgTm90ZTogSVNPIHN0cmluZ3Mgd2l0aG91dCB0aW1lIHJldHVybiBhIGRhdGUgd2l0aG91dCB0aW1lb2Zmc2V0LlxuICpcbiAqIFRocm93cyBpZiB1bmFibGUgdG8gY29udmVydCB0byBhIGRhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUodmFsdWU6IHN0cmluZ3xudW1iZXJ8RGF0ZSk6IERhdGUge1xuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcblxuICAgIGNvbnN0IHBhcnNlZE5iID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICAvLyBhbnkgc3RyaW5nIHRoYXQgb25seSBjb250YWlucyBudW1iZXJzLCBsaWtlIFwiMTIzNFwiIGJ1dCBub3QgbGlrZSBcIjEyMzRoZWxsb1wiXG4gICAgaWYgKCFpc05hTih2YWx1ZSBhcyBhbnkgLSBwYXJzZWROYikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZWROYik7XG4gICAgfVxuXG4gICAgaWYgKC9eKFxcZHs0fS1cXGR7MSwyfS1cXGR7MSwyfSkkLy50ZXN0KHZhbHVlKSkge1xuICAgICAgLyogRm9yIElTTyBTdHJpbmdzIHdpdGhvdXQgdGltZSB0aGUgZGF5LCBtb250aCBhbmQgeWVhciBtdXN0IGJlIGV4dHJhY3RlZCBmcm9tIHRoZSBJU08gU3RyaW5nXG4gICAgICBiZWZvcmUgRGF0ZSBjcmVhdGlvbiB0byBhdm9pZCB0aW1lIG9mZnNldCBhbmQgZXJyb3JzIGluIHRoZSBuZXcgRGF0ZS5cbiAgICAgIElmIHdlIG9ubHkgcmVwbGFjZSAnLScgd2l0aCAnLCcgaW4gdGhlIElTTyBTdHJpbmcgKFwiMjAxNSwwMSwwMVwiKSwgYW5kIHRyeSB0byBjcmVhdGUgYSBuZXdcbiAgICAgIGRhdGUsIHNvbWUgYnJvd3NlcnMgKGUuZy4gSUUgOSkgd2lsbCB0aHJvdyBhbiBpbnZhbGlkIERhdGUgZXJyb3IuXG4gICAgICBJZiB3ZSBsZWF2ZSB0aGUgJy0nIChcIjIwMTUtMDEtMDFcIikgYW5kIHRyeSB0byBjcmVhdGUgYSBuZXcgRGF0ZShcIjIwMTUtMDEtMDFcIikgdGhlIHRpbWVvZmZzZXRcbiAgICAgIGlzIGFwcGxpZWQuXG4gICAgICBOb3RlOiBJU08gbW9udGhzIGFyZSAwIGZvciBKYW51YXJ5LCAxIGZvciBGZWJydWFyeSwgLi4uICovXG4gICAgICBjb25zdCBbeSwgbSwgZF0gPSB2YWx1ZS5zcGxpdCgnLScpLm1hcCgodmFsOiBzdHJpbmcpID0+ICt2YWwpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKHksIG0gLSAxLCBkKTtcbiAgICB9XG5cbiAgICBsZXQgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXl8bnVsbDtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uZGl0aW9uYWwtYXNzaWdubWVudFxuICAgIGlmIChtYXRjaCA9IHZhbHVlLm1hdGNoKElTTzg2MDFfREFURV9SRUdFWCkpIHtcbiAgICAgIHJldHVybiBpc29TdHJpbmdUb0RhdGUobWF0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSBhcyBhbnkpO1xuICBpZiAoIWlzRGF0ZShkYXRlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNvbnZlcnQgXCIke3ZhbHVlfVwiIGludG8gYSBkYXRlYCk7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBkYXRlIGluIElTTzg2MDEgdG8gYSBEYXRlLlxuICogVXNlZCBpbnN0ZWFkIG9mIGBEYXRlLnBhcnNlYCBiZWNhdXNlIG9mIGJyb3dzZXIgZGlzY3JlcGFuY2llcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzb1N0cmluZ1RvRGF0ZShtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IERhdGUge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGxldCB0ekhvdXIgPSAwO1xuICBsZXQgdHpNaW4gPSAwO1xuXG4gIC8vIG1hdGNoWzhdIG1lYW5zIHRoYXQgdGhlIHN0cmluZyBjb250YWlucyBcIlpcIiAoVVRDKSBvciBhIHRpbWV6b25lIGxpa2UgXCIrMDE6MDBcIiBvciBcIiswMTAwXCJcbiAgY29uc3QgZGF0ZVNldHRlciA9IG1hdGNoWzhdID8gZGF0ZS5zZXRVVENGdWxsWWVhciA6IGRhdGUuc2V0RnVsbFllYXI7XG4gIGNvbnN0IHRpbWVTZXR0ZXIgPSBtYXRjaFs4XSA/IGRhdGUuc2V0VVRDSG91cnMgOiBkYXRlLnNldEhvdXJzO1xuXG4gIC8vIGlmIHRoZXJlIGlzIGEgdGltZXpvbmUgZGVmaW5lZCBsaWtlIFwiKzAxOjAwXCIgb3IgXCIrMDEwMFwiXG4gIGlmIChtYXRjaFs5XSkge1xuICAgIHR6SG91ciA9IE51bWJlcihtYXRjaFs5XSArIG1hdGNoWzEwXSk7XG4gICAgdHpNaW4gPSBOdW1iZXIobWF0Y2hbOV0gKyBtYXRjaFsxMV0pO1xuICB9XG4gIGRhdGVTZXR0ZXIuY2FsbChkYXRlLCBOdW1iZXIobWF0Y2hbMV0pLCBOdW1iZXIobWF0Y2hbMl0pIC0gMSwgTnVtYmVyKG1hdGNoWzNdKSk7XG4gIGNvbnN0IGggPSBOdW1iZXIobWF0Y2hbNF0gfHwgMCkgLSB0ekhvdXI7XG4gIGNvbnN0IG0gPSBOdW1iZXIobWF0Y2hbNV0gfHwgMCkgLSB0ek1pbjtcbiAgY29uc3QgcyA9IE51bWJlcihtYXRjaFs2XSB8fCAwKTtcbiAgY29uc3QgbXMgPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoJzAuJyArIChtYXRjaFs3XSB8fCAwKSkgKiAxMDAwKTtcbiAgdGltZVNldHRlci5jYWxsKGRhdGUsIGgsIG0sIHMsIG1zKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWU6IGFueSk6IHZhbHVlIGlzIERhdGUge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTih2YWx1ZS52YWx1ZU9mKCkpO1xufVxuIl19
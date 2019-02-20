import { JsonCustomConvert, JsonConverter } from 'json2typescript';

// TODO: Investigate different formats that can be converted back and forth. perhaps allow some config

@JsonConverter
export class DateConverter implements JsonCustomConvert<Date> {
    serialize(date: Date): any {
        // note: date.getMonth() returns a 0-index number
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +  date.getDate();
    }
    deserialize(date: any): Date {
        return new Date(date);
    }
}

import { NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
export interface NgbDatetimeStruct extends NgbDateStruct, NgbTimeStruct {
}
export declare class Datetime implements NgbDatetimeStruct {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    timeZoneOffset: number;
    constructor(init?: Partial<Datetime>);
    static asToday(): Datetime;
    static fromLocalString(dateString: string): Datetime;
    private isInteger;
    toString(): string;
}

export class DateRange {
  start: Date;
  end: Date;

  constructor(obj?: Partial<DateRange>) {
    this.start = obj && obj.start || null;
    this.end = obj && obj.end || null;
  }
}

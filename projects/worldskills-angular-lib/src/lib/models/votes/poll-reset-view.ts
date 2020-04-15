export class PollResetView {
  start: Date;
  expiry: Date;

  constructor(obj?: Partial<PollResetView>) {
      this.start =  obj && obj.start || null;
      this.expiry = obj && obj.expiry || null;
  }
}

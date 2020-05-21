export class PollExtendView {
  expiry: Date;

  constructor(obj?: Partial<PollExtendView>) {
      this.expiry = obj && obj.expiry || null;
  }
}

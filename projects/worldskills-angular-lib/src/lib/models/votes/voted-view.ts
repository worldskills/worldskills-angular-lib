export class VotedView {
  hasVoted: boolean;
  optionId: number;

  constructor(obj?) {
      this.hasVoted = obj && obj.hasVoted || false;
      this.optionId = obj && obj.optionId || null;
  }
}

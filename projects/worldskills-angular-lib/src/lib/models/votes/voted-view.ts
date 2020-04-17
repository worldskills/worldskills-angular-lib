import { AddVoteEntryView } from './add-vote-entry-view';
export class VotedView {
  hasVoted: boolean;
  votes: AddVoteEntryView[];

  constructor(obj?) {
      this.hasVoted = obj && obj.hasVoted || false;
      this.votes = obj && obj.votes || [];
  }
}

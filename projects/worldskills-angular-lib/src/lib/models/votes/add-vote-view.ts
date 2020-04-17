import { AddVoteEntryView } from './add-vote-entry-view';
export class AddVoteView {
  votes: AddVoteEntryView[];

  constructor(obj?) {
      this.votes = obj && obj.votes || [];
  }
}

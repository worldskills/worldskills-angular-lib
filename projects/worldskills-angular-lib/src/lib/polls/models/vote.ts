import { VoteEntry } from './vote-entry';

export interface Vote {
  hasVoted: boolean;
  votes: VoteEntry[];
  anonymous: boolean;
  abstained: boolean;
}

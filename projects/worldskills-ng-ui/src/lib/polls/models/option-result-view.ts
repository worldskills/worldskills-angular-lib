import { PollOption } from './option';

export interface OptionResultView extends PollOption {
  points: number;
  votes: number;
}

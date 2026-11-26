import { PollOption } from './option';

export interface PollResult {
  id: number;
  count: number;
  points: number;
  option: PollOption;
}

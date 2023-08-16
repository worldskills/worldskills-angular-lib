import { Award } from './award';

export interface PersonAward {
  id: number;
  person_id: number;
  award: Award;
  presented_at: string;
  extra_information: string;
  last_updated: string;
}

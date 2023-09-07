import { Award } from './award';
import { RecipientAwardCertificate } from './recipient-award-certificate';

export interface PersonAward {
  id: number;
  person_id: number;
  award: Award;
  presented_at: string;
  extra_information: string;
  last_updated: string;
  certificates?: RecipientAwardCertificate[];
}
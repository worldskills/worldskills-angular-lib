import { Award } from './award';
import { RecipientAwardCertificate } from './recipient-award-certificate';

export interface OrganizationAward {
    id: number;
    organization_id: number;
    award: Award;
    presented_at: number;
    extra_information: string;
    public_extra_information?: string;
    last_updated: string;
    certificates?: RecipientAwardCertificate[];
}

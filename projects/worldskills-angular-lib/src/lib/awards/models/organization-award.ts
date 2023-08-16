import { Award } from './award';

export interface OrganizationAward {
    id: number;
    organization_id: number;
    award: Award;
    presented_at: string;
    extra_information: string;
    last_updated: string;
}

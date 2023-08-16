import { Award } from './award';

export interface MemberAward {
    id: number;
    member_id: number;
    award: Award;
    presented_at: string;
    extra_information: string;
    last_updated: string;
}

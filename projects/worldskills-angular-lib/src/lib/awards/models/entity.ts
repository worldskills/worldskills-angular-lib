import { I18nText } from '../../common/models/i18n-text';
import { Link } from '../../common/models/link';

export interface AuthEntityRequest {
    id: number;
}

export interface AuthEntity extends AuthEntityRequest {
    name: I18nText;
    parent_id?: number;
    children?: Array<AuthEntity>;
    links: Array<Link>;
    path: AuthEntity[];
}

import { I18nText } from '../../common/models/i18n-text';
import { AuthEntity, AuthEntityRequest } from './entity';

export interface Award {
    id: number;
    name: I18nText;
    description: I18nText;
    entity: AuthEntity;
    has_certificate: boolean;
}

export interface AwardRequest {
    name: I18nText;
    description: I18nText;
    entity: AuthEntityRequest;
    has_certificate: boolean;
}

export interface AwardContainer {
    awards: Award[];
}

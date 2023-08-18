import { I18nText } from '../../common/models/i18n-text';
import { AuthEntity, AuthEntityRequest } from './entity';

export interface Award {
    id: number;
    name: I18nText;
    description: I18nText;
    entity: AuthEntity;
}

export interface AwardRequest {
    name: I18nText;
    description: I18nText;
    entity: AuthEntityRequest;
}

export interface AwardContainer {
    awards: Award[];
}

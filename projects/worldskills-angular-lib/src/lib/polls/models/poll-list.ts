import { WsEntityModel } from '../../auth/models/ws-entity';
import { I18nText } from '../../common/models/i18n-text';
import { CreatedBy } from './created-by';

export interface PollList {
    id: number;
    title: I18nText;
    entity: WsEntityModel;
    createdBy: CreatedBy;
    deleted: boolean;
    created: Date;
    slug: string;
}

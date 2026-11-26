import { I18nText } from '../../common/models/i18n-text';
import { CreatedBy } from './created-by';
import { EntityPath } from './entity-path';
import { WsEntity } from '../../common/models/ws-entity';

export interface PollList {
  id: number;
  title: I18nText;
  entity: WsEntity;
  createdBy: CreatedBy;
  deleted: boolean;
  created: Date | string;
  slug: string;
  entityPath: EntityPath;
}

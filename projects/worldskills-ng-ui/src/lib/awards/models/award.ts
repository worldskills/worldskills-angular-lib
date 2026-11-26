import { I18nText } from '../../common/models/i18n-text';
import { WsEntity } from '../../common/models/ws-entity';

export interface Award {
  id: number;
  name: I18nText;
  description: I18nText;
  entity: WsEntity;
  has_certificate: boolean;
  sort: number;
}

export interface AwardContainer {
  awards: Award[];
}

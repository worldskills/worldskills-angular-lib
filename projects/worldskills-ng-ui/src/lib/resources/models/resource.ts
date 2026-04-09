import { I18nText } from '../../common/models/i18n-text';
import { Link } from '../../common/models/link';
import { WsEntity } from '../../common/models/ws-entity';
import { ResourceType } from './resource-type';
import { ResourceMetadata } from './resource-metadata';
import { Version } from './version';

export interface Resource {
  id: number;
  name: I18nText;
  tags: string[];
  ws_entity: WsEntity;
  resource_types: ResourceType[];
  metadata: ResourceMetadata[];
  versions: Version[];
  links: Link[];
}

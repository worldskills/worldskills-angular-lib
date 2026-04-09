import { I18nText } from '../../common/models/i18n-text';
import { Link } from '../../common/models/link';
import { Version } from './version';
import { ResourceType } from './resource-type';
import { ResourceMetadata } from './resource-metadata';
import { WsEntityModel } from '@worldskills/ng-auth';

export interface Resource {
  id: number;
  name: I18nText;
  metadata: ResourceMetadata[];
  links: Link[];
  ws_entity: WsEntityModel;
  resource_types: ResourceType[];
  versions: Version[];
  tags: string[];
}

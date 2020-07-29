import { I18nText } from '../../common/models/i18n-text';
import { WsEntityModel } from '../../auth/models/ws-entity';
import { Link } from '../../common/models/link';
import { Version } from './version';
import { ResourceType } from './resource-type';
import { ResourceMetadata } from './resource-metadata';
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

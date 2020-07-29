import { I18nText } from '../../common/models/i18n-text';
import { ResourceTypeMetadata } from './resource-type-metadata';
export interface ResourceType {
    id: number;
    description: I18nText;
    name: string;
    metadata: ResourceTypeMetadata[];
}

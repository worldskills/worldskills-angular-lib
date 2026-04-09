import { I18nText } from '../../common/models/i18n-text';
import { ResourceTypeMetadata } from './resource-type-metadata';

export interface ResourceType {
  id: number;
  name: string;
  description: I18nText;
  metadata: ResourceTypeMetadata[];
}

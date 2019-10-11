import { I18nModel } from './I18n.model';
import { LinkModelRaw } from './link-model-raw';
import { ResourceMetadataModel } from './resource-metadata-model';

// some fields are intentionally left out
export class ResourceModel {
  id: number;
  name: I18nModel;
  metadata: ResourceMetadataModel[];
  links: LinkModelRaw[];

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || new I18nModel();
    this.metadata = obj && obj.metadata || [];
    this.links = obj && obj.links || [];
  }
}

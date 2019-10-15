import { I18nModel } from './I18n.model';
import { LinkModelRaw } from './link-model-raw';
import { ResourceMetadataModel } from './resource-metadata-model';
import { WsEntityModel } from './ws-entity-model';

// some fields are intentionally left out
export class ResourceModel {
  id: number;
  name: I18nModel;
  metadata: ResourceMetadataModel[];
  links: LinkModelRaw[];
  // tslint:disable-next-line:variable-name
  ws_entity: number;


  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || new I18nModel();
    this.metadata = obj && obj.metadata || [];
    this.links = obj && obj.links || [];
    this.ws_entity = obj && obj.WsEntityModel || new WsEntityModel();
  }
}

import { I18nModel } from './I18n.model';
import { VersionCreateModel } from './version-create-model';

export class ResourceUploadModel {
  name: I18nModel;
  // tslint:disable-next-line:variable-name
  ws_entity: number;
  types: number[];
  version: VersionCreateModel;
  metadata: object[];
  tags: string[];

  constructor(obj?: Partial<ResourceUploadModel>) {
    this.tags = []; // do not create tags
    this.name = obj && obj.name || new I18nModel();
    this.ws_entity = obj && obj.ws_entity;
    this.types = obj && obj.types || [];
    this.version = obj && obj.version || new VersionCreateModel({name: '1.0'});
    this.metadata = obj && obj.metadata || [];
  }
}

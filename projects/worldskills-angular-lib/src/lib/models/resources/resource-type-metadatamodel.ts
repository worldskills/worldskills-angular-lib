import { ResourceMetadataInfoModel } from './resource-metadata-info-model';

export class ResourceTypeMetadataModel {
  metadata: ResourceMetadataInfoModel;
  required: boolean;

  constructor(obj?: any) {
    this.metadata = obj && obj.metadata || new ResourceMetadataInfoModel();
    this.required = obj && obj.required || false;
  }
}

import { ResourceMetadataInfoModel } from './resource-metadata-info-model';
export class ResourceMetadataModel {
  metadata: ResourceMetadataInfoModel;
  value: string;

  constructor(obj?: any) {
    this.metadata = obj && obj.metadata || new ResourceMetadataInfoModel();
    this.value = obj && obj.value || null;
  }
}

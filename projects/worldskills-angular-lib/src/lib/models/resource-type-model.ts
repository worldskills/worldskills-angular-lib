import { NameModel } from './name-model';
import { ResourceTypeMetadataModel } from './resource-type-metadatamodel';
export class ResourceTypeModel {
  id: number;
  description: NameModel;
  name: string;
  metadata: ResourceTypeMetadataModel[];

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.description = obj && obj.description || new NameModel();
    this.name = obj && obj.name || null;
    this.metadata = obj && obj.metadata || [];
  }
}

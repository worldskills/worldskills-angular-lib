export class ResourceTypeMetadataModel {
  metadata: number;
  required: boolean;

  constructor(obj?: any) {
    this.metadata = obj && obj.metadata || null;
    this.required = obj && obj.required || false;
  }
}

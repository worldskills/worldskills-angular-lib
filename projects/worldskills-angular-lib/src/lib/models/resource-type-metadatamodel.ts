export class ResourceTypeMetadataModel {
  id: number;
  required: boolean;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.required = obj && obj.required || false;
  }
}

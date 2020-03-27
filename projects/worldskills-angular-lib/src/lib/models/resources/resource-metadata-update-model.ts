export class ResourceMetadataUpdateModel {
  metadata: number;
  value: string;

  constructor(obj?: any) {
    this.metadata = obj && obj.metadata || null;
    this.value = obj && obj.value || '';
  }
}
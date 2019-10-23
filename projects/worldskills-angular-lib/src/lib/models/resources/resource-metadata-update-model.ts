export class ResourceMetadataUpdateModel {
  metadata: number;
  value: string;

  constructor(obj?: any) {
    this.metadata = obj && obj.id || null;
    this.value = obj && obj.value || '';
  }
}

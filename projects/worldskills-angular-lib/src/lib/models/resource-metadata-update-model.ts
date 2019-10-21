export class ResourceMetadataUpdateModel {
  id: number;
  value: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.value = obj && obj.value || '';
  }
}

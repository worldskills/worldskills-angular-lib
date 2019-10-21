export class StorageTypeModel {
  code: string;
  id: number;
  name: string;

  constructor(obj?: any) {
    this.code = obj && obj.code || null;
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
  }
}

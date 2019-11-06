export class ResourceSearchModel {
  tags: string[];
  name: string;
  // tslint:disable-next-line:variable-name
  ws_entity: number[];
  type: number[];
  sort: string;
  date: string;
  // tslint:disable-next-line:variable-name
  meta_text: string;
  // tslint:disable-next-line:variable-name
  meta_type: number[];
  offset: number;
  limit: number;

  constructor(obj?: Partial<ResourceSearchModel>) {
    this.tags = obj && obj.tags || null;
    this.name = obj && obj.name || null;
    this.ws_entity = obj && obj.ws_entity || null;
    this.type = obj && obj.type || null;
    this.sort = obj && obj.sort || null;
    this.date = obj && obj.date || null;
    this.meta_text = obj && obj.meta_text || null;
    this.meta_type = obj && obj.meta_type || null;
    this.offset = obj && obj.offset || null;
    this.limit = obj && obj.limit || null;
  }

  public toParams() {
    const obj = this;
    Object.keys(obj).forEach((key) => (obj[key] == null) && delete obj[key]);
    return obj;
  }
}

import { I18nModel } from '../I18n.model';
export class ResourceMetadataInfoModel {
  id: number;
  name: I18nModel;
  description: I18nModel;
  multiline: boolean;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || new I18nModel();
    this.description = obj && obj.description || new I18nModel();
    this.multiline = obj && obj.multiline || false;
  }
}

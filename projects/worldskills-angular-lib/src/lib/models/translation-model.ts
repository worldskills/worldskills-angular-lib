import { PairModel } from './pair.model';
import { DateUtil } from '../util/date-util';
import { LinkModelRaw } from './link-model-raw';
import { StorageTypeModel } from './storage-type-model';

export class TranslastionModel {
  contact: any;
  id: number;
  date: string;
  filename: string;
  links: LinkModelRaw[];
  // tslint:disable-next-line:variable-name
  modified_date: string;
  // tslint:disable-next-line:variable-name
  lang_code: string;
  // tslint:disable-next-line:variable-name
  storage_type: StorageTypeModel;
  // tslint:disable-next-line:variable-name
  storage_data: PairModel[];

  constructor(obj?: any) {
    this.contact = obj && obj.contact || null;
    this.id = obj && obj.id || null;
    this.lang_code = obj && obj.lang_code || 'en';
    this.date = obj && obj.date || DateUtil.toJavaDateString(new Date(), 'en');
    this.filename = obj && obj.filename || null;
    this.modified_date = obj && obj.modified_date || null;
    this.links = obj && obj.links || [];
    this.storage_type = obj && obj.storage_type || new StorageTypeModel();
    this.storage_data = obj && obj.storage_data || [];
  }
}

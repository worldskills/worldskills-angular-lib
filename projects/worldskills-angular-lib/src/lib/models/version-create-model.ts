import { DateUtil } from '../util/date-util';
import { TranslastionCreateModel } from './translation-create.model';

export class VersionCreateModel {
  name: string;
  date: string;
  translation: TranslastionCreateModel;
  tags: string[];

  constructor(obj?: Partial<VersionCreateModel>) {
    this.tags = []; // ensure we don't create tags
    this.name = obj && obj.name || '';
    this.translation = obj && obj.translation || new TranslastionCreateModel();
    this.date = obj && obj.date || DateUtil.toJavaDateString(new Date(), 'en');
  }
}

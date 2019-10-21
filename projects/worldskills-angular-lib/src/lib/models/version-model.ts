import { DateUtil } from '../util/date-util';
import { TranslastionCreateModel } from './translation-create.model';
import { TranslastionModel } from './translation-model';

export class VersionModel {
  id: number;
  name: string;
  date: string;
  // tslint:disable-next-line:variable-name
  modified_date: string;
  translations: TranslastionModel[];
  tags: string[];

  constructor(obj?: Partial<VersionModel>) {
    this.id = obj && obj.id || null;
    this.tags = []; // ensure we don't create tags
    this.name = obj && obj.name || '';
    this.translations = obj && obj.translations || [];
    this.date = obj && obj.date || DateUtil.toJavaDateString(new Date(), 'en');
    this.modified_date = obj && obj.modified_date || '';
  }
}

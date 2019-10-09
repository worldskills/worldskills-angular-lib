import { PairModel } from './pair.model';

export class TranslastionCreateModel {
  version: number;
  // tslint:disable-next-line:variable-name
  lang_code: string;
  // tslint:disable-next-line:variable-name
  storage_type: number;
  // tslint:disable-next-line:variable-name
  storage_data: PairModel[];

  constructor(obj?: Partial<TranslastionCreateModel>) {
    this.version = obj && obj.version || -1;
    this.lang_code = obj && obj.lang_code || 'en';
    this.storage_type = obj && obj.storage_type || 1;
    this.storage_data = obj && obj.storage_data || [];
  }
}

import { Link } from '../../common/models/link';
import { StorageType } from './sotrage-type';
import { Pair } from '../../common/models/pair';

export interface Translation {
  contact: any;
  id: number;
  date: string;
  filename: string;
  links: Link[];
  // tslint:disable-next-line:variable-name
  modified_date: string;
  // tslint:disable-next-line:variable-name
  lang_code: string;
  // tslint:disable-next-line:variable-name
  storage_type: StorageType;
  // tslint:disable-next-line:variable-name
  storage_data: Pair[];
}

import { Link } from '../../common/models/link';
import { Pair } from '../../common/models/pair';
import { StorageType } from './storage-type';

export interface Translation {
  id: number;
  date: string;
  modified_date: string;
  filename: string;
  lang_code: string;
  storage_type: StorageType;
  storage_data: Pair[];
  links: Link[];
  contact: unknown;
}

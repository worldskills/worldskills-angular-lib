import { Link } from '../../common/models/link';
import { StorageType } from './sotrage-type';
import { Pair } from '../../common/models/pair';
export interface Translation {
    contact: any;
    id: number;
    date: string;
    filename: string;
    links: Link[];
    modified_date: string;
    lang_code: string;
    storage_type: StorageType;
    storage_data: Pair[];
}

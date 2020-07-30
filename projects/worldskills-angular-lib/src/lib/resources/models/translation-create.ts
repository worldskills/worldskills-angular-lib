import { Pair } from '../../common/models/pair';

export interface TranslationCreate {
  version: number;
  lang_code: string;
  storage_type: number;
  storage_data: Pair[];
}

import { Pair } from './pair';

export interface TranslationCreate {
  version: number;
  lang_code: string;
  storage_type: number;
  storage_data: Pair[];
}

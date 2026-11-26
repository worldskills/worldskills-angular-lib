import { TranslationCreate } from './translation-create';

export interface VersionCreate {
  name: string;
  date?: string;
  translation?: TranslationCreate;
  tags?: string[];
}

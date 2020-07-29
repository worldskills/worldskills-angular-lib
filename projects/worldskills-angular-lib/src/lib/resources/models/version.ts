import { Translation } from './translation';
export interface Version {
  id: number;
  name: string;
  date: string;
  modified_date: string;
  translations: Translation[];
  tags: string[];
}

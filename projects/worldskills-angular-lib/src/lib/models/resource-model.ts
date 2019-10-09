import { I18nModel } from './I18n.model';
import { LinkModelRaw } from './link-model-raw';

// some fields are intentionally left out
export class ResourceModel {
  id: number;
  name: I18nModel;
  links: LinkModelRaw[];
}

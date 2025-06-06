import { WsEntityModel } from '../../auth/models/ws-entity';
import { I18nText } from '../../common/models/i18n-text';
import { CreatedBy } from './created-by';
import { EntityPath } from './entity-path';
import { Option } from './option';
import { Person } from './person';
import { Vote } from './vote';

export interface Poll {
  id: number;
  entity: WsEntityModel;
  entityPath: EntityPath;
  deleted: boolean;
  anonymousVoting: boolean;
  anonymousResults: boolean;
  showingResults: boolean;
  allowingReVote: boolean;
  allowingAbstain: boolean;
  whitelist: boolean;
  title: I18nText;
  question: I18nText;
  resultText?: I18nText;
  type: string;
  numberOfSelections: number;
  created: Date;
  start: Date;
  expiry: Date;
  createdBy: CreatedBy;
  options: Option[];
  userVote?: Vote;
  listId?: number;
  allowedVoters?: Person[];
  dependsOn?: Poll
}

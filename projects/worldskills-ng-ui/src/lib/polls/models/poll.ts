import { I18nText } from '../../common/models/i18n-text';
import { CreatedBy } from './created-by';
import { EntityPath } from './entity-path';
import { PollOption } from './option';
import { Person } from './person';
import { Vote } from './vote';
import { WsEntity } from '../../common/models/ws-entity';

export interface Poll {
  id: number;
  entity: WsEntity;
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
  type: 'standard' | 'weighted' | 'multiselect';
  numberOfSelections: number;
  created: Date | string;
  start: Date | string;
  expiry: Date | string;
  createdBy: CreatedBy;
  options: PollOption[];
  userVote?: Vote;
  listId?: number;
  allowedVoters?: Person[];
  dependsOn?: Poll;
}

import { CreatedByView } from './created-by-view';
import { OptionView } from './option-view';
import { WsEntityModel } from '../ws-entity-model';
import { I18nModel } from '../I18n.model';
import { EntityPathView } from '../entity/entity-path-view';

export class PollView {
    id: number;
    entity: WsEntityModel;
    entityPath: EntityPathView;
    deleted: boolean;
    anonymousVoting: boolean;
    anonymousResults: boolean;
    showingResults: boolean;
    allowingReVote: boolean;
    title: I18nModel;
    question: I18nModel;
    type: string;
    numberOfSelections: number;
    created: Date;
    start: Date;
    expiry: Date;
    createdBy: CreatedByView;
    options: OptionView[];

    constructor(obj?) {
        this.id = obj && obj.id || null;
        this.entity = obj && obj.entity || new WsEntityModel();
        this.entityPath = obj && obj.entityPath || new EntityPathView();
        this.deleted = obj && obj.deleted || false;
        this.anonymousVoting = obj && obj.anonymousVoting || false;
        this.anonymousResults = obj && obj.anonymousResults || false;
        this.showingResults = obj && obj.showingResults || true;
        this.allowingReVote = obj && obj.allowingReVote || true;
        this.title = obj && obj.title || new I18nModel();
        this.question = obj && obj.question || new I18nModel();
        this.type = obj && obj.type || null;
        this.numberOfSelections = obj && obj.numberOfSelections || 1;
        this.created = obj && obj.created || null;
        this.start = obj && obj.start || null;
        this.expiry = obj && obj.expiry || null;
        this.createdBy = obj && obj.createdBy || new CreatedByView();
        this.options = obj && obj.options || [];
    }
}

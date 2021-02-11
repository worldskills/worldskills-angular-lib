import { WsEntityModel } from '../../auth/models/ws-entity';
import { CreatedBy } from './created-by';

export interface PollList {
    id: number;
    title: string;
    entity: WsEntityModel;
    createdBy: CreatedBy;
    deleted: boolean;
    created: Date;
    slug: string;
}

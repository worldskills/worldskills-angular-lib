import { EntityPathItemView } from './entity-path-item-view';
export class EntityPathView {
    pieces: EntityPathItemView[];

    constructor(obj?) {
        this.pieces = obj && obj.pieces || [];
    }
}

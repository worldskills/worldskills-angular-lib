import { I18nText } from '../../common/models/i18n-text';
export declare class EntityTreeView {
    id: number;
    name: I18nText;
    parent_id: number;
    children: Array<EntityTreeView>;
    constructor(obj?: any);
}

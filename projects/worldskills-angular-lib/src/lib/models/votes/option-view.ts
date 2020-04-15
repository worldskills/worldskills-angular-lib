import { I18nModel } from '../I18n.model';

export class OptionView {
    id: number;
    text: I18nModel;
    deleted: boolean;

    constructor(obj?) {
        this.id = obj && obj.id || null;
        this.text = obj && obj.text || new I18nModel();
        this.deleted = obj && obj.deleted || false;
    }
}

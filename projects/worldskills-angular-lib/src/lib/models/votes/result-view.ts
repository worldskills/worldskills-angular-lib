import { OptionView } from './option-view';

export class ResultView {
    id: number;
    count: number;
    option: OptionView;

    constructor(obj?) {
        this.id = obj && obj.id || null;
        this.count = obj && obj.count || null;
        this.option = obj && obj.option || new OptionView();
    }
}

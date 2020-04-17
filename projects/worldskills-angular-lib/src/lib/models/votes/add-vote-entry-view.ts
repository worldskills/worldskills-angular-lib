export class AddVoteEntryView {
    rank: number;
    optionId: number;

    constructor(obj?) {
        this.rank = obj && obj.rank || null;
        this.optionId = obj && obj.optionId || null;
    }
}

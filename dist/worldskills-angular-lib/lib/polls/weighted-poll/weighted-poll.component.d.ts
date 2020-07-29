import { OnInit, EventEmitter } from '@angular/core';
import { Poll } from '../models/poll';
import { Vote } from '../models/vote';
import { VoteEntry } from '../models/vote-entry';
import * as i0 from "@angular/core";
export declare class WeightedPollComponent implements OnInit {
    poll: Poll;
    voted: Vote;
    initialSelection: VoteEntry[];
    optionSelected: EventEmitter<VoteEntry[]>;
    numSelections: number[];
    models: string[];
    constructor();
    ngOnInit(): void;
    init(): void;
    change(event: any, index: any): void;
    hasMaxSelections(): boolean;
    numberToWord(num: number): string;
    calcPointsForItem(num: number): number;
    isSelected(optionId: number): boolean;
    static ɵfac: i0.ɵɵFactoryDef<WeightedPollComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<WeightedPollComponent, "ws-weighted-poll", never, { "poll": "poll"; "voted": "voted"; "initialSelection": "initialSelection"; }, { "optionSelected": "optionSelected"; }, never, never>;
}

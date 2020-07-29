import { OnInit, EventEmitter } from '@angular/core';
import { Poll } from '../models/poll';
import { Vote } from '../models/vote';
import { VoteEntry } from '../models/vote-entry';
import { Option } from '../models/option';
import * as i0 from "@angular/core";
export declare class StandardPollComponent implements OnInit {
    poll: Poll;
    voted: Vote;
    initialSelection: VoteEntry[];
    optionSelected: EventEmitter<VoteEntry[]>;
    selection: VoteEntry;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    init(): void;
    loadDefaultSelection(): void;
    isSelected(option: Option): boolean;
    onOptionSelect(option: Option): void;
    static ɵfac: i0.ɵɵFactoryDef<StandardPollComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<StandardPollComponent, "ws-standard-poll", never, { "poll": "poll"; "voted": "voted"; "initialSelection": "initialSelection"; }, { "optionSelected": "optionSelected"; }, never, never>;
}

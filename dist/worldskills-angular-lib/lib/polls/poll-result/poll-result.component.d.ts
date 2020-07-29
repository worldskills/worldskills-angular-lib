import { OnInit } from '@angular/core';
import { Poll } from '../models/poll';
import { Result } from '../models/result';
import { Option } from '../models/option';
import * as i0 from "@angular/core";
export declare class PollResultComponent implements OnInit {
    max: number;
    poll: Poll;
    results: Result[];
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    init(): void;
    countVotes(option: Option): number;
    static ɵfac: i0.ɵɵFactoryDef<PollResultComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PollResultComponent, "ws-poll-result", never, { "poll": "poll"; "results": "results"; }, {}, never, never>;
}

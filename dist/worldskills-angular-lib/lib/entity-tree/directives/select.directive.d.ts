import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { WsSelectChangeEvent } from '../models/ws-select-change-event';
import * as i0 from "@angular/core";
export declare type EntryReader<T = any, U = any> = string | Array<string> | ((obj: T) => U);
export declare class SelectDirective implements OnInit, OnChanges {
    private ngSelectComponent;
    entryReader: [EntryReader, EntryReader, EntryReader | undefined] | [EntryReader, EntryReader] | {
        labelReader: EntryReader;
        valueReader: EntryReader;
        groupReader?: EntryReader;
    };
    items: any;
    wsChange: EventEmitter<WsSelectChangeEvent>;
    labelReader: EntryReader;
    valueReader: EntryReader;
    groupReader: EntryReader;
    private originalItems;
    constructor(ngSelectComponent: NgSelectComponent);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    private updateItems;
    private readObjectLabel;
    private readObjectValue;
    private readObjectGroup;
    static ɵfac: i0.ɵɵFactoryDef<SelectDirective, [{ optional: true; host: true; self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SelectDirective, "[wsSelect]", never, { "entryReader": "wsSelect"; "items": "items"; "labelReader": "labelReader"; "valueReader": "valueReader"; "groupReader": "groupReader"; }, { "wsChange": "wsChange"; }, never>;
}

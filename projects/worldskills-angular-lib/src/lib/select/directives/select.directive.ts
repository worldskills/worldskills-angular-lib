import {
    AfterViewInit,
    ChangeDetectorRef,
    ComponentFactoryResolver,
    Directive,
    EventEmitter,
    Host,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    Self,
    SimpleChange,
    SimpleChanges,
    ViewContainerRef
} from '@angular/core';
import {NgSelectComponent} from '@ng-select/ng-select';
import {SelectAsyncSearchSettings} from '../models/select-async-search-settings';
import {SelectChangeEvent} from '../models/select-change-event';
import {SelectAsyncHeaderComponent} from '../components/select-async-header.component';
import {DEFAULT_MIN_CHARACTERS, SelectAsyncHandler} from '../classes/select-async-handler.class';


export type EntryReader<T = any, U = any> = string | Array<string> | ((obj: T) => U);

@Directive({
    selector: '[wsSelect]',
    standalone: false
})
export class SelectDirective implements OnInit, OnChanges, OnDestroy, AfterViewInit {

    @Input('wsSelect') entryReader: [
        EntryReader,
        EntryReader,
        EntryReader | undefined
    ] | [
        EntryReader,
        EntryReader
    ] | {
        labelReader: EntryReader,
        valueReader: EntryReader,
        groupReader?: EntryReader
    };
    @Input() items: any;
    @Output() wsChange: EventEmitter<SelectChangeEvent> = new EventEmitter<SelectChangeEvent>();
    @Input() labelReader: EntryReader;
    @Input() valueReader: EntryReader;
    @Input() groupReader: EntryReader;
    @Input() asyncSearch: SelectAsyncSearchSettings;
    private originalItems: Array<any>;
    private asyncHandler: SelectAsyncHandler;

    constructor(
        @Host() @Optional() @Self() private ngSelectComponent: NgSelectComponent,
        private changeDetectorRef: ChangeDetectorRef,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
    ) {
    }

    ngAfterViewInit(): void {
        if (this.asyncHandler && !this.ngSelectComponent.headerTemplate) {
            this.viewContainerRef.clear();
            const factory = this.componentFactoryResolver.resolveComponentFactory(SelectAsyncHeaderComponent);
            const instance = this.viewContainerRef.createComponent(factory).instance;
            if (typeof this.asyncSearch === 'object' && 'message' in this.asyncSearch) {
                instance.content = this.asyncSearch.message;
            } else {
                const chars = (typeof this.asyncSearch === 'object' && 'minCharacters' in this.asyncSearch)
                    ? this.asyncSearch.minCharacters : DEFAULT_MIN_CHARACTERS;
                instance.content = `Type at least ${chars} characters to start searching...`;
            }
            this.asyncHandler.template = instance.templateRef;
            this.asyncHandler.showHeader();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.ngSelectComponent) {
            if (changes.items) {
                this.updateItems(changes.items.currentValue, changes.items.isFirstChange());
            }
            if (changes.asyncSearch && changes.asyncSearch.currentValue) {
                if (this.asyncHandler) {
                    this.asyncHandler.destroy();
                }
                this.asyncHandler
                    = new SelectAsyncHandler(this.ngSelectComponent, this.changeDetectorRef, changes.asyncSearch.currentValue);
                this.asyncHandler.initialize();
            }
        }
    }

    ngOnInit(): void {
        if (this.ngSelectComponent) {
            let labelReaderFromMainSelector;
            let valueReaderFromMainSelector;
            let groupReaderFromMainSelector;
            if (this.entryReader) {
                if (Array.isArray(this.entryReader)) {
                    const [valueReaderFromMainArray, labelReaderFromMainArray, groupReaderFromMainArray] = this.entryReader;
                    labelReaderFromMainSelector = labelReaderFromMainArray;
                    valueReaderFromMainSelector = valueReaderFromMainArray;
                    groupReaderFromMainSelector = groupReaderFromMainArray;
                } else {
                    const {
                        labelReader: labelReaderFromMainObject,
                        valueReader: valueReaderFromMainObject,
                        groupReader: groupReaderFromMainObject
                    } = this.entryReader;
                    labelReaderFromMainSelector = labelReaderFromMainObject;
                    valueReaderFromMainSelector = valueReaderFromMainObject;
                    groupReaderFromMainSelector = groupReaderFromMainObject;
                }
                if (!this.labelReader) {
                    this.labelReader = labelReaderFromMainSelector;
                }
                if (!this.valueReader) {
                    this.valueReader = valueReaderFromMainSelector;
                }
                if (!this.groupReader) {
                    this.groupReader = groupReaderFromMainSelector;
                }
            }
            if (!this.labelReader || !this.valueReader) {
                throw new Error('Provide both a means to read the label and the value');
            }

            if (typeof this.labelReader === 'string') {
                this.labelReader = this.labelReader.split('.');
            }
            if (typeof this.valueReader === 'string') {
                this.valueReader = this.valueReader.split('.');
            }

            this.ngSelectComponent.bindLabel = 'label';
            this.ngSelectComponent.bindValue = 'value';

            if (this.groupReader) {
                this.ngSelectComponent.groupBy = 'group';
            }

            if (this.wsChange) {
                const currentChangeEvent = this.ngSelectComponent.changeEvent;
                const newEventEmitter = new EventEmitter<any>();
                newEventEmitter.subscribe(original => {
                    if (original) {
                        this.wsChange.emit({
                            item: this.originalItems.find(i => this.readObjectValue(i) === original.value),
                            original,
                            value: original.value
                        });
                    } else {
                        this.wsChange.emit(null);
                    }
                });
                if (currentChangeEvent) {
                    const overrideEventEmitter = new EventEmitter<any>();
                    overrideEventEmitter.subscribe(obj => {
                        currentChangeEvent.emit(obj);
                        newEventEmitter.emit(obj);
                    });
                    this.ngSelectComponent.changeEvent = overrideEventEmitter;
                } else {
                    this.ngSelectComponent.changeEvent = newEventEmitter;
                }
            }

            if (this.asyncHandler) {
                this.asyncHandler.setupSearchListener();
            }

            this.updateItems(this.items);
        }
    }

    ngOnDestroy(): void {
        if (this.asyncHandler) {
            this.asyncHandler.destroy();
        }
    }

    private updateItems(items: Array<any>, firstChange = false): void {
        if (items) {
            this.originalItems = [...items];
            this.ngSelectComponent.items = items.map(obj => ({
                label: this.readObjectLabel(obj),
                value: this.readObjectValue(obj),
                group: this.groupReader ? this.readObjectGroup(obj) : undefined
            }));
            this.ngSelectComponent.ngOnChanges({items: new SimpleChange(null, this.ngSelectComponent.items, firstChange)});
        }
    }

    private readObjectLabel(obj: any): any {
        let label;
        if (Array.isArray(this.labelReader)) {
            if (this.labelReader.length === 1) {
                label = obj[this.labelReader[0]];
            } else {
                label = obj;
                for (const entry of this.labelReader) {
                    label = label[entry];
                    if (label === undefined) {
                        break;
                    }
                }
            }
        } else if (typeof this.labelReader === 'function') {
            label = this.labelReader(obj);
        }
        return label;
    }

    private readObjectValue(obj: any): any {
        let value;
        if (Array.isArray(this.valueReader)) {
            if (this.valueReader.length === 1) {
                value = obj[this.valueReader[0]];
            } else {
                value = obj;
                for (const entry of this.valueReader) {
                    value = value[entry];
                    if (value === undefined) {
                        break;
                    }
                }
            }
        } else if (typeof this.valueReader === 'function') {
            value = this.valueReader(obj);
        }
        return value;
    }

    private readObjectGroup(obj: any): any {
        let group;
        if (Array.isArray(this.groupReader)) {
            if (this.groupReader.length === 1) {
                group = obj[this.groupReader[0]];
            } else {
                group = obj;
                for (const entry of this.groupReader) {
                    group = group[entry];
                    if (group === undefined) {
                        break;
                    }
                }
            }
        } else if (typeof this.groupReader === 'function') {
            group = this.groupReader(obj);
        }
        return group;
    }

}

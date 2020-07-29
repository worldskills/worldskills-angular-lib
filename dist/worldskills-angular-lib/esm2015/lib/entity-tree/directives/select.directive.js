"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectDirective = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
const i1 = require("@ng-select/ng-select");
class SelectDirective {
    constructor(ngSelectComponent) {
        this.ngSelectComponent = ngSelectComponent;
        this.wsChange = new core_1.EventEmitter();
    }
    ngOnChanges(changes) {
        if (this.ngSelectComponent && changes.items) {
            this.updateItems(changes.items.currentValue, changes.items.isFirstChange());
        }
    }
    ngOnInit() {
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
                }
                else {
                    const { labelReader: labelReaderFromMainObject, valueReader: valueReaderFromMainObject, groupReader: groupReaderFromMainObject } = this.entryReader;
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
                const newEventEmitter = new core_1.EventEmitter();
                newEventEmitter.subscribe(original => {
                    if (original) {
                        this.wsChange.emit({
                            item: this.originalItems.find(i => this.readObjectValue(i) === original.value),
                            original,
                            value: original.value
                        });
                    }
                    else {
                        this.wsChange.emit(null);
                    }
                });
                if (currentChangeEvent) {
                    const overrideEventEmitter = new core_1.EventEmitter();
                    overrideEventEmitter.subscribe(obj => {
                        currentChangeEvent.emit(obj);
                        newEventEmitter.emit(obj);
                    });
                    this.ngSelectComponent.changeEvent = overrideEventEmitter;
                }
                else {
                    this.ngSelectComponent.changeEvent = newEventEmitter;
                }
            }
            this.updateItems(this.items);
        }
    }
    updateItems(items, firstChange = false) {
        if (items) {
            this.originalItems = [...items];
            this.ngSelectComponent.items = items.map(obj => ({
                label: this.readObjectLabel(obj),
                value: this.readObjectValue(obj),
                group: this.groupReader ? this.readObjectGroup(obj) : undefined
            }));
            this.ngSelectComponent.ngOnChanges({ items: new core_1.SimpleChange(null, this.ngSelectComponent.items, firstChange) });
        }
    }
    readObjectLabel(obj) {
        let label;
        if (Array.isArray(this.labelReader)) {
            if (this.labelReader.length === 1) {
                label = obj[this.labelReader[0]];
            }
            else {
                label = obj;
                for (const entry of this.labelReader) {
                    label = label[entry];
                    if (label === undefined) {
                        break;
                    }
                }
            }
        }
        else if (typeof this.labelReader === 'function') {
            label = this.labelReader(obj);
        }
        return label;
    }
    readObjectValue(obj) {
        let value;
        if (Array.isArray(this.valueReader)) {
            if (this.valueReader.length === 1) {
                value = obj[this.valueReader[0]];
            }
            else {
                value = obj;
                for (const entry of this.valueReader) {
                    value = value[entry];
                    if (value === undefined) {
                        break;
                    }
                }
            }
        }
        else if (typeof this.valueReader === 'function') {
            value = this.valueReader(obj);
        }
        return value;
    }
    readObjectGroup(obj) {
        let group;
        if (Array.isArray(this.groupReader)) {
            if (this.groupReader.length === 1) {
                group = obj[this.groupReader[0]];
            }
            else {
                group = obj;
                for (const entry of this.groupReader) {
                    group = group[entry];
                    if (group === undefined) {
                        break;
                    }
                }
            }
        }
        else if (typeof this.groupReader === 'function') {
            group = this.groupReader(obj);
        }
        return group;
    }
}
exports.SelectDirective = SelectDirective;
SelectDirective.ɵfac = function SelectDirective_Factory(t) { return new (t || SelectDirective)(i0.ɵɵdirectiveInject(i1.NgSelectComponent, 11)); };
SelectDirective.ɵdir = i0.ɵɵdefineDirective({ type: SelectDirective, selectors: [["", "wsSelect", ""]], inputs: { entryReader: ["wsSelect", "entryReader"], items: "items", labelReader: "labelReader", valueReader: "valueReader", groupReader: "groupReader" }, outputs: { wsChange: "wsChange" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectDirective, [{
        type: core_1.Directive,
        args: [{
                selector: '[wsSelect]'
            }]
    }], function () { return [{ type: i1.NgSelectComponent, decorators: [{
                type: core_1.Host
            }, {
                type: core_1.Optional
            }, {
                type: core_1.Self
            }] }]; }, { entryReader: [{
            type: core_1.Input,
            args: ['wsSelect']
        }], items: [{
            type: core_1.Input
        }], wsChange: [{
            type: core_1.Output
        }], labelReader: [{
            type: core_1.Input
        }], valueReader: [{
            type: core_1.Input
        }], groupReader: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvZW50aXR5LXRyZWUvZGlyZWN0aXZlcy9zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQVl1Qjs7O0FBT3ZCLE1BR2EsZUFBZTtJQXFCMUIsWUFDc0MsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFQaEUsYUFBUSxHQUFzQyxJQUFJLG1CQUFZLEVBQXVCLENBQUM7SUFTaEcsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLDJCQUEyQixDQUFDO1lBQ2hDLElBQUksMkJBQTJCLENBQUM7WUFDaEMsSUFBSSwyQkFBMkIsQ0FBQztZQUNoQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ25DLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3hHLDJCQUEyQixHQUFHLHdCQUF3QixDQUFDO29CQUN2RCwyQkFBMkIsR0FBRyx3QkFBd0IsQ0FBQztvQkFDdkQsMkJBQTJCLEdBQUcsd0JBQXdCLENBQUM7aUJBQ3hEO3FCQUFN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Q0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNqQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNaLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDcEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO3dCQUN2QixNQUFNO3FCQUNQO2lCQUNGO2FBQ0Y7U0FDRjthQUFNLElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtZQUNqRCxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7QUF4TEgsMENBMExDOzhFQXZMWSxlQUFlO29EQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUgzQixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOztzQkF1QkksV0FBSTs7c0JBQUksZUFBUTs7c0JBQUksV0FBSTs7a0JBcEIxQixZQUFLO21CQUFDLFVBQVU7O2tCQVloQixZQUFLOztrQkFDTCxhQUFNOztrQkFDTixZQUFLOztrQkFDTCxZQUFLOztrQkFDTCxZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2VsZixcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ1NlbGVjdENvbXBvbmVudH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHsgV3NTZWxlY3RDaGFuZ2VFdmVudCB9IGZyb20gJy4uL21vZGVscy93cy1zZWxlY3QtY2hhbmdlLWV2ZW50JztcblxuXG5leHBvcnQgdHlwZSBFbnRyeVJlYWRlcjxUID0gYW55LCBVID0gYW55PiA9IHN0cmluZyB8IEFycmF5PHN0cmluZz4gfCAoKG9iajogVCkgPT4gVSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t3c1NlbGVjdF0nXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoJ3dzU2VsZWN0JykgZW50cnlSZWFkZXI6IFtcbiAgICBFbnRyeVJlYWRlcixcbiAgICBFbnRyeVJlYWRlcixcbiAgICBFbnRyeVJlYWRlciB8IHVuZGVmaW5lZFxuICBdIHwgW1xuICAgIEVudHJ5UmVhZGVyLFxuICAgIEVudHJ5UmVhZGVyXG4gIF0gfCB7XG4gICAgbGFiZWxSZWFkZXI6IEVudHJ5UmVhZGVyLFxuICAgIHZhbHVlUmVhZGVyOiBFbnRyeVJlYWRlcixcbiAgICBncm91cFJlYWRlcj86IEVudHJ5UmVhZGVyXG4gIH07XG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnk7XG4gIEBPdXRwdXQoKSB3c0NoYW5nZTogRXZlbnRFbWl0dGVyPFdzU2VsZWN0Q2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxXc1NlbGVjdENoYW5nZUV2ZW50PigpO1xuICBASW5wdXQoKSBsYWJlbFJlYWRlcjogRW50cnlSZWFkZXI7XG4gIEBJbnB1dCgpIHZhbHVlUmVhZGVyOiBFbnRyeVJlYWRlcjtcbiAgQElucHV0KCkgZ3JvdXBSZWFkZXI6IEVudHJ5UmVhZGVyO1xuICBwcml2YXRlIG9yaWdpbmFsSXRlbXM6IEFycmF5PGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2VsZigpIHByaXZhdGUgbmdTZWxlY3RDb21wb25lbnQ6IE5nU2VsZWN0Q29tcG9uZW50XG4gICkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nU2VsZWN0Q29tcG9uZW50ICYmIGNoYW5nZXMuaXRlbXMpIHtcbiAgICAgIHRoaXMudXBkYXRlSXRlbXMoY2hhbmdlcy5pdGVtcy5jdXJyZW50VmFsdWUsIGNoYW5nZXMuaXRlbXMuaXNGaXJzdENoYW5nZSgpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ1NlbGVjdENvbXBvbmVudCkge1xuICAgICAgbGV0IGxhYmVsUmVhZGVyRnJvbU1haW5TZWxlY3RvcjtcbiAgICAgIGxldCB2YWx1ZVJlYWRlckZyb21NYWluU2VsZWN0b3I7XG4gICAgICBsZXQgZ3JvdXBSZWFkZXJGcm9tTWFpblNlbGVjdG9yO1xuICAgICAgaWYgKHRoaXMuZW50cnlSZWFkZXIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5lbnRyeVJlYWRlcikpIHtcbiAgICAgICAgICBjb25zdCBbdmFsdWVSZWFkZXJGcm9tTWFpbkFycmF5LCBsYWJlbFJlYWRlckZyb21NYWluQXJyYXksIGdyb3VwUmVhZGVyRnJvbU1haW5BcnJheV0gPSB0aGlzLmVudHJ5UmVhZGVyO1xuICAgICAgICAgIGxhYmVsUmVhZGVyRnJvbU1haW5TZWxlY3RvciA9IGxhYmVsUmVhZGVyRnJvbU1haW5BcnJheTtcbiAgICAgICAgICB2YWx1ZVJlYWRlckZyb21NYWluU2VsZWN0b3IgPSB2YWx1ZVJlYWRlckZyb21NYWluQXJyYXk7XG4gICAgICAgICAgZ3JvdXBSZWFkZXJGcm9tTWFpblNlbGVjdG9yID0gZ3JvdXBSZWFkZXJGcm9tTWFpbkFycmF5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGxhYmVsUmVhZGVyOiBsYWJlbFJlYWRlckZyb21NYWluT2JqZWN0LFxuICAgICAgICAgICAgdmFsdWVSZWFkZXI6IHZhbHVlUmVhZGVyRnJvbU1haW5PYmplY3QsXG4gICAgICAgICAgICBncm91cFJlYWRlcjogZ3JvdXBSZWFkZXJGcm9tTWFpbk9iamVjdFxuICAgICAgICAgIH0gPSB0aGlzLmVudHJ5UmVhZGVyO1xuICAgICAgICAgIGxhYmVsUmVhZGVyRnJvbU1haW5TZWxlY3RvciA9IGxhYmVsUmVhZGVyRnJvbU1haW5PYmplY3Q7XG4gICAgICAgICAgdmFsdWVSZWFkZXJGcm9tTWFpblNlbGVjdG9yID0gdmFsdWVSZWFkZXJGcm9tTWFpbk9iamVjdDtcbiAgICAgICAgICBncm91cFJlYWRlckZyb21NYWluU2VsZWN0b3IgPSBncm91cFJlYWRlckZyb21NYWluT2JqZWN0O1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5sYWJlbFJlYWRlcikge1xuICAgICAgICAgIHRoaXMubGFiZWxSZWFkZXIgPSBsYWJlbFJlYWRlckZyb21NYWluU2VsZWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlUmVhZGVyKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZVJlYWRlciA9IHZhbHVlUmVhZGVyRnJvbU1haW5TZWxlY3RvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZ3JvdXBSZWFkZXIpIHtcbiAgICAgICAgICB0aGlzLmdyb3VwUmVhZGVyID0gZ3JvdXBSZWFkZXJGcm9tTWFpblNlbGVjdG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMubGFiZWxSZWFkZXIgfHwgIXRoaXMudmFsdWVSZWFkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm92aWRlIGJvdGggYSBtZWFucyB0byByZWFkIHRoZSBsYWJlbCBhbmQgdGhlIHZhbHVlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5sYWJlbFJlYWRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5sYWJlbFJlYWRlciA9IHRoaXMubGFiZWxSZWFkZXIuc3BsaXQoJy4nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZVJlYWRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy52YWx1ZVJlYWRlciA9IHRoaXMudmFsdWVSZWFkZXIuc3BsaXQoJy4nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5uZ1NlbGVjdENvbXBvbmVudC5iaW5kTGFiZWwgPSAnbGFiZWwnO1xuICAgICAgdGhpcy5uZ1NlbGVjdENvbXBvbmVudC5iaW5kVmFsdWUgPSAndmFsdWUnO1xuXG4gICAgICBpZiAodGhpcy5ncm91cFJlYWRlcikge1xuICAgICAgICB0aGlzLm5nU2VsZWN0Q29tcG9uZW50Lmdyb3VwQnkgPSAnZ3JvdXAnO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy53c0NoYW5nZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50Q2hhbmdlRXZlbnQgPSB0aGlzLm5nU2VsZWN0Q29tcG9uZW50LmNoYW5nZUV2ZW50O1xuICAgICAgICBjb25zdCBuZXdFdmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICAgICAgbmV3RXZlbnRFbWl0dGVyLnN1YnNjcmliZShvcmlnaW5hbCA9PiB7XG4gICAgICAgICAgaWYgKG9yaWdpbmFsKSB7XG4gICAgICAgICAgICB0aGlzLndzQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgICBpdGVtOiB0aGlzLm9yaWdpbmFsSXRlbXMuZmluZChpID0+IHRoaXMucmVhZE9iamVjdFZhbHVlKGkpID09PSBvcmlnaW5hbC52YWx1ZSksXG4gICAgICAgICAgICAgIG9yaWdpbmFsLFxuICAgICAgICAgICAgICB2YWx1ZTogb3JpZ2luYWwudmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndzQ2hhbmdlLmVtaXQobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGN1cnJlbnRDaGFuZ2VFdmVudCkge1xuICAgICAgICAgIGNvbnN0IG92ZXJyaWRlRXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgICAgICAgb3ZlcnJpZGVFdmVudEVtaXR0ZXIuc3Vic2NyaWJlKG9iaiA9PiB7XG4gICAgICAgICAgICBjdXJyZW50Q2hhbmdlRXZlbnQuZW1pdChvYmopO1xuICAgICAgICAgICAgbmV3RXZlbnRFbWl0dGVyLmVtaXQob2JqKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLm5nU2VsZWN0Q29tcG9uZW50LmNoYW5nZUV2ZW50ID0gb3ZlcnJpZGVFdmVudEVtaXR0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5uZ1NlbGVjdENvbXBvbmVudC5jaGFuZ2VFdmVudCA9IG5ld0V2ZW50RW1pdHRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zKHRoaXMuaXRlbXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSXRlbXMoaXRlbXM6IEFycmF5PGFueT4sIGZpcnN0Q2hhbmdlID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoaXRlbXMpIHtcbiAgICAgIHRoaXMub3JpZ2luYWxJdGVtcyA9IFsuLi5pdGVtc107XG4gICAgICB0aGlzLm5nU2VsZWN0Q29tcG9uZW50Lml0ZW1zID0gaXRlbXMubWFwKG9iaiA9PiAoe1xuICAgICAgICBsYWJlbDogdGhpcy5yZWFkT2JqZWN0TGFiZWwob2JqKSxcbiAgICAgICAgdmFsdWU6IHRoaXMucmVhZE9iamVjdFZhbHVlKG9iaiksXG4gICAgICAgIGdyb3VwOiB0aGlzLmdyb3VwUmVhZGVyID8gdGhpcy5yZWFkT2JqZWN0R3JvdXAob2JqKSA6IHVuZGVmaW5lZFxuICAgICAgfSkpO1xuICAgICAgdGhpcy5uZ1NlbGVjdENvbXBvbmVudC5uZ09uQ2hhbmdlcyh7aXRlbXM6IG5ldyBTaW1wbGVDaGFuZ2UobnVsbCwgdGhpcy5uZ1NlbGVjdENvbXBvbmVudC5pdGVtcywgZmlyc3RDaGFuZ2UpfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWFkT2JqZWN0TGFiZWwob2JqOiBhbnkpOiBhbnkge1xuICAgIGxldCBsYWJlbDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmxhYmVsUmVhZGVyKSkge1xuICAgICAgaWYgKHRoaXMubGFiZWxSZWFkZXIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGxhYmVsID0gb2JqW3RoaXMubGFiZWxSZWFkZXJbMF1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWwgPSBvYmo7XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5sYWJlbFJlYWRlcikge1xuICAgICAgICAgIGxhYmVsID0gbGFiZWxbZW50cnldO1xuICAgICAgICAgIGlmIChsYWJlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmxhYmVsUmVhZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsYWJlbCA9IHRoaXMubGFiZWxSZWFkZXIob2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkT2JqZWN0VmFsdWUob2JqOiBhbnkpOiBhbnkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlUmVhZGVyKSkge1xuICAgICAgaWYgKHRoaXMudmFsdWVSZWFkZXIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhbHVlID0gb2JqW3RoaXMudmFsdWVSZWFkZXJbMF1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBvYmo7XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy52YWx1ZVJlYWRlcikge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWVbZW50cnldO1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnZhbHVlUmVhZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMudmFsdWVSZWFkZXIob2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkT2JqZWN0R3JvdXAob2JqOiBhbnkpOiBhbnkge1xuICAgIGxldCBncm91cDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmdyb3VwUmVhZGVyKSkge1xuICAgICAgaWYgKHRoaXMuZ3JvdXBSZWFkZXIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGdyb3VwID0gb2JqW3RoaXMuZ3JvdXBSZWFkZXJbMF1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JvdXAgPSBvYmo7XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5ncm91cFJlYWRlcikge1xuICAgICAgICAgIGdyb3VwID0gZ3JvdXBbZW50cnldO1xuICAgICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmdyb3VwUmVhZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBncm91cCA9IHRoaXMuZ3JvdXBSZWFkZXIob2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG5cbn1cbiJdfQ==
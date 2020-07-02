import {
  Directive,
  EventEmitter,
  Host,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  Self,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import {NgSelectComponent} from '@ng-select/ng-select';

export type EntryReader<T = any, U = any> = string | Array<string> | ((obj: T) => U);

export interface WsSelectChangeEvent<T = any, U = any> {
  item: T;
  original: {
    label: string,
    value: U,
    [key: string]: any,
  };
  value: U;
}

@Directive({
  selector: '[wsSelect]'
})
export class SelectDirective implements OnInit, OnChanges {

  @Input('wsSelect') entryReader: [EntryReader, EntryReader] | { labelReader: EntryReader, valueReader: EntryReader };
  @Input() items: any;
  @Output() wsChange: EventEmitter<WsSelectChangeEvent> = new EventEmitter<WsSelectChangeEvent>();
  @Input() labelReader: EntryReader;
  @Input() valueReader: EntryReader;
  private originalItems: Array<any>;

  constructor(
    @Host() @Optional() @Self() private ngSelectComponent: NgSelectComponent
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ngSelectComponent && changes.items && changes.items.isFirstChange()) {
      this.updateItems(changes.items.currentValue);
    }
  }

  ngOnInit(): void {
    if (this.ngSelectComponent) {
      let labelReaderFromMainSelector;
      let valueReaderFromMainSelector;
      if (this.entryReader) {
        if (Array.isArray(this.entryReader)) {
          const [valueReaderFromMainArray, labelReaderFromMainArray] = this.entryReader;
          labelReaderFromMainSelector = labelReaderFromMainArray;
          valueReaderFromMainSelector = valueReaderFromMainArray;
        } else {
          const {labelReader: labelReaderFromMainObject, valueReader: valueReaderFromMainObject} = this.entryReader;
          labelReaderFromMainSelector = labelReaderFromMainObject;
          valueReaderFromMainSelector = valueReaderFromMainObject;
        }
        if (!this.labelReader) {
          this.labelReader = labelReaderFromMainSelector;
        }
        if (!this.valueReader) {
          this.valueReader = valueReaderFromMainSelector;
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

      if (this.wsChange) {
        const currentChangeEvent = this.ngSelectComponent.changeEvent;
        const newEventEmitter = new EventEmitter<any>();
        newEventEmitter.subscribe(original => {
          this.wsChange.emit({
            item: this.originalItems.find(i => this.readObjectValue(i) === original.value),
            original,
            value: original.value
          });
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

      this.updateItems(this.items);
    }
  }

  private updateItems(items: Array<any>) {
    this.originalItems = [...items];
    this.ngSelectComponent.items = items.map(obj => ({
      label: this.readObjectLabel(obj),
      value: this.readObjectValue(obj),
    }));
    this.ngSelectComponent.ngOnChanges({items: new SimpleChange(null, this.ngSelectComponent.items, true)});
  }

  private readObjectLabel(obj: any) {
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

  private readObjectValue(obj: any) {
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

}

import {Subject, Subscription} from 'rxjs';
import {ChangeDetectorRef, TemplateRef} from '@angular/core';
import {NgSelectComponent} from '@ng-select/ng-select';
import {SelectAsyncSearchSettings} from '../models/select-async-search-settings';
import {SelectAsyncSearchObserverResolver} from '../models/select-async-search-observer-resolver';
import {debounceTime} from 'rxjs/operators';

const DEFAULT_DEBOUNCE_TIME = 200;
export const DEFAULT_MIN_CHARACTERS = 3;

export class SelectAsyncHandler {
    debounceSubject: Subject<string>;
    debounceSubscription: Subscription;
    template: TemplateRef<any>;

    constructor(
        private ngSelectComponent: NgSelectComponent,
        private changeDetectorRef: ChangeDetectorRef,
        private settings: SelectAsyncSearchSettings,
    ) {
    }

    initialize(): void {
        if (this.debounceSubscription) {
            this.debounceSubscription.unsubscribe();
        }
        let theDebounceTime = DEFAULT_DEBOUNCE_TIME;
        let subscription: SelectAsyncSearchObserverResolver;
        if (typeof this.settings === 'object' && 'debounceTime' in this.settings) {
            theDebounceTime = this.settings.debounceTime;
        }
        if (typeof this.settings === 'object' && 'observer' in this.settings) {
            subscription = this.settings.observer;
        } else {
            subscription = this.settings;
        }
        this.debounceSubject = new Subject<string>();
        this.debounceSubscription = this.debounceSubject.pipe(debounceTime(theDebounceTime)).subscribe(value => {
            if (typeof subscription === 'function') {
                const observable = subscription(value);
                if (observable) {
                    observable.subscribe(() => {
                        this.ngSelectComponent.loading = false;
                        this.changeDetectorRef.detectChanges();
                    });
                    this.ngSelectComponent.loading = true;
                    this.changeDetectorRef.detectChanges();
                }
            } else {
                subscription.next(value);
            }
        });
    }

    setupSearchListener(): void {
        this.ngSelectComponent.searchEvent.subscribe(value => {
            const minCharacters = (typeof this.settings === 'object' && 'minCharacters' in this.settings)
                ? this.settings.minCharacters : DEFAULT_MIN_CHARACTERS;
            if (value.term && value.term.length >= minCharacters) {
                this.hideHeader();
                if (typeof this.settings === 'object' && 'onValid' in this.settings) {
                    this.settings.onValid(true);
                }
                this.debounceSubject.next(value.term);
            } else {
                this.showHeader();
                if (typeof this.settings === 'object' && 'onValid' in this.settings) {
                    this.settings.onValid(false);
                }
            }
        });
    }

    showHeader(): void {
        if (this.template) {
            this.ngSelectComponent.headerTemplate = this.template;
            this.changeDetectorRef.detectChanges();
        }
    }

    hideHeader(): void {
        if (this.template) {
            this.ngSelectComponent.headerTemplate = null;
            this.changeDetectorRef.detectChanges();
        }
    }

    destroy(): void {
        if (this.debounceSubscription) {
            this.debounceSubscription.unsubscribe();
        }
    }
}

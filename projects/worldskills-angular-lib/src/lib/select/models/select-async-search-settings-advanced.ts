import {TemplateRef} from '@angular/core';
import {SelectAsyncSearchObserverResolver} from './select-async-search-observer-resolver';

export interface SelectAsyncSearchSettingsAdvanced {
    minCharacters?: number;
    debounceTime?: number;
    message?: string | TemplateRef<any>;
    onValid?: (valid: boolean) => void;
    observer: SelectAsyncSearchObserverResolver;
}

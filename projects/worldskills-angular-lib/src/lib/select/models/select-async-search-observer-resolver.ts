import {Observable, PartialObserver} from 'rxjs';

export type SelectAsyncSearchObserverResolver =
    PartialObserver<string>
    | ((value: string) => void)
    | ((value: string) => Observable<string>);

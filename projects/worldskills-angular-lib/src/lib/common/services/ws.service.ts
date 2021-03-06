import { BehaviorSubject, forkJoin, Observable, ReplaySubject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

/**
 * Example usage:
 *
 * fetch(eventId: number, rOpt?: RequestOptions): Observable<T>;
 * fetch(eventId: number, params: FetchParams, rOpt?: RequestOptions): Observable<T>;
 * fetch(eventId: number, mOpt: MulticastOptions, rOpt?: RequestOptions): Observable<T>;
 * fetch(eventId: number, params: FetchParams, mOpt: MulticastOptions, rOpt?: RequestOptions): Observable<T>;
 * fetch(eventId: number, p1: P1, p2?: P2, p3?: P3): Observable<T> {
 *   const {fetchParams, multicastOptions, requestOptions} = this.resolveArgs(p1, p2, p3, FULL);
 *   const params: HttpParams = httpParamsFromFetchParams(fetchParams);
 *   const observable = this.http.get<T>("http://example.com", {params}).pipe(share());
 *   return this.request(observable, multicastOptions);
 * }
 */

export interface MulticastOptions {
  subject?: boolean;
  loader?: boolean;
  subscription?: boolean;
  onError?: (error: any) => void;
}

export interface FetchParams {
  limit?: number;
  offset?: number;
  sort?: string;
  l?: string;
}

export interface RequestOptions {
  url?: string;
}

export function isMulticastOptions(object: any): object is MulticastOptions {
  return object && ('subject' in object || 'loader' in object || 'subscription' in object || 'onError' in object);
}

// Fetch params can be empty and probably is most of the time, so hard to check this in a signature
export function isFetchParams(object: any): object is FetchParams {
  return object && ('limit' in object || 'offset' in object || 'sort' in object || 'l' in object);
}

export function isRequestOptions(object: any): object is RequestOptions {
  return object && ('url' in object);
}

export type WsServiceRequestP1 = FetchParams | MulticastOptions | RequestOptions;
export type WsServiceRequestP2 = MulticastOptions | RequestOptions;
export type WsServiceRequestP3 = RequestOptions;

export const FULL: MulticastOptions = {
  subject: true,
  loader: true,
  subscription: true
};

export const LOADER_ONLY: MulticastOptions = {
  loader: true
};

export const NO_SUBJECT: MulticastOptions = {
  loader: true,
  subscription: true
};

export abstract class WsService<T, U extends FetchParams = FetchParams> {

  private loaders = new BehaviorSubject(0);
  private subscription: Subscription = null;
  public subject = new ReplaySubject<T>(1);
  public loading = new ReplaySubject<boolean>(1);

  protected constructor() {
    this.loaders.subscribe(numLoaders => this.loading.next(numLoaders !== 0));
  }

  protected resolveArgs(
    p1: WsServiceRequestP1,
    p2: WsServiceRequestP2,
    p3: WsServiceRequestP3,
    defaultMulticastOptions: MulticastOptions,
    defaultFetchParams?: U
  ): {
    fetchParams: U,
    multicastOptions: MulticastOptions,
    requestOptions: RequestOptions
  } {
    let fetchParams: U;
    let multicastOptions: MulticastOptions;
    let requestOptions: RequestOptions;
    if (isRequestOptions(p3)) {
      fetchParams = p1 as U;
      multicastOptions = p2 as MulticastOptions;
      requestOptions = p3;
    } else if (isRequestOptions(p2)) {
      requestOptions = p2;
      if (isMulticastOptions(p1)) {
        multicastOptions = p1;
      } else if (!isMulticastOptions(p1)) {
        fetchParams = p1 as U;
      }
    } else if (isRequestOptions(p1)) {
      requestOptions = p1;
    } else {
      if (isMulticastOptions(p2) && !isMulticastOptions(p1)) {
        fetchParams = p1 as U;
        multicastOptions = p2;
      } else {
        if (isMulticastOptions(p1)) {
          multicastOptions = p1;
        } else if (!isMulticastOptions(p1)) {
          fetchParams = p1 as U;
        }
      }
    }
    if (fetchParams === undefined) {
      fetchParams = defaultFetchParams;
    }
    if (multicastOptions === undefined) {
      multicastOptions = defaultMulticastOptions;
    }
    if (requestOptions === undefined) {
      requestOptions = {};
    }
    return {
      fetchParams,
      multicastOptions,
      requestOptions
    };
  }

  private incrementLoader(): void {
    this.loaders.pipe(take(1)).subscribe(v => {
      this.loaders.next(++v);
    });
  }

  private decrementLoader(): void {
    this.loaders.pipe(take(1)).subscribe(v => {
      const loaders = Math.max(0, v - 1);
      this.loaders.next(loaders);
    });
  }

  protected multicast(observable: Observable<T | T[]>, options: MulticastOptions = FULL): void {
    const {loader, subject, subscription, onError} = options;
    if (loader) {
      this.incrementLoader();
    }
    if (subscription && this.subscription) {
      if (loader && !this.subscription.closed) {
        this.decrementLoader();
        this.subscription.unsubscribe();
      }
    }
    const s = observable.subscribe(value => {
      if (loader) {
        this.decrementLoader();
      }
      if (subject) {
        this.subject.next(value as T);
      }
    }, error => {
      if (loader) {
        this.decrementLoader();
      }
      if (onError) {
        onError(error);
      }
    });
    if (subscription) {
      this.subscription = s;
    }
  }

  protected request(observable: Observable<T>, options: MulticastOptions = FULL): Observable<T> {
    this.multicast(observable, options);
    return observable;
  }

  protected requestMany(observables: Array<Observable<T>>, options: MulticastOptions = NO_SUBJECT): Observable<Array<T>> {
    const forkJoined = forkJoin(observables);
    this.multicast(forkJoined, options);
    return forkJoined;
  }

}

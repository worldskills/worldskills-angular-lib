import { Observable, ReplaySubject } from 'rxjs';
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
export declare function isMulticastOptions(object: any): object is MulticastOptions;
export declare function isFetchParams(object: any): object is FetchParams;
export declare function isRequestOptions(object: any): object is RequestOptions;
export declare type WsServiceRequestP1 = FetchParams | MulticastOptions | RequestOptions;
export declare type WsServiceRequestP2 = MulticastOptions | RequestOptions;
export declare type WsServiceRequestP3 = RequestOptions;
export declare const FULL: MulticastOptions;
export declare const LOADER_ONLY: MulticastOptions;
export declare const NO_SUBJECT: MulticastOptions;
export declare abstract class WsService<T, U extends FetchParams = FetchParams> {
    private loaders;
    private subscription;
    subject: ReplaySubject<T>;
    loading: ReplaySubject<boolean>;
    protected constructor();
    protected resolveArgs(p1: WsServiceRequestP1, p2: WsServiceRequestP2, p3: WsServiceRequestP3, defaultMulticastOptions: MulticastOptions, defaultFetchParams?: U): {
        fetchParams: U;
        multicastOptions: MulticastOptions;
        requestOptions: RequestOptions;
    };
    private incrementLoader;
    private decrementLoader;
    protected multicast(observable: Observable<T | T[]>, options?: MulticastOptions): void;
    protected request(observable: Observable<T>, options?: MulticastOptions): Observable<T>;
    protected requestMany(observables: Array<Observable<T>>, options?: MulticastOptions): Observable<Array<T>>;
}

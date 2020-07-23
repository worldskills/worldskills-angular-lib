import {TestBed} from '@angular/core/testing';
import {
  FetchParams, FULL, LOADER_ONLY, MulticastOptions, WsServiceRequestP1, WsServiceRequestP2, WsServiceRequestP3,
  RequestOptions, WsService
} from './ws.service';
import {Observable, of} from 'rxjs';
import * as faker from 'faker';

interface WsServiceArgs {
  fetchParams: FetchParams;
  multicastOptions: MulticastOptions;
  requestOptions: RequestOptions;
}

function mockFetchParamsFactory(): FetchParams {
  return {
    limit: faker.random.number(100),
    offset: faker.random.number(100)
  };
}

function mockRequestOptions(): RequestOptions {
  return {
    url: faker.internet.url()
  };
}

// tslint:disable-next-line:typedef
function assertWsServiceArgs<T = WsServiceArgs>(done: DoneFn, assert: (wsServiceArgs: T) => void) {
  return {
    next: (wsServiceArgs: T) => {
      assert(wsServiceArgs);
      done();
    },
    error: done.fail,
    complete: done
  };
}

describe('WsComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  class TestService extends WsService<WsServiceArgs> {
    constructor() {
      super();
    }

    fetch(rOpt?: RequestOptions): Observable<WsServiceArgs>;
    fetch(params: FetchParams, rOpt?: RequestOptions): Observable<WsServiceArgs>;
    // tslint:disable-next-line:unified-signatures
    fetch(mOpt: MulticastOptions, rOpt?: RequestOptions): Observable<WsServiceArgs>;
    fetch(params: FetchParams, mOpt: MulticastOptions, rOpt?: RequestOptions): Observable<WsServiceArgs>;
    fetch(p1: WsServiceRequestP1, p2?: WsServiceRequestP2, p3?: WsServiceRequestP3): Observable<WsServiceArgs> {
      const {fetchParams, multicastOptions, requestOptions} = this.resolveArgs(p1, p2, p3, FULL);
      const observable = of({fetchParams, multicastOptions, requestOptions});
      return this.request(observable, multicastOptions);
    }

    fetchMany(rOpt?: RequestOptions): Observable<Array<WsServiceArgs>>;
    fetchMany(params: FetchParams, rOpt?: RequestOptions): Observable<Array<WsServiceArgs>>;
    // tslint:disable-next-line:unified-signatures
    fetchMany(mOpt: MulticastOptions, rOpt?: RequestOptions): Observable<Array<WsServiceArgs>>;
    fetchMany(params: FetchParams, mOpt: MulticastOptions, rOpt?: RequestOptions): Observable<Array<WsServiceArgs>>;
    fetchMany(p1: WsServiceRequestP1, p2?: WsServiceRequestP2, p3?: WsServiceRequestP3): Observable<Array<WsServiceArgs>> {
      const {fetchParams, multicastOptions, requestOptions} = this.resolveArgs(p1, p2, p3, FULL);
      const observables = [];
      observables.push(of({fetchParams, multicastOptions, requestOptions}));
      observables.push(of({fetchParams, multicastOptions, requestOptions}));
      return this.requestMany(observables, multicastOptions);
    }
  }

  it('calls request', (done: DoneFn) => {
    const service = new TestService();
    service.fetch().subscribe(assertWsServiceArgs(done, (wsServiceArgs: WsServiceArgs) => {
      expect(wsServiceArgs).toEqual({
        fetchParams: undefined,
        multicastOptions: FULL,
        requestOptions: {}
      });
    }));
  });

  it('calls request with fetch params', (done: DoneFn) => {
    const service = new TestService();
    const fetchParams = mockFetchParamsFactory();
    service.fetch(fetchParams).subscribe(assertWsServiceArgs(done, (wsServiceArgs: WsServiceArgs) => {
      expect(wsServiceArgs).toEqual({
        fetchParams,
        multicastOptions: FULL,
        requestOptions: {}
      });
    }));
  });

  it('calls request with multicast options', (done: DoneFn) => {
    const service = new TestService();
    service.fetch(LOADER_ONLY).subscribe(assertWsServiceArgs(done, (wsServiceArgs: WsServiceArgs) => {
      expect(wsServiceArgs).toEqual({
        fetchParams: undefined,
        multicastOptions: LOADER_ONLY,
        requestOptions: {}
      });
    }));
  });

  it('calls request with fetch params and multicast options', (done: DoneFn) => {
    const service = new TestService();
    const fetchParams = mockFetchParamsFactory();
    service.fetch(fetchParams, LOADER_ONLY).subscribe(assertWsServiceArgs(done, (wsServiceArgs: WsServiceArgs) => {
      expect(wsServiceArgs).toEqual({
        fetchParams,
        multicastOptions: LOADER_ONLY,
        requestOptions: {}
      });
    }));
  });

  it('calls request with request options', (done: DoneFn) => {
    const service = new TestService();
    const requestOptions = mockRequestOptions();
    service.fetch(requestOptions).subscribe(assertWsServiceArgs(done, (wsServiceArgs: WsServiceArgs) => {
      expect(wsServiceArgs).toEqual({
        fetchParams: undefined,
        multicastOptions: FULL,
        requestOptions
      });
    }));
  });

  it('calls request with fetch params and request options', (done: DoneFn) => {
    const service = new TestService();
    const fetchParams = mockFetchParamsFactory();
    const requestOptions = mockRequestOptions();
    service.fetch(fetchParams, requestOptions).subscribe(assertWsServiceArgs(done, (wsServiceArgs: WsServiceArgs) => {
      expect(wsServiceArgs).toEqual({
        fetchParams,
        multicastOptions: FULL,
        requestOptions
      });
    }));
  });

  it('calls request with multicast options and request options', (done: DoneFn) => {
    const service = new TestService();
    const requestOptions = mockRequestOptions();
    service.fetch(LOADER_ONLY, requestOptions).subscribe(assertWsServiceArgs(done, (wsServiceArgs: WsServiceArgs) => {
      expect(wsServiceArgs).toEqual({
        fetchParams: undefined,
        multicastOptions: LOADER_ONLY,
        requestOptions
      });
    }));
  });

  it('calls request with fetch params, multicast options and request options', (done: DoneFn) => {
    const service = new TestService();
    const fetchParams = mockFetchParamsFactory();
    const requestOptions = mockRequestOptions();
    service.fetch(fetchParams, LOADER_ONLY, requestOptions).subscribe(assertWsServiceArgs(done, (wsServiceArgs: WsServiceArgs) => {
      expect(wsServiceArgs).toEqual({
        fetchParams,
        multicastOptions: LOADER_ONLY,
        requestOptions
      });
    }));
  });

  it('calls requestMany and returns array', (done: DoneFn) => {
    const service = new TestService();
    const fetchParams = mockFetchParamsFactory();
    const requestOptions = mockRequestOptions();
    service.fetchMany(fetchParams, LOADER_ONLY, requestOptions)
      .subscribe(assertWsServiceArgs<Array<WsServiceArgs>>(done, (wsServiceArgs: Array<WsServiceArgs>) => {
        expect(wsServiceArgs.length).toEqual(2);
        expect(wsServiceArgs[0]).toEqual({
          fetchParams,
          multicastOptions: LOADER_ONLY,
          requestOptions
        });
        expect(wsServiceArgs[1]).toEqual({
          fetchParams,
          multicastOptions: LOADER_ONLY,
          requestOptions
        });
      }));
  });
});

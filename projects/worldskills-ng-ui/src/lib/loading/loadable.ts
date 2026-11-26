import { Signal, computed } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable, Subject, combineLatest, of } from 'rxjs';
import { catchError, map, startWith, switchMap, tap } from 'rxjs/operators';

/** Where a request is: loading, loaded (with its value) or failed. */
export type LoadState<T> =
  | { status: 'loading' }
  | { status: 'loaded'; value: T }
  | { status: 'error' };

export interface Loadable<T> {
  state: Signal<LoadState<T>>;
  /** The loaded value, or undefined while loading or after an error. */
  value: Signal<T | undefined>;
  /** Fetches again, showing the loading state, e.g. from a "Try again" button. */
  reload(): void;
  /**
   * Fetches again in the background, e.g. after a save: the current value stays until the
   * new one arrives, and is kept if the request fails.
   */
  refresh(): void;
}

/**
 * Loads data into a signal with an explicit loading / loaded / error state, so a failed request
 * shows an error (see `<ws-ng-ui-loadable>` / `<ws-ng-ui-load-error>`) instead of an endless spinner.
 * Error toasts are left to the app's HTTP error handling.
 *
 * Must be called in an injection context (a field initializer or constructor).
 *
 * ```ts
 * awards = loadable(this.memberId, (id) => this.service.getAwards(id));  // re-fetches when memberId changes
 * types = loadable(() => this.typesService.fetch());                     // fetches once
 * ```
 *
 * With a params signal, `null` / `undefined` means "not ready yet": the state stays `loading`
 * and nothing is fetched until the signal has a value. A newer request cancels an older one.
 */
export function loadable<T>(fetch: () => Observable<T>): Loadable<T>;
export function loadable<P, T>(
  params: Signal<P | null | undefined>,
  // fetch never sees null/undefined: those mean "wait"
  fetch: (params: P) => Observable<T>,
): Loadable<T>;
export function loadable<P, T>(
  paramsOrFetch: Signal<P | null | undefined> | (() => Observable<T>),
  maybeFetch?: (params: P) => Observable<T>,
): Loadable<T> {
  const params$: Observable<P | null | undefined> = maybeFetch
    ? toObservable(paramsOrFetch as Signal<P | null | undefined>)
    : of(undefined);
  const fetch = (maybeFetch ?? (paramsOrFetch as () => Observable<T>)) as (
    params: P | null | undefined,
  ) => Observable<T>;

  // true = quiet refresh (keep the current value), false = full reload
  const trigger$ = new Subject<boolean>();
  let current: LoadState<T> = { status: 'loading' };

  const state = toSignal(
    combineLatest([params$, trigger$.pipe(startWith(false))]).pipe(
      switchMap(([params, quiet]) => {
        if (maybeFetch && params == null) {
          return of<LoadState<T>>({ status: 'loading' });
        }
        const keep = quiet && current.status === 'loaded' ? current : null;
        const request = fetch(params).pipe(
          map((value): LoadState<T> => ({ status: 'loaded', value })),
          catchError(() => of<LoadState<T>>(keep ?? { status: 'error' })),
        );
        return keep
          ? request
          : request.pipe(startWith<LoadState<T>>({ status: 'loading' }));
      }),
      tap(s => (current = s)),
    ),
    { initialValue: { status: 'loading' } as LoadState<T> },
  );

  return {
    state,
    value: computed(() => {
      const s = state();
      return s.status === 'loaded' ? s.value : undefined;
    }),
    reload: () => trigger$.next(false),
    refresh: () => trigger$.next(true),
  };
}

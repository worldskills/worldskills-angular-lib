import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'; // ActivatedRoute used only in buildFromRoute param type
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { Breadcrumb } from './breadcrumb.model';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {

  /** Live overrides map — key → replacement label. */
  private readonly overrides$ = new BehaviorSubject<Map<string, string>>(new Map());

  /**
   * Reactive breadcrumb list, rebuilt on every navigation and whenever
   * a label replacement is applied. Both happen via combineLatest so they
   * always stay in sync with no manual wiring needed.
   */
  readonly breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private router: Router) {
    const routeCrumbs$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      startWith(null),
      // Router.routerState.root is the root ActivatedRoute — no need to inject
      // ActivatedRoute directly (which is component-scoped and unavailable at root).
      map(() => this.buildFromRoute(this.router.routerState.root)),
    );

    this.breadcrumbs$ = combineLatest([routeCrumbs$, this.overrides$]).pipe(
      map(([crumbs, overrides]) =>
        crumbs.map(c => ({ ...c, label: overrides.get(c.key) ?? c.label }))
      ),
    );
  }

  /**
   * Replace the label for a breadcrumb key.
   * Works whether the route has already loaded or not — the observable
   * will emit the corrected label as soon as the route is built.
   *
   * Typical usage: call this after an async lookup resolves.
   *   this.breadcrumbService.replaceLabel('competition', competition.name);
   */
  replaceLabel(key: string, value: string): void {
    const next = new Map(this.overrides$.value);
    next.set(key, value);
    this.overrides$.next(next);
  }

  /** Remove a previously set label override. */
  clearReplacement(key: string): void {
    const next = new Map(this.overrides$.value);
    next.delete(key);
    this.overrides$.next(next);
  }

  /** Remove all label overrides. */
  clearAllReplacements(): void {
    this.overrides$.next(new Map());
  }

  // ── Private ───────────────────────────────────────────────────────────────

  private buildFromRoute(route: ActivatedRoute, url = ''): Breadcrumb[] {
    const crumbs: Breadcrumb[] = [];

    const path = route.snapshot.url.map(s => s.path).join('/');
    if (path) { url = `${url}/${path}`; }

    const data = route.snapshot.data['breadcrumb'];
    if (data != null) {
      const key: string   = typeof data === 'string' ? data : data.key;
      const label: string = typeof data === 'string' ? data : data.label;
      crumbs.push({ key, label, url, params: route.snapshot.params });
    }

    for (const child of route.children) {
      if (child.outlet === 'primary') {
        crumbs.push(...this.buildFromRoute(child, url));
      }
    }

    return crumbs;
  }
}

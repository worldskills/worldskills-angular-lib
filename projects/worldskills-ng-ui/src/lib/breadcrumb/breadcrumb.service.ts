import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'; // ActivatedRoute used only in buildFromRoute param type
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { Breadcrumb, BreadcrumbTrail } from './breadcrumb.model';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {

  /** Live overrides map — key → replacement label. */
  private readonly overrides$ = new BehaviorSubject<Map<string, string>>(new Map());

  /** The active trail and the page that set it. */
  private readonly trail$ = new BehaviorSubject<{ owner: object; trail: BreadcrumbTrail } | null>(null);

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

    this.breadcrumbs$ = combineLatest([routeCrumbs$, this.overrides$, this.trail$]).pipe(
      map(([crumbs, overrides, active]) =>
        applyTrail(crumbs, active?.trail).map(c => ({ ...c, label: overrides.get(c.key) ?? c.label }))
      ),
    );
  }

  /**
   * Show the path the user clicked through instead of the route structure, e.g.
   * Home › WorldSkills Europe › Austria instead of Home › Members › Austria.
   *
   * The trail replaces the route crumbs up to and including `trail.replaces`; route crumbs
   * after it (e.g. a tab) stay. If the route has no crumb with that key, the route crumbs show.
   *
   * `owner` identifies the page that set it (usually the component, `this`); only that owner
   * can clear it, so a page closing late can't clear the next page's trail.
   *
   *   this.breadcrumbService.setTrail(this, { replaces: 'member', crumbs: [...] });
   *   inject(DestroyRef).onDestroy(() => this.breadcrumbService.clearTrail(this));
   */
  setTrail(owner: object, trail: BreadcrumbTrail): void {
    this.trail$.next({ owner, trail });
  }

  /** Remove the trail set by `owner`. Does nothing if another page has set one since. */
  clearTrail(owner: object): void {
    if (this.trail$.value?.owner === owner) {
      this.trail$.next(null);
    }
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

/** Swaps the route crumbs up to `trail.replaces` for the trail's crumbs. */
function applyTrail(routeCrumbs: Breadcrumb[], trail?: BreadcrumbTrail): Breadcrumb[] {
  const index = trail ? routeCrumbs.findIndex(c => c.key === trail.replaces) : -1;
  return trail && index >= 0
    ? [...trail.crumbs, ...routeCrumbs.slice(index + 1)]
    : routeCrumbs;
}

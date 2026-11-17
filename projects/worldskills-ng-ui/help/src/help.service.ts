import { Injectable, computed, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, of, startWith, tap } from 'rxjs';

import { WS_HELP_CONFIG } from './help-config';

export interface WsHelpPoint {
  page: string;
  id: string;
  /** Position in the page's list, starting at 1. */
  number: number;
  element: HTMLElement;
}

/** The help key of the deepest route that sets one (tabs keep their page's help). */
function helpKey(route: ActivatedRouteSnapshot | null): string | null {
  let key: string | null = null;
  for (let r = route; r; r = r.firstChild) {
    key = (r.data['help'] as string | undefined) ?? key;
  }
  return key;
}

/**
 * Which page's help applies, which of its points are on screen, and whether help is open.
 * The page comes from the route (`data: { help: '<page>' }`), or from {@link setPage} for
 * content without a route of its own.
 */
@Injectable({ providedIn: 'root' })
export class WsHelpService {
  private readonly config = inject(WS_HELP_CONFIG);
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router, { optional: true });

  readonly open = signal(false);

  private readonly routePage = toSignal(
    this.router
      ? this.router.events.pipe(
          filter((e) => e instanceof NavigationEnd),
          startWith(null),
          // help closes when leaving the page
          tap(() => this.open.set(false)),
          map(() => helpKey(this.router!.routerState.snapshot.root)),
        )
      : of(null),
    { initialValue: null },
  );
  private readonly pageOverride = signal<string | null>(null);

  /** The current page's help key, if it has help. */
  readonly page = computed(() => this.pageOverride() ?? this.routePage());

  private readonly anchors = signal(new Map<string, HTMLElement>());

  /** This page's points that are on screen, numbered by their place in the page's list. */
  readonly points = computed<WsHelpPoint[]>(() => {
    const page = this.page();
    const anchors = this.anchors();
    if (!page) return [];
    const points: WsHelpPoint[] = [];
    (this.config.pages[page] ?? []).forEach((id, i) => {
      const element = anchors.get(id);
      if (element) points.push({ page, id, number: i + 1, element });
    });
    return points;
  });

  /** Translation key of a point's title or description. */
  textKey(point: Pick<WsHelpPoint, 'page' | 'id'>, part: 'title' | 'description'): string {
    return `${this.config.textPrefix}.${point.page}.${point.id}.${part}`;
  }

  /** Use this page's help regardless of the route (e.g. in a dialog or Storybook); null to follow the route again. */
  setPage(page: string | null): void {
    this.pageOverride.set(page);
  }

  /**
   * Called from the directive's effect: the current anchors are read untracked, otherwise the
   * effect would depend on them and every registration would re-run it (an endless loop).
   */
  register(id: string, element: HTMLElement): void {
    const existing = untracked(this.anchors).get(id);
    if (existing && existing !== element && existing.isConnected) {
      this.warn(
        `two elements are marked wsHelp="${id}"; the last one wins. ` +
          'Inside a @for, mark the list around it instead.',
      );
    }
    this.anchors.update((current) => new Map(current).set(id, element));
  }

  unregister(id: string, element: HTMLElement): void {
    if (untracked(this.anchors).get(id) !== element) return;
    this.anchors.update((current) => {
      const next = new Map(current);
      next.delete(id);
      return next;
    });
  }

  toggle(): void {
    this.open.update((open) => !open);
    if (this.open()) this.checkPage();
  }

  /**
   * Dev-mode check when help opens: points marked on the page but missing from its list, and
   * points without texts. (`ws-help-check` runs the same checks over the whole app in CI.)
   */
  checkPage(): void {
    const page = this.page();
    if (!this.config.warnings || !page) return;
    const listed = this.config.pages[page];
    if (!listed) {
      this.warn(`page "${page}" has no points: add it to the pages given to provideWsHelp().`);
      return;
    }
    for (const id of Array.from(this.anchors().keys())) {
      if (!listed.includes(id)) {
        this.warn(`wsHelp="${id}" is on the page but not in the "${page}" points; add it or remove the marker.`);
      }
    }
    for (const point of this.points()) {
      for (const part of ['title', 'description'] as const) {
        const key = this.textKey(point, part);
        if (this.translate.instant(key) === key) this.warn(`missing text "${key}".`);
      }
    }
  }

  private warn(message: string): void {
    if (this.config.warnings) console.warn(`[ws-help] ${message}`);
  }
}

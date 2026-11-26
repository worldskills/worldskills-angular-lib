import { Params } from '@angular/router';

export interface Breadcrumb {
  /** Unique key used for dynamic label replacement. */
  key: string;
  /** Display label — may be replaced at runtime via BreadcrumbService.replaceLabel(). */
  label: string;
  /** Resolved URL for this crumb. */
  url: string;
  /** Route params captured at this segment. */
  params?: Params;
}

/** Crumbs that follow the user's clicks; see BreadcrumbService.setTrail(). */
export interface BreadcrumbTrail {
  /** Key of the route crumb the trail replaces, together with every crumb before it. */
  replaces: string;
  /** The crumbs to show instead. `url` may include a query string. */
  crumbs: Breadcrumb[];
}

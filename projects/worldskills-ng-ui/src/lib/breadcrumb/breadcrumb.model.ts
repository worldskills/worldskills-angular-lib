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

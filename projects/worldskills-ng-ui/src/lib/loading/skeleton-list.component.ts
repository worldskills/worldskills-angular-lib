import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SkeletonModule } from 'primeng/skeleton';

/** Widths of the first line, so the rows don't look like a ruled grid. */
const WIDTHS = ['60%', '45%', '70%', '52%', '64%', '40%'];

/**
 * Placeholder rows shaped like a list that's loading: an optional avatar, one or two lines of
 * text and an optional tag on the right. Shows the layout straight away, which feels faster than
 * a spinner on slower connections.
 *
 * ```html
 * <ws-ng-ui-skeleton-list [rows]="10" avatar="circle" [lines]="2" [meta]="true" />
 * ```
 *
 * Inside `<ws-ng-ui-loadable>`, pass it as the loading template:
 *
 * ```html
 * <ws-ng-ui-loadable [state]="members.state()">
 *   <ng-template #wsLoading><ws-ng-ui-skeleton-list avatar="circle" /></ng-template>
 *   <ng-template let-members>…</ng-template>
 * </ws-ng-ui-loadable>
 * ```
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-skeleton-list',
  standalone: true,
  imports: [SkeletonModule, TranslatePipe],
  host: { 'aria-busy': 'true', class: 'block' },
  template: `
    <span class="sr-only" role="status">{{ 'ws_ui.spinner.loading' | translate }}</span>
    <ul class="divide-y divide-surface" aria-hidden="true">
      @for (row of items(); track $index) {
        <li class="flex items-center gap-3 py-3">
          @if (avatar() !== 'none') {
            <p-skeleton
              [shape]="avatar() === 'circle' ? 'circle' : 'rectangle'"
              size="2.5rem"
              [borderRadius]="avatar() === 'square' ? '0.375rem' : undefined"
              styleClass="shrink-0" />
          }
          <span class="flex min-w-0 flex-1 flex-col gap-2">
            <p-skeleton [width]="row.width" height="1rem" />
            @if (lines() > 1) {
              <p-skeleton width="30%" height="0.75rem" />
            }
          </span>
          @if (meta()) {
            <p-skeleton width="4.5rem" height="1.5rem" borderRadius="1rem" styleClass="shrink-0" />
          }
        </li>
      }
    </ul>
  `,
})
export class WsSkeletonListComponent {

  /** Number of placeholder rows. */
  rows = input(8);

  /** A round (flag, person) or square (logo) placeholder before the text, or none. */
  avatar = input<'circle' | 'square' | 'none'>('none');

  /** Lines of text per row: a title, or a title and a smaller line under it. */
  lines = input<1 | 2>(1);

  /** A tag-shaped placeholder at the end of each row (e.g. a status). */
  meta = input(false);

  protected readonly items = computed(() =>
    Array.from({ length: Math.max(0, this.rows()) }, (_, i) => ({ width: WIDTHS[i % WIDTHS.length] })),
  );
}

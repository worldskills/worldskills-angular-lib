import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';

/**
 * A page section: a card with one heading (h2) and an optional actions area, e.g. an Add button.
 * It fills its grid cell, so cards in the same row line up.
 *
 * ```html
 * <ws-ng-ui-section heading="Contacts">
 *   <p-button wsSectionActions label="Add" icon="pi pi-plus" />
 *   …content…
 * </ws-ng-ui-section>
 * ```
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-section',
  standalone: true,
  imports: [CardModule],
  host: { class: 'block h-full' },
  template: `
    <p-card class="h-full">
      <ng-template #title>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h2>{{ heading() }}</h2>
          <div class="flex flex-wrap items-center gap-2 empty:hidden">
            <ng-content select="[wsSectionActions]" />
          </div>
        </div>
      </ng-template>
      <ng-content />
    </p-card>
  `,
})
export class WsSectionComponent {

  /** Heading text. (Not `title`: that name is taken by the card's title template.) */
  heading = input.required<string>();
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Brand colours a tile can use. */
export type WsTileAccent = 'purple' | 'cyan' | 'orange' | 'teal' | 'blue' | 'pink';

/**
 * A dashboard tile: an icon in a tinted square, a short uppercase title in the tile's brand
 * colour, then the content (big numbers, short lists, links). `comingSoon` draws it dashed and
 * muted, for tiles that wait on other work.
 *
 * ```html
 * <ws-ng-ui-tile title="Members" icon="pi pi-users" accent="purple">
 *   <p class="text-3xl font-semibold">90</p>
 * </ws-ng-ui-tile>
 * ```
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-tile',
  standalone: true,
  host: {
    class: 'flex flex-col gap-4 rounded-border border border-surface-200 p-6',
    '[class.border-dashed]': 'comingSoon()',
    '[class.ws-tile--coming-soon]': 'comingSoon()',
    '[attr.data-accent]': 'accent()',
  },
  template: `
    <h2 class="flex items-center gap-3">
      @if (icon(); as icon) {
        <span class="ws-tile__icon flex size-10 shrink-0 items-center justify-center rounded-border" aria-hidden="true">
          <i [class]="icon"></i>
        </span>
      }
      <span class="ws-tile__title text-sm font-bold uppercase tracking-wide">{{ title() }}</span>
    </h2>
    <ng-content />
  `,
  // the accent is a brand token, tinted for the icon square and darkened for the title so
  // light colours (teal, cyan) stay readable on white
  styles: `
    :host { --ws-tile-accent: var(--gray); }
    :host([data-accent='purple']) { --ws-tile-accent: var(--purple); }
    :host([data-accent='cyan']) { --ws-tile-accent: var(--cyan); }
    :host([data-accent='orange']) { --ws-tile-accent: var(--orange); }
    :host([data-accent='teal']) { --ws-tile-accent: var(--teal); }
    :host([data-accent='blue']) { --ws-tile-accent: var(--blue-dark); }
    :host([data-accent='pink']) { --ws-tile-accent: var(--pink); }
    :host(.ws-tile--coming-soon) { --ws-tile-accent: var(--gray); }

    .ws-tile__icon {
      color: color-mix(in srgb, var(--ws-tile-accent) 65%, black);
      background: color-mix(in srgb, var(--ws-tile-accent) 14%, transparent);
    }

    .ws-tile__title {
      color: color-mix(in srgb, var(--ws-tile-accent) 65%, black);
    }
  `,
})
export class WsTileComponent {

  /** Tile title. */
  title = input.required<string>();

  /** A PrimeIcons class, e.g. `pi pi-users`. */
  icon = input<string>();

  /** Brand colour of the icon and title; grey when omitted. */
  accent = input<WsTileAccent>();

  /** Dashed and muted, for tiles that aren't ready yet. */
  comingSoon = input(false);
}

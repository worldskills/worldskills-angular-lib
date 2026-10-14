import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Page title bar: optional back link, media (logo/flag), title, subtitle, details and actions.
 *
 * ```html
 * <ws-ng-ui-page-header title="Members" subtitle="All WorldSkills members" backLink="/">
 *   <img wsPageHeaderMedia src="flag.png" alt="" />
 *   <span>Joined 2005</span>
 *   <p-button wsPageHeaderActions label="New member" icon="pi pi-plus" />
 * </ws-ng-ui-page-header>
 * ```
 *
 * Content slots: `[wsPageHeaderMedia]` (left of the title), `[wsPageHeaderActions]` (right side,
 * below the title on small screens) and default content (details under the subtitle).
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-page-header',
  templateUrl: './page-header.component.html',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
})
export class WsPageHeaderComponent {

  /** Page title, rendered as the page's h1. */
  title = input.required<string>();

  /** Optional line under the title. */
  subtitle = input<string>();

  /** Router link for the back link. No back link is shown when omitted. */
  backLink = input<string | unknown[]>();

  /** Back link text. Defaults to the translated "Back". */
  backLabel = input<string>();
}

import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

/**
 * Read-only rich text written with `<ws-ng-ui-rich-text-editor>`. Angular sanitises the HTML when
 * it renders it. Text longer than `collapseAfter` characters starts collapsed, with "Show more".
 *
 *   <ws-ng-ui-rich-text-view [html]="membership.notes" />
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-rich-text-view',
  standalone: true,
  imports: [ButtonModule, TranslatePipe],
  template: `
    <!-- Tailwind's reset removes list markers, so they're restored here -->
    <div
      [innerHTML]="html()"
      [class.line-clamp-4]="isLong() && !expanded()"
      class="[&_a]:underline [&_ol]:list-decimal [&_ol]:ps-6 [&_ul]:list-disc [&_ul]:ps-6"></div>
    @if (isLong()) {
      <p-button
        [label]="(expanded() ? 'ws_ui.rich_text.show_less' : 'ws_ui.rich_text.show_more') | translate"
        size="small"
        [text]="true"
        (onClick)="expanded.set(!expanded())" />
    }
  `,
})
export class WsRichTextViewComponent {

  /** The HTML to show. */
  html = input.required<string>();

  /** Characters of text after which it starts collapsed. */
  collapseAfter = input(280);

  protected readonly expanded = signal(false);

  protected readonly isLong = computed(
    () => this.html().replace(/<[^>]+>/g, '').length > this.collapseAfter(),
  );
}

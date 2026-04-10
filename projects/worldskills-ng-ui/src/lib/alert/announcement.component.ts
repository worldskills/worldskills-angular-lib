import { Component, ChangeDetectionStrategy, input, signal } from '@angular/core';
import { AlertSeverity } from './alert.service';

/**
 * Announcement alert — for long-form messages that should be truncated with a "Read more" toggle.
 *
 *   <ws-ng-ui-announcement severity="info" title="Test" [message]="longMessage" />
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-announcement',
  standalone: true,
  template: `
    <div class="ws-announcement" [class]="'ws-announcement--' + severity()">
      <div class="ws-announcement__icon">
        @switch (severity()) {
          @case ('success') { <i class="pi pi-check-circle"></i> }
          @case ('warn') { <i class="pi pi-exclamation-triangle"></i> }
          @case ('error') { <i class="pi pi-times-circle"></i> }
          @default { <i class="pi pi-info-circle"></i> }
        }
      </div>

      <div class="ws-announcement__body">
        @if (title()) {
          <div class="ws-announcement__title">{{ title() }}</div>
        }

        <div class="ws-announcement__content" [class.ws-announcement__content--collapsed]="!expanded()">
          <div class="ws-announcement__text" [innerHTML]="message()"></div>
        </div>

        @if (isLong()) {
          <button class="ws-announcement__read-more" (click)="expanded.set(!expanded())">
            {{ expanded() ? 'Show less' : 'Read more' }}
            <i class="pi text-xs" [class]="expanded() ? 'pi-chevron-up' : 'pi-chevron-down'"></i>
          </button>
        }
      </div>

      <button class="ws-announcement__close" (click)="visible.set(false)" aria-label="Close">
        <i class="pi pi-times"></i>
      </button>
    </div>
  `,
  styleUrl: './announcement.component.css',
  host: {
    '[style.display]': 'visible() ? "block" : "none"',
  },
})
export class WsAnnouncementComponent {

  severity = input<AlertSeverity>('info');
  title = input('');
  message = input('');
  /** Max height in px before truncation. Defaults to 80. */
  maxHeight = input(80);

  expanded = signal(false);
  visible = signal(true);

  isLong(): boolean {
    // Heuristic: if message has more than 200 chars or contains HTML block elements, consider it long
    const msg = this.message();
    return msg.length > 200 || /<(p|div|ol|ul|li|br|h[1-6])/i.test(msg);
  }
}

import { Component, effect, inject, input, signal , ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ws-ng-ui-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css'],
    imports: [ProgressSpinnerModule, TranslatePipe],
})
export class SpinnerComponent {

    // ── Inputs ────────────────────────────────────────────────────────────────

    /** Single static message. Ignored when `messages` is provided. */
    message = input<string | undefined>(undefined);

    /** Array of messages to cycle through. Takes priority over `message`. */
    messages = input<string[] | undefined>(undefined);

    /** Milliseconds between message changes. Defaults to 2500. */
    interval = input(2500);

    // ── State ─────────────────────────────────────────────────────────────────

    currentMessage = signal('');

    private translate = inject(TranslateService);

    constructor() {
        effect((onCleanup) => {
            const messages = this.messages();
            const interval = this.interval();

            this.currentMessage.set(this.resolveMessage());

            if (!messages || messages.length <= 1 || interval <= 0) return;

            let index = 0;
            const timer = setInterval(() => {
                index = (index + 1) % messages.length;
                this.currentMessage.set(messages[index]);
            }, interval);

            onCleanup(() => clearInterval(timer));
        });
    }

    private resolveMessage(): string {
        const messages = this.messages();
        const message = this.message();
        if (messages?.length) return messages[0];
        return message ?? this.translate.instant('ws_ui.spinner.loading');
    }
}

import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
    selector: 'ws-ng-ui-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css'],
    imports: [ProgressSpinnerModule, TranslatePipe],
})
export class SpinnerComponent implements OnInit, OnDestroy {
    private translate = inject(TranslateService);

    /** Single static message. Ignored when `messages` is provided. */
    @Input() message?: string;

    /** Array of messages to cycle through. Takes priority over `message`. */
    @Input() messages?: string[];

    /** Milliseconds between message changes. Defaults to 2500. */
    @Input() interval = 2500;

    currentMessage: string;

    private _index = 0;
    private _timer: ReturnType<typeof setInterval>;

    ngOnInit() {
        this.currentMessage = this._resolveMessage();

        if (this.messages?.length > 1) {
            this._timer = setInterval(() => {
                this._index = (this._index + 1) % this.messages.length;
                this.currentMessage = this.messages[this._index];
            }, this.interval);
        }
    }

    ngOnDestroy() {
        clearInterval(this._timer);
    }

    private _resolveMessage(): string {
        if (this.messages?.length) return this.messages[0];
        return this.message ?? this.translate.instant('ws_ui.spinner.loading');
    }
}

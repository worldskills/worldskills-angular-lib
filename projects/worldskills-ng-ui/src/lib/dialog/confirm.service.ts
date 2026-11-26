import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';

export interface ConfirmOptions {
  title?: string;
  message: string;
  acceptLabel?: string;
  rejectLabel?: string;
  /** PrimeNG severity for the accept button. Defaults to 'primary'. */
  acceptSeverity?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast';
  /** PrimeNG severity for the reject button. Defaults to 'secondary'. */
  rejectSeverity?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast';
  /**
   * When true, `title`, `message`, `acceptLabel` and `rejectLabel` are translation keys,
   * translated with `params`:
   *
   *   confirm.danger({ message: 'contacts.delete_confirm', params: { name }, translate: true })
   */
  translate?: boolean;
  /** Translation params, used when `translate` is true. */
  params?: Record<string, unknown>;
}

/** Default button texts, with the English fallback for apps that don't load the library's translations. */
const DEFAULTS = {
  ok: 'OK',
  cancel: 'Cancel',
  yes: 'Yes',
  no: 'No',
  delete: 'Delete',
  confirm: 'Confirm',
  notice: 'Notice',
};

@Injectable({ providedIn: 'root' })
export class WsConfirmService {

  private readonly translateService = inject(TranslateService, { optional: true });

  constructor(private confirmationService: ConfirmationService) {}

  /**
   * Show an informational alert with a single OK button.
   * Returns a Promise that resolves when the user dismisses it.
   */
  alert(message: string, title = this.text('notice')): Promise<void> {
    return new Promise(resolve => {
      this.confirmationService.confirm({
        header: title,
        message,
        acceptLabel: this.text('ok'),
        rejectVisible: false,
        accept: () => resolve(),
        reject: () => resolve(),
      });
    });
  }

  /**
   * Show a confirmation dialog with OK / Cancel buttons.
   * Returns a Promise that resolves to true (OK) or false (Cancel / dismissed).
   */
  confirm(options: ConfirmOptions): Promise<boolean> {
    const o = this.resolve(options);
    return new Promise(resolve => {
      this.confirmationService.confirm({
        header: o.title ?? this.text('confirm'),
        message: o.message,
        acceptLabel: o.acceptLabel ?? this.text('ok'),
        rejectLabel: o.rejectLabel ?? this.text('cancel'),
        accept: () => resolve(true),
        reject: () => resolve(false),
      });
    });
  }

  /**
   * Show a Yes / No confirmation dialog.
   * Returns a Promise that resolves to true (Yes) or false (No / dismissed).
   */
  yesNo(options: ConfirmOptions): Promise<boolean> {
    const o = this.resolve(options);
    return new Promise(resolve => {
      this.confirmationService.confirm({
        header: o.title ?? this.text('confirm'),
        message: o.message,
        acceptLabel: o.acceptLabel ?? this.text('yes'),
        rejectLabel: o.rejectLabel ?? this.text('no'),
        acceptButtonProps: { severity: o.acceptSeverity ?? 'primary' },
        rejectButtonProps: { severity: o.rejectSeverity ?? 'secondary' },
        accept: () => resolve(true),
        reject: () => resolve(false),
      });
    });
  }

  /**
   * Show a destructive confirmation dialog — accept button is styled as danger.
   * Returns a Promise that resolves to true (confirmed) or false (cancelled).
   */
  danger(options: ConfirmOptions): Promise<boolean> {
    return this.yesNo({
      acceptSeverity: 'danger',
      rejectSeverity: 'secondary',
      acceptLabel: this.text('delete'),
      rejectLabel: this.text('cancel'),
      ...withoutUndefined(this.resolve(options)),
    });
  }

  // ── Private ───────────────────────────────────────────────────────────────

  /** Translates the texts of options given as keys; afterwards they're plain texts. */
  private resolve(options: ConfirmOptions): ConfirmOptions {
    if (!options.translate) {
      return options;
    }
    const t = (key?: string) => key ? this.translateService?.instant(key, options.params) ?? key : undefined;
    return {
      ...options,
      title: t(options.title),
      message: t(options.message) ?? '',
      acceptLabel: t(options.acceptLabel),
      rejectLabel: t(options.rejectLabel),
      translate: false,
    };
  }

  /** A library default text, translated when the library's translations are loaded. */
  private text(name: keyof typeof DEFAULTS): string {
    const key = `ws_ui.actions.${name}`;
    const value = this.translateService?.instant(key);
    return value && value !== key ? value : DEFAULTS[name];
  }
}

/** Leaves out unset options, so they don't replace the defaults when spread. */
function withoutUndefined<T extends object>(value: T): T {
  const result: Record<string, unknown> = {};
  Object.entries(value).forEach(([k, v]) => {
    if (v !== undefined) {
      result[k] = v;
    }
  });
  return result as T;
}

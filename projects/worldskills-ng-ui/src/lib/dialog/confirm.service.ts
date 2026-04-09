import { Injectable } from '@angular/core';
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
}

@Injectable({ providedIn: 'root' })
export class WsConfirmService {

  constructor(private confirmationService: ConfirmationService) {}

  /**
   * Show an informational alert with a single OK button.
   * Returns a Promise that resolves when the user dismisses it.
   */
  alert(message: string, title = 'Notice'): Promise<void> {
    return new Promise(resolve => {
      this.confirmationService.confirm({
        header: title,
        message,
        acceptLabel: 'OK',
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
    return new Promise(resolve => {
      this.confirmationService.confirm({
        header: options.title ?? 'Confirm',
        message: options.message,
        acceptLabel: options.acceptLabel ?? 'OK',
        rejectLabel: options.rejectLabel ?? 'Cancel',
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
    return new Promise(resolve => {
      this.confirmationService.confirm({
        header: options.title ?? 'Confirm',
        message: options.message,
        acceptLabel: options.acceptLabel ?? 'Yes',
        rejectLabel: options.rejectLabel ?? 'No',
        acceptButtonProps: { severity: options.acceptSeverity ?? 'primary' },
        rejectButtonProps: { severity: options.rejectSeverity ?? 'secondary' },
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
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      ...options,
    });
  }
}

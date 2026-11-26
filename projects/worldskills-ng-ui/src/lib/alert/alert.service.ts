import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export type AlertSeverity = 'success' | 'info' | 'warn' | 'error';

export interface AlertOptions {
  title?: string;
  message: string;
  /** Duration in ms before the toast auto-dismisses. 0 = sticky. Defaults to 4000. */
  life?: number;
  /** When true the alert stays until manually closed. Overrides life. */
  sticky?: boolean;
  /** Target key for a specific <ws-ng-ui-toast> instance. Defaults to global. */
  key?: string;
}

@Injectable({ providedIn: 'root' })
export class WsAlertService {

  constructor(private messageService: MessageService) {}

  success(message: string, title = 'Success', options: Partial<AlertOptions> = {}) {
    this.push('success', { message, title, ...options });
  }

  info(message: string, title = 'Info', options: Partial<AlertOptions> = {}) {
    this.push('info', { message, title, ...options });
  }

  warn(message: string, title = 'Warning', options: Partial<AlertOptions> = {}) {
    this.push('warn', { message, title, ...options });
  }

  error(message: string, title = 'Error', options: Partial<AlertOptions> = {}) {
    this.push('error', { message, title, life: 0, sticky: true, ...options });
  }

  /** Remove all visible toasts. */
  clear(key?: string) {
    this.messageService.clear(key);
  }

  private push(severity: AlertSeverity, options: AlertOptions) {
    this.messageService.add({
      severity,
      summary: options.title,
      detail: options.message,
      life: options.sticky ? undefined : (options.life ?? 4000),
      sticky: options.sticky,
      key: options.key,
      closable: true,
    });
  }
}

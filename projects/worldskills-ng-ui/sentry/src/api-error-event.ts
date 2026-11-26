import { HttpErrorResponse } from '@angular/common/http';

export interface ApiErrorOptions {
  /** HTTP method of the failed request. */
  method?: string;
  /** What the app was doing, e.g. `save-address`. Added as the `app_action` tag. */
  action?: string;
  /** Extra data to attach to the event. Do not include personal data. */
  extra?: Record<string, unknown>;
}

export interface ApiErrorEvent {
  message: string;
  fingerprint: string[];
  tags: Record<string, string>;
  context: Record<string, unknown>;
}

/** Only server errors and network failures are bugs worth reporting; 4xx are expected outcomes. */
export function isReportableStatus(status: number): boolean {
  return status === 0 || status >= 500;
}

/** Removes the query string and hash, which may contain search terms or other personal data. */
export function stripQuery(url: string): string {
  return url.split(/[?#]/)[0];
}

/** Replaces numeric and UUID path segments so the same endpoint groups into one Sentry issue. */
export function normalizePath(url: string): string {
  return stripQuery(url)
    .replace(/\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}(?=\/|$)/gi, '/{uuid}')
    .replace(/\/\d+(?=\/|$)/g, '/{id}');
}

/** Builds the Sentry event for a failed API call. No request or response bodies are included. */
export function buildApiErrorEvent(error: HttpErrorResponse, options: ApiErrorOptions = {}): ApiErrorEvent {
  const method = (options.method ?? 'REQUEST').toUpperCase();
  const url = error.url ?? 'unknown';
  const path = normalizePath(url);
  const status = error.status;

  const tags: Record<string, string> = {
    api_method: method,
    api_status: String(status),
  };
  if (options.action) {
    tags['app_action'] = options.action;
  }

  return {
    message: `API ${method} ${path} failed (${status === 0 ? 'network error' : status})`,
    fingerprint: ['ws-api-error', method, path, String(status)],
    tags,
    context: {
      url: stripQuery(url),
      status,
      status_text: error.statusText,
      code: error.error?.code,
      dev_msg: error.error?.dev_msg,
    },
  };
}

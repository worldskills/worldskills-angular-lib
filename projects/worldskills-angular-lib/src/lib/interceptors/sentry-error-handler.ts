import * as Sentry from '@sentry/browser';
import { ErrorHandler, Injectable } from '@angular/core';

// TODO: This could work as a library class
@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() { }
  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }
}

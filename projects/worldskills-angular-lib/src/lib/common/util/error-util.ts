import { GenericUtil } from './generic.util';
import { HttpErrorResponse } from '@angular/common/http';
import { APIError } from '../models/api-error';
import * as Sentry from '@sentry/browser';

export class ErrorUtil {
    /*
    * Returns the user message from an instance of a WSI API Error
    *
    * @param error - The error object extracted from an Http message
    * @param defaultErrorMessage - The default message if an error message cannot be extracted
    * @returns The error message or a default error
    */
    static getErrorMsg(error: any, defaultErrorMessage: string): string {
        return ErrorUtil.hasApiError(error) ? defaultErrorMessage : error.error.user_msg;
    }

    /*
    * Returns if an error is an instance of a WSI API error
    *
    * @param error - The error object extracted from an Http message
    * @returns true if this is an instance of a WSI API error
    */
    static hasApiError(error: any): boolean {
        if (GenericUtil.isNullOrUndefined(error)) {
            return false;
        }

        return error.error && error.error.user_msg;
    }

    static arrayBufferToJSON(error: HttpErrorResponse): APIError {
        const decodedString = String.fromCharCode.apply(null, new Uint8Array(error.error));
        return JSON.parse(decodedString);
    }


    /*
        Capture an API response as an error to sentry
    */
    static captureAPIError(type: string, name: string, action: string, error: any, msg: string) {
        Sentry.setTag(`app_${type}`, name);
        Sentry.setTag('app_action', action);
        Sentry.setExtra('app_error', error);
        Sentry.captureMessage(msg, "error");
      }
}

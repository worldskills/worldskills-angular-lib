import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ArrayUtil } from './array.util';
import { GenericUtil } from './generic.util';
import { APIError } from '../models/api-error';
export class HttpUtil {
  /*
   * Convert any class to an HTTP Params object
  */
  static objectToParams(obj: {}): HttpParams {
    let params = new HttpParams();
    Object.getOwnPropertyNames(obj).forEach((propName, propIndex) => {
      const prop = obj[propName];
      if (ArrayUtil.isArray(prop)) {
        (prop as any[]).filter(item => !GenericUtil.isNullOrUndefined(item)).forEach((item, valueIndex) => {
          if (valueIndex === 0) {
            params = params.set(propName, item);
          } else {
            params = params.append(propName, item);
          }
        });
      } else if (!GenericUtil.isNullOrUndefined(prop)) {
        params = params.set(propName, prop);
      }

    });

    return params;
  }

  /*
  * Determine if the current user is actually logged out from an http error
  *
  * @param err - The Http Error Response
  * @param notLoggedInCode - application specific WSI code that identifies as not logged in
  * @returns true if the user is not logged in. false if the user is logged in
  */
  static isNotLoggedIn(err: HttpErrorResponse, notLoggedInCode: string): boolean {
    if (err.error) {
      const apiError = err.error as APIError;
      if (apiError.code === notLoggedInCode) {
        return true;
      }
    }

    return false;
  }

  /*
  * Determine if the current user token is stale
  *
  * @param err - The Http Error Response
  * @param authorizationMissingCode - the WSI code that identifies as authorization missing. usually 100-100
  * @returns true if the user token is stale. false if the user token is valid
  */
  static hasStaleToken(err: HttpErrorResponse, authorizationMissingCode = '100-100'): boolean {
    if (err.error) {
      const apiError = err.error as APIError;
      if (apiError.code === authorizationMissingCode) {
        return true;
      }
    }

    if (err.error) {
      const matches = JSON.stringify(err.error).match('Authorization token is invalid');
      return GenericUtil.isNullOrUndefined(matches) ? false : matches.length > 0;
    }

    return false;
  }
}

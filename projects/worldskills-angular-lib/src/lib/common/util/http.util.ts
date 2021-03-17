import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ArrayUtil } from './array.util';
import { GenericUtil } from './generic.util';
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
      } else if (!GenericUtil.isNullOrUndefined(prop)){
        params = params.set(propName, prop);
      }

    });

    return params;
  }

  /*
   * Determine if a user is logged in or not based on the API Error
  */
  static isNotLoggedIn(err: HttpErrorResponse, notLoggedInCode: string): boolean {
    if (err.error) {
      const apiError = err.error;
      if (apiError.dev_msg && apiError.code.includes(notLoggedInCode)) {
        return true;
      }
    }

    return false;
  }

  /*
   * Determine if an auth token is valid or not based on the API Error
  */
  static hasStaleToken(err: HttpErrorResponse): boolean {
    if (err.error) {
      return JSON.stringify(err.error).includes('Authorization token is invalid');
    }

    return false;
  }
}

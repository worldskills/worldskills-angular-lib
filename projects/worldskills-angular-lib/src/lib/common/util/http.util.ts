import { HttpParams } from '@angular/common/http';
import { ArrayUtil } from './array.util';
import { GenericUtil } from './generic.util';
export class HttpUtil {
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
      } else if(!GenericUtil.isNullOrUndefined(prop)){
        params = params.set(propName, prop);
      }

    });

    return params;
  }
}

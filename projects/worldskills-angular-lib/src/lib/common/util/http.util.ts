import { HttpParams } from '@angular/common/http';
import { ArrayUtil } from './array.util';
export class HttpUtil {
  static objectToParams(obj: {}): HttpParams {
    let params = new HttpParams();
    Object.getOwnPropertyNames(obj).forEach((propName, propIndex) => {
      const prop = obj[propName];
      if (ArrayUtil.isArray(prop)) {
        (prop as any[]).forEach((item, valueIndex) => {
          if (valueIndex === 0 && item) {
            params = params.set(propName, item);
          } else if(item) {
            params = params.append(propName, item);
          }
        });
      } else if(prop){
        params = params.set(propName, prop);
      }

    });

    return params;
  }
}

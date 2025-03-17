import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GenericUtil } from '../../common/util/generic.util';
import { toDate } from '../../common/helpers/date.helper';
import { CacheWrapper } from '../models/cache-wrapper';

// This is meant to work onn the session sotrage engine by default.
// We will change this when we have a use case for another engine
@Injectable({
  providedIn: 'root'
})
export class CacheStorageService {

  constructor() {
  }

  // get the key from the storage
  get<T>(key: string, defaultValue: T = null, engine: Storage = sessionStorage): T {
    const value = engine.getItem(key);
    if (GenericUtil.isNullOrUndefined(value)) {
      return defaultValue;
    }

    const obj =  JSON.parse(value);

    if (GenericUtil.isNullOrUndefined(obj)) {
      return defaultValue;
    } else {
      if ('expire' in obj && 'data' in obj) {
        const wrapper = obj as CacheWrapper;
        if (!GenericUtil.isNullOrUndefined(wrapper.expire)) {
          wrapper.expire = toDate(wrapper.expire);
          const now = new Date();
          if (now.getTime() >= wrapper.expire.getTime()) {
            wrapper.data = null;
          }
        }

        return GenericUtil.isNullOrUndefined(wrapper.data) ? defaultValue : wrapper.data;
      } else {
        return obj;
      }
    }
  }

  // set the key in the storage
  set(key: string, value: any, engine: Storage = sessionStorage) {
    engine.setItem(key, JSON.stringify(value));
  }

  // set the key with an expiration date
  setExpire(key: string, value: any, expire: Date) {
    const data =({
      data: value,
      expire
    });
    this.set(key, data);
  }

  // remove the key from the storage
  remove(key: string, engine: Storage = sessionStorage) {
    engine.removeItem(key);
  }

  // used for caching http requests
  fetchObservable<T>(fetchFn: () => Observable<T>, key: string, expire: Date, defaultValue: T = null): Observable<T> {
    const data = this.get(key, null);
    if (data) {
      return of(data);
    }

    return fetchFn().pipe(
      map(result => {
        this.setExpire(key, result, expire);
        return result;
      })
    );
  }
}

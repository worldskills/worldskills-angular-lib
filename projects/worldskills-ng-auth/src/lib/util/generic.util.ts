// TODO: move to a common lib
export class GenericUtil {
  static isNullOrUndefined(obj: any): boolean {
    return obj === undefined || obj === null;
  }

  static getValueOrDefault<T>(value: any, defaultValue: T): T {
    return GenericUtil.isNullOrUndefined(value) ? defaultValue : value;
  }
}

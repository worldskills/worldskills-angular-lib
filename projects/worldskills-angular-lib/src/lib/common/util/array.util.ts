export class ArrayUtil {
  // since array concat doesn't trigger UI updates
  static pushMany<T>(first: T[], second: T[]): T[] {
    second.forEach(item => first.push(item));
    return first;
  }

  static dedupePrimitive<T>(arr: T[]): T[] {
    const clean = [];
    arr.forEach(item => {
      if (clean.indexOf(item) === -1) {
        clean.push(item);
      }
    });
    return clean;
  }

  static isArray(obj): boolean {
    return toString.call(obj) === '[object Array]';
  }

}

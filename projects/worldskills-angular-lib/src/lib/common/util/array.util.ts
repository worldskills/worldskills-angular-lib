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
    return Array.isArray(obj);
  }

  static  flatten<T extends { children?: Array<any> } = {children?: Array<any>}>(entities: Array<T>): Array<T> {
    const result = entities.reduce((acc, entity) => entity.children ? [...acc, entity, ...entity.children] : [...acc, entity], []);
    return result;
  }

}

export class GenericUtil {
  // since array concat doesn't trigger UI updates
  static pushMany(first: any[], second: any[]) {
    second.forEach(item => first.push(item));
  }

  static dedupe(arr: any[]) {
    const clean = [];
    arr.forEach(item => {
      if (clean.indexOf(item) === -1) {
        clean.push(item);
      }
    });
    return clean;
  }
}

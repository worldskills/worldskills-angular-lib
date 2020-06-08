export class FilterModel {
  toParams() {
      return Object.entries(this)
          .filter(([name, value]) => value !== null)
          .map(([name, value]) => ({ name, value }));
  }
}

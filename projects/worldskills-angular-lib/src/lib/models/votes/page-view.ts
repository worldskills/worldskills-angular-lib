export class PageView<T> {
  offset: number;
  limit: number;
  total: number;
  items: T[];

  constructor(obj?) {
      this.offset = obj && obj.offset || 0;
      this.limit = obj && obj.limit || 10;
      this.total = obj && obj.total || 0;
      this.items = obj && obj.items || [];
  }
}

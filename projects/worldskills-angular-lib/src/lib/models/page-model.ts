export class PageModel {
  page: number;

  itemsPerPage: number;

  constructor(page: number, itemsPerPage: number) {
    this.page = page;
    this.itemsPerPage = itemsPerPage;
  }

  get offset(): number {
    return (this.page - 1) * this.itemsPerPage;
  }

  get limit(): number {
    return this.page * this.itemsPerPage;
  }
}

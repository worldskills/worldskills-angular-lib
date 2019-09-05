import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageModel } from '../models/page-model';
import { CollectionModel } from '../models/collection-model';

@Component({
  selector: 'ws-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent<TModel> implements OnInit {
  // TODO: Figure a more methamical way to do variable paging

  page: number;
  @Input() collection: CollectionModel<TModel>;
  @Input() itemsPerPage: number;
  @Input() autoJumpToPage: boolean;
  @Output() public jumpToPageEvent: EventEmitter<PageModel> = new EventEmitter();

  pageList = (n: number) => Array.from({length: n}, (value, key) => key + 1);

  constructor() {
  }

  nextPages() {
    const result = [];
    const limit = 3;

    if (this.page < this.pages.length) {
      let index = 1;
      while (index < limit) {
        if ((this.page + index) < this.pages.length) {
          result.push(this.page + index);
        }
        index = index + 1;
      }
    }

    return result;
  }

  previousPages() {
    const result = [];
    if (this.page > 1) {
      let index = this.page;
      while (index > 1) {
        result.push(index - 1);
        index = index - 1;
      }
    }

    return result;
  }

  jumptToPage(page: number) {
    this.page = page;
    const pageModel = new PageModel(page, this.itemsPerPage);

    // determine weather or not to fire the first page event
    this.jumpToPageEvent.emit(pageModel);
  }

  get showPrevElipses() {
    return this.firstPageNotInRange && this.prevFewPages.findIndex(x => x === 2) === -1;
  }

  get firstPageNotInRange() {
    return (this.page - 3) > 1;
  }

  get prevFewPages() {
    const result = [];
    let index = this.page;
    let limit = this.page - 3;
    if (limit < 1) {
      limit = 1;
    }
    while (index > limit) {
      index = index - 1;
      result.push(index);
    }
    return result.reverse();
  }

  get nextFewPages() {
    return this.pages.slice(this.page, this.page + 3);
  }

  get showNextElipses() {
    return this.lastPageNotInRange && this.nextFewPages.findIndex(x => x === (this.lastPage - 1)) === -1;
  }

  get lastPageNotInRange() {
    return (this.page + 3) < this.pages.length;
  }

  get lastPage() {
    return this.pages[this.pages.length - 1];
  }


  nextPage() {
    if (this.collection.total > 0 && this.collection.offset >= this.collection.total) {
      return;
    }

    if (this.page === this.pages.pop()) {
      return;
    }

    this.jumptToPage(this.page + 1);
  }

  prevPage() {
    if (this.page === 1) {
      return;
    }

    this.jumptToPage(this.page - 1);
  }

  get pages() {
    if (this.collection === null || this.collection === undefined) {
      return [];
    }

    if (this.collection.total <= this.itemsPerPage) {
      return this.pageList(1);
    }

    let result = this.collection.total / this.itemsPerPage;
    if ((result % 1) > 0) {
      result = Math.floor(result) + 1;
    }

    return this.pageList(result);
  }

  get showPrevPageButton(): boolean {
    if (this.collection === null || this.collection === undefined) {
      return false;
    }

    return this.collection.offset > 0;
  }

  get showNextPageButton(): boolean {
    if (this.collection === null || this.collection === undefined) {
      return false;
    }

    return this.collection.total > this.collection.limit;
  }

  get showPagination(): boolean {
    return this.pages.length > 1;
  }

  ngOnInit() {
    if (this.autoJumpToPage) {
      this.jumptToPage(1);
    }

    console.log(this.pages);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
  }

}

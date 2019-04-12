import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageModel } from '../models/page-model';
import { CollectionModel } from '../models/collection-model';

@Component({
  selector: 'ws-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent<TModel> implements OnInit {

  page: number;

  // inouts   @Input() itemsPerPage: number;
  @Input() collection: CollectionModel<TModel>;
  @Input() itemsPerPage: number;

  // events
  @Output() public jumpToPageEvent: EventEmitter<PageModel> = new EventEmitter();

  pageList = (n: number) => Array.from({length: n}, (value, key) => key + 1);

  constructor() {
  }

  jumptToPage(page: number) {
    this.page = page;
    const pageModel = new PageModel(page, this.itemsPerPage);
    this.jumpToPageEvent.emit(pageModel);
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
    this.jumptToPage(1);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
  }

}

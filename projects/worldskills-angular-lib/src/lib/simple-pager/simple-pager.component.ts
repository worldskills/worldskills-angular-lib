import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageModel } from '../models/page-model';

@Component({
  selector: 'ws-simple-pager',
  templateUrl: './simple-pager.component.html',
  styleUrls: ['./simple-pager.component.css']
})
export class SimplePagerComponent implements OnInit {

  @Input() itemsPerPage: number;

  @Input() totalItems: number;

  @Input() startingPage: number;

  @Input() fireInitialPageChange: boolean;

  @Output() public pageChanged: EventEmitter<PageModel> = new EventEmitter();

  public maxPages: number;

  public model: PageModel;

  constructor() { }

  ngOnInit() {
    if (!this.itemsPerPage) {
      this.itemsPerPage = 10;
    }

    if (!this.startingPage) {
      this.startingPage = 1;
    }

    if (!this.totalItems) {
      this.totalItems = 100;
    }

    this.calculateMaxPages();
    this.model = new PageModel(this.startingPage, this.itemsPerPage);
    if (this.fireInitialPageChange) {
      this.pageChanged.emit(this.model);
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    this.calculateMaxPages();
  }

  calculateMaxPages() {
    let pages = this.totalItems / this.itemsPerPage;
    if ((pages % 1) > 0) {
      pages = Math.floor(pages) + 1;
    }

    this.maxPages = pages;
  }

  get counter() {
    if (this.maxPages < 3) {
      const pages = [];
      for (let i = 1; i <= this.maxPages; i++) {
        pages.push(1);
      }
      return pages;
    }
    if (this.model.page === 1 || this.maxPages === 3) {
      return [1, 2, 3];
    }

    if (this.model.page === this.maxPages) {
      return [this.maxPages - 2, this.maxPages - 1, this.maxPages];
    }

    return [this.model.page - 1, this.model.page, this.model.page + 1];
  }

  get showNextElipses() {
    return (this.maxPages - 2) > this.model.page;
  }

  get showPrevElipses() {
    return this.model.page > 3;
  }

  get firstPageNotInRange() {
    return this.model.page > 2;
  }

  get lastPageNotInRange() {
    return (this.maxPages - 1) > this.model.page;
  }

  get showPrevPageButton() {
    return this.model.page > 1;
  }

  get showNextPageButton() {
    return this.model.page < this.maxPages;
  }

  prevPage() {
    if (this.model.page > 1) {
      this.model.page = this.model.page - 1;
      this.changePage(this.model.page);
    }
  }

  nextPage() {
    if (this.model.page < this.maxPages) {
      this.model.page = this.model.page + 1;
      this.changePage(this.model.page);
    }
  }

  changePage(i: number) {
    this.model.page = i;
    this.pageChanged.emit(this.model);
  }

}

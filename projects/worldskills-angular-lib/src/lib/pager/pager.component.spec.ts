import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerComponent } from './pager.component';
import { UserModel } from '../models/user.model';
import { CollectionModel } from '../models/collection-model';
import { CommonModule } from '@angular/common';

describe('PagerComponent', () => {
  let component: PagerComponent<{}>;
  let fixture: ComponentFixture<PagerComponent<{}>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerComponent);
    component = fixture.componentInstance;
    component.collection = new CollectionModel<{}>();
    component.collection.items.push({}, {}, {}, {}, {});
    component.collection.count = 5;
    component.collection.offset = 0;
    component.collection.limit = 5;
    component.collection.total = 15;
    component.itemsPerPage = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnChanges();
    expect(component).toBeTruthy();
  });


  it('starting page should be 1', () => {
    expect(component.page).toBe(1);
  });

  it('should have 3 pages', () => {
    expect(component.pages).toEqual([1, 2, 3]);
  });

  it('should have no pages if collection is missing', () => {
    component.collection = null;
    expect(component.pages).toEqual([]);
  });

  it('should have 1 pages if collection items length = items per page', () => {
    component.itemsPerPage = 5;
    component.collection.total = 5;
    expect(component.pages).toEqual([1]);
  });

  it('should have 2 pages if collection has 6 items', () => {
    component.collection.total = 6;
    expect(component.pages).toEqual([1, 2]);
  });

  it('Dont show buttons if collection is missing', () => {
    component.collection = null;
    expect(component.showPrevPageButton).toBe(false);
    expect(component.showNextPageButton).toBe(false);
    expect(component.showPagination).toBe(false);
  });

  it('next page should be 2 if page is 1', () => {
    component.nextPage();
    expect(component.page).toEqual(2);
  });

  it('next page should be 3 if page is 3', () => {
    component.page = 3;
    component.nextPage();
    expect(component.page).toEqual(3);
  });

  it('next page should be 3 if offset >= 15', () => {
    component.page = 3;
    component.collection.offset = 15;
    component.nextPage();
    expect(component.page).toEqual(3);
  });

  it('prev page should be 1 if page is 1', () => {
    component.prevPage();
    expect(component.page).toEqual(1);
  });

  it('prev page should be 2 if page is 3', () => {
    component.page = 3;
    component.prevPage();
    expect(component.page).toEqual(2);
  });

});

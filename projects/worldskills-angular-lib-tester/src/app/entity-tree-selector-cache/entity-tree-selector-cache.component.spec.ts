import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTreeSelectorCacheComponent } from './entity-tree-selector-cache.component';

describe('EntityTreeSelectorCacheComponent', () => {
  let component: EntityTreeSelectorCacheComponent;
  let fixture: ComponentFixture<EntityTreeSelectorCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTreeSelectorCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTreeSelectorCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

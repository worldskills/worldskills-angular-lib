import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTreeSelectorComponent } from './entity-tree-selector.component';

describe('EntityTreeSelectorComponent', () => {
  let component: EntityTreeSelectorComponent;
  let fixture: ComponentFixture<EntityTreeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTreeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTreeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

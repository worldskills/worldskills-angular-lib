import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTreeSelectComponent } from './entity-tree-select.component';

describe('EntityTreeSelectComponent', () => {
  let component: EntityTreeSelectComponent;
  let fixture: ComponentFixture<EntityTreeSelectComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTreeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

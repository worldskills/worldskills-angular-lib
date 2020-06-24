import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTreeSelectorForceComponent } from './entity-tree-selector-force.component';

describe('EntityTreeSelectorForceComponent', () => {
  let component: EntityTreeSelectorForceComponent;
  let fixture: ComponentFixture<EntityTreeSelectorForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTreeSelectorForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTreeSelectorForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

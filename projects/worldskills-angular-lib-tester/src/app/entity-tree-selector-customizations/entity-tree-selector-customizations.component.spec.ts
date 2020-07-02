import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTreeSelectorCustomizationsComponent } from './entity-tree-selector-customizations.component';

describe('EntityTreeSelectorCustomizationsComponent', () => {
  let component: EntityTreeSelectorCustomizationsComponent;
  let fixture: ComponentFixture<EntityTreeSelectorCustomizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTreeSelectorCustomizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTreeSelectorCustomizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

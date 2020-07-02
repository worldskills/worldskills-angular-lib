import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTreeSelectorManualComponent } from './entity-tree-selector-manual.component';

describe('EntityTreeSelectorManualComponent', () => {
  let component: EntityTreeSelectorManualComponent;
  let fixture: ComponentFixture<EntityTreeSelectorManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTreeSelectorManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTreeSelectorManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldskillsNgUi } from './worldskills-ng-ui';

describe('WorldskillsNgUi', () => {
  let component: WorldskillsNgUi;
  let fixture: ComponentFixture<WorldskillsNgUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldskillsNgUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldskillsNgUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

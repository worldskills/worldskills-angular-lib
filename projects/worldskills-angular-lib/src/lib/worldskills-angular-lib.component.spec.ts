import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldskillsAngularLibComponent } from './worldskills-angular-lib.component';

describe('WorldskillsAngularLibComponent', () => {
  let component: WorldskillsAngularLibComponent;
  let fixture: ComponentFixture<WorldskillsAngularLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldskillsAngularLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldskillsAngularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

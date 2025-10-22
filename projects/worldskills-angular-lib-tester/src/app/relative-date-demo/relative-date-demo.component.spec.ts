import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeDateDemoComponent } from './relative-date-demo.component';

describe('RelativeDateDemoComponent', () => {
  let component: RelativeDateDemoComponent;
  let fixture: ComponentFixture<RelativeDateDemoComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeDateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeDateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

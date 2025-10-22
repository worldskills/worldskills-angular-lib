import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeDateComponent } from './relative-date.component';

describe('RelativeDateComponent', () => {
  let component: RelativeDateComponent;
  let fixture: ComponentFixture<RelativeDateComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

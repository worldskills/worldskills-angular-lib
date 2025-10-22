import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightedPollComponent } from './weighted-poll.component';

describe('WeightedPollComponent', () => {
  let component: WeightedPollComponent;
  let fixture: ComponentFixture<WeightedPollComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ WeightedPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightedPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectPollComponent } from './multiselect-poll.component';

describe('MultiselectPollComponent', () => {
  let component: MultiselectPollComponent;
  let fixture: ComponentFixture<MultiselectPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

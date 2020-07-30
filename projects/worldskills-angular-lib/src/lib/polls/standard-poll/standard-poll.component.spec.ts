import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPollComponent } from './standard-poll.component';

describe('StandardPollComponent', () => {
  let component: StandardPollComponent;
  let fixture: ComponentFixture<StandardPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

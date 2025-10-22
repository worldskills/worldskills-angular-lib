import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPollComponent } from './standard-poll.component';
import { SortPipe } from 'projects/worldskills-angular-lib/src/public-api';

describe('StandardPollComponent', () => {
  let component: StandardPollComponent;
  let fixture: ComponentFixture<StandardPollComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ StandardPollComponent, SortPipe ]
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectPollComponent } from './multiselect-poll.component';

describe('MultiselectPollComponent', () => {
  let component: MultiselectPollComponent;
  let fixture: ComponentFixture<MultiselectPollComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectPollComponent);
    component = fixture.componentInstance;
    component.poll = {
      id: 1,
      entity: null,
      entityPath: null,
      deleted: false,
      anonymousVoting: false,
      anonymousResults: false,
      showingResults: false,
      allowingReVote: false,
      allowingAbstain: false,
      whitelist: false,
      title: null,
      question: null,
      type: 'multiselect',
      numberOfSelections: 2,
      created: new Date(),
      start: new Date(),
      expiry: new Date(),
      createdBy: null,
      options: []
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightedPollComponent } from './weighted-poll.component';
import { WsiTranslateService, WSTranslate } from 'worldskills-angular-lib';
import { MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateParser, TranslateService, TranslateStore } from '@ngx-translate/core';

describe('WeightedPollComponent', () => {
  let component: WeightedPollComponent;
  let fixture: ComponentFixture<WeightedPollComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ WeightedPollComponent, WSTranslate ],
      providers: [WsiTranslateService, TranslateService, TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightedPollComponent);
    component = fixture.componentInstance;
    component.poll = {
      id: 1,
      title: { lang_code: 'en', text: 'Sample Weighted Poll' },
      type: 'weighted',
      numberOfSelections: 3,
      options: [
        { id: 1, text: { lang_code: 'en', text: 'Option 1' }, deleted: false },
        { id: 2, text: { lang_code: 'en', text: 'Option 2' }, deleted: false },
        { id: 3, text: { lang_code: 'en', text: 'Option 3' }, deleted: false }
      ],
      deleted: false,
      created: new Date(),
      entity: { id: 1, name: { lang_code: 'en', text: 'Sample Entity' } },
      entityPath: null,
      anonymousResults: false,
      anonymousVoting: false,
      showingResults: false,
      allowingReVote: false,
      allowingAbstain: false,
      whitelist: false,
      question: { lang_code: 'en', text: 'Please select your options' },
      start: new Date(),
      expiry: new Date(),
      createdBy: null
    };
    component.initialSelection = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientAwardListComponent } from './recipient-award-list.component';
import { DEFAULT_LANGUAGE, ISOLATE_TRANSLATE_SERVICE, MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateParser, TranslatePipe, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND } from '@ngx-translate/core';
import { WSTranslate } from 'worldskills-angular-lib';

describe('AwardRecipientListComponent', () => {
  let component: RecipientAwardListComponent;
  let fixture: ComponentFixture<RecipientAwardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslatePipe],
      declarations: [ RecipientAwardListComponent, WSTranslate],
      providers: [TranslateService, TranslateStore,TranslateCompiler, TranslateLoader, TranslateParser, MissingTranslationHandler,
      { provide: USE_DEFAULT_LANG, useValue: false }, { provide: ISOLATE_TRANSLATE_SERVICE, useValue: false }, { provide: USE_EXTEND, useValue: false },
      { provide: DEFAULT_LANGUAGE, useValue: false }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientAwardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

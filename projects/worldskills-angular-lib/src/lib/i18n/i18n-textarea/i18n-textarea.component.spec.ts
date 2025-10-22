import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nTextareaComponent } from './i18n-textarea.component';

describe('I18nTextareaComponent', () => {
  let component: I18nTextareaComponent;
  let fixture: ComponentFixture<I18nTextareaComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ I18nTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

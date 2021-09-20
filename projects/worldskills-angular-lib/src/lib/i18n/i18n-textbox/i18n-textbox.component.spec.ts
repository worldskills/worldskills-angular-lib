import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nTextboxComponent } from './i18n-textbox.component';

describe('I18nTextboxComponent', () => {
  let component: I18nTextboxComponent;
  let fixture: ComponentFixture<I18nTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

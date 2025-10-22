import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthHeaderComponent } from './auth-header.component';
import { DateTimeProvider, OAuthLogger, OAuthService, UrlHelperService } from 'angular-oauth2-oidc';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MenuAccessPipe, WSTranslate } from 'worldskills-angular-lib';
import { DEFAULT_LANGUAGE, ISOLATE_TRANSLATE_SERVICE, MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateParser, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND } from '@ngx-translate/core';

describe('AuthHeaderComponent', () => {
  let component: AuthHeaderComponent;
  let fixture: ComponentFixture<AuthHeaderComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ AuthHeaderComponent, MenuAccessPipe, WSTranslate ],
      imports: [HttpClientTestingModule],
      providers: [OAuthLogger, OAuthService, DateTimeProvider, UrlHelperService, HttpClient, HttpHandler, TranslateStore, TranslateLoader, TranslateParser, TranslateCompiler, MissingTranslationHandler,
        {provide: USE_DEFAULT_LANG, useValue: false}, { provide: ISOLATE_TRANSLATE_SERVICE, useValue: false }, { provide: USE_EXTEND, useValue: false }, { provide: DEFAULT_LANGUAGE, useValue: false }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {  ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { NgAuthService, WsiTranslateService } from 'worldskills-angular-lib';
import { OAuthService } from 'angular-oauth2-oidc';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateStore } from '@ngx-translate/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [NgbModule],
      declarations: [ FooterComponent ],
      providers: [WsiTranslateService, OAuthService, NgAuthService, TranslateStore, TranslateLoader]    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

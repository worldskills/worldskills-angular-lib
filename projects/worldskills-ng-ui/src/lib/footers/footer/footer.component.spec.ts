import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideNoopAnimations(), provideTranslateService({ lang: 'en' }), MessageService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('stores the picked language and follows language changes', () => {
    const translate = TestBed.inject(TranslateService);
    component.changeLanguage({ code: 'fr', name: 'French', alt: [] });
    expect(sessionStorage.getItem('lang')).toBe('fr');
    expect(component.selectedLanguage().code).toBe('fr');

    translate.use('de');
    expect(component.selectedLanguage().code).toBe('de');
    sessionStorage.removeItem('lang');
  });
});

import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService } from '@ngx-translate/core';
import { WsI18nTranslationsMenuComponent } from './i18n-translations-menu.component';

describe('WsI18nTranslationsMenuComponent', () => {
  function create(translations: Record<string, string>, html = false, requiredLanguages: string[] = []) {
    TestBed.configureTestingModule({
      imports: [WsI18nTranslationsMenuComponent],
      providers: [provideNoopAnimations(), provideTranslateService({ lang: 'en' })],
    });
    const fixture = TestBed.createComponent(WsI18nTranslationsMenuComponent);
    fixture.componentRef.setInput('translations', translations);
    fixture.componentRef.setInput('html', html);
    fixture.componentRef.setInput('requiredLanguages', requiredLanguages);
    fixture.detectChanges();
    return fixture.componentInstance;
  }

  const codes = (c: WsI18nTranslationsMenuComponent) =>
    c.menuItems()[0].items!.filter(i => i.state?.['code']).map(i => i.state!['code']);

  it('lists filled-in languages and saves the dialog without empty rows', () => {
    const component = create({ en: 'Hello', fr: ' ' });
    expect(codes(component)).toEqual(['en']);

    const saved = jasmine.createSpy('saved');
    component.translations.subscribe(saved);
    component.openDialog();
    component.addDraft({ code: 'de', name: 'German', alt: [] });
    component.addDraft({ code: 'fi', name: 'Finnish', alt: [] });
    component.updateDraft('fi', ' Hei ');
    component.saveDialog();

    expect(saved).toHaveBeenCalledWith({ en: 'Hello', fi: 'Hei' });
  });

  it('counts filled-in translations other than the selected one', () => {
    const component = create({ en: 'Hello', fr: 'Bonjour', de: ' ' });
    component.selectedLang.set('en');
    expect(component.otherCount()).toBe(1);
  });

  it('lists missing required languages and opens them in the dialog', () => {
    const component = create({ en: 'Hello' }, false, ['en', 'fr']);

    expect(codes(component)).toEqual(['en', 'fr']);
    expect(component.missingRequired()).toEqual(['fr']);
    component.openDialog();
    expect(component.drafts().map(r => [r.code, r.required])).toEqual([['en', true], ['fr', true]]);
  });

  it('treats empty HTML as no translation and previews plain text', () => {
    const component = create({ en: '<p><strong>Hi</strong></p>', fr: '<p><br></p>' }, true);
    expect(codes(component)).toEqual(['en']);
    expect(component.menuItems()[0].items![0].state!['text']).toBe('Hi');
  });
});

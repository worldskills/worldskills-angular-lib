import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService } from '@ngx-translate/core';
import { I18nText } from '../../common/models/i18n-text';
import { WsI18nTextComponent } from './i18n-text.component';

describe('WsI18nTextComponent', () => {
  it('edits the selected language and emits the full translations map', () => {
    TestBed.configureTestingModule({
      imports: [WsI18nTextComponent],
      providers: [provideNoopAnimations(), provideTranslateService({ lang: 'en' })],
    });
    const fixture = TestBed.createComponent(WsI18nTextComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const onChange = jasmine.createSpy('onChange');
    const onTouched = jasmine.createSpy('onTouched');
    component.registerOnChange(onChange);
    component.registerOnTouched(onTouched);
    const value: I18nText = { lang_code: 'en', text: 'Hello', translations: { fr: 'Bonjour' } };
    component.writeValue(value);
    fixture.detectChanges();

    expect(component.selectedLangCode()).toBe('en'); // follows the translate service
    expect(component.value()).toBe('Hello');
    expect(value.translations).toEqual({ fr: 'Bonjour' }); // input not mutated
    expect(onTouched).not.toHaveBeenCalled();

    component.onLanguageChange('fr');
    component.onInput({ target: { value: 'Salut' } } as unknown as Event);

    expect(onChange).toHaveBeenCalledWith({
      lang_code: 'fr',
      text: 'Salut',
      translations: { en: 'Hello', fr: 'Salut' },
    });
  });
});

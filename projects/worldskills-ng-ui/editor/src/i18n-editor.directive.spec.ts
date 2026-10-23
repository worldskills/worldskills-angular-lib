import { Component, viewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService } from '@ngx-translate/core';
import { Editor } from 'primeng/editor';
import { I18nText } from '@worldskills/ng-ui';
import { WsI18nEditorDirective } from './i18n-editor.directive';

@Component({
  standalone: true,
  imports: [Editor, WsI18nEditorDirective, ReactiveFormsModule],
  template: `<p-editor wsI18n [formControl]="control" />`,
})
class HostComponent {
  control = new FormControl<I18nText>({ lang_code: 'en', text: '<p>Hello</p>', translations: { ar_AE: '<p>مرحبا</p>' } });
  editor = viewChild.required(Editor);
  plugin = viewChild.required(WsI18nEditorDirective);
}

describe('WsI18nEditorDirective', () => {
  it('adds the language button to the toolbar and edits languages through the form control', async () => {
    TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [provideNoopAnimations(), provideTranslateService({ lang: 'en' })],
    });
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const host = fixture.componentInstance;
    // Quill is loaded with a dynamic import.
    await new Promise(resolve => host.editor().onEditorInit.subscribe(resolve));
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.ql-toolbar .ql-formats .ws-i18n-trigger')).not.toBeNull();
    const quill = host.editor().getQuill();
    expect(quill.getText().trim()).toBe('Hello');

    host.plugin().onLanguageChange('ar_AE');
    expect(quill.getText().trim()).toBe('مرحبا');
    expect(quill.root.getAttribute('dir')).toBe('rtl');

    quill.insertText(0, '!', 'user');
    expect(host.control.value).toEqual({
      lang_code: 'en',
      text: '<p>Hello</p>',
      translations: { en: '<p>Hello</p>', ar_AE: '<p>!مرحبا</p>' },
    });
    expect(host.control.touched).toBeFalse();
  });
});

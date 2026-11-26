import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TranslateService, provideTranslateService } from '@ngx-translate/core';
import { WsRichTextViewComponent } from './rich-text-view.component';

describe('WsRichTextViewComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideNoopAnimations(), provideTranslateService({ lang: 'en' })] });
    TestBed.inject(TranslateService).setTranslation('en', {
      ws_ui: { rich_text: { show_more: 'Show more', show_less: 'Show less' } },
    });
    TestBed.inject(TranslateService).use('en');
  });

  function render(html: string) {
    const fixture = TestBed.createComponent(WsRichTextViewComponent);
    fixture.componentRef.setInput('html', html);
    fixture.componentRef.setInput('collapseAfter', 20);
    fixture.detectChanges();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }

  it('renders short text in full, without a toggle', () => {
    const { el } = render('<p><strong>Paid</strong> in May</p>');

    expect(el.querySelector('strong')?.textContent).toBe('Paid');
    expect(el.querySelector('button')).toBeNull();
  });

  it('collapses long text and expands it', () => {
    const { fixture, el } = render('<p>' + 'Long note. '.repeat(10) + '</p>');
    const text = el.querySelector('div')!;

    expect(text.classList).toContain('line-clamp-4');
    el.querySelector('button')!.click();
    fixture.detectChanges();
    expect(text.classList).not.toContain('line-clamp-4');
    expect(el.querySelector('button')?.textContent).toContain('Show less');
  });

  it('drops unsafe markup', () => {
    const { el } = render('<p onclick="alert(1)">Hi</p><script>alert(1)</script>');

    expect(el.querySelector('script')).toBeNull();
    expect(el.querySelector('p')?.hasAttribute('onclick')).toBeFalse();
  });
});

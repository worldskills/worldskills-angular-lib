import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TranslateService, provideTranslateService } from '@ngx-translate/core';
import { WsImageLightboxComponent } from './image-lightbox.component';

describe('WsImageLightboxComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideNoopAnimations(), provideTranslateService({ lang: 'en' })] });
    TestBed.inject(TranslateService).setTranslation('en', {
      ws_ui: {
        image_lightbox: {
          size: '{{width}} × {{height}} · {{ratio}}',
          standard: 'Exactly {{ratio}}',
          near: 'Close to {{ratio}}',
          off: '{{percent}}% off {{ratio}}',
        },
      },
    });
    TestBed.inject(TranslateService).use('en');
  });

  afterEach(() => document.querySelectorAll('.p-dialog-mask').forEach(el => el.remove()));

  function open(width: number, height: number, flag = true) {
    const fixture = TestBed.createComponent(WsImageLightboxComponent);
    fixture.componentRef.setInput('src', 'data:image/gif;base64,R0lGODlhAQABAAAAACw=');
    fixture.componentRef.setInput('alt', 'Flag of Finland');
    fixture.componentRef.setInput('width', width);
    fixture.componentRef.setInput('height', height);
    fixture.componentRef.setInput('flag', flag);
    fixture.detectChanges();
    (fixture.nativeElement.querySelector('button') as HTMLButtonElement).click();
    fixture.detectChanges();
    return document.querySelector('.p-dialog')?.textContent ?? '';
  }

  it('shows the size and reduced ratio', () => {
    expect(open(480, 320)).toContain('480 × 320 · 3:2');
  });

  it('recognises a standard flag proportion', () => {
    expect(open(1800, 1200)).toContain('Exactly 3:2');
  });

  it('points out a flag that is off', () => {
    expect(open(500, 320)).toContain('% off');
  });

  it('only checks proportions for flags', () => {
    expect(open(500, 320, false)).not.toContain('% off');
  });
});

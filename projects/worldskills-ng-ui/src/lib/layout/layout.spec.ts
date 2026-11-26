import { TestBed } from '@angular/core/testing';
import { TranslateService, provideTranslateService } from '@ngx-translate/core';
import { WsIconActionComponent } from './icon-action.component';
import { WsTileComponent } from './tile.component';

describe('WsIconActionComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideTranslateService({ lang: 'en' })] });
    TestBed.inject(TranslateService).setTranslation('en', { ws_ui: { actions: { delete: 'Delete' } } });
    TestBed.inject(TranslateService).use('en');
  });

  it('names the button after the action, or the given label', () => {
    const fixture = TestBed.createComponent(WsIconActionComponent);
    fixture.componentRef.setInput('action', 'delete');
    fixture.detectChanges();
    const button = () => fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    expect(button().getAttribute('aria-label')).toBe('Delete');

    fixture.componentRef.setInput('label', 'Delete Jane Doe');
    fixture.detectChanges();
    expect(button().getAttribute('aria-label')).toBe('Delete Jane Doe');
  });

  it('emits when clicked', () => {
    const fixture = TestBed.createComponent(WsIconActionComponent);
    fixture.componentRef.setInput('action', 'edit');
    fixture.detectChanges();
    let clicks = 0;
    fixture.componentInstance.clicked.subscribe(() => clicks++);

    fixture.nativeElement.querySelector('button').click();
    expect(clicks).toBe(1);
  });
});

describe('WsTileComponent', () => {
  it('shows the title and marks a coming-soon tile', () => {
    const fixture = TestBed.createComponent(WsTileComponent);
    fixture.componentRef.setInput('title', 'Members');
    fixture.componentRef.setInput('accent', 'purple');
    fixture.componentRef.setInput('comingSoon', true);
    fixture.detectChanges();
    const host: HTMLElement = fixture.nativeElement;

    expect(host.querySelector('h2')?.textContent).toContain('Members');
    expect(host.getAttribute('data-accent')).toBe('purple');
    expect(host.classList).toContain('border-dashed');
  });
});

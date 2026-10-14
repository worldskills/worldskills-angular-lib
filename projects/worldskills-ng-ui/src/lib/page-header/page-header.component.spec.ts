import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { WsPageHeaderComponent } from './page-header.component';

@Component({
  imports: [WsPageHeaderComponent],
  template: `
    <ws-ng-ui-page-header title="Finland" subtitle="Member" backLink="/members">
      <img wsPageHeaderMedia id="media" alt="" />
      <span id="detail">Joined 1990</span>
      <button wsPageHeaderActions id="action">Edit</button>
    </ws-ng-ui-page-header>
  `,
})
class HostComponent {}

describe('WsPageHeaderComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideTranslateService({ lang: 'en' })],
    });
  });

  it('renders the title, subtitle, back link and projected content', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('h1')?.textContent).toContain('Finland');
    expect(el.querySelector('p')?.textContent).toContain('Member');
    expect(el.querySelector('a')?.getAttribute('href')).toBe('/members');
    expect(el.querySelector('#media')).not.toBeNull();
    expect(el.querySelector('#detail')).not.toBeNull();
    expect(el.querySelector('#action')).not.toBeNull();
  });

  it('omits the back link and subtitle when not set', () => {
    const fixture = TestBed.createComponent(WsPageHeaderComponent);
    fixture.componentRef.setInput('title', 'Members');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('a')).toBeNull();
    expect(el.querySelector('p')).toBeNull();
  });

  it('uses a custom back label', () => {
    const fixture = TestBed.createComponent(WsPageHeaderComponent);
    fixture.componentRef.setInput('title', 'Finland');
    fixture.componentRef.setInput('backLink', ['/members']);
    fixture.componentRef.setInput('backLabel', 'All members');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('a').textContent).toContain('All members');
  });
});

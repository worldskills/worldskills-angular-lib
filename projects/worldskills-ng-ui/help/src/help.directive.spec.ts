import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';

import { WsHelpDirective } from './help.directive';
import { WsHelpService } from './help.service';
import { provideWsHelp } from './provide-ws-help';

@Component({
  imports: [WsHelpDirective],
  template: `
    <section wsHelp="header">Header</section>
    @if (showAdmin()) {
      <section wsHelp="admin">Admin</section>
    }
    <section wsHelp="results">Results</section>
  `,
})
class HostComponent {
  readonly showAdmin = signal(true);
}

describe('WsHelpDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideTranslateService({ lang: 'en' }),
        provideWsHelp({ pages: { demo: ['header', 'admin', 'results'] }, warnings: false }),
      ],
    });
    TestBed.inject(WsHelpService).setPage('demo');
  });

  it('registers rendered sections once and settles (no re-run loop)', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    TestBed.tick();

    const help = TestBed.inject(WsHelpService);
    expect(help.points().map((p) => p.number)).toEqual([1, 2, 3]);
  });

  it('drops a section that is no longer rendered, leaving a gap', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    fixture.componentInstance.showAdmin.set(false);
    fixture.detectChanges();
    TestBed.tick();

    const help = TestBed.inject(WsHelpService);
    expect(help.points().map((p) => [p.id, p.number])).toEqual([
      ['header', 1],
      ['results', 3],
    ]);
  });
});

import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslateService, provideTranslateService } from '@ngx-translate/core';

import { provideWsHelp } from './provide-ws-help';
import { WsHelpService } from './help.service';

describe('WsHelpService', () => {
  let service: WsHelpService;
  let warn: jasmine.Spy;

  const el = () => document.body.appendChild(document.createElement('div'));
  const warnings = () => warn.calls.allArgs().map((args) => String(args[0])).join('\n');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideTranslateService({ lang: 'en' }),
        provideWsHelp({ pages: { reports: ['header', 'filters', 'results'] }, warnings: true }),
      ],
    });
    TestBed.inject(TranslateService).setTranslation('en', {
      help: {
        reports: {
          header: { title: 'Header', description: 'The page header' },
          results: { title: 'Results', description: 'The results' },
        },
      },
    });
    service = TestBed.inject(WsHelpService);
    service.setPage('reports');
    warn = spyOn(console, 'warn');
  });

  it('numbers points by their place in the list, leaving gaps for hidden ones', () => {
    service.register('results', el());
    service.register('header', el());

    expect(service.points().map((p) => [p.id, p.number])).toEqual([
      ['header', 1],
      ['results', 3],
    ]);
  });

  it('has no points without a page', () => {
    service.register('header', el());
    service.setPage(null);

    expect(service.points()).toEqual([]);
  });

  it('forgets a point when its element leaves the page', () => {
    const header = el();
    service.register('header', header);
    service.unregister('header', header);

    expect(service.points()).toEqual([]);
  });

  it('builds text keys from the prefix, page and point', () => {
    expect(service.textKey({ page: 'reports', id: 'filters' }, 'title')).toBe('help.reports.filters.title');
  });

  it('warns about two elements with the same point', () => {
    service.register('header', el());
    service.register('header', el());

    expect(warnings()).toContain('two elements are marked wsHelp="header"');
  });

  it('warns on open about unknown points and missing texts', () => {
    service.register('header', el());
    service.register('filters', el());
    service.register('ghost', el());

    service.toggle();

    expect(service.open()).toBeTrue();
    expect(warnings()).toContain('wsHelp="ghost" is on the page but not in the "reports" points');
    expect(warnings()).toContain('missing text "help.reports.filters.title"');
    expect(warnings()).not.toContain('help.reports.header');
  });
});

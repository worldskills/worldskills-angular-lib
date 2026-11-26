import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { wsSentryHttpInterceptor } from './sentry-http.interceptor';
import { WS_SENTRY_CONFIG, WsSentryConfig } from './sentry-config';
import { WsSentryService } from './sentry.service';

describe('wsSentryHttpInterceptor', () => {
  let sentry: jasmine.SpyObj<WsSentryService>;

  function setup(config?: WsSentryConfig) {
    sentry = jasmine.createSpyObj<WsSentryService>('WsSentryService', ['captureApiError']);
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([wsSentryHttpInterceptor])),
        provideHttpClientTesting(),
        { provide: WsSentryService, useValue: sentry },
        ...(config ? [{ provide: WS_SENTRY_CONFIG, useValue: config }] : []),
      ],
    });
    return { http: TestBed.inject(HttpClient), backend: TestBed.inject(HttpTestingController) };
  }

  function fail(status: number, url = '/org/members', method: 'GET' | 'POST' = 'GET') {
    const { http, backend } = harness;
    (method === 'GET' ? http.get(url) : http.post(url, {})).subscribe({ error: () => {} });
    const req = backend.expectOne(url);
    if (status === 0) {
      req.error(new ProgressEvent('error'));
    } else {
      req.flush({}, { status, statusText: 'x' });
    }
  }

  let harness: ReturnType<typeof setup>;

  it('reports server errors with the request method', () => {
    harness = setup({ dsn: 'x', environment: 'test' });
    fail(500, '/org/members', 'POST');
    expect(sentry.captureApiError).toHaveBeenCalledTimes(1);
    expect(sentry.captureApiError.calls.mostRecent().args[1]).toEqual({ method: 'POST' });
  });

  it('reports network failures', () => {
    harness = setup({ dsn: 'x', environment: 'test' });
    fail(0);
    expect(sentry.captureApiError).toHaveBeenCalledTimes(1);
  });

  it('does not report expected client errors', () => {
    harness = setup({ dsn: 'x', environment: 'test' });
    for (const status of [400, 401, 403, 404]) {
      fail(status);
    }
    expect(sentry.captureApiError).not.toHaveBeenCalled();
  });

  it('skips ignored URLs', () => {
    harness = setup({ dsn: 'x', environment: 'test', ignoreUrlPatterns: ['/auth/ping'] });
    fail(500, '/auth/ping');
    expect(sentry.captureApiError).not.toHaveBeenCalled();
  });

  it('does nothing when Sentry is disabled or not configured', () => {
    harness = setup({ dsn: 'x', environment: 'test', enabled: false });
    fail(500);
    expect(sentry.captureApiError).not.toHaveBeenCalled();

    TestBed.resetTestingModule();
    harness = setup();
    fail(500);
    expect(sentry.captureApiError).not.toHaveBeenCalled();
  });
});

import { HttpErrorResponse } from '@angular/common/http';
import { buildApiErrorEvent, isReportableStatus, normalizePath, stripQuery } from './api-error-event';

describe('api-error-event', () => {
  it('reports only server errors and network failures', () => {
    expect(isReportableStatus(0)).toBeTrue();
    expect(isReportableStatus(500)).toBeTrue();
    expect(isReportableStatus(503)).toBeTrue();
    for (const status of [400, 401, 403, 404, 409, 422]) {
      expect(isReportableStatus(status)).withContext(String(status)).toBeFalse();
    }
  });

  it('strips query strings and hashes', () => {
    expect(stripQuery('https://api/org/members?search=Jane%20Doe&l=en')).toBe('https://api/org/members');
    expect(stripQuery('/members/12#contacts')).toBe('/members/12');
  });

  it('normalises ids so the same endpoint groups together', () => {
    expect(normalizePath('https://api/org/members/123/addresses/45?x=1')).toBe('https://api/org/members/{id}/addresses/{id}');
    expect(normalizePath('/resources/0f8fad5b-d9cb-469f-a165-70867728950e/versions'))
      .toBe('/resources/{uuid}/versions');
    expect(normalizePath('/org/v2/members')).toBe('/org/v2/members');
  });

  it('builds an event without request data or personal data', () => {
    const error = new HttpErrorResponse({
      url: 'https://api/org/members/123?search=Jane',
      status: 500,
      statusText: 'Internal Server Error',
      error: { code: '800-500', user_msg: 'Could not save Jane Doe', dev_msg: 'NPE in MemberService' },
    });

    const event = buildApiErrorEvent(error, { method: 'put', action: 'save-member' });

    expect(event.message).toBe('API PUT https://api/org/members/{id} failed (500)');
    expect(event.fingerprint).toEqual(['ws-api-error', 'PUT', 'https://api/org/members/{id}', '500']);
    expect(event.tags).toEqual({ api_method: 'PUT', api_status: '500', app_action: 'save-member' });
    expect(event.context).toEqual({
      url: 'https://api/org/members/123',
      status: 500,
      status_text: 'Internal Server Error',
      code: '800-500',
      dev_msg: 'NPE in MemberService',
    });
    expect(JSON.stringify(event)).not.toContain('Jane');
  });

  it('describes network failures', () => {
    const error = new HttpErrorResponse({ url: 'https://api/org/members', status: 0 });
    expect(buildApiErrorEvent(error, { method: 'GET' }).message).toBe('API GET https://api/org/members failed (network error)');
  });
});

import { ErrorUtil } from './error-util';

describe('ErrorUtil', () => {
  const apiError = { error: { user_msg: 'Name is required' } };

  it('returns the API user message when present', () => {
    expect(ErrorUtil.getErrorMsg(apiError, 'Something went wrong')).toBe('Name is required');
  });

  it('returns the default message when there is no API user message', () => {
    expect(ErrorUtil.getErrorMsg({ error: {} }, 'Something went wrong')).toBe('Something went wrong');
    expect(ErrorUtil.getErrorMsg({ status: 0 }, 'Something went wrong')).toBe('Something went wrong');
    expect(ErrorUtil.getErrorMsg(null, 'Something went wrong')).toBe('Something went wrong');
  });

  it('hasApiError returns a boolean', () => {
    expect(ErrorUtil.hasApiError(apiError)).toBeTrue();
    expect(ErrorUtil.hasApiError({ error: null })).toBeFalse();
    expect(ErrorUtil.hasApiError(undefined)).toBeFalse();
  });
});

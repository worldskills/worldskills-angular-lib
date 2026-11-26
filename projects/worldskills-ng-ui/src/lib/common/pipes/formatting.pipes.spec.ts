import {
  ExternalUrlPipe,
  MailtoPipe,
  PersonNamePipe,
  PhoneDisplayPipe,
  TelHrefPipe,
} from './formatting.pipes';

describe('formatting pipes', () => {
  it('wsExternalUrl adds a missing scheme', () => {
    const pipe = new ExternalUrlPipe();
    expect(pipe.transform('worldskills.org')).toBe('https://worldskills.org');
    expect(pipe.transform('http://example.com')).toBe('http://example.com');
    expect(pipe.transform(null)).toBe('');
  });

  it('wsTelHref builds a dialable link', () => {
    const pipe = new TelHrefPipe();
    expect(pipe.transform('40 123 45 67', 358)).toBe('tel:+358401234567');
    expect(pipe.transform('(02) 555-0100')).toBe('tel:025550100');
    expect(pipe.transform(undefined, 1)).toBe('');
  });

  it('wsPhoneDisplay shows the calling code when known', () => {
    const pipe = new PhoneDisplayPipe();
    expect(pipe.transform('40 123 45 67', '358')).toBe('+358 40 123 45 67');
    expect(pipe.transform('40 123 45 67')).toBe('40 123 45 67');
  });

  it('wsMailto links an email address', () => {
    expect(new MailtoPipe().transform('a@b.org')).toBe('mailto:a@b.org');
    expect(new MailtoPipe().transform('')).toBe('');
  });

  it('wsPersonName joins the parts that are set', () => {
    const pipe = new PersonNamePipe();
    expect(pipe.transform({ first_name: 'Jane', last_name: 'Doe' })).toBe('Jane Doe');
    expect(pipe.transform({ first_name: null, last_name: 'Doe' })).toBe('Doe');
    expect(pipe.transform(null)).toBe('');
  });
});

import { TestBed } from '@angular/core/testing';
import { TranslateService, provideTranslateService } from '@ngx-translate/core';
import { Confirmation, ConfirmationService } from 'primeng/api';
import { WsConfirmService } from './confirm.service';

describe('WsConfirmService', () => {
  let service: WsConfirmService;
  let shown: Confirmation | undefined;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmationService, provideTranslateService({ lang: 'en' })],
    });
    const confirmation = TestBed.inject(ConfirmationService);
    spyOn(confirmation, 'confirm').and.callFake((c: Confirmation) => {
      shown = c;
      return confirmation;
    });
    service = TestBed.inject(WsConfirmService);
  });

  it('uses English button texts when the library translations are not loaded', () => {
    service.danger({ message: 'Delete it?' });

    expect(shown?.acceptLabel).toBe('Delete');
    expect(shown?.rejectLabel).toBe('Cancel');
    expect(shown?.message).toBe('Delete it?');
  });

  it('uses the translated button texts when loaded', () => {
    TestBed.inject(TranslateService).setTranslation('en', {
      ws_ui: { actions: { delete: 'Remove', cancel: 'Keep' } },
    });

    service.danger({ message: 'Delete it?' });

    expect(shown?.acceptLabel).toBe('Remove');
    expect(shown?.rejectLabel).toBe('Keep');
  });

  it('translates keys with params when asked', () => {
    TestBed.inject(TranslateService).setTranslation('en', {
      contacts: { delete: 'Delete {{name}}?', title: 'Contact', end: 'End' },
    });

    service.danger({
      title: 'contacts.title',
      message: 'contacts.delete',
      acceptLabel: 'contacts.end',
      params: { name: 'Jane' },
      translate: true,
    });

    expect(shown?.header).toBe('Contact');
    expect(shown?.message).toBe('Delete Jane?');
    expect(shown?.acceptLabel).toBe('End');
    expect(shown?.rejectLabel).toBe('Cancel');
  });

  it('resolves true when accepted', async () => {
    const result = service.yesNo({ message: 'Sure?' });
    shown?.accept?.();

    expect(await result).toBeTrue();
  });
});

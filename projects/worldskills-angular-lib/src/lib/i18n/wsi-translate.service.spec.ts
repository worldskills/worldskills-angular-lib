import { TestBed } from '@angular/core/testing';

import { WsiTranslateService } from './wsi-translate.service';
import { TranslateService } from '@ngx-translate/core';

describe('WsiTranslateService', () => {
  let service: WsiTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateService]
    });
    service = TestBed.inject(WsiTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

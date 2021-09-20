import { TestBed } from '@angular/core/testing';

import { WsiTranslateService } from './wsi-translate.service';

describe('WsiTranslateService', () => {
  let service: WsiTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsiTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

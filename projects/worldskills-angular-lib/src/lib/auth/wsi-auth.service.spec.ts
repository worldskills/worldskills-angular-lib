import { TestBed } from '@angular/core/testing';

import { WsiAuthService } from './wsi-auth.service';

describe('WsiAuthService', () => {
  let service: WsiAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsiAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

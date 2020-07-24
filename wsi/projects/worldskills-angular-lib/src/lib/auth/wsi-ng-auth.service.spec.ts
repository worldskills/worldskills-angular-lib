import { TestBed } from '@angular/core/testing';

import { WsiNgAuthService } from './wsi-ng-auth.service';

describe('WsiNgAuthService', () => {
  let service: WsiNgAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsiNgAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

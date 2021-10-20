import { TestBed } from '@angular/core/testing';

import { WsiToastService } from './wsi-toast.service';

describe('WsiToastService', () => {
  let service: WsiToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsiToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

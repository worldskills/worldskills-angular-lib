import { TestBed } from '@angular/core/testing';

import { WsiModalService } from './wsi-modal.service';

describe('WsiModalService', () => {
  let service: WsiModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsiModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

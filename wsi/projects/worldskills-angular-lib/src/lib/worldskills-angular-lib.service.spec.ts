import { TestBed } from '@angular/core/testing';

import { WorldskillsAngularLibService } from './worldskills-angular-lib.service';

describe('WorldskillsAngularLibService', () => {
  let service: WorldskillsAngularLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldskillsAngularLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

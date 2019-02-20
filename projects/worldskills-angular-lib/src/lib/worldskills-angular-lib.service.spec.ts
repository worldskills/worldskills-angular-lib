import { TestBed } from '@angular/core/testing';

import { WorldskillsAngularLibService } from './worldskills-angular-lib.service';

describe('WorldskillsAngularLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldskillsAngularLibService = TestBed.get(WorldskillsAngularLibService);
    expect(service).toBeTruthy();
  });
});

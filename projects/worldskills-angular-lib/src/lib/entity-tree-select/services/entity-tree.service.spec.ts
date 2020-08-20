import { TestBed } from '@angular/core/testing';

import { EntityTreeService } from './entity-tree.service';

describe('EntityTreeService', () => {
  let service: EntityTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

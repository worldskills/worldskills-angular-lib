import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EntityTreeService } from './entity-tree.service';

describe('EntityTreeService', () => {
  let service: EntityTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(EntityTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AwardService } from './award.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AwardService', () => {
  let service: AwardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(AwardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

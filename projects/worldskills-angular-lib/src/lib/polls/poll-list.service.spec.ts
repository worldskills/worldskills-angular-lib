import { TestBed } from '@angular/core/testing';

import { PollListService } from './poll-list.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PollListService', () => {
  let service: PollListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(PollListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

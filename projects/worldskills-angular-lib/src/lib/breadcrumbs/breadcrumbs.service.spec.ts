import { TestBed } from '@angular/core/testing';

import { BreadcrumbsService } from './breadcrumbs.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('BreadcrumbsService', () => {
  let service: BreadcrumbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(BreadcrumbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

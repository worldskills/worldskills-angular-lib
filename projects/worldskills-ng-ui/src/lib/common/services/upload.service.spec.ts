import { TestBed } from '@angular/core/testing';

import { UploadService } from './upload.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('UploadService', () => {
  let service: UploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi())]
});
    service = TestBed.inject(UploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

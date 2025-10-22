import { TestBed, } from '@angular/core/testing';

import { ResourceService } from './resource.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('ResourceService', () => {
  let service: ResourceService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [provideHttpClient(withInterceptorsFromDi())]
    });
    service = TestBed.inject(ResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

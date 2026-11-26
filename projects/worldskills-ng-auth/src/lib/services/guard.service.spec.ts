import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { GuardService } from './guard.service';
import { NgAuthService } from './ng-auth.service';

describe('GuardService', () => {
  let service: GuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), { provide: NgAuthService, useValue: {} }],
    });
    service = TestBed.inject(GuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

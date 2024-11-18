import { TestBed } from '@angular/core/testing';

import { NgAuthService } from './ng-auth.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { OAuthService, UrlHelperService, OAuthLogger } from 'angular-oauth2-oidc';
import { RouterTestingModule } from '@angular/router/testing';

describe('NgAuthService', () => {
    let service: NgAuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [OAuthLogger, OAuthService, UrlHelperService, provideHttpClient(withInterceptorsFromDi())]
});
        service = TestBed.inject(NgAuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

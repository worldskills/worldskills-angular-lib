import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { roleGuard } from './role.guard';
import { NgAuthService } from '../services/ng-auth.service';
import { LIBRARY_CONFIG } from '../auth-lib-config';
import { RETURN_URL_KEY } from '../constants';
import { User } from '../models/user';
import { Role } from '../models/role';

function user(...names: string[]): User {
  return {
    roles: names.map(name => ({ name, role_application: { application_code: 800 } }) as unknown as Role),
  } as User;
}

describe('roleGuard', () => {
  let auth: jasmine.SpyObj<NgAuthService> & { ready: Promise<void>; currentUser: User | null };
  const state = { url: '/admin' } as RouterStateSnapshot;

  function route(data: Record<string, unknown> = {}): ActivatedRouteSnapshot {
    return { data } as unknown as ActivatedRouteSnapshot;
  }

  function run(guard: ReturnType<typeof roleGuard>, r = route()) {
    return TestBed.runInInjectionContext(() => guard(r, state)) as Promise<boolean | UrlTree>;
  }

  beforeEach(() => {
    auth = Object.assign(
      jasmine.createSpyObj<NgAuthService>('NgAuthService', ['isLoggedIn', 'getLoggedInUser', 'login']),
      { ready: Promise.resolve(), currentUser: null as User | null },
    );
    auth.isLoggedIn.and.returnValue(true);
    auth.getLoggedInUser.and.returnValue(of(null as unknown as User));

    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        { provide: NgAuthService, useValue: auth },
        { provide: LIBRARY_CONFIG, useValue: { app: { notAuthorizedRoute: ['/not-authorized'] } } },
      ],
    });
    sessionStorage.removeItem(RETURN_URL_KEY);
  });

  it('starts login and stores the return url when not logged in', async () => {
    auth.isLoggedIn.and.returnValue(false);
    expect(await run(roleGuard())).toBeFalse();
    expect(auth.login).toHaveBeenCalled();
    expect(sessionStorage.getItem(RETURN_URL_KEY)).toBe('/admin');
  });

  it('starts login when the user cannot be loaded', async () => {
    expect(await run(roleGuard())).toBeFalse();
    expect(auth.login).toHaveBeenCalled();
  });

  it('allows any logged-in user when no roles are required', async () => {
    auth.currentUser = user('Browse');
    expect(await run(roleGuard())).toBeTrue();
  });

  it('allows a user with one of the given roles', async () => {
    auth.currentUser = user('Admin');
    expect(await run(roleGuard([{ appCode: 800, name: 'Admin' }]))).toBeTrue();
  });

  it('loads the user when it is not cached yet', async () => {
    auth.getLoggedInUser.and.returnValue(of(user('Admin')));
    expect(await run(roleGuard([{ appCode: 800, name: 'Admin' }]))).toBeTrue();
  });

  it('redirects to the not-authorized route when roles are missing', async () => {
    auth.currentUser = user('Browse');
    const result = await run(roleGuard([{ appCode: 800, name: 'Admin' }]));
    expect(result instanceof UrlTree).toBeTrue();
    expect(result.toString()).toBe('/not-authorized');
  });

  it('falls back to route data roles', async () => {
    auth.currentUser = user('Browse');
    const result = await run(roleGuard(), route({ roles: [{ appCode: 800, name: 'Admin' }] }));
    expect(result instanceof UrlTree).toBeTrue();
  });
});

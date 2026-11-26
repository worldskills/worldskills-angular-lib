import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthGuardAccess } from '../models/auth-guard-access';
import { GuardService } from '../services/guard.service';

/**
 * Functional route guard. Requires a logged-in user and, when roles are given,
 * at least one of them. Without arguments it reads `data.roles` from the route,
 * the same as `GuardService`.
 *
 * ```ts
 * { path: 'admin', canActivate: [roleGuard([{ appCode: 800, name: 'Admin' }])], ... }
 * { path: 'members', canActivate: [roleGuard()], data: { roles: [...] }, ... }
 * ```
 */
export function roleGuard(roles?: AuthGuardAccess[]): CanActivateFn {
  return (route, state) =>
    inject(GuardService).checkAccess(roles ?? route.data['roles'], state);
}

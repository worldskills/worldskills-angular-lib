import { User } from '../models/user';
import { Role } from '../models/role';

export interface RoleCheckOptions {
  /** Role names to check. */
  roles: string | string[];
  /** Only consider roles of this application. When omitted, roles of any application count. */
  appCode?: number;
  /** Only consider roles that apply to this entity (roles not applied per entity always count). */
  entityId?: number | { id: number };
  /** Require all roles instead of any. Defaults to false. */
  all?: boolean;
}

/**
 * Checks whether a user has the given roles.
 * Mirrors the semantics of ng-ui's UserRoleUtil so the two can be used interchangeably.
 */
export function hasRoles(user: User | null | undefined, options: RoleCheckOptions): boolean {
  if (!user?.roles) {
    return false;
  }

  const required = typeof options.roles === 'string' ? [options.roles] : options.roles;
  const entityId: number | undefined = typeof options.entityId === 'number'
    ? options.entityId
    : options.entityId?.id;

  const userRoles = user.roles
    .filter(role => options.appCode == null || role.role_application?.application_code === options.appCode)
    .filter(role => entityId == null || appliesToEntity(role, entityId))
    .map(role => role.name);

  return options.all
    ? required.every(r => userRoles.includes(r))
    : required.some(r => userRoles.includes(r));
}

function appliesToEntity(role: Role, entityId: number): boolean {
  return !role.apply_per_entity
    || role.ws_entity?.id === entityId
    || (role.ws_entity_ids?.includes(entityId) ?? false);
}

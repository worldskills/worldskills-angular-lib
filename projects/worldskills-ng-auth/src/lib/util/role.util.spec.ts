import { hasRoles } from './role.util';
import { User } from '../models/user';
import { Role } from '../models/role';

function role(name: string, appCode: number, entity?: { perEntity: boolean; id?: number; ids?: number[] }): Role {
  return {
    name,
    role_application: { application_code: appCode },
    apply_per_entity: entity?.perEntity ?? false,
    ws_entity: entity?.id != null ? { id: entity.id } : null,
    ws_entity_ids: entity?.ids ?? [],
  } as unknown as Role;
}

function user(...roles: Role[]): User {
  return { roles } as User;
}

describe('hasRoles', () => {
  it('returns false without a user', () => {
    expect(hasRoles(null, { roles: 'Admin' })).toBeFalse();
    expect(hasRoles(undefined, { roles: 'Admin' })).toBeFalse();
  });

  it('matches any role by default', () => {
    const u = user(role('Browse', 800));
    expect(hasRoles(u, { roles: ['Admin', 'Browse'] })).toBeTrue();
    expect(hasRoles(u, { roles: 'Admin' })).toBeFalse();
  });

  it('requires every role when all is set', () => {
    const u = user(role('Browse', 800), role('EditMember', 800));
    expect(hasRoles(u, { roles: ['Browse', 'EditMember'], all: true })).toBeTrue();
    expect(hasRoles(u, { roles: ['Browse', 'Admin'], all: true })).toBeFalse();
  });

  it('filters by application code', () => {
    const u = user(role('Admin', 900));
    expect(hasRoles(u, { roles: 'Admin', appCode: 800 })).toBeFalse();
    expect(hasRoles(u, { roles: 'Admin', appCode: 900 })).toBeTrue();
    expect(hasRoles(u, { roles: 'Admin' })).toBeTrue();
  });

  it('filters per-entity roles by entity', () => {
    const u = user(
      role('EditMember', 800, { perEntity: true, id: 5 }),
      role('EditOrganization', 800, { perEntity: true, ids: [7, 8] }),
    );
    expect(hasRoles(u, { roles: 'EditMember', appCode: 800, entityId: 5 })).toBeTrue();
    expect(hasRoles(u, { roles: 'EditMember', appCode: 800, entityId: 6 })).toBeFalse();
    expect(hasRoles(u, { roles: 'EditOrganization', entityId: { id: 8 } })).toBeTrue();
  });

  it('always counts roles that are not applied per entity', () => {
    const u = user(role('Admin', 800));
    expect(hasRoles(u, { roles: 'Admin', appCode: 800, entityId: 123 })).toBeTrue();
  });
});

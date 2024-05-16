import { User } from "../../auth/models/user";

export class UserRoleUtil {
  static userHasRoles(
    user: User,
    appId: number,
    ...roles: Array<string>
  ): boolean {
    const userRoles =
      user && user.roles
        ? user.roles
            .filter((role) => role.role_application.application_code === appId)
            .map((role) => role.name)
        : [];
    return roles.some((r1) => userRoles.some((r2) => r1 === r2));
  }

  static userHasRolesOfEntity(
    user: User,
    appId: number,
    entityId: number,
    ...roles: Array<string>
  ): boolean {
    const userRoles =
      user && user.roles
        ? user.roles
            .filter((role) => role.role_application.application_code === appId)
            .filter(
              (role) =>
                !role.apply_per_entity ||
                (role.ws_entity && role.ws_entity.id === entityId) ||
                (role.ws_entity_ids && role.ws_entity_ids.includes(entityId))
            )
            .map((role) => role.name)
        : [];
    return roles.some((r1) => userRoles.some((r2) => r1 === r2));
  }

  static userHasAllRoles(
    user: User,
    appId: number,
    ...roles: Array<string>
  ): boolean {
    const userRoles =
      user && user.roles
        ? user.roles
            .filter((role) => role.role_application.application_code === appId)
            .map((role) => role.name)
        : [];
    return roles.every((r1) => userRoles.some((r2) => r1 === r2));
  }

  static userHasAllRolesOfEntity(
    user: User,
    appId: number,
    entityId: number,
    ...roles: Array<string>
  ): boolean {
    const userRoles =
      user && user.roles
        ? user.roles
            .filter((role) => role.role_application.application_code === appId)
            .filter(
              (role) =>
                !role.apply_per_entity ||
                (role.ws_entity && role.ws_entity.id === entityId) ||
                (role.ws_entity_ids && role.ws_entity_ids.includes(entityId))
            )
            .map((role) => role.name)
        : [];
    return roles.every((r1) => userRoles.some((r2) => r1 === r2));
  }

  static userHasRolesOfAnyApp(user: User, ...roles: Array<string>): boolean {
    const userRoles =
      user && user.roles ? user.roles.map((role) => role.name) : [];
    return roles.some((r1) => userRoles.some((r2) => r1 === r2));
  }

  static userHasRolesOfEntityOfAnyApp(
    user: User,
    entityId: number,
    ...roles: Array<string>
  ): boolean {
    const userRoles =
      user && user.roles
        ? user.roles
            .filter(
              (role) =>
                !role.apply_per_entity ||
                (role.ws_entity && role.ws_entity.id === entityId) ||
                (role.ws_entity_ids && role.ws_entity_ids.includes(entityId))
            )
            .map((role) => role.name)
        : [];
    return roles.some((r1) => userRoles.some((r2) => r1 === r2));
  }

  static userHasAllRolesOfAnyApp(user: User, ...roles: Array<string>): boolean {
    const userRoles =
      user && user.roles ? user.roles.map((role) => role.name) : [];
    return roles.every((r1) => userRoles.some((r2) => r1 === r2));
  }

  static userHasAllRolesOfEntityOfAnyApp(
    user: User,
    entityId: number,
    ...roles: Array<string>
  ): boolean {
    const userRoles =
      user && user.roles
        ? user.roles
            .filter(
              (role) =>
                !role.apply_per_entity ||
                (role.ws_entity && role.ws_entity.id === entityId) ||
                (role.ws_entity_ids && role.ws_entity_ids.includes(entityId))
            )
            .map((role) => role.name)
        : [];
    return roles.every((r1) => userRoles.some((r2) => r1 === r2));
  }
}

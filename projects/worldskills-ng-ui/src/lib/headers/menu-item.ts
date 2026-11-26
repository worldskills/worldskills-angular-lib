import { Params } from '@angular/router';

export interface MenuRoleRequirement {
    name: string;
    /** null = blanket role only (no entity). number = must have this specific entity ID. */
    entityId: number | null;
}

export type MenuRole = string | MenuRoleRequirement;

export interface MenuItem {
    label: string;
    params?: Params;
    url: string;
    hidden: boolean;
    requireLogin: boolean;
    requiredRoles: MenuRole[];
    subMenuItems?: MenuItem[];
}

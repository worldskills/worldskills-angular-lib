import { Params } from '@angular/router';

export interface MenuItem {
    label: string;
    params?: Params;
    url: string;
    hidden: boolean;
    requireLogin: boolean;
    requiredRoles: string[];
    subMenuItems?: MenuItem[];
}

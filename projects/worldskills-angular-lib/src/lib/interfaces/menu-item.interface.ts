import { Params } from '@angular/router';

export interface IMenuItem {
  label: string;
  params?: Params;
  url: string;
  hidden: boolean;
  requireLogin: boolean;
  requiredRoles: string[];

}

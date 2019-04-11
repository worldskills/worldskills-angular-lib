import {Pipe, PipeTransform} from '@angular/core';
import { IMenuItem } from '../interfaces/menu-item.interface';

@Pipe ({
   name : 'wsMenuAccesssFilter'
})
export class MenuAccessPipe implements PipeTransform {
   transform(items: IMenuItem[], isLoggedIn: boolean, roles: string[]): IMenuItem[] {
     if (items === null || items === undefined) {
       return [];
     }

     return items.filter(item => {
      // item doesn't exist, don't display it
      if (item === undefined || item === null) {
        return false;
      }

      // item is meant to be hidden
      if (item.hidden) {
        return false;
      }

      // item requires a logged in user
      if (item.requireLogin && ! isLoggedIn) {
        return false;
      }

      // item doesn not require role permissions
      if (item.requiredRoles.length === 0) {
        return true;
      }

      // item requires role permissions
      let show = false;
      item.requiredRoles.forEach(roleName => {
        show = false;
        const index = roles.findIndex(userRoleName => userRoleName === roleName);
        if (index !== -1) {
          show = true;
          return; // end loop
        }
      });
      return show;
     });
   }
}

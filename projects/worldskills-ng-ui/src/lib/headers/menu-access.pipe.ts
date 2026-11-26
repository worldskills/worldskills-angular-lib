import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '@worldskills/ng-auth';
import { MenuItem } from './menu-item';

@Pipe({
    name: 'wsMenuAccessFilter',
    standalone: true
})
export class MenuAccessPipe implements PipeTransform {
   transform(items: MenuItem[], isLoggedIn: boolean, roles: Role[]): MenuItem[] {
     if (items === null || items === undefined) {
       return [];
     }

     return items.filter(item => {
      if (item === undefined || item === null) {
        return false;
      }

      if (item.hidden) {
        return false;
      }

      if (item.requireLogin && !isLoggedIn) {
        return false;
      }

      if (item.requiredRoles.length === 0) {
        return true;
      }

      return item.requiredRoles.some(required => {
        if (typeof required === 'string') {
          return roles.some(r => r.name === required);
        }
        return roles.some(r => {
          if (r.name !== required.name) return false;
          if (required.entityId === null) return r.ws_entity == null;
          return r.ws_entity?.id === required.entityId || r.ws_entity_ids?.includes(required.entityId);
        });
      });
     });
   }
}

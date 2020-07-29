import { PipeTransform } from '@angular/core';
import { MenuItem } from './menu-item';
import * as i0 from "@angular/core";
export declare class MenuAccessPipe implements PipeTransform {
    transform(items: MenuItem[], isLoggedIn: boolean, roles: string[]): MenuItem[];
    static ɵfac: i0.ɵɵFactoryDef<MenuAccessPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<MenuAccessPipe, "wsMenuAccesssFilter">;
}

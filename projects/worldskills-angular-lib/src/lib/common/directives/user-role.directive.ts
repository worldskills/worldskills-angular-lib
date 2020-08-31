import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserRoleUtil} from '../util/user-role.util';
import {User} from '../../auth/models/user';
import {AuthService} from '../../auth/auth.service';

@Directive({
    selector: '[wsUserRole]',
})
export class UserRoleDirective implements OnInit {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,
        private authService: AuthService,
    ) {
    }

    @Input() wsUserRole: string | Array<string> = [];
    @Input() wsUserRoleUser: User | true = true;
    @Input() wsUserRoleAll = false;
    @Input() wsUserRoleEntity: number | { id: number };
    @Input() wsUserRoleAppId: number;
    @Input() wsUserRoleNegate = false;

    ngOnInit(): void {
        if (this.wsUserRoleUser === true) {
            this.authService.currentUser.subscribe(user => this.renderIfValid(user));
        } else {
            this.renderIfValid(this.wsUserRoleUser);
        }
    }

    private renderIfValid(user: User): void {
        let valid = true;
        const roles = typeof this.wsUserRole === 'string' ? [this.wsUserRole] : this.wsUserRole;
        const all = this.wsUserRoleAll;
        const entityId = typeof this.wsUserRoleEntity === 'object' ? this.wsUserRoleEntity.id : this.wsUserRoleEntity;
        const appId = this.wsUserRoleAppId;

        if (user) {
            if (appId) {
                if (all) {
                    if (entityId) {
                        valid = UserRoleUtil.userHasAllRolesOfEntity(user, appId, entityId, ...roles);
                    } else {
                        valid = UserRoleUtil.userHasAllRoles(user, appId, ...roles);
                    }
                } else {
                    if (entityId) {
                        valid = UserRoleUtil.userHasRolesOfEntity(user, appId, entityId, ...roles);
                    } else {
                        valid = UserRoleUtil.userHasRoles(user, appId, ...roles);
                    }
                }
            } else {
                if (all) {
                    if (entityId) {
                        valid = UserRoleUtil.userHasAllRolesOfEntityOfAnyApp(user, entityId, ...roles);
                    } else {
                        valid = UserRoleUtil.userHasAllRolesOfAnyApp(user, ...roles);
                    }
                } else {
                    if (entityId) {
                        valid = UserRoleUtil.userHasRolesOfEntityOfAnyApp(user, entityId, ...roles);
                    } else {
                        valid = UserRoleUtil.userHasRolesOfAnyApp(user, ...roles);
                    }
                }
            }
        } else {
            valid = false;
        }

        if (this.wsUserRoleNegate) {
            valid = !valid;
        }

        if (valid) {
            this.viewContainerRef.clear();
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }

}

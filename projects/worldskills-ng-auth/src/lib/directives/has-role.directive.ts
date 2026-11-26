import { computed, Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgAuthService } from '../services/ng-auth.service';
import { hasRoles } from '../util/role.util';

/**
 * Renders its content only when the current user has the given roles.
 * Replaces `*wsUserRole` from worldskills-angular-lib.
 *
 * ```html
 * <button *wsHasRole="['Admin', 'EditMember']; appCode: 800">Add</button>
 * <button *wsHasRole="'EditMember'; appCode: 800; entity: member.id">Edit</button>
 * <span *wsHasRole="'Admin'; appCode: 800; negate: true">Read only</span>
 * ```
 */
@Directive({
  selector: '[wsHasRole]',
  standalone: true,
})
export class HasRoleDirective {
  private templateRef = inject(TemplateRef<unknown>);
  private viewContainerRef = inject(ViewContainerRef);
  private currentUser = toSignal(inject(NgAuthService).currentUser$);

  /** Role name or names. By default the user needs any one of them. */
  readonly wsHasRole = input.required<string | string[]>();
  /** Only consider roles of this application. */
  readonly wsHasRoleAppCode = input<number>();
  /** Only consider roles that apply to this entity. */
  readonly wsHasRoleEntity = input<number | { id: number }>();
  /** Require all roles instead of any. */
  readonly wsHasRoleAll = input(false);
  /** Render when the user does NOT have the roles. */
  readonly wsHasRoleNegate = input(false);

  private readonly allowed = computed(() => {
    const valid = hasRoles(this.currentUser(), {
      roles: this.wsHasRole(),
      appCode: this.wsHasRoleAppCode(),
      entityId: this.wsHasRoleEntity(),
      all: this.wsHasRoleAll(),
    });
    return this.wsHasRoleNegate() ? !valid : valid;
  });

  private rendered = false;

  constructor() {
    effect(() => {
      const allowed = this.allowed();
      if (allowed && !this.rendered) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.rendered = true;
      } else if (!allowed && this.rendered) {
        this.viewContainerRef.clear();
        this.rendered = false;
      }
    });
  }
}

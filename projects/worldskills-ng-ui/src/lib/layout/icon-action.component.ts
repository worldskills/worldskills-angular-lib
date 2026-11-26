import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

export type WsIconAction = 'edit' | 'delete' | 'end' | 'repair' | 'restore';

/** Icon, colour and default text per action. */
const ACTIONS: Record<WsIconAction, { icon: string; severity: 'secondary' | 'danger' | 'warn'; label: string }> = {
  edit: { icon: 'pi pi-pencil', severity: 'secondary', label: 'ws_ui.actions.edit' },
  delete: { icon: 'pi pi-trash', severity: 'danger', label: 'ws_ui.actions.delete' },
  end: { icon: 'pi pi-stop-circle', severity: 'danger', label: 'ws_ui.actions.end' },
  repair: { icon: 'pi pi-wrench', severity: 'warn', label: 'ws_ui.actions.repair' },
  restore: { icon: 'pi pi-replay', severity: 'secondary', label: 'ws_ui.actions.restore' },
};

/**
 * A small icon-only row action (edit, delete, end…). Its text is both the accessible name and
 * a tooltip, so every icon button explains itself. Name the item for screen readers:
 *
 *   <ws-ng-ui-icon-action action="delete" [label]="'Delete ' + contact.name" (clicked)="remove(contact)" />
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-icon-action',
  standalone: true,
  imports: [ButtonModule, TooltipModule, TranslatePipe],
  template: `
    @let text = label() || (config().label | translate);
    <p-button
      [icon]="config().icon"
      size="small"
      [severity]="config().severity"
      [text]="true"
      [ariaLabel]="text"
      [pTooltip]="text"
      tooltipPosition="top"
      [disabled]="disabled()"
      (onClick)="clicked.emit()" />
  `,
})
export class WsIconActionComponent {

  /** Which action: sets the icon, colour and default text. */
  action = input.required<WsIconAction>();

  /** Tooltip and screen-reader text. Defaults to the action's translated name ("Edit", "Delete"…). */
  label = input('');

  disabled = input(false);

  clicked = output<void>();

  protected readonly config = computed(() => ACTIONS[this.action()]);
}

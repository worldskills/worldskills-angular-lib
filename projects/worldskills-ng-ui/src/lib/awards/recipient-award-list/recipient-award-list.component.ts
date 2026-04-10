import { Component, computed, inject, input, output, signal , ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PersonAward } from '../models/person-award';
import { MemberAward } from '../models/member-award';
import { OrganizationAward } from '../models/organization-award';
import { RecipientAwardRequest } from '../recipient-award-form/recipient-award-form.component';
import { RecipientAwardFormComponent } from '../recipient-award-form/recipient-award-form.component';
import { WsConfirmService } from '../../dialog/confirm.service';

type RecipientAward = PersonAward | MemberAward | OrganizationAward;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-recipient-award-list',
  standalone: true,
  imports: [
    DatePipe,
    TranslatePipe,
    ButtonModule,
    TableModule,
    DialogModule,
    RecipientAwardFormComponent,
  ],
  providers: [DatePipe],
  templateUrl: './recipient-award-list.component.html',
})
export class RecipientAwardListComponent {

  // ── Inputs ────────────────────────────────────────────────────────────────

  recipientAwards = input<RecipientAward[]>([]);
  canCreate = input(false);
  canUpdate = input(false);
  canDelete = input(false);
  certificateEnabled = input(false);

  // ── Outputs ───────────────────────────────────────────────────────────────

  create = output<RecipientAwardRequest>();
  update = output<RecipientAwardRequest>();
  delete = output<RecipientAwardRequest>();

  // ── State ─────────────────────────────────────────────────────────────────

  dialogVisible = signal(false);
  selectedAward = signal<RecipientAward | null>(null);
  isEditMode = signal(false);

  dialogTitle = computed(() => {
    const key = this.isEditMode() ? 'ws_ui.awards.edit_award' : 'ws_ui.awards.add_new_award';
    return this.translate.instant(key);
  });

  private confirmService = inject(WsConfirmService);
  private translate = inject(TranslateService);

  openCreateDialog(): void {
    this.selectedAward.set(null);
    this.isEditMode.set(false);
    this.dialogVisible.set(true);
  }

  openEditDialog(award: RecipientAward): void {
    this.selectedAward.set(award);
    this.isEditMode.set(true);
    this.dialogVisible.set(true);
  }

  closeDialog(): void {
    this.dialogVisible.set(false);
    this.selectedAward.set(null);
  }

  onFormSave(request: RecipientAwardRequest): void {
    if (this.isEditMode()) {
      this.update.emit(request);
    } else {
      this.create.emit(request);
    }
    this.closeDialog();
  }

  onFormCancel(): void {
    this.closeDialog();
  }

  async onDelete(award: RecipientAward): Promise<void> {
    const confirmed = await this.confirmService.danger({
      message: this.translate.instant('ws_ui.awards.delete_confirm'),
    });
    if (!confirmed) return;

    const request: RecipientAwardRequest = {
      id: award.id,
      award: award.award,
      presented_at: award.presented_at,
      extra_information: award.extra_information,
      public_extra_information: (award as PersonAward).public_extra_information,
      certificates: award.certificates,
    };
    this.delete.emit(request);
  }
}

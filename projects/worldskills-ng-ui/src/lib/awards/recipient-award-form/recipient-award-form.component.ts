import { Component, effect, inject, input, output, signal , ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { Award } from '../models/award';
import { RecipientAwardCertificate } from '../models/recipient-award-certificate';
import { PersonAward } from '../models/person-award';
import { MemberAward } from '../models/member-award';
import { OrganizationAward } from '../models/organization-award';
import { AwardService } from '../award.service';
import { RecipientAwardCertificateFormComponent } from '../recipient-award-certificate-form/recipient-award-certificate-form.component';

export interface RecipientAwardRequest {
  id: number;
  award: Award;
  presented_at: number;
  extra_information?: string;
  public_extra_information?: string;
  certificates?: RecipientAwardCertificate[];
}

type RecipientAward = PersonAward | MemberAward | OrganizationAward;

interface AwardGroup {
  label: string;
  items: Award[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-recipient-award-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslatePipe,
    ButtonModule,
    SelectModule,
    InputTextModule,
    TextareaModule,
    RecipientAwardCertificateFormComponent,
  ],
  templateUrl: './recipient-award-form.component.html',
})
export class RecipientAwardFormComponent {

  // ── Inputs ────────────────────────────────────────────────────────────────

  recipientAward = input<RecipientAward | null>(null);
  certificateEnabled = input(false);
  certificates = input<RecipientAwardCertificate[]>([]);

  // ── Outputs ───────────────────────────────────────────────────────────────

  save = output<RecipientAwardRequest>();
  cancel = output<void>();

  // ── State ─────────────────────────────────────────────────────────────────

  awardGroups = signal<AwardGroup[]>([]);
  localCertificates = signal<RecipientAwardCertificate[]>([]);

  form = new FormGroup({
    award: new FormControl<Award | null>(null),
    presented_at: new FormControl<number | null>(null),
    extra_information: new FormControl<string>(''),
    public_extra_information: new FormControl<string>(''),
  });

  private awardService = inject(AwardService);

  constructor() {
    // Load award list once on init
    this.awardService.getList().pipe(takeUntilDestroyed()).subscribe({
      next: (container) => {
        const grouped = new Map<string, Award[]>();
        for (const award of container.awards) {
          const entityName = award.entity?.name?.text ?? '';
          if (!grouped.has(entityName)) grouped.set(entityName, []);
          grouped.get(entityName)!.push(award);
        }
        this.awardGroups.set(
          Array.from(grouped.entries()).map(([label, items]) => ({ label, items }))
        );
      },
    });

    // Re-initialise form and certificates whenever inputs change
    effect(() => {
      const award = this.recipientAward();
      const certs = this.certificates();
      if (!award) {
        this.form.reset();
        this.localCertificates.set([...certs]);
        return;
      }
      this.form.setValue({
        award: award.award ?? null,
        presented_at: award.presented_at ?? null,
        extra_information: award.extra_information ?? '',
        public_extra_information: (award as PersonAward).public_extra_information ?? '',
      });
      this.localCertificates.set([...(award.certificates ?? [])]);
    });
  }

  onCertificatesChange(certs: RecipientAwardCertificate[]): void {
    this.localCertificates.set(certs);
  }

  onSave(): void {
    if (!this.form.value.award) return;
    const request: RecipientAwardRequest = {
      id: this.recipientAward()?.id ?? 0,
      award: this.form.value.award,
      presented_at: this.form.value.presented_at ?? new Date().getFullYear(),
      extra_information: this.form.value.extra_information ?? undefined,
      public_extra_information: this.form.value.public_extra_information ?? undefined,
      certificates: this.certificateEnabled() ? this.localCertificates() : undefined,
    };
    this.save.emit(request);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}

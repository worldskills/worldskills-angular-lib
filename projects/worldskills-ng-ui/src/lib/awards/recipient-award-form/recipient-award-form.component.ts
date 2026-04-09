import { Component, Input, Output, EventEmitter, OnInit, OnChanges, inject, computed, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
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
export class RecipientAwardFormComponent implements OnInit, OnChanges {
  @Input() recipientAward: RecipientAward | null = null;
  @Input() certificateEnabled = false;
  @Input() certificates: RecipientAwardCertificate[] = [];

  @Output() save = new EventEmitter<RecipientAwardRequest>();
  @Output() cancel = new EventEmitter<void>();

  private awardService = inject(AwardService);
  private translate = inject(TranslateService);

  awardGroups: AwardGroup[] = [];
  localCertificates: RecipientAwardCertificate[] = [];

  form = new FormGroup({
    award: new FormControl<Award | null>(null),
    presented_at: new FormControl<number | null>(null),
    extra_information: new FormControl<string>(''),
    public_extra_information: new FormControl<string>(''),
  });

  ngOnInit(): void {
    this.loadAwards();
    this.initForm();
  }

  ngOnChanges(): void {
    this.initForm();
    this.localCertificates = [...(this.certificates ?? [])];
  }

  private loadAwards(): void {
    this.awardService.getList().subscribe({
      next: (container) => {
        const grouped = new Map<string, Award[]>();
        for (const award of container.awards) {
          const entityName = award.entity?.name?.text ?? '';
          if (!grouped.has(entityName)) grouped.set(entityName, []);
          grouped.get(entityName)!.push(award);
        }
        this.awardGroups = Array.from(grouped.entries()).map(([label, items]) => ({ label, items }));
      },
    });
  }

  private initForm(): void {
    if (!this.recipientAward) {
      this.form.reset();
      return;
    }
    this.form.setValue({
      award: this.recipientAward.award ?? null,
      presented_at: this.recipientAward.presented_at ?? null,
      extra_information: this.recipientAward.extra_information ?? '',
      public_extra_information: (this.recipientAward as PersonAward).public_extra_information ?? '',
    });
    this.localCertificates = [...(this.recipientAward.certificates ?? [])];
  }

  onCertificatesChange(certs: RecipientAwardCertificate[]): void {
    this.localCertificates = certs;
  }

  onSave(): void {
    if (!this.form.value.award) return;
    const request: RecipientAwardRequest = {
      id: this.recipientAward?.id ?? 0,
      award: this.form.value.award,
      presented_at: this.form.value.presented_at ?? new Date().getFullYear(),
      extra_information: this.form.value.extra_information ?? undefined,
      public_extra_information: this.form.value.public_extra_information ?? undefined,
      certificates: this.certificateEnabled ? this.localCertificates : undefined,
    };
    this.save.emit(request);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}

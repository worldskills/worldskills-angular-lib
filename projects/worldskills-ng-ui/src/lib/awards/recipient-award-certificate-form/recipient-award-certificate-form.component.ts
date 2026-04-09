import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { RecipientAwardCertificate, RecipientAwardCertificateType } from '../models/recipient-award-certificate';

@Component({
  selector: 'ws-ng-ui-recipient-award-certificate-form',
  standalone: true,
  imports: [FormsModule, TranslatePipe, ButtonModule, InputTextModule, SelectModule],
  templateUrl: './recipient-award-certificate-form.component.html',
})
export class RecipientAwardCertificateFormComponent {
  @Input() certificates: RecipientAwardCertificate[] = [];
  @Output() certificatesChange = new EventEmitter<RecipientAwardCertificate[]>();

  readonly certificateTypeOptions = [
    { label: 'Digital', value: RecipientAwardCertificateType.DIGITAL },
    { label: 'Print', value: RecipientAwardCertificateType.PRINT },
  ];

  addCertificate(): void {
    const updated = [
      ...this.certificates,
      {
        certificate_unique_id: crypto.randomUUID(),
        certificate_dropbox_path: '',
        certificate_type: RecipientAwardCertificateType.DIGITAL,
      },
    ];
    this.certificatesChange.emit(updated);
  }

  removeCertificate(index: number): void {
    const updated = this.certificates.filter((_, i) => i !== index);
    this.certificatesChange.emit(updated);
  }

  generateId(index: number): void {
    const updated = this.certificates.map((cert, i) =>
      i === index ? { ...cert, certificate_unique_id: crypto.randomUUID() } : cert
    );
    this.certificatesChange.emit(updated);
  }

  updateField(index: number, field: keyof RecipientAwardCertificate, value: string): void {
    const updated = this.certificates.map((cert, i) =>
      i === index ? { ...cert, [field]: value } : cert
    );
    this.certificatesChange.emit(updated);
  }
}

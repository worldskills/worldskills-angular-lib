import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
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

  certificates = model<RecipientAwardCertificate[]>([]);

  private translate = inject(TranslateService);

  get certificateTypeOptions() {
    return [
      { label: this.translate.instant('ws_ui.awards.certificate_type_digital'), value: RecipientAwardCertificateType.DIGITAL },
      { label: this.translate.instant('ws_ui.awards.certificate_type_print'), value: RecipientAwardCertificateType.PRINT },
    ];
  }

  addCertificate(): void {
    this.certificates.set([
      ...this.certificates(),
      {
        certificate_unique_id: crypto.randomUUID(),
        certificate_dropbox_path: '',
        certificate_type: RecipientAwardCertificateType.DIGITAL,
      },
    ]);
  }

  removeCertificate(index: number): void {
    this.certificates.set(this.certificates().filter((_, i) => i !== index));
  }

  generateId(index: number): void {
    this.certificates.set(
      this.certificates().map((cert, i) =>
        i === index ? { ...cert, certificate_unique_id: crypto.randomUUID() } : cert
      )
    );
  }

  updateField(index: number, field: keyof RecipientAwardCertificate, value: string): void {
    this.certificates.set(
      this.certificates().map((cert, i) =>
        i === index ? { ...cert, [field]: value } : cert
      )
    );
  }
}

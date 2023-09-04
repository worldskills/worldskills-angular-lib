export enum RecipientAwardCertificateType {
    'DIGITAL' = 'DIGITAL',
    'PRINT' = 'PRINT'
}

export interface RecipientAwardCertificate {
    id?: number;
    certificate_unique_id: string;
    certificate_dropbox_path: string;
    certificate_type?: RecipientAwardCertificateType;
}

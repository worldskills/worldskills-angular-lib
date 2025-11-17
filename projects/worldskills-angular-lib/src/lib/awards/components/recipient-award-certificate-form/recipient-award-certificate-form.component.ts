import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { GenericUtil } from '../../../common/util/generic.util';
import { RecipientAwardCertificate, RecipientAwardCertificateType } from '../../models/recipient-award-certificate';

@Component({
    selector: 'ws-recipient-award-certificate-form',
    templateUrl: './recipient-award-certificate-form.component.html',
    styleUrls: ['./recipient-award-certificate-form.component.css'],
    standalone: false
})
export class RecipientAwardCertificateFormComponent implements OnInit {

    @Output() certificatesEmitter: EventEmitter<RecipientAwardCertificate[]> = new EventEmitter<RecipientAwardCertificate[]>();

    @Input()
    get certificates(): RecipientAwardCertificate[] {
        return this._certificates;
    }

    set certificates(certs: RecipientAwardCertificate[]) {
        if (GenericUtil.isNullOrUndefined(certs)) {
            certs = [];
        }

        this._certificates = [...certs];
    }

    // tslint:disable-next-line:variable-name
    _certificates: RecipientAwardCertificate[];
    certificateTypes = Object.values(RecipientAwardCertificateType);

    constructor() {
    }

    ngOnInit(): void {
    }

    addCert(): void {
        this._certificates.push({
            certificate_unique_id: '',
            certificate_dropbox_path: ''
        });
    }

    generateNewUniqueID(cert: RecipientAwardCertificate): void {
        cert.certificate_unique_id = uuidv4();
    }

    emitValues(): void {
        this.certificatesEmitter.emit(this._certificates);
    }
}

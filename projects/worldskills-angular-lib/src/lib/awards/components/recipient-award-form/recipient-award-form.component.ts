import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Award } from '../../models/award';
import { PersonAward } from '../../models/person-award';
import { MemberAward } from '../../models/member-award';
import { OrganizationAward } from '../../models/organization-award';
import { AwardService } from '../../services/award.service';
import { SelectChangeEvent } from 'worldskills-angular-lib';
import { RecipientAwardCertificate } from '../../models/recipient-award-certificate';

export interface RecipientAwardRequest {
    id: number;
    award: Award;
    presented_at: string;
    extra_information?: string;
    certificates?: RecipientAwardCertificate[];
}

@Component({
    selector: 'ws-recipient-award-form',
    templateUrl: './recipient-award-form.component.html',
    styleUrls: ['./recipient-award-form.component.css']
})
export class RecipientAwardFormComponent implements OnInit {

    @Input() recipientAward: PersonAward | MemberAward | OrganizationAward;
    @Output() save: EventEmitter<RecipientAwardRequest> = new EventEmitter<RecipientAwardRequest>();
    @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
    @ViewChild('form') form: NgForm;
    @Input() certificateEnabled = false;

    awards: Award[];
    selectedAward: Award;

    constructor(private awardService: AwardService) {
    }

    ngOnInit(): void {
        this.loadAwards();
    }

    get awardGroupByRenderer(): (award: Award) => string {
        return (award: Award) => `${award.entity.name.text}`;
    }

    loadAwards(): void {
        this.awardService.getList().subscribe(res => {
            this.awards = res.awards;
        });
    }

    saveRecipientAward(): void {
        if (this.form.valid) {
            const award = this.awards.find(a => a.id === this.form.value.award);
            const rar: RecipientAwardRequest = {
                id: this.recipientAward?.id ?? 0,
                award,
                presented_at: this.form.value.presentedAt,
                extra_information: this.form.value.extraInformation,
                certificates: this.recipientAward.certificates
            };
            this.save.emit(rar);
        }
    }

    awardSelectionChange($event: SelectChangeEvent): void {
        this.selectedAward = $event.item;
    }

    certificatesEmitReceiver(pac: RecipientAwardCertificate[]): void {
        this.recipientAward.certificates = pac;
    }
}

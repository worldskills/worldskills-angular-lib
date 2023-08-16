import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Award } from '../../models/award';
import { PersonAward } from '../../models/person-award';
import { MemberAward } from '../../models/member-award';
import { OrganizationAward } from '../../models/organization-award';
import { AwardService } from '../../services/award.service';

export interface RecipientAwardRequest {
    id: number;
    award: Award;
    presented_at: string;
    extra_information?: string;
}

@Component({
    selector: 'app-recipient-award-form',
    templateUrl: './recipient-award-form.component.html',
    styleUrls: ['./recipient-award-form.component.css']
})
export class RecipientAwardFormComponent implements OnInit {

    @Input() recipientAward: PersonAward | MemberAward | OrganizationAward;
    @Output() save: EventEmitter<RecipientAwardRequest> = new EventEmitter<RecipientAwardRequest>();
    @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
    @ViewChild('form') form: NgForm;

    awards: Award[];

    constructor(private awardService: AwardService) {
    }

    ngOnInit(): void {
        this.loadAwards();
    }

    loadAwards(): void {
        this.awardService.getList().subscribe(res => {
            this.awards = res.awards;
        });
    }

    saveRecipientAward(): void {
        if (this.form.valid) {
            const rar: RecipientAwardRequest = {
                id: this.recipientAward?.id ?? 0,
                award: this.form.value.award,
                presented_at: this.form.value.presentedAt,
                extra_information: this.form.value.extraInformation
            };
            this.save.emit(rar);
        }
    }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipientAwardRequest } from '../recipient-award-form/recipient-award-form.component';
import { MemberAward } from '../../models/member-award';
import { OrganizationAward } from '../../models/organization-award';
import { PersonAward } from '../../models/person-award';


@Component({
    selector: 'ws-recipient-award-list',
    templateUrl: './recipient-award-list.component.html',
    styleUrls: ['./recipient-award-list.component.css']
})
export class RecipientAwardListComponent implements OnInit {

    @Input() canCreate: boolean;
    @Input() canUpdate: boolean;
    @Input() canDelete: boolean;
    @Input() recipientAwards: PersonAward[] | MemberAward[] | OrganizationAward[];
    @Input() certificateEnabled = false;
    @Output() create: EventEmitter<RecipientAwardRequest> = new EventEmitter<RecipientAwardRequest>();
    @Output() update: EventEmitter<RecipientAwardRequest> = new EventEmitter<RecipientAwardRequest>();
    @Output() delete: EventEmitter<RecipientAwardRequest> = new EventEmitter<RecipientAwardRequest>();
    addAward = false;
    editRecipientAward: PersonAward | MemberAward | OrganizationAward;

    constructor() {
    }

    ngOnInit(): void {
    }

    deleteRecipientAward(ra: PersonAward | MemberAward | OrganizationAward): void {
        this.delete.emit(ra);
    }

    saveRecipientAward(ra: RecipientAwardRequest): void {
        if (this.editRecipientAward) {
            this.update.emit(ra);
        } else {
            this.create.emit(ra);
        }
        this.closeModal();
    }

    closeModal(): void {
        this.addAward = false;
        this.editRecipientAward = null;
    }
}

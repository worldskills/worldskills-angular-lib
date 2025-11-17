import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ws-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    standalone: false
})
export class ModalComponent implements OnChanges {

    @Input() open: boolean;
    @Input() options: NgbModalOptions;
    @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
    @ViewChild('content', {static: true}) content: TemplateRef<NgbModalRef>;
    private modalRef: NgbModalRef;

    constructor(private modalService: NgbModal) {
    }

    openModal(): void {
        if (!this.modalRef) {
            this.modalRef = this.modalService.open(this.content, this.options);
            this.modalRef.result.then(() => {
                this.onClose.emit();
                this.modalRef = null;
            }).catch(() => {
                this.onClose.emit();
                this.modalRef = null;
            });
        }
    }

    closeModal(): void {
        if (this.modalRef) {
            this.modalRef.close();
            this.modalRef = null;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('open' in changes) {
            if (changes.open.currentValue) {
                this.openModal();
            } else {
                this.closeModal();
            }
        }
    }

}

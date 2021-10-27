import { NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
export interface ModalItem {
    name: string;
    content: any;
    title: string;
    body: string;
    options?: NgbModalOptions;
    ref?: NgbModalRef;
    lastResult?: any;
    lastReason?: string;
}

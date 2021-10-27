import { Injectable } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalItem } from './modal-item';
import { BehaviorSubject, Subject } from 'rxjs';

/*
  This servicec actts as a wrapper to the NgModal service and provides extended functionality for common modals.
  this can also be extended to include custsom app modals.
*/
@Injectable({
  providedIn: 'root'
})
export class WsiModalService {

  modals: ModalItem[];

  openModals: ModalItem[];

  onModalUpdate: Subject<ModalItem>;

  constructor(public modal: NgbModal) {
    this.onModalUpdate = new Subject();
    this.modals = [];
    this.openModals = [];
  }

  /*
    Update tracking properties on modal close
  */
  private closeModal(item: ModalItem): void {
    const idx = this.openModals.findIndex(x => x.name === item.name);
    if (idx !== -1) {
      this.updateModal(item.name, item); // update last reason or last result
      this.openModals.splice(idx, 1);
    }
  }

  /*
    Listen ffor modal close event
  */
  private listenModal(item: ModalItem): void {
    item.ref.result.then((result) => {
      item.lastResult = result;
      this.closeModal(item);
    }, (reason) => {
      item.lastReason = this.getDismissReason(reason);
      this.closeModal(item);
    });
  }

  /*
    Open a specific registered modal
  */
  open(item: ModalItem): ModalItem {
    item.options = item.options || this.getDefaultOptions();
    item.ref = this.modal.open(item.content, item.options);
    this.updateModal(item.name, item); // update modal ref
    this.listenModal(item); // listen for close event
    return item;
  }

  /*
    Get default modal optioons
  */
  getDefaultOptions(): NgbModalOptions {
    return {
      centered: true
    };
  }

  /*
    Extract modal dismiss reason
  */
  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'BACKDROP';
    } else {
      return reason;
    }
  }

  /*
    Get a registered modal
  */
  getModal(name: string): ModalItem {
    return this.modals.find(x => x.name === name);
  }

  /*
    Update a regitered modal
  */
  updateModal(name: string, item: ModalItem): boolean {
    const idx = this.modals.findIndex(x => x.name === name);
    if (idx === -1) {
      return false;
    }

    this.modals[idx] = item;
    this.onModalUpdate.next(item);
    return true;
  }

  /*
    Determine if a specific modal is open
  */
  isModalOpen(item: ModalItem): boolean {
    return this.openModals.filter(x => x.name === item.name).length > 0;
  }
}

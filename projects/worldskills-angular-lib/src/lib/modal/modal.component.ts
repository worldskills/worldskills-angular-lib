import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'wsi-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() public name: string;
  @Input() public title: string;
  @Input() public showCloseButton: boolean;
  @Input() public showSaveButton: boolean;
  @Input() public closeModalOnSave: boolean;

  @Output() public saveFn: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('closeModal') closeModal: ElementRef;
  constructor() {
    this.showCloseButton = true;
    this.showSaveButton = false;
    this.title = '';
  }

  ngOnInit() {
  }

  save() {
    this.saveFn.emit();
    if (this.closeModalOnSave) {
      this.closeModalClick();
    }
  }

  closeModalClick() {
    const el: HTMLElement = this.closeModal.nativeElement as HTMLElement;
    el.click();
  }

}

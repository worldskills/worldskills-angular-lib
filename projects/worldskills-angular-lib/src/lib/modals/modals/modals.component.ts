import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalItem } from '../modal-item';
import { WsiModalService } from '../wsi-modal.service';
/*
  If required thesse modals caan be exended to include angular template
*/
@Component({
    selector: 'ws-modals',
    templateUrl: './modals.component.html',
    styleUrls: ['./modals.component.css'],
    standalone: false
})
export class ModalsComponent implements OnInit {

  @ViewChild('okmodal') okContent: any;
  okModalItem: ModalItem;

  @ViewChild('okcancelmodal') okCancelContent: any;
  okCancelModalItem: ModalItem;

  @ViewChild('yesmodal') yesContent: any;
  yesModalItem: ModalItem;

  @ViewChild('yesnomodal') yesNoContent: any;
  yesNoModalItem: ModalItem;

  constructor(private service: WsiModalService) { }

  ngOnInit(): void {
  }

  // content is only available after view init
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    // listen for modal updates
    this.okModalItem = {
      name: 'ok',
      content: this.okContent,
      title: '',
      body: ''
    };

    this.okCancelModalItem = {
      name: 'okcancel',
      content: this.okCancelContent,
      title: '',
      body: ''
    };

    this.yesModalItem = {
      name: 'yes',
      content: this.yesContent,
      title: '',
      body: ''
    };

    this.yesNoModalItem = {
      name: 'yesno',
      content: this.yesContent,
      title: '',
      body: ''
    };

    // register Modals
    this.service.modals.push(this.okModalItem, this.okCancelModalItem, this.yesModalItem, this.yesNoModalItem);

    // listen for modal changes
    this.service.onModalUpdate.subscribe(item => {

      if (item) {
        switch(item.name) {
          default:
            break;
          case 'ok':
            this.okModalItem = item;
            break;
          case 'okcancel':
            this.okCancelModalItem = item;
            break;
          case 'yes':
            this.yesModalItem = item;
            break;
          case 'yesno':
            this.yesNoModalItem = item;
            break;
        }
      }
    });
  }

}

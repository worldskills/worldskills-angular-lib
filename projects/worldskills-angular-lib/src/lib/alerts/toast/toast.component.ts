import { Component, OnInit, TemplateRef } from '@angular/core';
import { WsiToastService } from '../wsi-toast.service';

@Component({
    selector: 'ws-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.css'],
    standalone: false
})
export class ToastComponent implements OnInit {

  constructor(public service: WsiToastService) {}

  ngOnInit(): void {
  }

  isTemplate(toast): boolean {
    return toast.textOrTpl instanceof TemplateRef;
  }


}

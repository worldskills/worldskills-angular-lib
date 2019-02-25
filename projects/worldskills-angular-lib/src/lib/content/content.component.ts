import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wsi-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() collapsed: boolean;
  constructor() {
    this.collapsed = false;
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wsi-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  @Input() mode: string;

  constructor() { }

  ngOnInit() {
  }

}

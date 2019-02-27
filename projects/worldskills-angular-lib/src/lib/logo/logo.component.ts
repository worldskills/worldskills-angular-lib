import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ws-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  @Input() mode: string;

  constructor() {
    this.mode = 'default';
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    if (this.mode === '') {
      this.mode = 'default';
    }
  }

}

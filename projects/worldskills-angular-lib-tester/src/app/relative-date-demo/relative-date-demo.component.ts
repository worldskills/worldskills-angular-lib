import { Component, OnInit } from '@angular/core';
import { RelativeDateProc } from '../relative-date-proc';
@Component({
    selector: 'app-relative-date-demo',
    templateUrl: './relative-date-demo.component.html',
    styleUrls: ['./relative-date-demo.component.css'],
    standalone: false
})
export class RelativeDateDemoComponent implements OnInit {

  format = 'HH:mm, d MMM y';
  constructor() { }

  ngOnInit(): void {
  }

  getDate(numDays: number): Date {
    const dt = new Date();
    dt.setDate(dt.getDate() + numDays);
    return dt;
  }

}

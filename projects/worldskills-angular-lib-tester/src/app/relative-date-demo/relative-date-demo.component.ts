import { Component, OnInit } from '@angular/core';
import { RelativeDateProc } from '../relative-date-proc';
@Component({
  selector: 'app-relative-date-demo',
  templateUrl: './relative-date-demo.component.html',
  styleUrls: ['./relative-date-demo.component.css']
})
export class RelativeDateDemoComponent implements OnInit {

  alternateProc: RelativeDateProc;
  constructor() { }

  ngOnInit(): void {
    this.alternateProc = new RelativeDateProc();
  }

  getDate(numDays: number): Date {
    const dt = new Date();
    dt.setDate(dt.getDate() + numDays);
    return dt;
  }

}

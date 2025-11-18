import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-relative-date-demo',
    templateUrl: './relative-date-demo.component.html',
    styleUrls: ['./relative-date-demo.component.css'],
    standalone: false
})
export class RelativeDateDemoComponent implements OnInit {

  dateFormat = 'HH:mm, d MMM y';
  constructor() { }

  ngOnInit(): void {
  }

  getDate(numDays: number): Date {
    const dt = new Date();
    dt.setDate(dt.getDate() + numDays);
    return dt;
  }

}

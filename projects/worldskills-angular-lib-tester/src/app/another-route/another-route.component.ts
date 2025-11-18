import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-another-route',
    templateUrl: './another-route.component.html',
    styleUrls: ['./another-route.component.css'],
    standalone: false
})
export class AnotherRouteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

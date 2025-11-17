import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ws-staging-banner',
    templateUrl: './staging-banner.component.html',
    styleUrls: ['./staging-banner.component.css'],
    standalone: false
})
export class StagingBannerComponent implements OnInit {

  @Input() message: string = 'This is the staging environment. Changes in this environment might get overwritten.';

  constructor() { }

  ngOnInit(): void {
  }

}

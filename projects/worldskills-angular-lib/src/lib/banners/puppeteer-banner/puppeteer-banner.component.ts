import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../auth/models/user';

@Component({
    selector: 'ws-puppeteer-banner',
    templateUrl: './puppeteer-banner.component.html',
    styleUrls: ['./puppeteer-banner.component.css'],
    standalone: false
})
export class PuppeteerBannerComponent implements OnInit {

  @Input() currentUser: User;

  constructor() { }

  ngOnInit(): void {
  }

}

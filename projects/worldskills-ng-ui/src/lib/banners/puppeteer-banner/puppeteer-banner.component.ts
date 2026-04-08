import { Component, Input } from '@angular/core';
import { User } from 'worldskills-ng-auth';

@Component({
  selector: 'ws-ng-ui-puppeteer-banner',
  templateUrl: './puppeteer-banner.component.html',
  styleUrls: ['./puppeteer-banner.component.css'],
  standalone: true,
})
export class PuppeteerBannerComponent {
  @Input() currentUser: User;
}

import { Component, input , ChangeDetectionStrategy } from '@angular/core';
import { User } from '@worldskills/ng-auth';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-puppeteer-banner',
  templateUrl: './puppeteer-banner.component.html',
  styleUrls: ['./puppeteer-banner.component.css'],
  standalone: true,
})
export class PuppeteerBannerComponent {
  currentUser = input<User | null>(null);
}

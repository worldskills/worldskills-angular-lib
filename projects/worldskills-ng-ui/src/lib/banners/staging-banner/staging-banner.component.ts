import { Component, input } from '@angular/core';

@Component({
  selector: 'ws-ng-ui-staging-banner',
  templateUrl: './staging-banner.component.html',
  styleUrls: ['./staging-banner.component.css'],
  standalone: true,
})
export class StagingBannerComponent {
  message = input('This is the staging environment. Changes in this environment might get overwritten.');
}

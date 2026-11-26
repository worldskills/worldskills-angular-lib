import { Component, input , ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-staging-banner',
  templateUrl: './staging-banner.component.html',
  styleUrls: ['./staging-banner.component.css'],
  standalone: true,
})
export class StagingBannerComponent {
  message = input('This is the staging environment. Changes in this environment might get overwritten.');
}

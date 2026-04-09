import { Component, inject, Input, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';
import { ResourceService } from '../resource.service';
import { WsAlertService } from '../../alert/alert.service';
import { ResourceThumbnailComponent, ResourceThumbnail } from '../resource-thumbnail/resource-thumbnail.component';

@Component({
  selector: 'ws-ng-ui-resource-thumbnail-container',
  standalone: true,
  imports: [ButtonModule, ResourceThumbnailComponent],
  providers: [DatePipe],
  templateUrl: './resource-thumbnail-container.component.html',
})
export class ResourceThumbnailContainerComponent implements OnDestroy {
  @Input() title = '';
  @Input() resources: ResourceThumbnail[] = [];

  isZippingFiles = false;

  private resourceService = inject(ResourceService);
  private alertService = inject(WsAlertService);
  private datePipe = inject(DatePipe);
  private sub: Subscription | null = null;

  get downloadableResources(): ResourceThumbnail[] {
    return this.resources.filter(r => !!r.downloadLink);
  }

  get downloadAllLabel(): string {
    return this.isZippingFiles ? 'Zipping...' : 'Download all';
  }

  downloadAll(): void {
    this.isZippingFiles = true;
    this.sub = this.resourceService
      .downloadResources(this.resources.map(r => r.resource_id))
      .subscribe({
        next: (buffer) => {
          this.triggerDownload(buffer);
          this.isZippingFiles = false;
        },
        error: () => {
          this.isZippingFiles = false;
          this.alertService.error('Failed to download resources. Please try again.');
        },
      });
  }

  private triggerDownload(buffer: ArrayBuffer): void {
    const blob = new Blob([buffer], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Resources${this.datePipe.transform(new Date(), 'yyyyMMddHHmmss')}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}

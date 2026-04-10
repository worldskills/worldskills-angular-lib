import { Component, computed, DestroyRef, inject, input, signal , ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ResourceService } from '../resource.service';
import { WsAlertService } from '../../alert/alert.service';
import { ResourceThumbnailComponent, ResourceThumbnail } from '../resource-thumbnail/resource-thumbnail.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-resource-thumbnail-container',
  standalone: true,
  imports: [ButtonModule, TranslatePipe, ResourceThumbnailComponent],
  providers: [DatePipe],
  templateUrl: './resource-thumbnail-container.component.html',
})
export class ResourceThumbnailContainerComponent {

  // ── Inputs ────────────────────────────────────────────────────────────────

  title = input('');
  resources = input<ResourceThumbnail[]>([]);

  // ── State ─────────────────────────────────────────────────────────────────

  isZippingFiles = signal(false);

  downloadableResources = computed(() => this.resources().filter(r => !!r.downloadLink));

  downloadAllLabel = computed(() =>
    this.translate.instant(this.isZippingFiles() ? 'ws_ui.resources.zipping' : 'ws_ui.resources.download_all')
  );

  private resourceService = inject(ResourceService);
  private alertService = inject(WsAlertService);
  private datePipe = inject(DatePipe);
  private translate = inject(TranslateService);
  private destroyRef = inject(DestroyRef);
  private downloadSub?: Subscription;

  downloadAll(): void {
    this.isZippingFiles.set(true);
    this.downloadSub?.unsubscribe();
    this.downloadSub = this.resourceService
      .downloadResources(this.resources().map(r => r.resource_id))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (buffer) => {
          this.triggerDownload(buffer);
          this.isZippingFiles.set(false);
        },
        error: () => {
          this.isZippingFiles.set(false);
          this.alertService.error(this.translate.instant('ws_ui.resources.download_error'));
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
}

import { Component, computed, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '@ngx-translate/core';
import { FileUtil } from '../../common/util/file.util';

export interface ResourceThumbnail {
  resource_id: number;
  filename: string;
  thumbnailLink?: string;
  description?: string;
  fileSize?: number | string;
  downloadLink?: string;
}

@Component({
  selector: 'ws-ng-ui-resource-thumbnail',
  standalone: true,
  imports: [ButtonModule, TranslatePipe],
  templateUrl: './resource-thumbnail.component.html',
})
export class ResourceThumbnailComponent {

  resource = input.required<ResourceThumbnail>();

  thumbnailSrc = computed(() =>
    this.resource().thumbnailLink ?? 'assets/images/default-thumbnail.png'
  );

  fileIcon = computed(() => FileUtil.getFileIcon(this.resource().filename));

  formattedSize = computed(() => {
    const size = this.resource().fileSize;
    if (size === undefined || size === null) return '';
    if (typeof size === 'string') return size;
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  });

  openDownload(): void {
    const link = this.resource().downloadLink;
    if (link) {
      window.open(link, '_blank', 'noopener');
    }
  }
}

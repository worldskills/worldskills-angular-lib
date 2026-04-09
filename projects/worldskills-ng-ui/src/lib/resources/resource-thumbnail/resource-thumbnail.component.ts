import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

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
  imports: [ButtonModule],
  templateUrl: './resource-thumbnail.component.html',
})
export class ResourceThumbnailComponent {
  @Input({ required: true }) resource!: ResourceThumbnail;

  get thumbnailSrc(): string {
    return this.resource.thumbnailLink ?? 'assets/images/default-thumbnail.png';
  }

  get fileIcon(): string {
    const ext = this.resource.filename?.split('.').pop()?.toLowerCase() ?? '';
    switch (ext) {
      case 'pdf': return 'pi pi-file-pdf';
      case 'jpg': case 'jpeg': case 'png': case 'gif': case 'bmp': case 'webp': return 'pi pi-image';
      case 'doc': case 'docx': return 'pi pi-file-word';
      case 'xls': case 'xlsx': return 'pi pi-file-excel';
      case 'zip': case 'rar': case '7z': return 'pi pi-box';
      case 'mp4': case 'mov': case 'avi': return 'pi pi-video';
      default: return 'pi pi-file';
    }
  }

  get formattedSize(): string {
    const size = this.resource.fileSize;
    if (size === undefined || size === null) return '';
    if (typeof size === 'string') return size;
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }

  openDownload(): void {
    if (this.resource.downloadLink) {
      window.open(this.resource.downloadLink, '_blank', 'noopener');
    }
  }
}

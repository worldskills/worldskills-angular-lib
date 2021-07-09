import { Component, Input, OnInit } from '@angular/core';
import { getFilenameExtension } from '../file';

export interface ResourceThumbnail {
    resource_id: number;
    filename: string;
    thumbnailLink?: string;
    description?: string;
    fileSize?: number | string;
    downloadLink?: string;
}

@Component({
    selector: 'ws-resource-thumbnail',
    templateUrl: './resource-thumbnail.component.html',
    styleUrls: ['./resource-thumbnail.component.css']
})
export class ResourceThumbnailComponent implements OnInit {

    showDetailInfo = false;

    constructor() {
    }

    // tslint:disable-next-line:variable-name
    private _resourceThumbnail: ResourceThumbnail;

    get resourceThumbnail(): ResourceThumbnail {
        return this._resourceThumbnail;
    }

    @Input() set resourceThumbnail(view: ResourceThumbnail) {
        this._resourceThumbnail = view;

        if (!this._resourceThumbnail.thumbnailLink) {
            this._resourceThumbnail.thumbnailLink = 'assets/images/default-thumbnail.png';
        }
    }

    ngOnInit(): void {
    }

    isNumber(value): boolean {
        return typeof value === 'number';
    }

    showDownload(): boolean {
        return this._resourceThumbnail && !!this._resourceThumbnail.downloadLink;
    }

    getFileTypeIcon(): string {
        let defaultIcon: string;
        const ext = getFilenameExtension(this._resourceThumbnail.filename).toLowerCase();
        switch (ext) {
            case 'pdf':
                defaultIcon = 'file-pdf-o';
                break;
            case 'jpg':
            case 'png':
            case 'jpeg':
            case 'bmp':
                defaultIcon = 'file-image-o';
                break;
            default:
                defaultIcon = 'file';
                break;
        }
        return `fa-${defaultIcon}`;
    }
}

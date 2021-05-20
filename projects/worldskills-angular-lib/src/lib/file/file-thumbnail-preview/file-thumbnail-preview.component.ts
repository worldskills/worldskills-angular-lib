import { Component, Input, OnInit } from '@angular/core';
import { getFilenameExtension } from '../file';

export interface FileThumbnailView {
    filename: string;
    thumbnailImageLink?: string;
    description?: string;
    fileSize?: number | string;
    downloadLink?: string;
}

@Component({
    selector: 'ws-file-thumbnail-preview',
    templateUrl: './file-thumbnail-preview.component.html',
    styleUrls: ['./file-thumbnail-preview.component.css']
})
export class FileThumbnailPreviewComponent implements OnInit {

    @Input() set fileThumbnailView(view: FileThumbnailView) {
        this._fileThumbnailView = view;

        if (!this._fileThumbnailView.thumbnailImageLink) {
            this._fileThumbnailView.thumbnailImageLink = 'assets/images/default-thumbnail.png';
        }
    }

    get fileThumbnailView(): FileThumbnailView {
        return this._fileThumbnailView;
    }

    showDetailInfo = false;
    // tslint:disable-next-line:variable-name
    private _fileThumbnailView: FileThumbnailView;

    constructor() {
    }

    ngOnInit(): void {
    }

    isNumber(value): boolean {
        return typeof value === 'number';
    }

    getFileTypeIcon(): string {
        let defaultIcon: string;
        const ext = getFilenameExtension(this._fileThumbnailView.filename).toLowerCase();
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

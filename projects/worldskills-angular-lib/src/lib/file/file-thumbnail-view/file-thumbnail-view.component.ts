import { Component, Input, OnInit } from '@angular/core';

export interface FileThumbnailView {
    thumbnailImageLink?: string;
    filename: string;
    fileSize?: number | string;
    downloadLink?: string;
}

@Component({
    selector: 'ws-file-thumbnail-view',
    templateUrl: './file-thumbnail-view.component.html',
    styleUrls: ['./file-thumbnail-view.component.css']
})
export class FileThumbnailViewComponent implements OnInit {

    @Input() set fileThumbnailView(view: FileThumbnailView) {
        this._fileThumbnailView = view;

        if (!this._fileThumbnailView.thumbnailImageLink) {
            this._fileThumbnailView.thumbnailImageLink = 'assets/file.png';
        }
    }

    get fileThumbnailView(): FileThumbnailView {
        return this._fileThumbnailView;
    }

    showDetailInfo = false;
    private _fileThumbnailView: FileThumbnailView;

    constructor() {
        // this.fileThumbnailView = {
        //     fileSize: 1000_000,
        //     downloadLink: '',
        //     filename: 'WSC2019_21599558244800.pdf',
        //     // thumbnailImageLink: 'https://picsum.photos/256/256'
        // }
    }

    ngOnInit(): void {
    }

    isNumber(value): boolean {
        return typeof value === 'number';
    }
}

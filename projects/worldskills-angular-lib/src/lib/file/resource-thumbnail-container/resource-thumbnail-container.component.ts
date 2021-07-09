import { Component, Input, OnInit } from '@angular/core';
import { ResourceThumbnail } from '../resource-thumbnail/resource-thumbnail.component';
import { ResourceService } from '../../resources/resource.service';
import { WSIMediaType } from '../file';
import { DatePipe } from '@angular/common';
import { AlertType } from '../../alerts/alert-type';
import { AlertService } from '../../alerts/alert.service';
import { ErrorUtil } from '../../common/util/error-util';
import { WsComponent } from '../../common/components/ws.component';

@Component({
    selector: 'ws-resource-thumbnail-container',
    templateUrl: './resource-thumbnail-container.component.html',
    styleUrls: ['./resource-thumbnail-container.component.css']
})
export class ResourceThumbnailContainerComponent extends WsComponent implements OnInit {

    @Input() title: string;
    @Input() resourceThumbnailList: ResourceThumbnail[];

    isZippingFiles = false;

    constructor(private resourceService: ResourceService, private datePipe: DatePipe, private alertService: AlertService) {
        super();
    }

    get getDownloadAllBtnText(): string {
        return this.isZippingFiles ? 'Zipping files...' : 'Download all';
    }

    ngOnInit(): void {
        this.resourceService.get(13229).subscribe(res => {
            console.log(res);
        });
    }

    showDownloadAll(): boolean {
        return this.resourceThumbnailList && this.resourceThumbnailList.filter(r => !!r.downloadLink).length > 0;
    }

    downloadAllResourcesAsZipFile(): void {
        this.isZippingFiles = true;
        this.resourceService.downloadResources(this.resourceThumbnailList.map(rt => rt.resource_id)).subscribe(res => {
            this.createDownloadLink(res);
            this.isZippingFiles = false;
        }, error => {
            this.isZippingFiles = false;
            this.alertService.setAlert('new-alert', AlertType.error, null, ErrorUtil.arrayBufferToJSON(error).user_msg, true);
        });
    }

    private createDownloadLink(res): void {
        const blob: any = new Blob([res], {type: WSIMediaType.ZIP});
        const url = window.URL.createObjectURL(blob);

        const downloadLink = document.createElement('a');
        downloadLink.href = url;

        const now = new Date();
        const date = this.datePipe.transform(now, 'yyyyMMddHHmmss');
        downloadLink.setAttribute('download', `Resources${date}.zip`);
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }

}

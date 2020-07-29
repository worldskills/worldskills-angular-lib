import { OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { Alert } from '../alert';
import * as i0 from "@angular/core";
export declare class AlertComponent implements OnInit {
    alertService: AlertService;
    alert: Alert;
    constructor(alertService: AlertService);
    ngOnInit(): void;
    ngOnChanges(): void;
    hasMessage(): boolean;
    hasTitle(): boolean;
    canClose(): boolean;
    dismiss(): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertComponent, "ws-alert", never, { "alert": "alert"; }, {}, never, never>;
}

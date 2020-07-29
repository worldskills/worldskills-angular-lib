import { OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import * as i0 from "@angular/core";
export declare class AlertsComponent implements OnInit {
    alertService: AlertService;
    constructor(alertService: AlertService);
    ngOnInit(): void;
    get hasAlerts(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<AlertsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertsComponent, "ws-alerts", never, {}, {}, never, never>;
}

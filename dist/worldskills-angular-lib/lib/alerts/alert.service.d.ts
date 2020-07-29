import { Alert } from './alert';
import { AlertType } from './alert-type';
import * as i0 from "@angular/core";
export declare class AlertService {
    alerts: Alert[];
    constructor();
    remove(id: string): void;
    setAlert(id: string, type: AlertType, title?: string, message?: string, closable?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AlertService>;
}

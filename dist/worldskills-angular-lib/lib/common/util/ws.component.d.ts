import { Subscription, TeardownLogic } from 'rxjs';
import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare abstract class WsComponent implements OnDestroy {
    protected subscriptions: Subscription;
    constructor();
    ngOnDestroy(): void;
    protected subscribe(...teardowns: Array<TeardownLogic>): void;
    static ɵfac: i0.ɵɵFactoryDef<WsComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<WsComponent, never, never, {}, {}, never>;
}

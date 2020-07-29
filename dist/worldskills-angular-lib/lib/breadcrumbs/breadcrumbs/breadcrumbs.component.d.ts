import { OnInit } from '@angular/core';
import { BreadcrumbsService } from '../breadcrumbs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '../breadcrumb';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class BreadcrumbsComponent implements OnInit {
    service: BreadcrumbsService;
    private router;
    private route;
    showHomeItem: boolean;
    homeItemRoute: string;
    homeItemText: string;
    replacementSubscription: Subscription;
    rebuildSubscription: Subscription;
    breadcrumbs: Breadcrumb[];
    isAtHome: boolean;
    constructor(service: BreadcrumbsService, router: Router, route: ActivatedRoute);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<BreadcrumbsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BreadcrumbsComponent, "ws-breadcrumbs", never, { "showHomeItem": "showHomeItem"; "homeItemRoute": "homeItemRoute"; "homeItemText": "homeItemText"; }, {}, never, never>;
}

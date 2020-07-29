import { KeyValue } from '@angular/common';
import { Breadcrumb } from './breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class BreadcrumbsService {
    protected breadcrumbs: Breadcrumb[];
    breadcrumbsSubject: BehaviorSubject<Breadcrumb[]>;
    homeItemRoute: string;
    isAtHome: boolean;
    targetOutlet: string;
    replacements: KeyValue<string, string>[];
    constructor();
    build(route: ActivatedRoute, url?: string): void;
    createOrUpdateReplacement(key: string, value: string): number;
    replaceLabel(key: string, value: string): void;
    remove(key: string): void;
    add(breadcrumb: Breadcrumb): void;
    static ɵfac: i0.ɵɵFactoryDef<BreadcrumbsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<BreadcrumbsService>;
}

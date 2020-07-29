import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { DropdownPosition, NgSelectComponent } from '@ng-select/ng-select';
import { ControlValueAccessor } from '@angular/forms';
import { EntityTreeService } from '../entity-tree.service';
import { EntityFetchParams } from '../models/entity-tree-fetch-params';
import { EntityTreeSelectLabels } from '../models/entity-tree-select-labels';
import { EntityTreeSelectControls } from '../models/entity-tree-select-controls';
import { TreeEntity } from '../types/tree-entity';
import * as i0 from "@angular/core";
export declare class EntityTreeSelectComponent implements OnInit, OnDestroy, OnChanges, ControlValueAccessor {
    private entityTreeService;
    /** labels for ng-select */
    labels: EntityTreeSelectLabels;
    /** control templates for the toolbar buttons */
    controls: EntityTreeSelectControls;
    /** query parameters to scope the available entities */
    query: Omit<EntityFetchParams, 'limit' | 'offset' | 'depth'>;
    /** entities input array */
    entities: Array<any>;
    /** always make children selectable of passed entities */
    selectableChildren: boolean;
    /** show unselectable parents */
    showUnselectableParents: boolean;
    /** whether or not to show the full path for selected entities */
    showFullPath: boolean;
    /** whether or not to show the header controls */
    showControls: boolean;
    /** whether to use api caching or not, caching is done per query request object, see EntityTreeService for more details */
    cache: boolean;
    /** if the tree is expanded by default */
    defaultExpand: boolean;
    private expandedSearch;
    private flattenedEntities;
    private flattenedTreeEntities;
    private lastTerm;
    private lastSearch;
    private refreshing;
    private update;
    private htmlId;
    private fetchedTreeEntities;
    private cachedWriteValueSubject;
    private treeEntitiesSubject;
    private writeValueSubscription;
    hasFocus: boolean;
    loading: boolean;
    treeEntities: Array<TreeEntity>;
    expanded: Array<number>;
    /** ng-select input */
    appendTo: any;
    /** ng-select input */
    closeOnSelect: boolean;
    /** ng-select input */
    clearable: boolean;
    /** ng-select input */
    clearOnBackspace: boolean;
    /** ng-select input */
    dropdownPosition: DropdownPosition;
    /** ng-select input */
    markFirst: boolean;
    /** ng-select input */
    isOpen: boolean;
    /** ng-select input */
    maxSelectedItems: number;
    /** ng-select input */
    hideSelected: boolean;
    /** ng-select input */
    multiple: boolean;
    /** ng-select input */
    searchable: boolean;
    /** ng-select input */
    readonly: boolean;
    /** ng-select input */
    searchWhileComposing: boolean;
    /** ng-select input */
    selectOnTab: boolean;
    /** ng-select input */
    openOnEnter: boolean;
    /** ng-select input */
    virtualScroll: boolean;
    /** ng-select input */
    inputAttrs: {
        [key: string]: string;
    };
    /** ng-select input */
    tabIndex: number;
    /** ng-select output */
    blur: EventEmitter<any>;
    /** ng-select output */
    focus: EventEmitter<any>;
    /** ng-select output */
    change: EventEmitter<any>;
    /** ng-select output */
    open: EventEmitter<any>;
    /** ng-select output */
    close: EventEmitter<any>;
    /** ng-select output */
    search: EventEmitter<{
        term: string;
        items: TreeEntity[];
    }>;
    /** ng-select output */
    clear: EventEmitter<any>;
    /** ng-select output */
    add: EventEmitter<any>;
    /** ng-select output */
    remove: EventEmitter<any>;
    /** ng-select output */
    scroll: EventEmitter<{
        start: number;
        end: number;
    }>;
    /** ng-select output */
    scrollToEnd: EventEmitter<any>;
    ngSelectComponent: NgSelectComponent;
    wrapperControl: TemplateRef<{
        $implicit: TemplateRef<void>;
    }>;
    expandControl: TemplateRef<{
        enabled: boolean;
        click: () => void;
    }>;
    expandAllControl: TemplateRef<{
        click: () => void;
    }>;
    collapseControl: TemplateRef<{
        enabled: boolean;
        click: () => void;
    }>;
    collapseAllControl: TemplateRef<{
        click: () => void;
    }>;
    separatorControl: TemplateRef<void>;
    showingControl: TemplateRef<{
        showing: number;
        total: number;
    }>;
    /** compare function for ng-select */
    compareWith: (a: any, b: any) => boolean;
    /** the id callback function for the Input entities */
    entityIdCallback: (entity: any) => number;
    constructor(entityTreeService: EntityTreeService);
    get currentMarkedEntity(): TreeEntity;
    get filtered(): number;
    get total(): number;
    get queryParams(): EntityFetchParams;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    private createTreeEntities;
    private deepCopyEntity;
    ngOnDestroy(): void;
    isDomIdentifier(name: string): boolean;
    getDomIdentifier(name: string): string;
    stripDomIdentifier(name: string): string;
    private flatten;
    private setParentsForEntities;
    private setPathNamesAndTypes;
    private setSelectable;
    private setSelectableForChildren;
    private clearSafeChildren;
    private clearUnselectableTrees;
    private clearUnselectableTree;
    private flattenUnselectableParents;
    isExpandable(entity: TreeEntity): boolean;
    expandFn(entity: TreeEntity): any;
    expand(entity: TreeEntity): void;
    expandAllFn(): any;
    expandAll(entities: Array<TreeEntity>, update?: boolean): void;
    expandArray(entities: Array<TreeEntity>): void;
    expandTree(entity: TreeEntity): void;
    expandTrees(entities: Array<TreeEntity>): void;
    collapseFn(entity: TreeEntity): any;
    collapse(entity: TreeEntity): void;
    collapseAllFn(): any;
    collapseAll(entities: Array<TreeEntity>, update?: boolean): void;
    toggleExpanded(entity: TreeEntity): void;
    toggleExpandedById(id: number): void;
    isTreeExpanded(entity: TreeEntity): boolean;
    isExpanded(entity: TreeEntity): boolean;
    isCollapsed(entity: TreeEntity): boolean;
    isVisible(entity: TreeEntity): boolean;
    trackByFn(entity: TreeEntity): any;
    onClear(event: any): void;
    onOpen(event: any): void;
    onSearch(event: {
        term: string;
        items: TreeEntity[];
    }): void;
    searchFn(term: string, entity: TreeEntity): boolean;
    private entityContainsSearchTerm;
    private childrenContainSearchTerm;
    onChange(entity: TreeEntity | Array<TreeEntity>): void;
    onClick(event: Event): void;
    onKeyDown(event: KeyboardEvent): void;
    private getFiltered;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(obj: any): void;
    toId(obj: any): any;
    toTreeEntity(obj: any): any;
    toEntity(obj: any): any;
    static ɵfac: i0.ɵɵFactoryDef<EntityTreeSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EntityTreeSelectComponent, "ws-entity-tree-select", never, { "labels": "labels"; "controls": "controls"; "query": "query"; "entities": "entities"; "selectableChildren": "selectableChildren"; "showUnselectableParents": "showUnselectableParents"; "showFullPath": "showFullPath"; "showControls": "showControls"; "cache": "cache"; "defaultExpand": "defaultExpand"; "appendTo": "appendTo"; "closeOnSelect": "closeOnSelect"; "clearable": "clearable"; "clearOnBackspace": "clearOnBackspace"; "dropdownPosition": "dropdownPosition"; "markFirst": "markFirst"; "isOpen": "isOpen"; "maxSelectedItems": "maxSelectedItems"; "hideSelected": "hideSelected"; "multiple": "multiple"; "searchable": "searchable"; "readonly": "readonly"; "searchWhileComposing": "searchWhileComposing"; "selectOnTab": "selectOnTab"; "openOnEnter": "openOnEnter"; "virtualScroll": "virtualScroll"; "inputAttrs": "inputAttrs"; "tabIndex": "tabIndex"; "compareWith": "compareWith"; "entityIdCallback": "entityIdCallback"; }, { "blur": "blur"; "focus": "focus"; "change": "change"; "open": "open"; "close": "close"; "search": "search"; "clear": "clear"; "add": "add"; "remove": "remove"; "scroll": "scroll"; "scrollToEnd": "scrollToEnd"; }, never, never>;
}

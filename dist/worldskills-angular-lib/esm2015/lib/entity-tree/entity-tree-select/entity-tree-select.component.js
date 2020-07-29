"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityTreeSelectComponent = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const uuid_1 = require("uuid");
const forms_1 = require("@angular/forms");
const default_labels_1 = require("../consts/default-labels");
const i0 = require("@angular/core");
const i1 = require("../entity-tree.service");
const i2 = require("@ng-select/ng-select");
const i3 = require("@angular/common");
const _c0 = ["ngSelectComponent"];
const _c1 = ["wrapperControl"];
const _c2 = ["expandControl"];
const _c3 = ["expandAllControl"];
const _c4 = ["collapseControl"];
const _c5 = ["collapseAllControl"];
const _c6 = ["separatorControl"];
const _c7 = ["showingControl"];
function EntityTreeSelectComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const template_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r20);
} }
function EntityTreeSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r25); const click_r23 = ctx.click; $event.preventDefault(); return click_r23(); });
    i0.ɵɵtext(1, "Expand");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const enabled_r22 = ctx.enabled;
    i0.ɵɵproperty("disabled", !enabled_r22);
} }
function EntityTreeSelectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_4_Template_button_click_0_listener() { const click_r26 = ctx.click; return click_r26(); });
    i0.ɵɵtext(1, "Expand all");
    i0.ɵɵelementEnd();
} }
function EntityTreeSelectComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_6_Template_button_click_0_listener() { const click_r29 = ctx.click; return click_r29(); });
    i0.ɵɵtext(1, "Collapse");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const enabled_r28 = ctx.enabled;
    i0.ɵɵproperty("disabled", !enabled_r28);
} }
function EntityTreeSelectComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r33); const click_r31 = ctx.click; $event.preventDefault(); return click_r31(); });
    i0.ɵɵtext(1, "Collapse all");
    i0.ɵɵelementEnd();
} }
function EntityTreeSelectComponent_ng_template_10_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const showing_r34 = ctx.showing;
    const total_r35 = ctx.total;
    i0.ɵɵtextInterpolate2(" Showing ", showing_r34, " of ", total_r35, "\n");
} }
function EntityTreeSelectComponent_ng_template_14_ng_template_0_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_14_ng_template_1_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_14_ng_template_2_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_14_ng_template_3_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_14_ng_template_4_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_14_ng_template_5_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_14_ng_template_6_Template(rf, ctx) { }
const _c8 = function (a0, a1) { return { enabled: a0, click: a1 }; };
const _c9 = function (a0) { return { click: a0 }; };
function EntityTreeSelectComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, EntityTreeSelectComponent_ng_template_14_ng_template_0_Template, 0, 0, "ng-template", 16);
    i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_14_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵtemplate(2, EntityTreeSelectComponent_ng_template_14_ng_template_2_Template, 0, 0, "ng-template", 16);
    i0.ɵɵtemplate(3, EntityTreeSelectComponent_ng_template_14_ng_template_3_Template, 0, 0, "ng-template", 13);
    i0.ɵɵtemplate(4, EntityTreeSelectComponent_ng_template_14_ng_template_4_Template, 0, 0, "ng-template", 16);
    i0.ɵɵtemplate(5, EntityTreeSelectComponent_ng_template_14_ng_template_5_Template, 0, 0, "ng-template", 13);
    i0.ɵɵtemplate(6, EntityTreeSelectComponent_ng_template_14_ng_template_6_Template, 0, 0, "ng-template", 16);
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.collapse)("ngTemplateOutletContext", i0.ɵɵpureFunction2(11, _c8, ctx_r15.currentMarkedEntity && ctx_r15.isExpandable(ctx_r15.currentMarkedEntity) && ctx_r15.isExpanded(ctx_r15.currentMarkedEntity), ctx_r15.collapseFn(ctx_r15.currentMarkedEntity)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.separator);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.expand)("ngTemplateOutletContext", i0.ɵɵpureFunction2(14, _c8, ctx_r15.currentMarkedEntity && ctx_r15.isExpandable(ctx_r15.currentMarkedEntity) && ctx_r15.isCollapsed(ctx_r15.currentMarkedEntity), ctx_r15.expandFn(ctx_r15.currentMarkedEntity)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.separator);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.collapseAll)("ngTemplateOutletContext", i0.ɵɵpureFunction1(17, _c9, ctx_r15.collapseAllFn()));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.separator);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.expandAll)("ngTemplateOutletContext", i0.ɵɵpureFunction1(19, _c9, ctx_r15.expandAllFn()));
} }
function EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_ng_template_2_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_ng_template_4_Template(rf, ctx) { }
const _c10 = function (a0, a1) { return { showing: a0, total: a1 }; };
const _c11 = function (a0) { return { $implicit: a0 }; };
function EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_ng_template_2_Template, 0, 0, "ng-template", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtemplate(4, EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_ng_template_4_Template, 0, 0, "ng-template", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext(3);
    const _r14 = i0.ɵɵreference(15);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r49.controls.showing)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c10, ctx_r49.filtered, ctx_r49.total));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r49.controls.wrapper)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c11, _r14));
} }
function EntityTreeSelectComponent_ng_template_18_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_Template, 5, 9, "ng-template", 24);
    i0.ɵɵelementContainerEnd();
} }
function EntityTreeSelectComponent_ng_template_18_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 26);
    i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_18_ng_template_1_ng_container_2_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r57); const ctx_r56 = i0.ɵɵnextContext(); const entity_r52 = ctx_r56.item; const clear_r53 = ctx_r56.clear; return clear_r53(entity_r52); });
    i0.ɵɵtext(2, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function EntityTreeSelectComponent_ng_template_18_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, EntityTreeSelectComponent_ng_template_18_ng_template_1_ng_container_2_Template, 3, 0, "ng-container", 17);
} if (rf & 2) {
    const entity_r52 = ctx.item;
    const ctx_r47 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r47.multiple ? "px-2" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r47.showFullPath ? entity_r52.fullPathName : entity_r52.name.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r47.multiple);
} }
function EntityTreeSelectComponent_ng_template_18_ng_container_9_ng_template_1_Template(rf, ctx) { }
const _c12 = function (a0, a1) { return { $implicit: a0, depth: a1 }; };
function EntityTreeSelectComponent_ng_template_18_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_18_ng_container_9_ng_template_1_Template, 0, 0, "ng-template", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r58 = ctx.$implicit;
    const depth_r44 = i0.ɵɵnextContext().depth;
    i0.ɵɵnextContext();
    const _r17 = i0.ɵɵreference(19);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r17)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c12, child_r58, depth_r44 + 1));
} }
const _c13 = function (a1, a2, a3, a4, a5, a6, a7, a8, a9) { return { "item-wrapper": true, "level-0": a1, "level-1": a2, "level-2": a3, "level-3": a4, "level-4": a5, "level-5": a6, "level-6": a7, "expanded": a8, "collapsed": a9 }; };
function EntityTreeSelectComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, EntityTreeSelectComponent_ng_template_18_ng_container_0_Template, 2, 0, "ng-container", 17);
    i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_18_ng_template_1_Template, 3, 5, "ng-template", 18);
    i0.ɵɵelementStart(2, "ng-option", 19);
    i0.ɵɵelementStart(3, "div", 20);
    i0.ɵɵelementStart(4, "div", 21);
    i0.ɵɵelementStart(5, "div", 22);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 23);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, EntityTreeSelectComponent_ng_template_18_ng_container_9_Template, 2, 5, "ng-container", 11);
} if (rf & 2) {
    const entity_r43 = ctx.$implicit;
    const depth_r44 = ctx.depth;
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r18.showControls && !!ctx_r18.treeEntities);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", entity_r43)("disabled", !entity_r43.selectable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", ctx_r18.getDomIdentifier("entity-" + entity_r43.id))("ngClass", i0.ɵɵpureFunctionV(9, _c13, [depth_r44 === 0, depth_r44 === 1, depth_r44 === 2, depth_r44 === 3, depth_r44 === 4, depth_r44 === 5, depth_r44 === 6, ctx_r18.isExpandable(entity_r43) && ctx_r18.isExpanded(entity_r43), ctx_r18.isExpandable(entity_r43) && ctx_r18.isCollapsed(entity_r43)]));
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-entity-expander-id", ctx_r18.getDomIdentifier(entity_r43.id));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r18.isExpandable(entity_r43) && ctx_r18.isExpanded(entity_r43) ? "expanded" : ctx_r18.isExpandable(entity_r43) && ctx_r18.isCollapsed(entity_r43) ? "collapsed" : "", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entity_r43.name.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", entity_r43.children);
} }
function EntityTreeSelectComponent_ng_container_20_ng_template_1_Template(rf, ctx) { }
const _c14 = function (a0) { return { $implicit: a0, depth: 0 }; };
function EntityTreeSelectComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_container_20_ng_template_1_Template, 0, 0, "ng-template", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entity_r61 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r17 = i0.ɵɵreference(19);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r17)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c14, entity_r61));
} }
function isTreeEntity(obj) {
    return obj && typeof obj === 'object' && 'type' in obj && obj.type === 'treeEntity';
}
class EntityTreeSelectComponent {
    constructor(entityTreeService) {
        this.entityTreeService = entityTreeService;
        /** labels for ng-select */
        this.labels = {};
        /** control templates for the toolbar buttons */
        this.controls = {};
        /** entities input array */
        this.entities = null;
        /** always make children selectable of passed entities */
        this.selectableChildren = true;
        /** show unselectable parents */
        this.showUnselectableParents = true;
        /** whether or not to show the full path for selected entities */
        this.showFullPath = true;
        /** whether or not to show the header controls */
        this.showControls = true;
        /** whether to use api caching or not, caching is done per query request object, see EntityTreeService for more details */
        this.cache = true;
        /** if the tree is expanded by default */
        this.defaultExpand = false;
        this.expandedSearch = [];
        this.flattenedEntities = [];
        this.flattenedTreeEntities = [];
        this.lastTerm = ' ';
        this.refreshing = false;
        this.update = new rxjs_1.Subject();
        this.fetchedTreeEntities = [];
        this.cachedWriteValueSubject = new rxjs_1.Subject();
        this.treeEntitiesSubject = new rxjs_1.Subject();
        this.hasFocus = false;
        this.loading = true;
        this.treeEntities = [];
        this.expanded = [];
        /** ng-select input */
        this.appendTo = null;
        /** ng-select input */
        this.closeOnSelect = true;
        /** ng-select input */
        this.clearable = true;
        /** ng-select input */
        this.clearOnBackspace = true;
        /** ng-select input */
        this.dropdownPosition = 'auto';
        /** ng-select input */
        this.markFirst = true;
        /** ng-select input */
        this.isOpen = undefined;
        /** ng-select input */
        this.maxSelectedItems = undefined;
        /** ng-select input */
        this.hideSelected = false;
        /** ng-select input */
        this.multiple = false;
        /** ng-select input */
        this.searchable = true;
        /** ng-select input */
        this.readonly = false;
        /** ng-select input */
        this.searchWhileComposing = true;
        /** ng-select input */
        this.selectOnTab = false;
        /** ng-select input */
        this.openOnEnter = true;
        /** ng-select input */
        this.virtualScroll = false;
        /** ng-select input */
        this.inputAttrs = undefined;
        /** ng-select input */
        this.tabIndex = undefined;
        /** ng-select output */
        // tslint:disable-next-line:no-output-native
        this.blur = new core_1.EventEmitter();
        /** ng-select output */
        // tslint:disable-next-line:no-output-native
        this.focus = new core_1.EventEmitter();
        /** ng-select output */
        // tslint:disable-next-line:no-output-native
        this.change = new core_1.EventEmitter();
        /** ng-select output */
        // tslint:disable-next-line:no-output-native
        this.open = new core_1.EventEmitter();
        /** ng-select output */
        // tslint:disable-next-line:no-output-native
        this.close = new core_1.EventEmitter();
        /** ng-select output */
        this.search = new core_1.EventEmitter();
        /** ng-select output */
        this.clear = new core_1.EventEmitter();
        /** ng-select output */
        this.add = new core_1.EventEmitter();
        /** ng-select output */
        this.remove = new core_1.EventEmitter();
        /** ng-select output */
        // tslint:disable-next-line:no-output-native
        this.scroll = new core_1.EventEmitter();
        /** ng-select output */
        this.scrollToEnd = new core_1.EventEmitter();
        /** the id callback function for the Input entities */
        this.entityIdCallback = (entity) => entity ? entity.id : undefined;
        this.htmlId = uuid_1.v4();
        this.compareWith = this.compareWith || ((a, b) => {
            const aId = this.toId(a);
            const bId = this.toId(b);
            return aId && bId && aId === bId;
        });
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onClick = this.onClick.bind(this);
        this.searchFn = this.searchFn.bind(this);
    }
    get currentMarkedEntity() {
        return (this.ngSelectComponent.itemsList.markedItem ? this.ngSelectComponent.itemsList.markedItem.value : null);
    }
    get filtered() {
        return this.getFiltered(this.treeEntities);
    }
    get total() {
        return this.ngSelectComponent.itemsList.items.length;
    }
    get queryParams() {
        return Object.assign({ limit: 9999, depth: 10 }, this.query);
    }
    ngOnChanges(changes) {
        if ('entities' in changes) {
            this.createTreeEntities();
        }
    }
    ngOnInit() {
        this.labels = Object.assign(Object.assign({}, default_labels_1.DEFAULT_LABELS), this.labels);
        this.controls = Object.assign({ wrapper: this.wrapperControl, expand: this.expandControl, expandAll: this.expandAllControl, collapse: this.collapseControl, collapseAll: this.collapseAllControl, separator: this.separatorControl, showing: this.showingControl }, this.controls);
        let observable;
        if (this.cache === false) {
            observable = this.entityTreeService.list(this.queryParams);
        }
        else {
            observable = this.entityTreeService.getCachedSubject(this.queryParams);
        }
        this.writeValueSubscription = rxjs_1.combineLatest([
            this.cachedWriteValueSubject,
            this.treeEntitiesSubject,
        ]).subscribe(([value]) => this.ngSelectComponent.writeValue(this.multiple ?
            (value || []).map(o => this.toTreeEntity(o)).filter(o => !!o) :
            this.toTreeEntity(value)));
        observable.subscribe(entities => {
            if (!!entities) {
                this.fetchedTreeEntities = entities.ws_entity_list.map(entity => this.deepCopyEntity(entity));
                this.createTreeEntities();
                this.loading = false;
                this.treeEntitiesSubject.next();
            }
        });
        this.update.subscribe(() => {
            this.refreshing = true;
            this.ngSelectComponent.filter(this.lastTerm);
            this.refreshing = false;
        });
        document.addEventListener('click', this.onClick, true);
        document.addEventListener('keydown', this.onKeyDown, true);
    }
    createTreeEntities() {
        this.treeEntities = this.fetchedTreeEntities.map(e => this.deepCopyEntity(e));
        this.flattenedEntities = this.flatten(this.entities || []);
        this.setSelectable(this.treeEntities, this.entities === null ? true : this.flattenedEntities.map(entity => entity.id));
        if (this.selectableChildren) {
            this.setSelectableForChildren(this.treeEntities);
        }
        this.clearUnselectableTrees(this.treeEntities);
        this.setParentsForEntities(this.treeEntities);
        this.setPathNamesAndTypes(this.treeEntities);
        if (!this.showUnselectableParents) {
            this.treeEntities = this.flattenUnselectableParents(this.treeEntities);
        }
        this.flattenedTreeEntities = this.flatten(this.treeEntities);
        if (this.defaultExpand) {
            this.expandAll(this.treeEntities, false);
        }
        if (this.hasFocus) {
            setTimeout(() => this.update.next(null));
        }
    }
    deepCopyEntity(entity) {
        return Object.assign(Object.assign({}, entity), { children: entity.children.map(e => this.deepCopyEntity(e)) });
    }
    ngOnDestroy() {
        this.writeValueSubscription.unsubscribe();
        document.removeEventListener('click', this.onClick, true);
        document.removeEventListener('keydown', this.onKeyDown, true);
    }
    isDomIdentifier(name) {
        return name.startsWith(`_${this.htmlId}`);
    }
    getDomIdentifier(name) {
        return `_${this.htmlId}-${name}`;
    }
    stripDomIdentifier(name) {
        return name.replace(`_${this.htmlId}-`, '');
    }
    flatten(entities) {
        return entities.reduce((acc, entity) => entity.children ? [...acc, entity, ...this.flatten(entity.children)] : [...acc, entity], []);
    }
    setParentsForEntities(entities) {
        entities.forEach(e => {
            e.children.forEach(c => {
                c.parent = e;
            });
            this.setParentsForEntities(e.children);
        });
    }
    setPathNamesAndTypes(entities) {
        entities.forEach(e => {
            const paths = [];
            let p = e;
            while (p) {
                paths.push(p.name.text);
                p = p.parent;
            }
            e.allPaths = paths.reverse();
            e.fullPathName = e.allPaths.join(' > ');
            e.allPaths = e.allPaths.map(n => n.toLowerCase());
            e.paths = [...e.allPaths];
            e.paths.pop();
            e.type = 'treeEntity';
            this.setPathNamesAndTypes(e.children);
        });
    }
    setSelectable(entities, selectables) {
        entities.forEach(e => {
            e.filtered = true;
            e.selectable = selectables === true ? true : selectables.includes(e.id);
            this.setSelectable(e.children, selectables);
        });
    }
    setSelectableForChildren(entities) {
        entities.forEach(e => {
            if (e.selectable) {
                e.children.forEach(c => {
                    c.selectable = true;
                });
            }
            this.setSelectableForChildren(e.children);
        });
    }
    clearSafeChildren(entity) {
        return entity.children.every(e => !e.selectable && this.clearSafeChildren(e));
    }
    clearUnselectableTrees(entities) {
        let clear = true;
        while (clear) {
            clear = false;
            for (let i = 0; i < entities.length; i++) {
                this.clearUnselectableTrees(entities[i].children);
                if (!entities[i].selectable && this.clearSafeChildren(entities[i])) {
                    entities.splice(i, 1);
                    clear = true;
                    break;
                }
            }
        }
    }
    clearUnselectableTree(entity) {
        if (entity.children.length === 0 || entity.children.every(c => !c.selectable)) {
            return false;
        }
        else {
            this.clearUnselectableTrees(entity.children);
            return true;
        }
    }
    flattenUnselectableParents(entities) {
        entities = [...entities];
        let modified = true;
        while (modified) {
            modified = false;
            for (let i = 0; i < entities.length; i++) {
                if (!entities[i].selectable) {
                    const children = [...entities[i].children];
                    children.forEach(c => {
                        c.parent = entities[i].parent;
                    });
                    entities.splice(i, 1, ...children);
                    modified = true;
                    break;
                }
            }
        }
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < entities.length; i++) {
            entities[i].children = this.flattenUnselectableParents(entities[i].children);
        }
        return entities;
    }
    isExpandable(entity) {
        return entity.children.length > 0;
    }
    expandFn(entity) {
        return () => entity && this.expand(entity);
    }
    expand(entity) {
        if (!this.expanded.includes(entity.id)) {
            this.expanded.push(entity.id);
        }
        this.update.next(entity);
    }
    expandAllFn() {
        return () => this.expandAll(this.treeEntities);
    }
    expandAll(entities, update = true) {
        entities.forEach(entity => {
            if (this.isExpandable(entity) && !this.expanded.includes(entity.id)) {
                this.expanded.push(entity.id);
            }
            this.expandAll(entity.children, false);
        });
        if (update) {
            this.update.next(null);
        }
    }
    expandArray(entities) {
        entities.forEach(entity => {
            if (!this.expanded.includes(entity.id)) {
                this.expanded.push(entity.id);
            }
        });
        this.update.next(null);
    }
    expandTree(entity) {
        let currentEntity = entity;
        while (currentEntity) {
            if (!this.expanded.includes(currentEntity.id)) {
                this.expanded.push(currentEntity.id);
            }
            currentEntity = currentEntity.parent;
        }
        this.update.next(null);
    }
    expandTrees(entities) {
        entities.forEach(entity => {
            let currentEntity = entity;
            while (currentEntity) {
                if (!this.expanded.includes(currentEntity.id)) {
                    this.expanded.push(currentEntity.id);
                }
                currentEntity = currentEntity.parent;
            }
        });
        this.update.next(null);
    }
    collapseFn(entity) {
        return () => entity && this.collapse(entity);
    }
    collapse(entity) {
        if (this.expanded.includes(entity.id)) {
            this.expanded.splice(this.expanded.findIndex(e => e === entity.id), 1);
        }
        this.update.next(entity);
    }
    collapseAllFn() {
        return () => this.collapseAll(this.treeEntities);
    }
    collapseAll(entities, update = true) {
        entities.forEach(entity => {
            if (this.isExpandable(entity) && this.expanded.includes(entity.id)) {
                this.expanded.splice(this.expanded.findIndex(e => e === entity.id), 1);
            }
            this.collapseAll(entity.children, false);
        });
        if (update) {
            this.update.next(null);
        }
    }
    toggleExpanded(entity) {
        if (this.expanded.includes(entity.id)) {
            this.expanded.splice(this.expanded.findIndex(e => e === entity.id), 1);
        }
        else {
            this.expanded.push(entity.id);
        }
        this.update.next(entity);
    }
    toggleExpandedById(id) {
        if (this.expanded.includes(id)) {
            this.expanded.splice(this.expanded.findIndex(e => e === id), 1);
        }
        else {
            this.expanded.push(id);
        }
        this.update.next(null);
    }
    isTreeExpanded(entity) {
        let currentEntity = entity;
        while (currentEntity) {
            if (!this.isExpanded(currentEntity)) {
                return false;
            }
            else {
                currentEntity = currentEntity.parent;
            }
        }
        return true;
    }
    isExpanded(entity) {
        return this.expanded.includes(entity.id);
    }
    isCollapsed(entity) {
        return !this.expanded.includes(entity.id);
    }
    isVisible(entity) {
        return !entity.parent || this.isTreeExpanded(entity.parent);
    }
    trackByFn(entity) {
        return entity.id;
    }
    onClear(event) {
        this.lastTerm = ' ';
        this.update.next(null);
        this.clear.emit(event);
    }
    onOpen(event) {
        setTimeout(() => {
            this.update.next(null);
        });
        this.open.emit(event);
    }
    onSearch(event) {
        if (!this.refreshing) {
            if (!!event.term.trim() && !this.lastSearch.trim()) {
                this.expandedSearch = [...this.expanded];
            }
            else if (!event.term.trim() && !!this.lastSearch.trim()) {
                this.expanded = [...this.expandedSearch];
                this.update.next(null);
            }
            if (!!event.term.trim()) {
                this.expandTrees(event.items);
            }
        }
        if (event.term === '') {
            this.lastTerm = ' ';
            this.update.next(null);
        }
        this.lastSearch = event.term;
        this.search.emit(event);
    }
    searchFn(term, entity) {
        this.lastTerm = term;
        const terms = !!term.trim() ? term.split(/\s*>\s*/) : [];
        const visible = this.entityContainsSearchTerm(terms, entity);
        entity.filtered = visible;
        return visible && this.isVisible(entity);
    }
    entityContainsSearchTerm(terms, entity) {
        if (terms.length > 0) {
            const copyOfTerms = [...terms];
            const actualTerm = copyOfTerms.pop().trim();
            if (entity.name.text.toLowerCase().includes(actualTerm) &&
                copyOfTerms.every(term => entity.paths.some(path => path.includes(term.trim())))) {
                return true;
            }
            else {
                return this.childrenContainSearchTerm(terms, entity.children);
            }
        }
        else {
            return true;
        }
    }
    childrenContainSearchTerm(terms, entities) {
        return entities.some(e => this.entityContainsSearchTerm(terms, e));
    }
    onChange(entity) {
        this.change.emit(this.multiple ? entity.map(o => this.toId(o)) : this.toId(entity));
    }
    onClick(event) {
        const target = event.target;
        if (target.dataset && target.dataset.entityExpanderId && this.isDomIdentifier(target.dataset.entityExpanderId)) {
            const entityId = parseInt(this.stripDomIdentifier(target.dataset.entityExpanderId), 0);
            this.toggleExpandedById(entityId);
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    onKeyDown(event) {
        if (this.hasFocus) {
            const itemsList = this.ngSelectComponent.itemsList;
            const entity = itemsList.markedItem ? itemsList.markedItem.value : null;
            if (entity) {
                if (event.metaKey) {
                    let prevent = false;
                    let scrollAndUpdate = false;
                    if (event.key === 'ArrowLeft') {
                        if (this.isExpandable(entity) && this.isExpanded(entity)) {
                            this.collapse(entity);
                        }
                        else if (entity.parent) {
                            const option = itemsList.filteredItems.find(item => item.value.id === entity.parent.id);
                            if (option) {
                                itemsList.markItem(option);
                                scrollAndUpdate = true;
                            }
                        }
                        else {
                            itemsList.markPreviousItem();
                            scrollAndUpdate = true;
                        }
                        prevent = true;
                    }
                    if (event.key === 'ArrowRight') {
                        if (this.isExpandable(entity) && this.isCollapsed(entity)) {
                            this.expand(entity);
                        }
                        else if (this.isExpandable(entity) && this.isExpanded(entity)) {
                            const option = itemsList.filteredItems.find(item => item.value.parent_id && item.value.parent_id === entity.id);
                            if (option) {
                                itemsList.markItem(option);
                                scrollAndUpdate = true;
                            }
                        }
                        else {
                            itemsList.markNextItem();
                            scrollAndUpdate = true;
                        }
                        prevent = true;
                    }
                    if (scrollAndUpdate) {
                        const dom = document.getElementById(itemsList.markedItem.htmlId);
                        if (dom) {
                            dom.scrollIntoView();
                        }
                        this.update.next(null);
                    }
                    if (prevent) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                    }
                }
            }
        }
    }
    getFiltered(entities) {
        return entities.reduce((acc, e) => (e.filtered ? acc + 1 : acc) + this.getFiltered(e.children), 0);
    }
    registerOnChange(fn) {
        this.ngSelectComponent.registerOnChange(obj => fn(this.multiple ? obj.map(o => this.toId(o)) : this.toId(obj)));
    }
    registerOnTouched(fn) {
        this.ngSelectComponent.registerOnTouched(fn);
    }
    setDisabledState(isDisabled) {
        this.ngSelectComponent.setDisabledState(isDisabled);
    }
    writeValue(obj) {
        this.cachedWriteValueSubject.next(obj);
    }
    toId(obj) {
        if (isTreeEntity(obj)) {
            return obj.id;
        }
        else if (typeof obj === 'number') {
            return obj;
        }
        else if (typeof obj === 'object') {
            return this.entityIdCallback(obj);
        }
        else {
            return null;
        }
    }
    toTreeEntity(obj) {
        if (isTreeEntity(obj)) {
            return this.flattenedTreeEntities.find(e => e.id === obj.id);
        }
        else if (typeof obj === 'number') {
            return this.flattenedTreeEntities.find(e => e.id === obj);
        }
        else if (typeof obj === 'object') {
            return this.flattenedTreeEntities.find(e => e.id === this.entityIdCallback(obj));
        }
        else {
            return null;
        }
    }
    toEntity(obj) {
        if (isTreeEntity(obj)) {
            return this.flattenedEntities.find(e => this.entityIdCallback(e) === obj.id);
        }
        else if (typeof obj === 'number') {
            return this.flattenedEntities.find(e => this.entityIdCallback(e) === obj);
        }
        else if (typeof obj === 'object') {
            return this.flattenedEntities.find(e => this.entityIdCallback(e) === this.entityIdCallback(obj));
        }
        else {
            return null;
        }
    }
}
exports.EntityTreeSelectComponent = EntityTreeSelectComponent;
EntityTreeSelectComponent.ɵfac = function EntityTreeSelectComponent_Factory(t) { return new (t || EntityTreeSelectComponent)(i0.ɵɵdirectiveInject(i1.EntityTreeService)); };
EntityTreeSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EntityTreeSelectComponent, selectors: [["ws-entity-tree-select"]], viewQuery: function EntityTreeSelectComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
        i0.ɵɵstaticViewQuery(_c1, true);
        i0.ɵɵstaticViewQuery(_c2, true);
        i0.ɵɵstaticViewQuery(_c3, true);
        i0.ɵɵstaticViewQuery(_c4, true);
        i0.ɵɵstaticViewQuery(_c5, true);
        i0.ɵɵstaticViewQuery(_c6, true);
        i0.ɵɵstaticViewQuery(_c7, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ngSelectComponent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.wrapperControl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.expandControl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.expandAllControl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.collapseControl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.collapseAllControl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.separatorControl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showingControl = _t.first);
    } }, inputs: { labels: "labels", controls: "controls", query: "query", entities: "entities", selectableChildren: "selectableChildren", showUnselectableParents: "showUnselectableParents", showFullPath: "showFullPath", showControls: "showControls", cache: "cache", defaultExpand: "defaultExpand", appendTo: "appendTo", closeOnSelect: "closeOnSelect", clearable: "clearable", clearOnBackspace: "clearOnBackspace", dropdownPosition: "dropdownPosition", markFirst: "markFirst", isOpen: "isOpen", maxSelectedItems: "maxSelectedItems", hideSelected: "hideSelected", multiple: "multiple", searchable: "searchable", readonly: "readonly", searchWhileComposing: "searchWhileComposing", selectOnTab: "selectOnTab", openOnEnter: "openOnEnter", virtualScroll: "virtualScroll", inputAttrs: "inputAttrs", tabIndex: "tabIndex", compareWith: "compareWith", entityIdCallback: "entityIdCallback" }, outputs: { blur: "blur", focus: "focus", change: "change", open: "open", close: "close", search: "search", clear: "clear", add: "add", remove: "remove", scroll: "scroll", scrollToEnd: "scrollToEnd" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(() => EntityTreeSelectComponent),
                multi: true
            }
        ]), i0.ɵɵNgOnChangesFeature], decls: 21, vars: 28, consts: [["wrapperControl", ""], ["expandControl", ""], ["expandAllControl", ""], ["collapseControl", ""], ["collapseAllControl", ""], ["separatorControl", ""], ["showingControl", ""], ["controlsWrapper", ""], [3, "appendTo", "closeOnSelect", "clearAllText", "clearable", "clearOnBackspace", "compareWith", "dropdownPosition", "loadingText", "markFirst", "isOpen", "maxSelectedItems", "hideSelected", "multiple", "notFoundText", "searchable", "readonly", "searchFn", "searchWhileComposing", "selectOnTab", "openOnEnter", "typeToSearchText", "placeholder", "virtualScroll", "inputAttrs", "loading", "tabIndex", "trackByFn", "blur", "focus", "change", "open", "close", "search", "clear", "add", "remove", "scroll", "scrollToEnd"], ["ngSelectComponent", ""], ["entityOption", ""], [4, "ngFor", "ngForOf"], ["role", "group", 1, "btn-group", "btn-group-sm"], [3, "ngTemplateOutlet"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", "btn-primary", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], ["ng-label-tmp", ""], [3, "value", "disabled"], [3, "id", "ngClass"], [1, "expander"], [1, "arrow"], [1, "item"], ["ng-header-tmp", ""], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center"], [1, "font-weight-bold", "px-2", "border-left", 2, "cursor", "pointer", 3, "click"]], template: function EntityTreeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EntityTreeSelectComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, EntityTreeSelectComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, EntityTreeSelectComponent_ng_template_4_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, EntityTreeSelectComponent_ng_template_6_Template, 2, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, EntityTreeSelectComponent_ng_template_8_Template, 2, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(10, EntityTreeSelectComponent_ng_template_10_Template, 0, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(12, EntityTreeSelectComponent_ng_template_12_Template, 1, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(14, EntityTreeSelectComponent_ng_template_14_Template, 7, 21, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(16, "ng-select", 8, 9);
        i0.ɵɵlistener("blur", function EntityTreeSelectComponent_Template_ng_select_blur_16_listener($event) { ctx.hasFocus = false; return ctx.blur.emit($event); })("focus", function EntityTreeSelectComponent_Template_ng_select_focus_16_listener($event) { ctx.hasFocus = true; return ctx.focus.emit($event); })("change", function EntityTreeSelectComponent_Template_ng_select_change_16_listener($event) { return ctx.onChange($event); })("open", function EntityTreeSelectComponent_Template_ng_select_open_16_listener($event) { return ctx.onOpen($event); })("close", function EntityTreeSelectComponent_Template_ng_select_close_16_listener($event) { return ctx.close.emit($event); })("search", function EntityTreeSelectComponent_Template_ng_select_search_16_listener($event) { return ctx.onSearch($event); })("clear", function EntityTreeSelectComponent_Template_ng_select_clear_16_listener($event) { return ctx.onClear($event); })("add", function EntityTreeSelectComponent_Template_ng_select_add_16_listener($event) { return ctx.add.emit($event); })("remove", function EntityTreeSelectComponent_Template_ng_select_remove_16_listener($event) { return ctx.remove.emit($event); })("scroll", function EntityTreeSelectComponent_Template_ng_select_scroll_16_listener($event) { return ctx.scroll.emit($event); })("scrollToEnd", function EntityTreeSelectComponent_Template_ng_select_scrollToEnd_16_listener($event) { return ctx.scrollToEnd.emit($event); });
        i0.ɵɵtemplate(18, EntityTreeSelectComponent_ng_template_18_Template, 10, 19, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(20, EntityTreeSelectComponent_ng_container_20_Template, 2, 4, "ng-container", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("appendTo", ctx.appendTo)("closeOnSelect", ctx.closeOnSelect)("clearAllText", ctx.labels.clearAllText)("clearable", ctx.clearable)("clearOnBackspace", ctx.clearOnBackspace)("compareWith", ctx.compareWith)("dropdownPosition", ctx.dropdownPosition)("loadingText", ctx.labels.loadingText)("markFirst", ctx.markFirst)("isOpen", ctx.isOpen)("maxSelectedItems", ctx.maxSelectedItems)("hideSelected", ctx.hideSelected)("multiple", ctx.multiple)("notFoundText", ctx.labels.notFoundText)("searchable", ctx.searchable)("readonly", ctx.readonly)("searchFn", ctx.searchFn)("searchWhileComposing", ctx.searchWhileComposing)("selectOnTab", ctx.selectOnTab)("openOnEnter", ctx.openOnEnter)("typeToSearchText", ctx.labels.typeToSearchText)("placeholder", ctx.labels.placeholder)("virtualScroll", ctx.virtualScroll)("inputAttrs", ctx.inputAttrs)("loading", ctx.loading)("tabIndex", ctx.tabIndex)("trackByFn", ctx.trackByFn);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.treeEntities);
    } }, directives: [i2.NgSelectComponent, i3.NgForOf, i3.NgTemplateOutlet, i3.NgIf, i2.ɵh, i2.ɵr, i3.NgClass, i2.ɵj], styles: [".level-0[_ngcontent-%COMP%]{margin-left:0}.level-1[_ngcontent-%COMP%]{margin-left:20px}.level-2[_ngcontent-%COMP%]{margin-left:40px}.level-3[_ngcontent-%COMP%]{margin-left:60px}.level-4[_ngcontent-%COMP%]{margin-left:80px}.level-5[_ngcontent-%COMP%]{margin-left:100px}.level-6[_ngcontent-%COMP%]{margin-left:120px}.item-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row}.item[_ngcontent-%COMP%]{flex:1}.expander[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center;text-align:center;width:20px}.arrow[_ngcontent-%COMP%]{border:5px solid transparent;font-size:0;height:0;visibility:hidden;width:0}.item-wrapper.collapsed[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{border-left-color:#000;margin:0 0 0 3px;visibility:visible}.item-wrapper.expanded[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{border-top-color:#000;margin:3px 0 0;visibility:visible}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EntityTreeSelectComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ws-entity-tree-select',
                templateUrl: './entity-tree-select.component.html',
                styleUrls: ['./entity-tree-select.component.css'],
                providers: [
                    {
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: core_1.forwardRef(() => EntityTreeSelectComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i1.EntityTreeService }]; }, { labels: [{
            type: core_1.Input
        }], controls: [{
            type: core_1.Input
        }], query: [{
            type: core_1.Input
        }], entities: [{
            type: core_1.Input
        }], selectableChildren: [{
            type: core_1.Input
        }], showUnselectableParents: [{
            type: core_1.Input
        }], showFullPath: [{
            type: core_1.Input
        }], showControls: [{
            type: core_1.Input
        }], cache: [{
            type: core_1.Input
        }], defaultExpand: [{
            type: core_1.Input
        }], appendTo: [{
            type: core_1.Input
        }], closeOnSelect: [{
            type: core_1.Input
        }], clearable: [{
            type: core_1.Input
        }], clearOnBackspace: [{
            type: core_1.Input
        }], dropdownPosition: [{
            type: core_1.Input
        }], markFirst: [{
            type: core_1.Input
        }], isOpen: [{
            type: core_1.Input
        }], maxSelectedItems: [{
            type: core_1.Input
        }], hideSelected: [{
            type: core_1.Input
        }], multiple: [{
            type: core_1.Input
        }], searchable: [{
            type: core_1.Input
        }], readonly: [{
            type: core_1.Input
        }], searchWhileComposing: [{
            type: core_1.Input
        }], selectOnTab: [{
            type: core_1.Input
        }], openOnEnter: [{
            type: core_1.Input
        }], virtualScroll: [{
            type: core_1.Input
        }], inputAttrs: [{
            type: core_1.Input
        }], tabIndex: [{
            type: core_1.Input
        }], blur: [{
            type: core_1.Output
        }], focus: [{
            type: core_1.Output
        }], change: [{
            type: core_1.Output
        }], open: [{
            type: core_1.Output
        }], close: [{
            type: core_1.Output
        }], search: [{
            type: core_1.Output
        }], clear: [{
            type: core_1.Output
        }], add: [{
            type: core_1.Output
        }], remove: [{
            type: core_1.Output
        }], scroll: [{
            type: core_1.Output
        }], scrollToEnd: [{
            type: core_1.Output
        }], ngSelectComponent: [{
            type: core_1.ViewChild,
            args: ['ngSelectComponent', { static: true }]
        }], wrapperControl: [{
            type: core_1.ViewChild,
            args: ['wrapperControl', { static: true }]
        }], expandControl: [{
            type: core_1.ViewChild,
            args: ['expandControl', { static: true }]
        }], expandAllControl: [{
            type: core_1.ViewChild,
            args: ['expandAllControl', { static: true }]
        }], collapseControl: [{
            type: core_1.ViewChild,
            args: ['collapseControl', { static: true }]
        }], collapseAllControl: [{
            type: core_1.ViewChild,
            args: ['collapseAllControl', { static: true }]
        }], separatorControl: [{
            type: core_1.ViewChild,
            args: ['separatorControl', { static: true }]
        }], showingControl: [{
            type: core_1.ViewChild,
            args: ['showingControl', { static: true }]
        }], compareWith: [{
            type: core_1.Input
        }], entityIdCallback: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXRyZWUtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvZW50aXR5LXRyZWUvZW50aXR5LXRyZWUtc2VsZWN0L2VudGl0eS10cmVlLXNlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL2VudGl0eS10cmVlL2VudGl0eS10cmVlLXNlbGVjdC9lbnRpdHktdHJlZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBWXVCO0FBRXZCLCtCQUEwRDtBQUMxRCwrQkFBa0M7QUFDbEMsMENBQXVFO0FBTXZFLDZEQUEwRDs7Ozs7Ozs7Ozs7Ozs7O0lDckJ4RCwrQkFDRTtJQUFBLHlHQUEyQztJQUM3QyxpQkFBTTs7O0lBRFMsZUFBNkI7SUFBN0IsK0NBQTZCOzs7O0lBSTVDLGtDQUFpRztJQUEzQyx3S0FBUyx1QkFBdUIsd0JBQVU7SUFBQyxzQkFBTTtJQUFBLGlCQUFTOzs7SUFBeEcsdUNBQXFCOzs7SUFHN0Isa0NBQWtEO0lBQWxCLGdLQUFpQjtJQUFDLDBCQUFVO0lBQUEsaUJBQVM7OztJQUdyRSxrQ0FBd0U7SUFBbEIsZ0tBQWlCO0lBQUMsd0JBQVE7SUFBQSxpQkFBUzs7O0lBQWpGLHVDQUFxQjs7OztJQUc3QixrQ0FBMkU7SUFBM0Msd0tBQVMsdUJBQXVCLHdCQUFVO0lBQUMsNEJBQVk7SUFBQSxpQkFBUzs7OztJQUloRyxZQUNGOzs7O0lBREUsd0VBQ0Y7Ozs7Ozs7Ozs7OztJQUdFLDBHQUN3TDtJQUN4TCwwR0FBcUQ7SUFDckQsMEdBQ3VMO0lBQ3ZMLDBHQUFxRDtJQUNyRCwwR0FDa0U7SUFDbEUsMEdBQXFEO0lBQ3JELDBHQUNnRTs7O0lBVm5ELDREQUFzQyw4T0FBQTtJQUV0QyxlQUF1QztJQUF2Qyw2REFBdUM7SUFDdkMsZUFBb0M7SUFBcEMsMERBQW9DLDZPQUFBO0lBRXBDLGVBQXVDO0lBQXZDLDZEQUF1QztJQUN2QyxlQUF5QztJQUF6QywrREFBeUMsaUZBQUE7SUFFekMsZUFBdUM7SUFBdkMsNkRBQXVDO0lBQ3ZDLGVBQXVDO0lBQXZDLDZEQUF1QywrRUFBQTs7Ozs7OztJQWdEOUMsK0JBQ0U7SUFBQSwyQkFDRTtJQUFBLHVJQUVnRTtJQUNsRSxpQkFBTTtJQUNOLDJCQUNFO0lBQUEsdUlBRTJEO0lBQzdELGlCQUFNO0lBQ1IsaUJBQU07Ozs7SUFSQSxlQUFxQztJQUFyQywyREFBcUMseUZBQUE7SUFLckMsZUFBcUM7SUFBckMsMkRBQXFDLDhEQUFBOzs7SUFWL0MsNkJBQ0U7SUFBQSx5SEFDRTtJQWFKLDBCQUFlOzs7O0lBR2IsNkJBQ0U7SUFBQSxnQ0FBZ0c7SUFBeEIsdVNBQXVCO0lBQUMsc0JBQUM7SUFBQSxpQkFBTztJQUMxRywwQkFBZTs7O0lBSGYsNEJBQXlDO0lBQUEsWUFBeUQ7SUFBQSxpQkFBTztJQUN6RywwSEFDRTs7OztJQUZJLDZDQUFrQztJQUFDLGVBQXlEO0lBQXpELDJGQUF5RDtJQUNwRixlQUFnQjtJQUFoQix1Q0FBZ0I7Ozs7O0lBZ0JoQyw2QkFDRTtJQUFBLHlIQUdBO0lBQ0YsMEJBQWU7Ozs7OztJQUhYLGVBQWlDO0lBQWpDLHVDQUFpQyxrRkFBQTs7OztJQXBDckMsNEdBQ0U7SUFlRiwwR0FDRTtJQUtGLHFDQUNFO0lBQUEsK0JBR0U7SUFBQSwrQkFDRTtJQUFBLCtCQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFNO0lBQ1IsaUJBQU07SUFDTiwrQkFBa0I7SUFBQSxZQUFvQjtJQUFBLGlCQUFNO0lBQzlDLGlCQUFNO0lBQ1IsaUJBQVk7SUFDWiw0R0FDRTs7Ozs7SUFuQ1kscUVBQXNDO0lBc0J6QyxlQUFnQjtJQUFoQixrQ0FBZ0Isb0NBQUE7SUFFdkIsZUFBOEM7SUFBOUMsd0VBQThDLDBTQUFBO0lBR3pCLGVBQTREO0lBQTVELGtGQUE0RDtJQUM3RSxlQUNGO0lBREUseU1BQ0Y7SUFFZ0IsZUFBb0I7SUFBcEIsMENBQW9CO0lBRzVCLGVBQXFDO0lBQXJDLDZDQUFxQzs7Ozs7SUFPckQsNkJBQ0U7SUFBQSwyR0FHQTtJQUNGLDBCQUFlOzs7OztJQUhYLGVBQWlDO0lBQWpDLHVDQUFpQyxvRUFBQTs7QURqR3ZDLFNBQVMsWUFBWSxDQUFDLEdBQVE7SUFDNUIsT0FBTyxHQUFHLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxZQUFZLENBQUM7QUFDdEYsQ0FBQztBQUVELE1BWWEseUJBQXlCO0lBcUhwQyxZQUNVLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBcEg5QywyQkFBMkI7UUFDbEIsV0FBTSxHQUEyQixFQUFFLENBQUM7UUFDN0MsZ0RBQWdEO1FBQ3ZDLGFBQVEsR0FBNkIsRUFBRSxDQUFDO1FBR2pELDJCQUEyQjtRQUNsQixhQUFRLEdBQWUsSUFBSSxDQUFDO1FBQ3JDLHlEQUF5RDtRQUNoRCx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDbkMsZ0NBQWdDO1FBQ3ZCLDRCQUF1QixHQUFHLElBQUksQ0FBQztRQUN4QyxpRUFBaUU7UUFDeEQsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDN0IsaURBQWlEO1FBQ3hDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDBIQUEwSDtRQUNqSCxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHlDQUF5QztRQUNoQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN2QixtQkFBYyxHQUFrQixFQUFFLENBQUM7UUFDbkMsc0JBQWlCLEdBQWUsRUFBRSxDQUFDO1FBQ25DLDBCQUFxQixHQUFzQixFQUFFLENBQUM7UUFDOUMsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUVmLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFHLElBQUksY0FBTyxFQUFjLENBQUM7UUFFbkMsd0JBQW1CLEdBQXNCLEVBQUUsQ0FBQztRQUM1Qyw0QkFBdUIsR0FBRyxJQUFJLGNBQU8sRUFBTyxDQUFDO1FBQzdDLHdCQUFtQixHQUFHLElBQUksY0FBTyxFQUFRLENBQUM7UUFFbEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsaUJBQVksR0FBc0IsRUFBRSxDQUFDO1FBQ3JDLGFBQVEsR0FBa0IsRUFBRSxDQUFDO1FBRTdCLHNCQUFzQjtRQUNiLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsc0JBQXNCO1FBQ2Isa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDOUIsc0JBQXNCO1FBQ2IsY0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixzQkFBc0I7UUFDYixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDakMsc0JBQXNCO1FBQ2IscUJBQWdCLEdBQXFCLE1BQU0sQ0FBQztRQUNyRCxzQkFBc0I7UUFDYixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLHNCQUFzQjtRQUNiLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFDckMsc0JBQXNCO1FBQ2IscUJBQWdCLEdBQVcsU0FBUyxDQUFDO1FBQzlDLHNCQUFzQjtRQUNiLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLHNCQUFzQjtRQUNiLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsc0JBQXNCO1FBQ2IsZUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixzQkFBc0I7UUFDYixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHNCQUFzQjtRQUNiLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUNyQyxzQkFBc0I7UUFDYixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixzQkFBc0I7UUFDYixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUM1QixzQkFBc0I7UUFDYixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixzQkFBc0I7UUFDYixlQUFVLEdBQThCLFNBQVMsQ0FBQztRQUMzRCxzQkFBc0I7UUFDYixhQUFRLEdBQVcsU0FBUyxDQUFDO1FBQ3RDLHVCQUF1QjtRQUNyQiw0Q0FBNEM7UUFDcEMsU0FBSSxHQUFzQixJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUM1RCx1QkFBdUI7UUFDckIsNENBQTRDO1FBQ3BDLFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFDN0QsdUJBQXVCO1FBQ3JCLDRDQUE0QztRQUNwQyxXQUFNLEdBQXNCLElBQUksbUJBQVksRUFBTyxDQUFDO1FBQzlELHVCQUF1QjtRQUNyQiw0Q0FBNEM7UUFDcEMsU0FBSSxHQUFzQixJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUM1RCx1QkFBdUI7UUFDckIsNENBQTRDO1FBQ3BDLFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFDN0QsdUJBQXVCO1FBQ2IsV0FBTSxHQUF5RCxJQUFJLG1CQUFZLEVBQTBDLENBQUM7UUFDcEksdUJBQXVCO1FBQ2IsVUFBSyxHQUFzQixJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUM3RCx1QkFBdUI7UUFDYixRQUFHLEdBQXNCLElBQUksbUJBQVksRUFBTyxDQUFDO1FBQzNELHVCQUF1QjtRQUNiLFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFDOUQsdUJBQXVCO1FBQ3JCLDRDQUE0QztRQUNwQyxXQUFNLEdBQWtELElBQUksbUJBQVksRUFBbUMsQ0FBQztRQUN0SCx1QkFBdUI7UUFDYixnQkFBVyxHQUFzQixJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQVluRSxzREFBc0Q7UUFDN0MscUJBQWdCLEdBQTRCLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUtuRyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQU0sRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFlLENBQUM7SUFDaEksQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYix1QkFBUSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtJQUNqRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksVUFBVSxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sbUNBQU8sK0JBQWMsR0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsbUJBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUMxQixTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUNoQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFDOUIsV0FBVyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFDcEMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLElBQ3pCLElBQUksQ0FBQyxRQUFRLENBQ2pCLENBQUM7UUFDRixJQUFJLFVBQVUsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDeEIsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVEO2FBQU07WUFDTCxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN4RTtRQUVELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxvQkFBYSxDQUFDO1lBQzFDLElBQUksQ0FBQyx1QkFBdUI7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQjtTQUN6QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3QixVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDZCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQW9CLENBQUMsQ0FBQyxDQUFDO2dCQUM1RyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNqQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxhQUFhLENBQ2hCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQ2hGLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFFTyxjQUFjLENBQUMsTUFBa0I7UUFDdkMsdUNBQVcsTUFBTSxLQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRTtJQUNqRixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBWTtRQUMxQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUMzQixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBWTtRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLE9BQU8sQ0FBQyxRQUFvQjtRQUNsQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkksQ0FBQztJQUVPLHFCQUFxQixDQUFDLFFBQTJCO1FBQ3ZELFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9CQUFvQixDQUFDLFFBQTJCO1FBQ3RELFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDZDtZQUNELENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7WUFFdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxhQUFhLENBQUMsUUFBMkIsRUFBRSxXQUFpQztRQUNsRixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25CLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxVQUFVLEdBQUcsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sd0JBQXdCLENBQUMsUUFBMkI7UUFDMUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2hCLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNyQixDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8saUJBQWlCLENBQUMsTUFBa0I7UUFDMUMsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU8sc0JBQXNCLENBQUMsUUFBMkI7UUFDeEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE9BQU8sS0FBSyxFQUFFO1lBQ1osS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN0QixLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNiLE1BQU07aUJBQ1A7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVPLHFCQUFxQixDQUFDLE1BQWtCO1FBQzlDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDN0UsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QyxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVPLDBCQUEwQixDQUFDLFFBQTJCO1FBQzVELFFBQVEsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDekIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE9BQU8sUUFBUSxFQUFFO1lBQ2YsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7b0JBQzNCLE1BQU0sUUFBUSxHQUFzQixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM5RCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNuQixDQUFDLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ2hDLENBQUMsQ0FBQyxDQUFDO29CQUNILFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUNuQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNoQixNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtRQUNELHlDQUF5QztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUU7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQWtCO1FBQzdCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBa0I7UUFDekIsT0FBTyxHQUFHLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQWtCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTLENBQUMsUUFBMkIsRUFBRSxNQUFNLEdBQUcsSUFBSTtRQUNsRCxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsUUFBMkI7UUFDckMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBa0I7UUFDM0IsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE9BQU8sYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0QztZQUNELGFBQWEsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUEyQjtRQUNyQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hCLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQztZQUMzQixPQUFPLGFBQWEsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN0QztnQkFDRCxhQUFhLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQzthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFrQjtRQUMzQixPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBa0I7UUFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxXQUFXLENBQUMsUUFBMkIsRUFBRSxNQUFNLEdBQUcsSUFBSTtRQUNwRCxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN4RTtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQWtCO1FBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGtCQUFrQixDQUFDLEVBQVU7UUFDM0IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQWtCO1FBQy9CLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQztRQUMzQixPQUFPLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxhQUFhLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQzthQUN0QztTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBa0I7UUFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWtCO1FBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxTQUFTLENBQUMsTUFBa0I7UUFDMUIsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBVTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVU7UUFDZixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQTZDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNsRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDMUM7aUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEI7WUFDRCxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQjtTQUNGO1FBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVksRUFBRSxNQUFrQjtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RCxNQUFNLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUMxQixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyx3QkFBd0IsQ0FBQyxLQUFvQixFQUFFLE1BQWtCO1FBQ3ZFLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQy9CLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1QyxJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQ25ELFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNoRjtnQkFDQSxPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0Q7U0FDRjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFTyx5QkFBeUIsQ0FBQyxLQUFvQixFQUFFLFFBQTJCO1FBQ2pGLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQXNDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFFLE1BQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFZO1FBQ2xCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUF3QixDQUFDO1FBQzlDLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQzlHLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQW9CO1FBQzVCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQ25ELE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3RGLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFDakIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNwQixJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUM7b0JBQzVCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxXQUFXLEVBQUU7d0JBQzdCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzRCQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUN2Qjs2QkFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7NEJBQ3hCLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUN6QyxJQUFJLENBQUMsRUFBRSxDQUFFLElBQUksQ0FBQyxLQUFvQixDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUM5RCxJQUFJLE1BQU0sRUFBRTtnQ0FDVixTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUMzQixlQUFlLEdBQUcsSUFBSSxDQUFDOzZCQUN4Qjt5QkFDRjs2QkFBTTs0QkFDTCxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs0QkFDN0IsZUFBZSxHQUFHLElBQUksQ0FBQzt5QkFDeEI7d0JBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQztxQkFDaEI7b0JBQ0QsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFlBQVksRUFBRTt3QkFDOUIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUU7NEJBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQ3JCOzZCQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzRCQUMvRCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNoRCxJQUFJLENBQUMsS0FBb0IsQ0FBQyxTQUFTLElBQUssSUFBSSxDQUFDLEtBQW9CLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDOUYsSUFBSSxNQUFNLEVBQUU7Z0NBQ1YsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDM0IsZUFBZSxHQUFHLElBQUksQ0FBQzs2QkFDeEI7eUJBQ0Y7NkJBQU07NEJBQ0wsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDOzRCQUN6QixlQUFlLEdBQUcsSUFBSSxDQUFDO3lCQUN4Qjt3QkFDRCxPQUFPLEdBQUcsSUFBSSxDQUFDO3FCQUNoQjtvQkFFRCxJQUFJLGVBQWUsRUFBRTt3QkFDbkIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNqRSxJQUFJLEdBQUcsRUFBRTs0QkFDUCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7eUJBQ3RCO3dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN4QjtvQkFFRCxJQUFJLE9BQU8sRUFBRTt3QkFDWCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ3ZCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO3FCQUNsQztpQkFDRjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLFFBQTJCO1FBQzdDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUNyQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBRSxHQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUN2RixDQUFDO0lBQ0osQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFRO1FBQ1gsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckIsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNsQyxPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEdBQVE7UUFDbkIsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUQ7YUFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQzNEO2FBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsR0FBUTtRQUNmLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUU7YUFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDM0U7YUFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEc7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDOztBQS9xQkgsOERBaXJCQztrR0FycUJZLHlCQUF5Qjs4REFBekIseUJBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZsQ0FSekI7WUFDVDtnQkFDRSxPQUFPLEVBQUUseUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDeEQsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO1FDdENILDJIQUNFO1FBSUYsMkhBQ0U7UUFFRiwySEFDRTtRQUVGLDJIQUNFO1FBRUYsMkhBQ0U7UUFFRiw2SEFBK0I7UUFDL0IsNkhBQ0U7UUFHRiw4SEFDRTtRQWFGLHdDQXlDRTtRQWJFLHNIQUFtQixLQUFLLFNBQUUscUJBQWlCLElBQUMsMkdBQ3hCLElBQUksU0FBRSxzQkFBa0IsSUFEQSxxR0FFbEMsb0JBQWdCLElBRmtCLGlHQUdwQyxrQkFBYyxJQUhzQixtR0FJbkMsc0JBQWtCLElBSmlCLHFHQUtsQyxvQkFBZ0IsSUFMa0IsbUdBTW5DLG1CQUFlLElBTm9CLCtGQU9yQyxvQkFBZ0IsSUFQcUIscUdBUWxDLHVCQUFtQixJQVJlLHFHQVNsQyx1QkFBbUIsSUFUZSwrR0FVN0IsNEJBQXdCLElBVks7UUFhOUMsZ0lBQ0U7UUF5Q0YsK0ZBQ0U7UUFLSixpQkFBWTs7UUF2RlIsZ0JBQXFCO1FBQXJCLHVDQUFxQixvQ0FBQSx5Q0FBQSw0QkFBQSwwQ0FBQSxnQ0FBQSwwQ0FBQSx1Q0FBQSw0QkFBQSxzQkFBQSwwQ0FBQSxrQ0FBQSwwQkFBQSx5Q0FBQSw4QkFBQSwwQkFBQSwwQkFBQSxrREFBQSxnQ0FBQSxnQ0FBQSxpREFBQSx1Q0FBQSxvQ0FBQSw4QkFBQSx3QkFBQSwwQkFBQSw0QkFBQTtRQWlGVCxlQUFtQztRQUFuQywwQ0FBbUM7O2tERC9FdEMseUJBQXlCO2NBWnJDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7Z0JBQ2pELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUseUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDeEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7a0JBSUUsWUFBSzs7a0JBRUwsWUFBSzs7a0JBRUwsWUFBSzs7a0JBRUwsWUFBSzs7a0JBRUwsWUFBSzs7a0JBRUwsWUFBSzs7a0JBRUwsWUFBSzs7a0JBRUwsWUFBSzs7a0JBRUwsWUFBSzs7a0JBRUwsWUFBSzs7a0JBbUJMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUdMLGFBQU07O2tCQUdOLGFBQU07O2tCQUdOLGFBQU07O2tCQUdOLGFBQU07O2tCQUdOLGFBQU07O2tCQUVOLGFBQU07O2tCQUVOLGFBQU07O2tCQUVOLGFBQU07O2tCQUVOLGFBQU07O2tCQUdOLGFBQU07O2tCQUVOLGFBQU07O2tCQUVOLGdCQUFTO21CQUFDLG1CQUFtQixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7a0JBQzdDLGdCQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7a0JBQzFDLGdCQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tCQUN6QyxnQkFBUzttQkFBQyxrQkFBa0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tCQUM1QyxnQkFBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tCQUMzQyxnQkFBUzttQkFBQyxvQkFBb0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tCQUM5QyxnQkFBUzttQkFBQyxrQkFBa0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tCQUM1QyxnQkFBUzttQkFBQyxnQkFBZ0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tCQUUxQyxZQUFLOztrQkFFTCxZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Ryb3Bkb3duUG9zaXRpb24sIE5nU2VsZWN0Q29tcG9uZW50fSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIFN1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSAndXVpZCc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRW50aXR5VHJlZVNlcnZpY2UgfSBmcm9tICcuLi9lbnRpdHktdHJlZS5zZXJ2aWNlJztcbmltcG9ydCB7IEVudGl0eUZldGNoUGFyYW1zIH0gZnJvbSAnLi4vbW9kZWxzL2VudGl0eS10cmVlLWZldGNoLXBhcmFtcyc7XG5pbXBvcnQgeyBFbnRpdHlUcmVlU2VsZWN0TGFiZWxzIH0gZnJvbSAnLi4vbW9kZWxzL2VudGl0eS10cmVlLXNlbGVjdC1sYWJlbHMnO1xuaW1wb3J0IHsgRW50aXR5VHJlZVNlbGVjdENvbnRyb2xzIH0gZnJvbSAnLi4vbW9kZWxzL2VudGl0eS10cmVlLXNlbGVjdC1jb250cm9scyc7XG5pbXBvcnQgeyBUcmVlRW50aXR5IH0gZnJvbSAnLi4vdHlwZXMvdHJlZS1lbnRpdHknO1xuaW1wb3J0IHsgREVGQVVMVF9MQUJFTFMgfSBmcm9tICcuLi9jb25zdHMvZGVmYXVsdC1sYWJlbHMnO1xuXG5mdW5jdGlvbiBpc1RyZWVFbnRpdHkob2JqOiBhbnkpOiBvYmogaXMgVHJlZUVudGl0eSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgJ3R5cGUnIGluIG9iaiAmJiBvYmoudHlwZSA9PT0gJ3RyZWVFbnRpdHknO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3cy1lbnRpdHktdHJlZS1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vZW50aXR5LXRyZWUtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW50aXR5LXRyZWUtc2VsZWN0LmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFbnRpdHlUcmVlU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eVRyZWVTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgLyoqIGxhYmVscyBmb3Igbmctc2VsZWN0ICovXG4gIEBJbnB1dCgpIGxhYmVsczogRW50aXR5VHJlZVNlbGVjdExhYmVscyA9IHt9O1xuICAvKiogY29udHJvbCB0ZW1wbGF0ZXMgZm9yIHRoZSB0b29sYmFyIGJ1dHRvbnMgKi9cbiAgQElucHV0KCkgY29udHJvbHM6IEVudGl0eVRyZWVTZWxlY3RDb250cm9scyA9IHt9O1xuICAvKiogcXVlcnkgcGFyYW1ldGVycyB0byBzY29wZSB0aGUgYXZhaWxhYmxlIGVudGl0aWVzICovXG4gIEBJbnB1dCgpIHF1ZXJ5OiBPbWl0PEVudGl0eUZldGNoUGFyYW1zLCAnbGltaXQnIHwgJ29mZnNldCcgfCAnZGVwdGgnPjtcbiAgLyoqIGVudGl0aWVzIGlucHV0IGFycmF5ICovXG4gIEBJbnB1dCgpIGVudGl0aWVzOiBBcnJheTxhbnk+ID0gbnVsbDtcbiAgLyoqIGFsd2F5cyBtYWtlIGNoaWxkcmVuIHNlbGVjdGFibGUgb2YgcGFzc2VkIGVudGl0aWVzICovXG4gIEBJbnB1dCgpIHNlbGVjdGFibGVDaGlsZHJlbiA9IHRydWU7XG4gIC8qKiBzaG93IHVuc2VsZWN0YWJsZSBwYXJlbnRzICovXG4gIEBJbnB1dCgpIHNob3dVbnNlbGVjdGFibGVQYXJlbnRzID0gdHJ1ZTtcbiAgLyoqIHdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIGZ1bGwgcGF0aCBmb3Igc2VsZWN0ZWQgZW50aXRpZXMgKi9cbiAgQElucHV0KCkgc2hvd0Z1bGxQYXRoID0gdHJ1ZTtcbiAgLyoqIHdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIGhlYWRlciBjb250cm9scyAqL1xuICBASW5wdXQoKSBzaG93Q29udHJvbHMgPSB0cnVlO1xuICAvKiogd2hldGhlciB0byB1c2UgYXBpIGNhY2hpbmcgb3Igbm90LCBjYWNoaW5nIGlzIGRvbmUgcGVyIHF1ZXJ5IHJlcXVlc3Qgb2JqZWN0LCBzZWUgRW50aXR5VHJlZVNlcnZpY2UgZm9yIG1vcmUgZGV0YWlscyAqL1xuICBASW5wdXQoKSBjYWNoZSA9IHRydWU7XG4gIC8qKiBpZiB0aGUgdHJlZSBpcyBleHBhbmRlZCBieSBkZWZhdWx0ICovXG4gIEBJbnB1dCgpIGRlZmF1bHRFeHBhbmQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBleHBhbmRlZFNlYXJjaDogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICBwcml2YXRlIGZsYXR0ZW5lZEVudGl0aWVzOiBBcnJheTxhbnk+ID0gW107XG4gIHByaXZhdGUgZmxhdHRlbmVkVHJlZUVudGl0aWVzOiBBcnJheTxUcmVlRW50aXR5PiA9IFtdO1xuICBwcml2YXRlIGxhc3RUZXJtID0gJyAnO1xuICBwcml2YXRlIGxhc3RTZWFyY2g7XG4gIHByaXZhdGUgcmVmcmVzaGluZyA9IGZhbHNlO1xuICBwcml2YXRlIHVwZGF0ZSA9IG5ldyBTdWJqZWN0PFRyZWVFbnRpdHk+KCk7XG4gIHByaXZhdGUgaHRtbElkOiBzdHJpbmc7XG4gIHByaXZhdGUgZmV0Y2hlZFRyZWVFbnRpdGllczogQXJyYXk8VHJlZUVudGl0eT4gPSBbXTtcbiAgcHJpdmF0ZSBjYWNoZWRXcml0ZVZhbHVlU3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSB0cmVlRW50aXRpZXNTdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSB3cml0ZVZhbHVlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGhhc0ZvY3VzID0gZmFsc2U7XG4gIGxvYWRpbmcgPSB0cnVlO1xuICB0cmVlRW50aXRpZXM6IEFycmF5PFRyZWVFbnRpdHk+ID0gW107XG4gIGV4cGFuZGVkOiBBcnJheTxudW1iZXI+ID0gW107XG5cbiAgLyoqIG5nLXNlbGVjdCBpbnB1dCAqL1xuICBASW5wdXQoKSBhcHBlbmRUbyA9IG51bGw7XG4gIC8qKiBuZy1zZWxlY3QgaW5wdXQgKi9cbiAgQElucHV0KCkgY2xvc2VPblNlbGVjdCA9IHRydWU7XG4gIC8qKiBuZy1zZWxlY3QgaW5wdXQgKi9cbiAgQElucHV0KCkgY2xlYXJhYmxlID0gdHJ1ZTtcbiAgLyoqIG5nLXNlbGVjdCBpbnB1dCAqL1xuICBASW5wdXQoKSBjbGVhck9uQmFja3NwYWNlID0gdHJ1ZTtcbiAgLyoqIG5nLXNlbGVjdCBpbnB1dCAqL1xuICBASW5wdXQoKSBkcm9wZG93blBvc2l0aW9uOiBEcm9wZG93blBvc2l0aW9uID0gJ2F1dG8nO1xuICAvKiogbmctc2VsZWN0IGlucHV0ICovXG4gIEBJbnB1dCgpIG1hcmtGaXJzdCA9IHRydWU7XG4gIC8qKiBuZy1zZWxlY3QgaW5wdXQgKi9cbiAgQElucHV0KCkgaXNPcGVuOiBib29sZWFuID0gdW5kZWZpbmVkO1xuICAvKiogbmctc2VsZWN0IGlucHV0ICovXG4gIEBJbnB1dCgpIG1heFNlbGVjdGVkSXRlbXM6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgLyoqIG5nLXNlbGVjdCBpbnB1dCAqL1xuICBASW5wdXQoKSBoaWRlU2VsZWN0ZWQgPSBmYWxzZTtcbiAgLyoqIG5nLXNlbGVjdCBpbnB1dCAqL1xuICBASW5wdXQoKSBtdWx0aXBsZSA9IGZhbHNlO1xuICAvKiogbmctc2VsZWN0IGlucHV0ICovXG4gIEBJbnB1dCgpIHNlYXJjaGFibGUgPSB0cnVlO1xuICAvKiogbmctc2VsZWN0IGlucHV0ICovXG4gIEBJbnB1dCgpIHJlYWRvbmx5ID0gZmFsc2U7XG4gIC8qKiBuZy1zZWxlY3QgaW5wdXQgKi9cbiAgQElucHV0KCkgc2VhcmNoV2hpbGVDb21wb3NpbmcgPSB0cnVlO1xuICAvKiogbmctc2VsZWN0IGlucHV0ICovXG4gIEBJbnB1dCgpIHNlbGVjdE9uVGFiID0gZmFsc2U7XG4gIC8qKiBuZy1zZWxlY3QgaW5wdXQgKi9cbiAgQElucHV0KCkgb3Blbk9uRW50ZXIgPSB0cnVlO1xuICAvKiogbmctc2VsZWN0IGlucHV0ICovXG4gIEBJbnB1dCgpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcbiAgLyoqIG5nLXNlbGVjdCBpbnB1dCAqL1xuICBASW5wdXQoKSBpbnB1dEF0dHJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gdW5kZWZpbmVkO1xuICAvKiogbmctc2VsZWN0IGlucHV0ICovXG4gIEBJbnB1dCgpIHRhYkluZGV4OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIC8qKiBuZy1zZWxlY3Qgb3V0cHV0ICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8qKiBuZy1zZWxlY3Qgb3V0cHV0ICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKiogbmctc2VsZWN0IG91dHB1dCAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8qKiBuZy1zZWxlY3Qgb3V0cHV0ICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8qKiBuZy1zZWxlY3Qgb3V0cHV0ICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKiogbmctc2VsZWN0IG91dHB1dCAqL1xuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8eyB0ZXJtOiBzdHJpbmc7IGl0ZW1zOiBUcmVlRW50aXR5W107IH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IHRlcm06IHN0cmluZzsgaXRlbXM6IFRyZWVFbnRpdHlbXTsgfT4oKTtcbiAgLyoqIG5nLXNlbGVjdCBvdXRwdXQgKi9cbiAgQE91dHB1dCgpIGNsZWFyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKiogbmctc2VsZWN0IG91dHB1dCAqL1xuICBAT3V0cHV0KCkgYWRkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKiogbmctc2VsZWN0IG91dHB1dCAqL1xuICBAT3V0cHV0KCkgcmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKiogbmctc2VsZWN0IG91dHB1dCAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSBzY3JvbGw6IEV2ZW50RW1pdHRlcjx7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyOyB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlcjsgfT4oKTtcbiAgLyoqIG5nLXNlbGVjdCBvdXRwdXQgKi9cbiAgQE91dHB1dCgpIHNjcm9sbFRvRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ25nU2VsZWN0Q29tcG9uZW50Jywge3N0YXRpYzogdHJ1ZX0pIG5nU2VsZWN0Q29tcG9uZW50OiBOZ1NlbGVjdENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnd3JhcHBlckNvbnRyb2wnLCB7c3RhdGljOiB0cnVlfSkgd3JhcHBlckNvbnRyb2w6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPiB9PjtcbiAgQFZpZXdDaGlsZCgnZXhwYW5kQ29udHJvbCcsIHtzdGF0aWM6IHRydWV9KSBleHBhbmRDb250cm9sOiBUZW1wbGF0ZVJlZjx7IGVuYWJsZWQ6IGJvb2xlYW4sIGNsaWNrOiAoKSA9PiB2b2lkIH0+O1xuICBAVmlld0NoaWxkKCdleHBhbmRBbGxDb250cm9sJywge3N0YXRpYzogdHJ1ZX0pIGV4cGFuZEFsbENvbnRyb2w6IFRlbXBsYXRlUmVmPHsgY2xpY2s6ICgpID0+IHZvaWQgfT47XG4gIEBWaWV3Q2hpbGQoJ2NvbGxhcHNlQ29udHJvbCcsIHtzdGF0aWM6IHRydWV9KSBjb2xsYXBzZUNvbnRyb2w6IFRlbXBsYXRlUmVmPHsgZW5hYmxlZDogYm9vbGVhbiwgY2xpY2s6ICgpID0+IHZvaWQgfT47XG4gIEBWaWV3Q2hpbGQoJ2NvbGxhcHNlQWxsQ29udHJvbCcsIHtzdGF0aWM6IHRydWV9KSBjb2xsYXBzZUFsbENvbnRyb2w6IFRlbXBsYXRlUmVmPHsgY2xpY2s6ICgpID0+IHZvaWQgfT47XG4gIEBWaWV3Q2hpbGQoJ3NlcGFyYXRvckNvbnRyb2wnLCB7c3RhdGljOiB0cnVlfSkgc2VwYXJhdG9yQ29udHJvbDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoJ3Nob3dpbmdDb250cm9sJywge3N0YXRpYzogdHJ1ZX0pIHNob3dpbmdDb250cm9sOiBUZW1wbGF0ZVJlZjx7IHNob3dpbmc6IG51bWJlciwgdG90YWw6IG51bWJlciB9PjtcbiAgLyoqIGNvbXBhcmUgZnVuY3Rpb24gZm9yIG5nLXNlbGVjdCAqL1xuICBASW5wdXQoKSBjb21wYXJlV2l0aDogKGE6IGFueSwgYjogYW55KSA9PiBib29sZWFuO1xuICAvKiogdGhlIGlkIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgSW5wdXQgZW50aXRpZXMgKi9cbiAgQElucHV0KCkgZW50aXR5SWRDYWxsYmFjazogKGVudGl0eTogYW55KSA9PiBudW1iZXIgPSAoZW50aXR5OiBhbnkpID0+IGVudGl0eSA/IGVudGl0eS5pZCA6IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVudGl0eVRyZWVTZXJ2aWNlOiBFbnRpdHlUcmVlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmh0bWxJZCA9IHV1aWR2NCgpO1xuICAgIHRoaXMuY29tcGFyZVdpdGggPSB0aGlzLmNvbXBhcmVXaXRoIHx8ICgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgYUlkID0gdGhpcy50b0lkKGEpO1xuICAgICAgY29uc3QgYklkID0gdGhpcy50b0lkKGIpO1xuICAgICAgcmV0dXJuIGFJZCAmJiBiSWQgJiYgYUlkID09PSBiSWQ7XG4gICAgfSk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VhcmNoRm4gPSB0aGlzLnNlYXJjaEZuLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXQgY3VycmVudE1hcmtlZEVudGl0eSgpOiBUcmVlRW50aXR5IHtcbiAgICByZXR1cm4gKHRoaXMubmdTZWxlY3RDb21wb25lbnQuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0gPyB0aGlzLm5nU2VsZWN0Q29tcG9uZW50Lml0ZW1zTGlzdC5tYXJrZWRJdGVtLnZhbHVlIDogbnVsbCkgYXMgVHJlZUVudGl0eTtcbiAgfVxuXG4gIGdldCBmaWx0ZXJlZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldEZpbHRlcmVkKHRoaXMudHJlZUVudGl0aWVzKTtcbiAgfVxuXG4gIGdldCB0b3RhbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5nU2VsZWN0Q29tcG9uZW50Lml0ZW1zTGlzdC5pdGVtcy5sZW5ndGg7XG4gIH1cblxuICBnZXQgcXVlcnlQYXJhbXMoKTogRW50aXR5RmV0Y2hQYXJhbXMge1xuICAgIHJldHVybiB7bGltaXQ6IDk5OTksIGRlcHRoOiAxMCwgLi4udGhpcy5xdWVyeX07XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCdlbnRpdGllcycgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5jcmVhdGVUcmVlRW50aXRpZXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxhYmVscyA9IHsuLi5ERUZBVUxUX0xBQkVMUywgLi4udGhpcy5sYWJlbHN9O1xuICAgIHRoaXMuY29udHJvbHMgPSB7XG4gICAgICB3cmFwcGVyOiB0aGlzLndyYXBwZXJDb250cm9sLFxuICAgICAgZXhwYW5kOiB0aGlzLmV4cGFuZENvbnRyb2wsXG4gICAgICBleHBhbmRBbGw6IHRoaXMuZXhwYW5kQWxsQ29udHJvbCxcbiAgICAgIGNvbGxhcHNlOiB0aGlzLmNvbGxhcHNlQ29udHJvbCxcbiAgICAgIGNvbGxhcHNlQWxsOiB0aGlzLmNvbGxhcHNlQWxsQ29udHJvbCxcbiAgICAgIHNlcGFyYXRvcjogdGhpcy5zZXBhcmF0b3JDb250cm9sLFxuICAgICAgc2hvd2luZzogdGhpcy5zaG93aW5nQ29udHJvbCxcbiAgICAgIC4uLnRoaXMuY29udHJvbHNcbiAgICB9O1xuICAgIGxldCBvYnNlcnZhYmxlO1xuICAgIGlmICh0aGlzLmNhY2hlID09PSBmYWxzZSkge1xuICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuZW50aXR5VHJlZVNlcnZpY2UubGlzdCh0aGlzLnF1ZXJ5UGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuZW50aXR5VHJlZVNlcnZpY2UuZ2V0Q2FjaGVkU3ViamVjdCh0aGlzLnF1ZXJ5UGFyYW1zKTtcbiAgICB9XG5cbiAgICB0aGlzLndyaXRlVmFsdWVTdWJzY3JpcHRpb24gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuY2FjaGVkV3JpdGVWYWx1ZVN1YmplY3QsXG4gICAgICB0aGlzLnRyZWVFbnRpdGllc1N1YmplY3QsXG4gICAgXSkuc3Vic2NyaWJlKChbdmFsdWVdKSA9PiB0aGlzLm5nU2VsZWN0Q29tcG9uZW50LndyaXRlVmFsdWUodGhpcy5tdWx0aXBsZSA/XG4gICAgICAoKHZhbHVlIHx8IFtdKSBhcyBBcnJheTxhbnk+KS5tYXAobyA9PiB0aGlzLnRvVHJlZUVudGl0eShvKSkuZmlsdGVyKG8gPT4gISFvKSA6XG4gICAgICB0aGlzLnRvVHJlZUVudGl0eSh2YWx1ZSkpKTtcblxuICAgIG9ic2VydmFibGUuc3Vic2NyaWJlKGVudGl0aWVzID0+IHtcbiAgICAgIGlmICghIWVudGl0aWVzKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hlZFRyZWVFbnRpdGllcyA9IGVudGl0aWVzLndzX2VudGl0eV9saXN0Lm1hcChlbnRpdHkgPT4gdGhpcy5kZWVwQ29weUVudGl0eShlbnRpdHkgYXMgVHJlZUVudGl0eSkpO1xuICAgICAgICB0aGlzLmNyZWF0ZVRyZWVFbnRpdGllcygpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmVlRW50aXRpZXNTdWJqZWN0Lm5leHQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5uZ1NlbGVjdENvbXBvbmVudC5maWx0ZXIodGhpcy5sYXN0VGVybSk7XG4gICAgICB0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24sIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVUcmVlRW50aXRpZXMoKTogdm9pZCB7XG4gICAgdGhpcy50cmVlRW50aXRpZXMgPSB0aGlzLmZldGNoZWRUcmVlRW50aXRpZXMubWFwKGUgPT4gdGhpcy5kZWVwQ29weUVudGl0eShlKSk7XG4gICAgdGhpcy5mbGF0dGVuZWRFbnRpdGllcyA9IHRoaXMuZmxhdHRlbih0aGlzLmVudGl0aWVzIHx8IFtdKTtcbiAgICB0aGlzLnNldFNlbGVjdGFibGUoXG4gICAgICB0aGlzLnRyZWVFbnRpdGllcyxcbiAgICAgIHRoaXMuZW50aXRpZXMgPT09IG51bGwgPyB0cnVlIDogdGhpcy5mbGF0dGVuZWRFbnRpdGllcy5tYXAoZW50aXR5ID0+IGVudGl0eS5pZClcbiAgICApO1xuICAgIGlmICh0aGlzLnNlbGVjdGFibGVDaGlsZHJlbikge1xuICAgICAgdGhpcy5zZXRTZWxlY3RhYmxlRm9yQ2hpbGRyZW4odGhpcy50cmVlRW50aXRpZXMpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyVW5zZWxlY3RhYmxlVHJlZXModGhpcy50cmVlRW50aXRpZXMpO1xuICAgIHRoaXMuc2V0UGFyZW50c0ZvckVudGl0aWVzKHRoaXMudHJlZUVudGl0aWVzKTtcbiAgICB0aGlzLnNldFBhdGhOYW1lc0FuZFR5cGVzKHRoaXMudHJlZUVudGl0aWVzKTtcbiAgICBpZiAoIXRoaXMuc2hvd1Vuc2VsZWN0YWJsZVBhcmVudHMpIHtcbiAgICAgIHRoaXMudHJlZUVudGl0aWVzID0gdGhpcy5mbGF0dGVuVW5zZWxlY3RhYmxlUGFyZW50cyh0aGlzLnRyZWVFbnRpdGllcyk7XG4gICAgfVxuICAgIHRoaXMuZmxhdHRlbmVkVHJlZUVudGl0aWVzID0gdGhpcy5mbGF0dGVuKHRoaXMudHJlZUVudGl0aWVzKTtcbiAgICBpZiAodGhpcy5kZWZhdWx0RXhwYW5kKSB7XG4gICAgICB0aGlzLmV4cGFuZEFsbCh0aGlzLnRyZWVFbnRpdGllcywgZmFsc2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oYXNGb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZS5uZXh0KG51bGwpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlZXBDb3B5RW50aXR5KGVudGl0eTogVHJlZUVudGl0eSk6IGFueSB7XG4gICAgcmV0dXJuIHsuLi5lbnRpdHksIGNoaWxkcmVuOiBlbnRpdHkuY2hpbGRyZW4ubWFwKGUgPT4gdGhpcy5kZWVwQ29weUVudGl0eShlKSl9O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy53cml0ZVZhbHVlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93biwgdHJ1ZSk7XG4gIH1cblxuICBpc0RvbUlkZW50aWZpZXIobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5hbWUuc3RhcnRzV2l0aChgXyR7dGhpcy5odG1sSWR9YCk7XG4gIH1cblxuICBnZXREb21JZGVudGlmaWVyKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBfJHt0aGlzLmh0bWxJZH0tJHtuYW1lfWA7XG4gIH1cblxuICBzdHJpcERvbUlkZW50aWZpZXIobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKGBfJHt0aGlzLmh0bWxJZH0tYCwgJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBmbGF0dGVuKGVudGl0aWVzOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIGVudGl0aWVzLnJlZHVjZSgoYWNjLCBlbnRpdHkpID0+IGVudGl0eS5jaGlsZHJlbiA/IFsuLi5hY2MsIGVudGl0eSwgLi4udGhpcy5mbGF0dGVuKGVudGl0eS5jaGlsZHJlbildIDogWy4uLmFjYywgZW50aXR5XSwgW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQYXJlbnRzRm9yRW50aXRpZXMoZW50aXRpZXM6IEFycmF5PFRyZWVFbnRpdHk+KTogdm9pZCB7XG4gICAgZW50aXRpZXMuZm9yRWFjaChlID0+IHtcbiAgICAgIGUuY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcbiAgICAgICAgYy5wYXJlbnQgPSBlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFBhcmVudHNGb3JFbnRpdGllcyhlLmNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0UGF0aE5hbWVzQW5kVHlwZXMoZW50aXRpZXM6IEFycmF5PFRyZWVFbnRpdHk+KTogdm9pZCB7XG4gICAgZW50aXRpZXMuZm9yRWFjaChlID0+IHtcbiAgICAgIGNvbnN0IHBhdGhzID0gW107XG4gICAgICBsZXQgcCA9IGU7XG4gICAgICB3aGlsZSAocCkge1xuICAgICAgICBwYXRocy5wdXNoKHAubmFtZS50ZXh0KTtcbiAgICAgICAgcCA9IHAucGFyZW50O1xuICAgICAgfVxuICAgICAgZS5hbGxQYXRocyA9IHBhdGhzLnJldmVyc2UoKTtcbiAgICAgIGUuZnVsbFBhdGhOYW1lID0gZS5hbGxQYXRocy5qb2luKCcgPiAnKTtcbiAgICAgIGUuYWxsUGF0aHMgPSBlLmFsbFBhdGhzLm1hcChuID0+IG4udG9Mb3dlckNhc2UoKSk7XG4gICAgICBlLnBhdGhzID0gWy4uLmUuYWxsUGF0aHNdO1xuICAgICAgZS5wYXRocy5wb3AoKTtcbiAgICAgIGUudHlwZSA9ICd0cmVlRW50aXR5JztcblxuICAgICAgdGhpcy5zZXRQYXRoTmFtZXNBbmRUeXBlcyhlLmNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2VsZWN0YWJsZShlbnRpdGllczogQXJyYXk8VHJlZUVudGl0eT4sIHNlbGVjdGFibGVzOiBBcnJheTxudW1iZXI+IHwgdHJ1ZSk6IHZvaWQge1xuICAgIGVudGl0aWVzLmZvckVhY2goZSA9PiB7XG4gICAgICBlLmZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgIGUuc2VsZWN0YWJsZSA9IHNlbGVjdGFibGVzID09PSB0cnVlID8gdHJ1ZSA6IHNlbGVjdGFibGVzLmluY2x1ZGVzKGUuaWQpO1xuICAgICAgdGhpcy5zZXRTZWxlY3RhYmxlKGUuY2hpbGRyZW4sIHNlbGVjdGFibGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2VsZWN0YWJsZUZvckNoaWxkcmVuKGVudGl0aWVzOiBBcnJheTxUcmVlRW50aXR5Pik6IHZvaWQge1xuICAgIGVudGl0aWVzLmZvckVhY2goZSA9PiB7XG4gICAgICBpZiAoZS5zZWxlY3RhYmxlKSB7XG4gICAgICAgIGUuY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcbiAgICAgICAgICBjLnNlbGVjdGFibGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U2VsZWN0YWJsZUZvckNoaWxkcmVuKGUuY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhclNhZmVDaGlsZHJlbihlbnRpdHk6IFRyZWVFbnRpdHkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZW50aXR5LmNoaWxkcmVuLmV2ZXJ5KGUgPT4gIWUuc2VsZWN0YWJsZSAmJiB0aGlzLmNsZWFyU2FmZUNoaWxkcmVuKGUpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJVbnNlbGVjdGFibGVUcmVlcyhlbnRpdGllczogQXJyYXk8VHJlZUVudGl0eT4pOiB2b2lkIHtcbiAgICBsZXQgY2xlYXIgPSB0cnVlO1xuICAgIHdoaWxlIChjbGVhcikge1xuICAgICAgY2xlYXIgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5jbGVhclVuc2VsZWN0YWJsZVRyZWVzKGVudGl0aWVzW2ldLmNoaWxkcmVuKTtcbiAgICAgICAgaWYgKCFlbnRpdGllc1tpXS5zZWxlY3RhYmxlICYmIHRoaXMuY2xlYXJTYWZlQ2hpbGRyZW4oZW50aXRpZXNbaV0pKSB7XG4gICAgICAgICAgZW50aXRpZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGNsZWFyID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJVbnNlbGVjdGFibGVUcmVlKGVudGl0eTogVHJlZUVudGl0eSk6IGJvb2xlYW4ge1xuICAgIGlmIChlbnRpdHkuY2hpbGRyZW4ubGVuZ3RoID09PSAwIHx8IGVudGl0eS5jaGlsZHJlbi5ldmVyeShjID0+ICFjLnNlbGVjdGFibGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJVbnNlbGVjdGFibGVUcmVlcyhlbnRpdHkuY2hpbGRyZW4pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmbGF0dGVuVW5zZWxlY3RhYmxlUGFyZW50cyhlbnRpdGllczogQXJyYXk8VHJlZUVudGl0eT4pOiBUcmVlRW50aXR5W10ge1xuICAgIGVudGl0aWVzID0gWy4uLmVudGl0aWVzXTtcbiAgICBsZXQgbW9kaWZpZWQgPSB0cnVlO1xuICAgIHdoaWxlIChtb2RpZmllZCkge1xuICAgICAgbW9kaWZpZWQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFlbnRpdGllc1tpXS5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgY29uc3QgY2hpbGRyZW46IEFycmF5PFRyZWVFbnRpdHk+ID0gWy4uLmVudGl0aWVzW2ldLmNoaWxkcmVuXTtcbiAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgYy5wYXJlbnQgPSBlbnRpdGllc1tpXS5wYXJlbnQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZW50aXRpZXMuc3BsaWNlKGksIDEsIC4uLmNoaWxkcmVuKTtcbiAgICAgICAgICBtb2RpZmllZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbnRpdGllc1tpXS5jaGlsZHJlbiA9IHRoaXMuZmxhdHRlblVuc2VsZWN0YWJsZVBhcmVudHMoZW50aXRpZXNbaV0uY2hpbGRyZW4pO1xuICAgIH1cbiAgICByZXR1cm4gZW50aXRpZXM7XG4gIH1cblxuICBpc0V4cGFuZGFibGUoZW50aXR5OiBUcmVlRW50aXR5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGVudGl0eS5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICB9XG5cbiAgZXhwYW5kRm4oZW50aXR5OiBUcmVlRW50aXR5KTogYW55IHtcbiAgICByZXR1cm4gKCkgPT4gZW50aXR5ICYmIHRoaXMuZXhwYW5kKGVudGl0eSk7XG4gIH1cblxuICBleHBhbmQoZW50aXR5OiBUcmVlRW50aXR5KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmV4cGFuZGVkLmluY2x1ZGVzKGVudGl0eS5pZCkpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWQucHVzaChlbnRpdHkuaWQpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZS5uZXh0KGVudGl0eSk7XG4gIH1cblxuICBleHBhbmRBbGxGbigpOiBhbnkge1xuICAgIHJldHVybiAoKSA9PiB0aGlzLmV4cGFuZEFsbCh0aGlzLnRyZWVFbnRpdGllcyk7XG4gIH1cblxuICBleHBhbmRBbGwoZW50aXRpZXM6IEFycmF5PFRyZWVFbnRpdHk+LCB1cGRhdGUgPSB0cnVlKTogdm9pZCB7XG4gICAgZW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNFeHBhbmRhYmxlKGVudGl0eSkgJiYgIXRoaXMuZXhwYW5kZWQuaW5jbHVkZXMoZW50aXR5LmlkKSkge1xuICAgICAgICB0aGlzLmV4cGFuZGVkLnB1c2goZW50aXR5LmlkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwYW5kQWxsKGVudGl0eS5jaGlsZHJlbiwgZmFsc2UpO1xuICAgIH0pO1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlLm5leHQobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZXhwYW5kQXJyYXkoZW50aXRpZXM6IEFycmF5PFRyZWVFbnRpdHk+KTogdm9pZCB7XG4gICAgZW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmV4cGFuZGVkLmluY2x1ZGVzKGVudGl0eS5pZCkpIHtcbiAgICAgICAgdGhpcy5leHBhbmRlZC5wdXNoKGVudGl0eS5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGUubmV4dChudWxsKTtcbiAgfVxuXG4gIGV4cGFuZFRyZWUoZW50aXR5OiBUcmVlRW50aXR5KTogdm9pZCB7XG4gICAgbGV0IGN1cnJlbnRFbnRpdHkgPSBlbnRpdHk7XG4gICAgd2hpbGUgKGN1cnJlbnRFbnRpdHkpIHtcbiAgICAgIGlmICghdGhpcy5leHBhbmRlZC5pbmNsdWRlcyhjdXJyZW50RW50aXR5LmlkKSkge1xuICAgICAgICB0aGlzLmV4cGFuZGVkLnB1c2goY3VycmVudEVudGl0eS5pZCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50RW50aXR5ID0gY3VycmVudEVudGl0eS5wYXJlbnQ7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlLm5leHQobnVsbCk7XG4gIH1cblxuICBleHBhbmRUcmVlcyhlbnRpdGllczogQXJyYXk8VHJlZUVudGl0eT4pOiB2b2lkIHtcbiAgICBlbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiB7XG4gICAgICBsZXQgY3VycmVudEVudGl0eSA9IGVudGl0eTtcbiAgICAgIHdoaWxlIChjdXJyZW50RW50aXR5KSB7XG4gICAgICAgIGlmICghdGhpcy5leHBhbmRlZC5pbmNsdWRlcyhjdXJyZW50RW50aXR5LmlkKSkge1xuICAgICAgICAgIHRoaXMuZXhwYW5kZWQucHVzaChjdXJyZW50RW50aXR5LmlkKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50RW50aXR5ID0gY3VycmVudEVudGl0eS5wYXJlbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGUubmV4dChudWxsKTtcbiAgfVxuXG4gIGNvbGxhcHNlRm4oZW50aXR5OiBUcmVlRW50aXR5KTogYW55IHtcbiAgICByZXR1cm4gKCkgPT4gZW50aXR5ICYmIHRoaXMuY29sbGFwc2UoZW50aXR5KTtcbiAgfVxuXG4gIGNvbGxhcHNlKGVudGl0eTogVHJlZUVudGl0eSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZGVkLmluY2x1ZGVzKGVudGl0eS5pZCkpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWQuc3BsaWNlKHRoaXMuZXhwYW5kZWQuZmluZEluZGV4KGUgPT4gZSA9PT0gZW50aXR5LmlkKSwgMSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlLm5leHQoZW50aXR5KTtcbiAgfVxuXG4gIGNvbGxhcHNlQWxsRm4oKTogYW55IHtcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5jb2xsYXBzZUFsbCh0aGlzLnRyZWVFbnRpdGllcyk7XG4gIH1cblxuICBjb2xsYXBzZUFsbChlbnRpdGllczogQXJyYXk8VHJlZUVudGl0eT4sIHVwZGF0ZSA9IHRydWUpOiB2b2lkIHtcbiAgICBlbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0V4cGFuZGFibGUoZW50aXR5KSAmJiB0aGlzLmV4cGFuZGVkLmluY2x1ZGVzKGVudGl0eS5pZCkpIHtcbiAgICAgICAgdGhpcy5leHBhbmRlZC5zcGxpY2UodGhpcy5leHBhbmRlZC5maW5kSW5kZXgoZSA9PiBlID09PSBlbnRpdHkuaWQpLCAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29sbGFwc2VBbGwoZW50aXR5LmNoaWxkcmVuLCBmYWxzZSk7XG4gICAgfSk7XG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGUubmV4dChudWxsKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVFeHBhbmRlZChlbnRpdHk6IFRyZWVFbnRpdHkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBhbmRlZC5pbmNsdWRlcyhlbnRpdHkuaWQpKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkLnNwbGljZSh0aGlzLmV4cGFuZGVkLmZpbmRJbmRleChlID0+IGUgPT09IGVudGl0eS5pZCksIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cGFuZGVkLnB1c2goZW50aXR5LmlkKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUubmV4dChlbnRpdHkpO1xuICB9XG5cbiAgdG9nZ2xlRXhwYW5kZWRCeUlkKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBhbmRlZC5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWQuc3BsaWNlKHRoaXMuZXhwYW5kZWQuZmluZEluZGV4KGUgPT4gZSA9PT0gaWQpLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHBhbmRlZC5wdXNoKGlkKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUubmV4dChudWxsKTtcbiAgfVxuXG4gIGlzVHJlZUV4cGFuZGVkKGVudGl0eTogVHJlZUVudGl0eSk6IGJvb2xlYW4ge1xuICAgIGxldCBjdXJyZW50RW50aXR5ID0gZW50aXR5O1xuICAgIHdoaWxlIChjdXJyZW50RW50aXR5KSB7XG4gICAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZChjdXJyZW50RW50aXR5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50RW50aXR5ID0gY3VycmVudEVudGl0eS5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNFeHBhbmRlZChlbnRpdHk6IFRyZWVFbnRpdHkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZC5pbmNsdWRlcyhlbnRpdHkuaWQpO1xuICB9XG5cbiAgaXNDb2xsYXBzZWQoZW50aXR5OiBUcmVlRW50aXR5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmV4cGFuZGVkLmluY2x1ZGVzKGVudGl0eS5pZCk7XG4gIH1cblxuICBpc1Zpc2libGUoZW50aXR5OiBUcmVlRW50aXR5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFlbnRpdHkucGFyZW50IHx8IHRoaXMuaXNUcmVlRXhwYW5kZWQoZW50aXR5LnBhcmVudCk7XG4gIH1cblxuICB0cmFja0J5Rm4oZW50aXR5OiBUcmVlRW50aXR5KTogYW55IHtcbiAgICByZXR1cm4gZW50aXR5LmlkO1xuICB9XG5cbiAgb25DbGVhcihldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sYXN0VGVybSA9ICcgJztcbiAgICB0aGlzLnVwZGF0ZS5uZXh0KG51bGwpO1xuICAgIHRoaXMuY2xlYXIuZW1pdChldmVudCk7XG4gIH1cblxuICBvbk9wZW4oZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGUubmV4dChudWxsKTtcbiAgICB9KTtcbiAgICB0aGlzLm9wZW4uZW1pdChldmVudCk7XG4gIH1cblxuICBvblNlYXJjaChldmVudDogeyB0ZXJtOiBzdHJpbmc7IGl0ZW1zOiBUcmVlRW50aXR5W107IH0pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVmcmVzaGluZykge1xuICAgICAgaWYgKCEhZXZlbnQudGVybS50cmltKCkgJiYgIXRoaXMubGFzdFNlYXJjaC50cmltKCkpIHtcbiAgICAgICAgdGhpcy5leHBhbmRlZFNlYXJjaCA9IFsuLi50aGlzLmV4cGFuZGVkXTtcbiAgICAgIH0gZWxzZSBpZiAoIWV2ZW50LnRlcm0udHJpbSgpICYmICEhdGhpcy5sYXN0U2VhcmNoLnRyaW0oKSkge1xuICAgICAgICB0aGlzLmV4cGFuZGVkID0gWy4uLnRoaXMuZXhwYW5kZWRTZWFyY2hdO1xuICAgICAgICB0aGlzLnVwZGF0ZS5uZXh0KG51bGwpO1xuICAgICAgfVxuICAgICAgaWYgKCEhZXZlbnQudGVybS50cmltKCkpIHtcbiAgICAgICAgdGhpcy5leHBhbmRUcmVlcyhldmVudC5pdGVtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChldmVudC50ZXJtID09PSAnJykge1xuICAgICAgdGhpcy5sYXN0VGVybSA9ICcgJztcbiAgICAgIHRoaXMudXBkYXRlLm5leHQobnVsbCk7XG4gICAgfVxuICAgIHRoaXMubGFzdFNlYXJjaCA9IGV2ZW50LnRlcm07XG4gICAgdGhpcy5zZWFyY2guZW1pdChldmVudCk7XG4gIH1cblxuICBzZWFyY2hGbih0ZXJtOiBzdHJpbmcsIGVudGl0eTogVHJlZUVudGl0eSk6IGJvb2xlYW4ge1xuICAgIHRoaXMubGFzdFRlcm0gPSB0ZXJtO1xuICAgIGNvbnN0IHRlcm1zID0gISF0ZXJtLnRyaW0oKSA/IHRlcm0uc3BsaXQoL1xccyo+XFxzKi8pIDogW107XG4gICAgY29uc3QgdmlzaWJsZSA9IHRoaXMuZW50aXR5Q29udGFpbnNTZWFyY2hUZXJtKHRlcm1zLCBlbnRpdHkpO1xuICAgIGVudGl0eS5maWx0ZXJlZCA9IHZpc2libGU7XG4gICAgcmV0dXJuIHZpc2libGUgJiYgdGhpcy5pc1Zpc2libGUoZW50aXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5Q29udGFpbnNTZWFyY2hUZXJtKHRlcm1zOiBBcnJheTxzdHJpbmc+LCBlbnRpdHk6IFRyZWVFbnRpdHkpOiBib29sZWFuIHtcbiAgICBpZiAodGVybXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29weU9mVGVybXMgPSBbLi4udGVybXNdO1xuICAgICAgY29uc3QgYWN0dWFsVGVybSA9IGNvcHlPZlRlcm1zLnBvcCgpLnRyaW0oKTtcbiAgICAgIGlmIChcbiAgICAgICAgZW50aXR5Lm5hbWUudGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGFjdHVhbFRlcm0pICYmXG4gICAgICAgIGNvcHlPZlRlcm1zLmV2ZXJ5KHRlcm0gPT4gZW50aXR5LnBhdGhzLnNvbWUocGF0aCA9PiBwYXRoLmluY2x1ZGVzKHRlcm0udHJpbSgpKSkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbkNvbnRhaW5TZWFyY2hUZXJtKHRlcm1zLCBlbnRpdHkuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoaWxkcmVuQ29udGFpblNlYXJjaFRlcm0odGVybXM6IEFycmF5PHN0cmluZz4sIGVudGl0aWVzOiBBcnJheTxUcmVlRW50aXR5Pik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBlbnRpdGllcy5zb21lKGUgPT4gdGhpcy5lbnRpdHlDb250YWluc1NlYXJjaFRlcm0odGVybXMsIGUpKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGVudGl0eTogVHJlZUVudGl0eSB8IEFycmF5PFRyZWVFbnRpdHk+KTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLm11bHRpcGxlID8gKGVudGl0eSBhcyBBcnJheTxhbnk+KS5tYXAobyA9PiB0aGlzLnRvSWQobykpIDogdGhpcy50b0lkKGVudGl0eSkpO1xuICB9XG5cbiAgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC5kYXRhc2V0ICYmIHRhcmdldC5kYXRhc2V0LmVudGl0eUV4cGFuZGVySWQgJiYgdGhpcy5pc0RvbUlkZW50aWZpZXIodGFyZ2V0LmRhdGFzZXQuZW50aXR5RXhwYW5kZXJJZCkpIHtcbiAgICAgIGNvbnN0IGVudGl0eUlkID0gcGFyc2VJbnQodGhpcy5zdHJpcERvbUlkZW50aWZpZXIodGFyZ2V0LmRhdGFzZXQuZW50aXR5RXhwYW5kZXJJZCksIDApO1xuICAgICAgdGhpcy50b2dnbGVFeHBhbmRlZEJ5SWQoZW50aXR5SWQpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmhhc0ZvY3VzKSB7XG4gICAgICBjb25zdCBpdGVtc0xpc3QgPSB0aGlzLm5nU2VsZWN0Q29tcG9uZW50Lml0ZW1zTGlzdDtcbiAgICAgIGNvbnN0IGVudGl0eSA9IGl0ZW1zTGlzdC5tYXJrZWRJdGVtID8gaXRlbXNMaXN0Lm1hcmtlZEl0ZW0udmFsdWUgYXMgVHJlZUVudGl0eSA6IG51bGw7XG4gICAgICBpZiAoZW50aXR5KSB7XG4gICAgICAgIGlmIChldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgbGV0IHByZXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgc2Nyb2xsQW5kVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwYW5kYWJsZShlbnRpdHkpICYmIHRoaXMuaXNFeHBhbmRlZChlbnRpdHkpKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29sbGFwc2UoZW50aXR5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50aXR5LnBhcmVudCkge1xuICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBpdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5maW5kKFxuICAgICAgICAgICAgICAgIGl0ZW0gPT4gKGl0ZW0udmFsdWUgYXMgVHJlZUVudGl0eSkuaWQgPT09IGVudGl0eS5wYXJlbnQuaWQpO1xuICAgICAgICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNMaXN0Lm1hcmtJdGVtKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgc2Nyb2xsQW5kVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaXRlbXNMaXN0Lm1hcmtQcmV2aW91c0l0ZW0oKTtcbiAgICAgICAgICAgICAgc2Nyb2xsQW5kVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZlbnQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRXhwYW5kYWJsZShlbnRpdHkpICYmIHRoaXMuaXNDb2xsYXBzZWQoZW50aXR5KSkge1xuICAgICAgICAgICAgICB0aGlzLmV4cGFuZChlbnRpdHkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwYW5kYWJsZShlbnRpdHkpICYmIHRoaXMuaXNFeHBhbmRlZChlbnRpdHkpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGl0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLmZpbmQoaXRlbSA9PlxuICAgICAgICAgICAgICAgIChpdGVtLnZhbHVlIGFzIFRyZWVFbnRpdHkpLnBhcmVudF9pZCAmJiAoaXRlbS52YWx1ZSBhcyBUcmVlRW50aXR5KS5wYXJlbnRfaWQgPT09IGVudGl0eS5pZCk7XG4gICAgICAgICAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpdGVtc0xpc3QubWFya0l0ZW0ob3B0aW9uKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxBbmRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpdGVtc0xpc3QubWFya05leHRJdGVtKCk7XG4gICAgICAgICAgICAgIHNjcm9sbEFuZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2Nyb2xsQW5kVXBkYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBkb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtc0xpc3QubWFya2VkSXRlbS5odG1sSWQpO1xuICAgICAgICAgICAgaWYgKGRvbSkge1xuICAgICAgICAgICAgICBkb20uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlLm5leHQobnVsbCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEZpbHRlcmVkKGVudGl0aWVzOiBBcnJheTxUcmVlRW50aXR5Pik6IGFueSB7XG4gICAgcmV0dXJuIGVudGl0aWVzLnJlZHVjZSgoYWNjLCBlKSA9PiAoZS5maWx0ZXJlZCA/IGFjYyArIDEgOiBhY2MpICsgdGhpcy5nZXRGaWx0ZXJlZChlLmNoaWxkcmVuKSwgMCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm5nU2VsZWN0Q29tcG9uZW50LnJlZ2lzdGVyT25DaGFuZ2UoXG4gICAgICBvYmogPT4gZm4odGhpcy5tdWx0aXBsZSA/IChvYmogYXMgQXJyYXk8YW55PikubWFwKG8gPT4gdGhpcy50b0lkKG8pKSA6IHRoaXMudG9JZChvYmopKVxuICAgICk7XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5uZ1NlbGVjdENvbXBvbmVudC5yZWdpc3Rlck9uVG91Y2hlZChmbik7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm5nU2VsZWN0Q29tcG9uZW50LnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZWRXcml0ZVZhbHVlU3ViamVjdC5uZXh0KG9iaik7XG4gIH1cblxuICB0b0lkKG9iajogYW55KTogYW55IHtcbiAgICBpZiAoaXNUcmVlRW50aXR5KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmouaWQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbnRpdHlJZENhbGxiYWNrKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRvVHJlZUVudGl0eShvYmo6IGFueSk6IGFueSB7XG4gICAgaWYgKGlzVHJlZUVudGl0eShvYmopKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbGF0dGVuZWRUcmVlRW50aXRpZXMuZmluZChlID0+IGUuaWQgPT09IG9iai5pZCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHRoaXMuZmxhdHRlbmVkVHJlZUVudGl0aWVzLmZpbmQoZSA9PiBlLmlkID09PSBvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmZsYXR0ZW5lZFRyZWVFbnRpdGllcy5maW5kKGUgPT4gZS5pZCA9PT0gdGhpcy5lbnRpdHlJZENhbGxiYWNrKG9iaikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0b0VudGl0eShvYmo6IGFueSk6IGFueSB7XG4gICAgaWYgKGlzVHJlZUVudGl0eShvYmopKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbGF0dGVuZWRFbnRpdGllcy5maW5kKGUgPT4gdGhpcy5lbnRpdHlJZENhbGxiYWNrKGUpID09PSBvYmouaWQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB0aGlzLmZsYXR0ZW5lZEVudGl0aWVzLmZpbmQoZSA9PiB0aGlzLmVudGl0eUlkQ2FsbGJhY2soZSkgPT09IG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuZmxhdHRlbmVkRW50aXRpZXMuZmluZChlID0+IHRoaXMuZW50aXR5SWRDYWxsYmFjayhlKSA9PT0gdGhpcy5lbnRpdHlJZENhbGxiYWNrKG9iaikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxufVxuIiwiPG5nLXRlbXBsYXRlICN3cmFwcGVyQ29udHJvbCBsZXQtdGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXNtXCIgcm9sZT1cImdyb3VwXCI+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNleHBhbmRDb250cm9sIGxldC1lbmFibGVkPVwiZW5hYmxlZFwiIGxldC1jbGljaz1cImNsaWNrXCI+XG4gIDxidXR0b24gW2Rpc2FibGVkXT1cIiFlbmFibGVkXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IGNsaWNrKClcIj5FeHBhbmQ8L2J1dHRvbj5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2V4cGFuZEFsbENvbnRyb2wgbGV0LWNsaWNrPVwiY2xpY2tcIj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJjbGljaygpXCI+RXhwYW5kIGFsbDwvYnV0dG9uPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjY29sbGFwc2VDb250cm9sIGxldC1lbmFibGVkPVwiZW5hYmxlZFwiIGxldC1jbGljaz1cImNsaWNrXCI+XG4gIDxidXR0b24gW2Rpc2FibGVkXT1cIiFlbmFibGVkXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiY2xpY2soKVwiPkNvbGxhcHNlPC9idXR0b24+XG48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNjb2xsYXBzZUFsbENvbnRyb2wgbGV0LWNsaWNrPVwiY2xpY2tcIj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTsgY2xpY2soKVwiPkNvbGxhcHNlIGFsbDwvYnV0dG9uPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjc2VwYXJhdG9yQ29udHJvbD48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNzaG93aW5nQ29udHJvbCBsZXQtc2hvd2luZz1cInNob3dpbmdcIiBsZXQtdG90YWw9XCJ0b3RhbFwiPlxuICBTaG93aW5nIHt7c2hvd2luZ319IG9mIHt7dG90YWx9fVxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNjb250cm9sc1dyYXBwZXI+XG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250cm9scy5jb2xsYXBzZVwiXG4gICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2VuYWJsZWQ6IGN1cnJlbnRNYXJrZWRFbnRpdHkgJiYgaXNFeHBhbmRhYmxlKGN1cnJlbnRNYXJrZWRFbnRpdHkpICYmIGlzRXhwYW5kZWQoY3VycmVudE1hcmtlZEVudGl0eSksIGNsaWNrOiBjb2xsYXBzZUZuKGN1cnJlbnRNYXJrZWRFbnRpdHkpfVwiPjwvbmctdGVtcGxhdGU+XG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250cm9scy5zZXBhcmF0b3JcIj48L25nLXRlbXBsYXRlPlxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udHJvbHMuZXhwYW5kXCJcbiAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ZW5hYmxlZDogY3VycmVudE1hcmtlZEVudGl0eSAmJiBpc0V4cGFuZGFibGUoY3VycmVudE1hcmtlZEVudGl0eSkgJiYgaXNDb2xsYXBzZWQoY3VycmVudE1hcmtlZEVudGl0eSksIGNsaWNrOiBleHBhbmRGbihjdXJyZW50TWFya2VkRW50aXR5KX1cIj48L25nLXRlbXBsYXRlPlxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udHJvbHMuc2VwYXJhdG9yXCI+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRyb2xzLmNvbGxhcHNlQWxsXCJcbiAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7Y2xpY2s6IGNvbGxhcHNlQWxsRm4oKX1cIj48L25nLXRlbXBsYXRlPlxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udHJvbHMuc2VwYXJhdG9yXCI+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRyb2xzLmV4cGFuZEFsbFwiXG4gICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2NsaWNrOiBleHBhbmRBbGxGbigpfVwiPjwvbmctdGVtcGxhdGU+XG48L25nLXRlbXBsYXRlPlxuXG48bmctc2VsZWN0XG5cdCNuZ1NlbGVjdENvbXBvbmVudFxuICAgIFthcHBlbmRUb109XCJhcHBlbmRUb1wiXG4gICAgW2Nsb3NlT25TZWxlY3RdPVwiY2xvc2VPblNlbGVjdFwiXG4gICAgW2NsZWFyQWxsVGV4dF09XCJsYWJlbHMuY2xlYXJBbGxUZXh0XCJcbiAgICBbY2xlYXJhYmxlXT1cImNsZWFyYWJsZVwiXG4gICAgW2NsZWFyT25CYWNrc3BhY2VdPVwiY2xlYXJPbkJhY2tzcGFjZVwiXG4gICAgW2NvbXBhcmVXaXRoXT1cImNvbXBhcmVXaXRoXCJcbiAgICBbZHJvcGRvd25Qb3NpdGlvbl09XCJkcm9wZG93blBvc2l0aW9uXCJcbiAgICBbbG9hZGluZ1RleHRdPVwibGFiZWxzLmxvYWRpbmdUZXh0XCJcbiAgICBbbWFya0ZpcnN0XT1cIm1hcmtGaXJzdFwiXG4gICAgW2lzT3Blbl09XCJpc09wZW5cIlxuICAgIFttYXhTZWxlY3RlZEl0ZW1zXT1cIm1heFNlbGVjdGVkSXRlbXNcIlxuICAgIFtoaWRlU2VsZWN0ZWRdPVwiaGlkZVNlbGVjdGVkXCJcbiAgICBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIlxuICAgIFtub3RGb3VuZFRleHRdPVwibGFiZWxzLm5vdEZvdW5kVGV4dFwiXG4gICAgW3NlYXJjaGFibGVdPVwic2VhcmNoYWJsZVwiXG4gICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcbiAgICBbc2VhcmNoRm5dPVwic2VhcmNoRm5cIlxuICAgIFtzZWFyY2hXaGlsZUNvbXBvc2luZ109XCJzZWFyY2hXaGlsZUNvbXBvc2luZ1wiXG4gICAgW3NlbGVjdE9uVGFiXT1cInNlbGVjdE9uVGFiXCJcbiAgICBbb3Blbk9uRW50ZXJdPVwib3Blbk9uRW50ZXJcIlxuICAgIFt0eXBlVG9TZWFyY2hUZXh0XT1cImxhYmVscy50eXBlVG9TZWFyY2hUZXh0XCJcbiAgICBbcGxhY2Vob2xkZXJdPVwibGFiZWxzLnBsYWNlaG9sZGVyXCJcbiAgICBbdmlydHVhbFNjcm9sbF09XCJ2aXJ0dWFsU2Nyb2xsXCJcbiAgICBbaW5wdXRBdHRyc109XCJpbnB1dEF0dHJzXCJcbiAgICBbbG9hZGluZ109XCJsb2FkaW5nXCJcbiAgICBbdGFiSW5kZXhdPVwidGFiSW5kZXhcIlxuICAgIChibHVyKT1cImhhc0ZvY3VzID0gZmFsc2U7IGJsdXIuZW1pdCgkZXZlbnQpXCJcbiAgICAoZm9jdXMpPVwiaGFzRm9jdXMgPSB0cnVlOyBmb2N1cy5lbWl0KCRldmVudClcIlxuICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgKG9wZW4pPVwib25PcGVuKCRldmVudClcIlxuICAgIChjbG9zZSk9XCJjbG9zZS5lbWl0KCRldmVudClcIlxuICAgIChzZWFyY2gpPVwib25TZWFyY2goJGV2ZW50KVwiXG4gICAgKGNsZWFyKT1cIm9uQ2xlYXIoJGV2ZW50KVwiXG4gICAgKGFkZCk9XCJhZGQuZW1pdCgkZXZlbnQpXCJcbiAgICAocmVtb3ZlKT1cInJlbW92ZS5lbWl0KCRldmVudClcIlxuICAgIChzY3JvbGwpPVwic2Nyb2xsLmVtaXQoJGV2ZW50KVwiXG4gICAgKHNjcm9sbFRvRW5kKT1cInNjcm9sbFRvRW5kLmVtaXQoJGV2ZW50KVwiXG4gICAgW3RyYWNrQnlGbl09XCJ0cmFja0J5Rm5cIlxuPlxuICA8bmctdGVtcGxhdGUgI2VudGl0eU9wdGlvbiBsZXQtZW50aXR5IGxldC1kZXB0aD1cImRlcHRoXCIgbGV0LXZpc2libGU9XCJ2aXNpYmxlXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dDb250cm9scyAmJiAhIXRyZWVFbnRpdGllc1wiPlxuICAgICAgPG5nLXRlbXBsYXRlIG5nLWhlYWRlci10bXA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250cm9scy5zaG93aW5nXCJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntzaG93aW5nOiBmaWx0ZXJlZCwgdG90YWw6IHRvdGFsfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250cm9scy53cmFwcGVyXCJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6IGNvbnRyb2xzV3JhcHBlcn1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlIG5nLWxhYmVsLXRtcCBsZXQtZW50aXR5PVwiaXRlbVwiIGxldC1jbGVhcj1cImNsZWFyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInt7bXVsdGlwbGUgPyAncHgtMicgOiAnJ319XCI+e3tzaG93RnVsbFBhdGggPyBlbnRpdHkuZnVsbFBhdGhOYW1lIDogZW50aXR5Lm5hbWUudGV4dH19PC9zcGFuPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm11bHRpcGxlXCI+XG4gICAgICAgIDxzcGFuIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkIHB4LTIgYm9yZGVyLWxlZnRcIiAoY2xpY2spPVwiY2xlYXIoZW50aXR5KVwiPsOXPC9zcGFuPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctb3B0aW9uIFt2YWx1ZV09XCJlbnRpdHlcIiBbZGlzYWJsZWRdPVwiIWVudGl0eS5zZWxlY3RhYmxlXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIFtpZF09XCJnZXREb21JZGVudGlmaWVyKCdlbnRpdHktJyArIGVudGl0eS5pZClcIlxuICAgICAgICBbbmdDbGFzc109XCJ7J2l0ZW0td3JhcHBlcic6IHRydWUsICdsZXZlbC0wJzogZGVwdGggPT09IDAsICdsZXZlbC0xJzogZGVwdGggPT09IDEsICdsZXZlbC0yJzogZGVwdGggPT09IDIsICdsZXZlbC0zJzogZGVwdGggPT09IDMsICdsZXZlbC00JzogZGVwdGggPT09IDQsICdsZXZlbC01JzogZGVwdGggPT09IDUsICdsZXZlbC02JzogZGVwdGggPT09IDYsICdleHBhbmRlZCc6IGlzRXhwYW5kYWJsZShlbnRpdHkpICYmIGlzRXhwYW5kZWQoZW50aXR5KSwgJ2NvbGxhcHNlZCc6IGlzRXhwYW5kYWJsZShlbnRpdHkpICYmIGlzQ29sbGFwc2VkKGVudGl0eSl9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJleHBhbmRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnJvd1wiIFthdHRyLmRhdGEtZW50aXR5LWV4cGFuZGVyLWlkXT1cImdldERvbUlkZW50aWZpZXIoZW50aXR5LmlkKVwiPlxuICAgICAgICAgICAge3tpc0V4cGFuZGFibGUoZW50aXR5KSAmJiBpc0V4cGFuZGVkKGVudGl0eSkgPyAnZXhwYW5kZWQnIDogKGlzRXhwYW5kYWJsZShlbnRpdHkpICYmIGlzQ29sbGFwc2VkKGVudGl0eSkgPyAnY29sbGFwc2VkJyA6ICcnKX19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPnt7ZW50aXR5Lm5hbWUudGV4dH19PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLW9wdGlvbj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBlbnRpdHkuY2hpbGRyZW5cIj5cbiAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJlbnRpdHlPcHRpb25cIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogY2hpbGQsIGRlcHRoOiBkZXB0aCArIDF9XCI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L25nLXRlbXBsYXRlPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbnRpdHkgb2YgdHJlZUVudGl0aWVzXCI+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJlbnRpdHlPcHRpb25cIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6IGVudGl0eSwgZGVwdGg6IDB9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLXNlbGVjdD5cbiJdfQ==
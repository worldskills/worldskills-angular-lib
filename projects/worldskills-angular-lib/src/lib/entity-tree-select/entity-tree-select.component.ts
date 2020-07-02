import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {EntityFetchParams, EntityTreeService} from '../services/entity-tree.service';
import {DropdownPosition, NgSelectComponent} from '@ng-select/ng-select';
import {EntityTreeView} from '../models/auth/entity-tree-view';
import {Subject} from 'rxjs';
import {v4 as uuidv4} from 'uuid';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const DEFAULT_LABELS = {
  clearAllText: 'Clear all',
  loadingText: 'Loading entities...',
  notFoundText: 'No entities found',
  typeToSearchText: 'Type to search',
  placeholder: 'Select entity'
};

function isTreeEntity(obj: any): obj is TreeEntity {
  return obj && typeof obj === 'object' && 'type' in obj && obj.type === 'treeEntity';
}

type TreeEntity =
  Omit<EntityTreeView, 'children'>
  & {
  parent: TreeEntity,
  children: TreeEntity[],
  fullPathName: string,
  paths: Array<string>,
  allPaths: Array<string>,
  selectable: boolean,
  filtered: boolean,
  type: 'treeEntity'
};

export enum EntityTreeSelectRefreshMode {
  DEFAULT,
  FORCE,
  NEVER
}

export interface EntityTreeSelectLabels {
  clearAllText?: string;
  loadingText?: string;
  notFoundText?: string;
  typeToSearchText?: string;
  placeholder?: string;
}

export interface EntityTreeSelectControls {
  wrapper?: TemplateRef<{ $implicit: TemplateRef<void> }>;
  expand?: TemplateRef<{ enabled: boolean, click: () => void }>;
  expandAll?: TemplateRef<{ click: () => void }>;
  collapse?: TemplateRef<{ enabled: boolean, click: () => void }>;
  collapseAll?: TemplateRef<{ click: () => void }>;
  separator?: TemplateRef<void>;
  showing?: TemplateRef<{ showing: number, total: number }>;
}

@Component({
  selector: 'ws-entity-tree-select',
  templateUrl: './entity-tree-select.component.html',
  styleUrls: ['./entity-tree-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EntityTreeSelectComponent),
      multi: true
    }
  ]
})
export class EntityTreeSelectComponent implements OnInit, OnDestroy, OnChanges, ControlValueAccessor {

  constructor(
    private entityTreeService: EntityTreeService
  ) {
    this.htmlId = uuidv4();
    this.compareWith = this.compareWith || ((a, b) => {
      const aId = this.toId(a);
      const bId = this.toId(b);
      return aId && bId && aId === bId;
    });
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onClick = this.onClick.bind(this);
    this.searchFn = this.searchFn.bind(this);
  }

  get currentMarkedEntity(): TreeEntity {
    return (this.ngSelectComponent.itemsList.markedItem ? this.ngSelectComponent.itemsList.markedItem.value : null) as TreeEntity;
  }

  get filtered(): number {
    return this.getFiltered(this.treeEntities);
  }

  get total(): number {
    return this.ngSelectComponent.itemsList.items.length;
  }

  /** labels for ng-select */
  @Input() labels: EntityTreeSelectLabels = {};
  /** control templates for the toolbar buttons */
  @Input() controls: EntityTreeSelectControls = {};
  /** query parameters to scope the available entities */
  @Input() query: Omit<EntityFetchParams, 'limit' | 'offset' | 'depth'>;
  /** entities input array */
  @Input() entities: Array<any> = null;
  /** always make children selectable of passed entities */
  @Input() selectableChildren = true;
  /** show unselectable parents */
  @Input() showUnselectableParents = true;
  /** whether or not to show the full path for selected entities */
  @Input() showFullPath = true;
  /** whether or not to show the header controls */
  @Input() showControls = true;
  /** when set to FORCE always get fresh instances, when set to NEVER, never update fresh instance */
  /** default is set to DEFAULT which only fetches if nothing else is fetch yet */
  @Input() refreshMode = EntityTreeSelectRefreshMode.DEFAULT;
  /** if the tree is expanded by default */
  @Input() defaultExpand = false;
  private expandedSearch: Array<number> = [];
  private flattenedEntities: Array<any> = [];
  private flattenedTreeEntities: Array<TreeEntity> = [];
  private lastTerm = ' ';
  private lastSearch;
  private refreshing = false;
  private update = new Subject<TreeEntity>();
  private htmlId: string;
  private fetchedTreeEntities: Array<TreeEntity> = [];
  private cachedWriteValue: any;
  hasFocus = false;
  loading = true;
  treeEntities: Array<TreeEntity> = [];
  expanded: Array<number> = [];

  /** ng-select input */
  @Input() appendTo = null;
  /** ng-select input */
  @Input() closeOnSelect = true;
  /** ng-select input */
  @Input() clearable = true;
  /** ng-select input */
  @Input() clearOnBackspace = true;
  /** ng-select input */
  @Input() dropdownPosition: DropdownPosition = 'auto';
  /** ng-select input */
  @Input() markFirst = true;
  /** ng-select input */
  @Input() isOpen: boolean = undefined;
  /** ng-select input */
  @Input() maxSelectedItems: number = undefined;
  /** ng-select input */
  @Input() hideSelected = false;
  /** ng-select input */
  @Input() multiple = false;
  /** ng-select input */
  @Input() searchable = true;
  /** ng-select input */
  @Input() readonly = false;
  /** ng-select input */
  @Input() searchWhileComposing = true;
  /** ng-select input */
  @Input() selectOnTab = false;
  /** ng-select input */
  @Input() openOnEnter = true;
  /** ng-select input */
  @Input() virtualScroll = false;
  /** ng-select input */
  @Input() inputAttrs: { [key: string]: string } = undefined;
  /** ng-select input */
  @Input() tabIndex: number = undefined;
  /** ng-select output */
    // tslint:disable-next-line:no-output-native
  @Output() blur: EventEmitter<any> = new EventEmitter<any>();
  /** ng-select output */
    // tslint:disable-next-line:no-output-native
  @Output() focus: EventEmitter<any> = new EventEmitter<any>();
  /** ng-select output */
    // tslint:disable-next-line:no-output-native
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  /** ng-select output */
    // tslint:disable-next-line:no-output-native
  @Output() open: EventEmitter<any> = new EventEmitter<any>();
  /** ng-select output */
    // tslint:disable-next-line:no-output-native
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  /** ng-select output */
  @Output() search: EventEmitter<{ term: string; items: TreeEntity[]; }> = new EventEmitter<{ term: string; items: TreeEntity[]; }>();
  /** ng-select output */
  @Output() clear: EventEmitter<any> = new EventEmitter<any>();
  /** ng-select output */
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  /** ng-select output */
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  /** ng-select output */
    // tslint:disable-next-line:no-output-native
  @Output() scroll: EventEmitter<{ start: number; end: number; }> = new EventEmitter<{ start: number; end: number; }>();
  /** ng-select output */
  @Output() scrollToEnd: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('ngSelectComponent', {static: true}) ngSelectComponent: NgSelectComponent;
  @ViewChild('wrapperControl', {static: true}) wrapperControl: TemplateRef<{ $implicit: TemplateRef<void> }>;
  @ViewChild('expandControl', {static: true}) expandControl: TemplateRef<{ enabled: boolean, click: () => void }>;
  @ViewChild('expandAllControl', {static: true}) expandAllControl: TemplateRef<{ click: () => void }>;
  @ViewChild('collapseControl', {static: true}) collapseControl: TemplateRef<{ enabled: boolean, click: () => void }>;
  @ViewChild('collapseAllControl', {static: true}) collapseAllControl: TemplateRef<{ click: () => void }>;
  @ViewChild('separatorControl', {static: true}) separatorControl: TemplateRef<void>;
  @ViewChild('showingControl', {static: true}) showingControl: TemplateRef<{ showing: number, total: number }>;
  /** compare function for ng-select */
  @Input() compareWith: (a: any, b: any) => boolean;
  /** the id callback function for the Input entities */
  @Input() entityIdCallback: (entity: any) => number = (entity: any) => entity ? entity.id : undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if ('entities' in changes) {
      this.createTreeEntities();
    }
  }

  ngOnInit(): void {
    this.labels = {...DEFAULT_LABELS, ...this.labels};
    this.controls = {
      wrapper: this.wrapperControl,
      expand: this.expandControl,
      expandAll: this.expandAllControl,
      collapse: this.collapseControl,
      collapseAll: this.collapseAllControl,
      separator: this.separatorControl,
      showing: this.showingControl,
      ...this.controls
    };
    let observable;
    if (this.refreshMode === EntityTreeSelectRefreshMode.FORCE) {
      observable = this.entityTreeService.list({limit: 9999, depth: 10, ...this.query}, false);
    } else {
      observable = this.entityTreeService.subject;
    }

    observable.subscribe(entities => {
      if (!!entities) {
        this.fetchedTreeEntities = entities.ws_entity_list.map(entity => this.deepCopyEntity(entity as TreeEntity));
        this.createTreeEntities();
        this.ngSelectComponent.writeValue(this.multiple ?
          ((this.cachedWriteValue || []) as Array<any>).map(o => this.toTreeEntity(o)).filter(o => !!o) :
          this.toTreeEntity(this.cachedWriteValue));
        this.loading = false;
      } else if (this.refreshMode === EntityTreeSelectRefreshMode.DEFAULT) {
        this.entityTreeService.list({limit: 9999, depth: 10, ...this.query});
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

  private createTreeEntities() {
    this.treeEntities = this.fetchedTreeEntities.map(e => this.deepCopyEntity(e));
    this.flattenedEntities = this.flatten(this.entities || []);
    this.setSelectable(
      this.treeEntities,
      this.entities === null ? true : this.flattenedEntities.map(entity => entity.id)
    );
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

  private deepCopyEntity(entity: TreeEntity) {
    return {...entity, children: entity.children.map(e => this.deepCopyEntity(e))};
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.onClick, true);
    document.removeEventListener('keydown', this.onKeyDown, true);
  }

  isDomIdentifier(name: string) {
    return name.startsWith(`_${this.htmlId}`);
  }

  getDomIdentifier(name: string) {
    return `_${this.htmlId}-${name}`;
  }

  stripDomIdentifier(name: string) {
    return name.replace(`_${this.htmlId}-`, '');
  }

  private flatten(entities: Array<any>): Array<any> {
    return entities.reduce((acc, entity) => entity.children ? [...acc, entity, ...this.flatten(entity.children)] : [...acc, entity], []);
  }

  private setParentsForEntities(entities: Array<TreeEntity>) {
    entities.forEach(e => {
      e.children.forEach(c => {
        c.parent = e;
      });
      this.setParentsForEntities(e.children);
    });
  }

  private setPathNamesAndTypes(entities: Array<TreeEntity>) {
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

  private setSelectable(entities: Array<TreeEntity>, selectables: Array<number> | true) {
    entities.forEach(e => {
      e.filtered = true;
      e.selectable = selectables === true ? true : selectables.includes(e.id);
      this.setSelectable(e.children, selectables);
    });
  }

  private setSelectableForChildren(entities: Array<TreeEntity>) {
    entities.forEach(e => {
      if (e.selectable) {
        e.children.forEach(c => {
          c.selectable = true;
        });
      }
      this.setSelectableForChildren(e.children);
    });
  }

  private clearSafeChildren(entity: TreeEntity) {
    return entity.children.every(e => !e.selectable && this.clearSafeChildren(e));
  }

  private clearUnselectableTrees(entities: Array<TreeEntity>) {
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

  private clearUnselectableTree(entity: TreeEntity) {
    if (entity.children.length === 0 || entity.children.every(c => !c.selectable)) {
      return false;
    } else {
      this.clearUnselectableTrees(entity.children);
      return true;
    }
  }

  private flattenUnselectableParents(entities: Array<TreeEntity>) {
    entities = [...entities];
    let modified = true;
    while (modified) {
      modified = false;
      for (let i = 0; i < entities.length; i++) {
        if (!entities[i].selectable) {
          const children: Array<TreeEntity> = [...entities[i].children];
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

  isExpandable(entity: TreeEntity) {
    return entity.children.length > 0;
  }

  expandFn(entity: TreeEntity) {
    return () => entity && this.expand(entity);
  }

  expand(entity: TreeEntity) {
    if (!this.expanded.includes(entity.id)) {
      this.expanded.push(entity.id);
    }
    this.update.next(entity);
  }

  expandAllFn() {
    return () => this.expandAll(this.treeEntities);
  }

  expandAll(entities: Array<TreeEntity>, update = true) {
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

  expandArray(entities: Array<TreeEntity>) {
    entities.forEach(entity => {
      if (!this.expanded.includes(entity.id)) {
        this.expanded.push(entity.id);
      }
    });
    this.update.next(null);
  }

  expandTree(entity: TreeEntity) {
    let currentEntity = entity;
    while (currentEntity) {
      if (!this.expanded.includes(currentEntity.id)) {
        this.expanded.push(currentEntity.id);
      }
      currentEntity = currentEntity.parent;
    }
    this.update.next(null);
  }

  expandTrees(entities: Array<TreeEntity>) {
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

  collapseFn(entity: TreeEntity) {
    return () => entity && this.collapse(entity);
  }

  collapse(entity: TreeEntity) {
    if (this.expanded.includes(entity.id)) {
      this.expanded.splice(this.expanded.findIndex(e => e === entity.id), 1);
    }
    this.update.next(entity);
  }

  collapseAllFn() {
    return () => this.collapseAll(this.treeEntities);
  }

  collapseAll(entities: Array<TreeEntity>, update = true) {
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

  toggleExpanded(entity: TreeEntity) {
    if (this.expanded.includes(entity.id)) {
      this.expanded.splice(this.expanded.findIndex(e => e === entity.id), 1);
    } else {
      this.expanded.push(entity.id);
    }
    this.update.next(entity);
  }

  toggleExpandedById(id: number) {
    if (this.expanded.includes(id)) {
      this.expanded.splice(this.expanded.findIndex(e => e === id), 1);
    } else {
      this.expanded.push(id);
    }
    this.update.next(null);
  }

  isTreeExpanded(entity: TreeEntity) {
    let currentEntity = entity;
    while (currentEntity) {
      if (!this.isExpanded(currentEntity)) {
        return false;
      } else {
        currentEntity = currentEntity.parent;
      }
    }
    return true;
  }

  isExpanded(entity: TreeEntity) {
    return this.expanded.includes(entity.id);
  }

  isCollapsed(entity: TreeEntity) {
    return !this.expanded.includes(entity.id);
  }

  isVisible(entity: TreeEntity) {
    return !entity.parent || this.isTreeExpanded(entity.parent);
  }

  trackByFn(entity: TreeEntity) {
    return entity.id;
  }

  onClear(event: any) {
    this.lastTerm = ' ';
    this.update.next(null);
    this.clear.emit(event);
  }

  onOpen(event: any) {
    setTimeout(() => {
      this.update.next(null);
    });
    this.open.emit(event);
  }

  onSearch(event: { term: string; items: TreeEntity[]; }) {
    if (!this.refreshing) {
      if (!!event.term.trim() && !this.lastSearch.trim()) {
        this.expandedSearch = [...this.expanded];
      } else if (!event.term.trim() && !!this.lastSearch.trim()) {
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

  searchFn(term: string, entity: TreeEntity) {
    this.lastTerm = term;
    const terms = !!term.trim() ? term.split(/\s*>\s*/) : [];
    const visible = this.entityContainsSearchTerm(terms, entity);
    entity.filtered = visible;
    return visible && this.isVisible(entity);
  }

  private entityContainsSearchTerm(terms: Array<string>, entity: TreeEntity) {
    if (terms.length > 0) {
      const copyOfTerms = [...terms];
      const actualTerm = copyOfTerms.pop().trim();
      if (
        entity.name.text.toLowerCase().includes(actualTerm) &&
        copyOfTerms.every(term => entity.paths.some(path => path.includes(term.trim())))
      ) {
        return true;
      } else {
        return this.childrenContainSearchTerm(terms, entity.children);
      }
    } else {
      return true;
    }
  }

  private childrenContainSearchTerm(terms: Array<string>, entities: Array<TreeEntity>) {
    return entities.some(e => this.entityContainsSearchTerm(terms, e));
  }

  onChange(entity: TreeEntity | Array<TreeEntity>) {
    this.change.emit(this.multiple ? (entity as Array<any>).map(o => this.toId(o)) : this.toId(entity));
  }

  onClick(event: Event) {
    const target = event.target as HTMLDivElement;
    if (target.dataset && target.dataset.entityExpanderId && this.isDomIdentifier(target.dataset.entityExpanderId)) {
      const entityId = parseInt(this.stripDomIdentifier(target.dataset.entityExpanderId), 0);
      this.toggleExpandedById(entityId);
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.hasFocus) {
      const itemsList = this.ngSelectComponent.itemsList;
      const entity = itemsList.markedItem ? itemsList.markedItem.value as TreeEntity : null;
      if (entity) {
        if (event.metaKey) {
          let prevent = false;
          let scrollAndUpdate = false;
          if (event.key === 'ArrowLeft') {
            if (this.isExpandable(entity) && this.isExpanded(entity)) {
              this.collapse(entity);
            } else if (entity.parent) {
              const option = itemsList.filteredItems.find(
                item => (item.value as TreeEntity).id === entity.parent.id);
              if (option) {
                itemsList.markItem(option);
                scrollAndUpdate = true;
              }
            } else {
              itemsList.markPreviousItem();
              scrollAndUpdate = true;
            }
            prevent = true;
          }
          if (event.key === 'ArrowRight') {
            if (this.isExpandable(entity) && this.isCollapsed(entity)) {
              this.expand(entity);
            } else if (this.isExpandable(entity) && this.isExpanded(entity)) {
              const option = itemsList.filteredItems.find(item =>
                (item.value as TreeEntity).parent_id && (item.value as TreeEntity).parent_id === entity.id);
              if (option) {
                itemsList.markItem(option);
                scrollAndUpdate = true;
              }
            } else {
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

  private getFiltered(entities: Array<TreeEntity>) {
    return entities.reduce((acc, e) => (e.filtered ? acc + 1 : acc) + this.getFiltered(e.children), 0);
  }

  registerOnChange(fn: any): void {
    this.ngSelectComponent.registerOnChange(
      obj => fn(this.multiple ? (obj as Array<any>).map(o => this.toId(o)) : this.toId(obj))
    );
  }

  registerOnTouched(fn: any): void {
    this.ngSelectComponent.registerOnTouched(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.ngSelectComponent.setDisabledState(isDisabled);
  }

  writeValue(obj: any): void {
    this.cachedWriteValue = obj;
  }

  toId(obj: any) {
    if (isTreeEntity(obj)) {
      return obj.id;
    } else if (typeof obj === 'number') {
      return obj;
    } else if (typeof obj === 'object') {
      return this.entityIdCallback(obj);
    } else {
      return null;
    }
  }

  toTreeEntity(obj: any) {
    if (isTreeEntity(obj)) {
      return this.flattenedTreeEntities.find(e => e.id === obj.id);
    } else if (typeof obj === 'number') {
      return this.flattenedTreeEntities.find(e => e.id === obj);
    } else if (typeof obj === 'object') {
      return this.flattenedTreeEntities.find(e => e.id === this.entityIdCallback(obj));
    } else {
      return null;
    }
  }

  toEntity(obj: any) {
    if (isTreeEntity(obj)) {
      return this.flattenedEntities.find(e => this.entityIdCallback(e) === obj.id);
    } else if (typeof obj === 'number') {
      return this.flattenedEntities.find(e => this.entityIdCallback(e) === obj);
    } else if (typeof obj === 'object') {
      return this.flattenedEntities.find(e => this.entityIdCallback(e) === this.entityIdCallback(obj));
    } else {
      return null;
    }
  }

}

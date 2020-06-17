import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {EntityTreeService} from '../services/entity-tree.service';
import {DropdownPosition, NgSelectComponent} from '@ng-select/ng-select';
import {EntityTreeView} from '../models/auth/entity-tree-view';
import {Subject} from 'rxjs';
import {v4 as uuidv4} from 'uuid';

const DEFAULT_LABELS = {
  clearAllText: 'Clear all',
  loadingText: 'Loading entities...',
  notFoundText: 'No entities found',
  typeToSearchText: 'Type to search',
  placeholder: 'Select entity'
};

type TreeEntity =
  Omit<EntityTreeView, 'children'>
  & { parent: TreeEntity, children: TreeEntity[], paths: Array<string>, allPaths: Array<string>, selectable: boolean, filtered: boolean };

@Component({
  selector: 'ws-entity-tree-select',
  templateUrl: './entity-tree-select.component.html',
  styleUrls: ['./entity-tree-select.component.css']
})
export class EntityTreeSelectComponent implements OnInit, OnDestroy, AfterViewInit {

  /** labels for ng-select */
  @Input() labels: {
    clearAllText?: string,
    loadingText?: string,
    notFoundText?: string,
    typeToSearchText?: string,
    placeholder?: string,
  } = {};
  /** control templates for the toolbar buttons */
  @Input() controls: {
    wrapper?: TemplateRef<void>;
    expand?: TemplateRef<{ enabled: boolean, click: () => void }>;
    expandAll?: TemplateRef<{ click: () => void }>;
    collapse?: TemplateRef<{ enabled: boolean, click: () => void }>;
    collapseAll?: TemplateRef<{ click: () => void }>;
    separator?: TemplateRef<void>;
    showing?: TemplateRef<{ showing: number, total: number }>;
  } = {};
  /** query parameters to scope the available entities */
  @Input() query: {
    member_of?: number,
    name?: string,
    role?: string,
    roleApp?: number,
    sort?: 'name' | 'name_desc'
  };
  /** entities input array */
  @Input() entities: Array<any>;
  /** whether or not to show the full path for selected entities */
  @Input() showFullPath = true;
  /** whether or not to show the header controls */
  @Input() showControls = true;
  private expandedSearch: Array<number> = [];
  private flattenedEntities: Array<any>;
  private lastTerm = ' ';
  private lastSearch;
  private refreshing = false;
  private update = new Subject<TreeEntity>();
  private htmlId: string;
  hasFocus = false;
  loading = true;
  treeEntities: Array<TreeEntity>;
  expanded: Array<number> = [];

  /** supported ng-select inputs and outputs */
  @Input() appendTo = null;
  @Input() closeOnSelect = true;
  @Input() clearable = true;
  @Input() clearOnBackspace = true;
  @Input() dropdownPosition: DropdownPosition = 'auto';
  @Input() markFirst = true;
  @Input() isOpen: boolean = undefined;
  @Input() maxSelectedItems = undefined;
  @Input() hideSelected = false;
  @Input() multiple = false;
  @Input() searchable = true;
  @Input() readonly = false;
  @Input() searchWhileComposing = true;
  @Input() selectOnTab = false;
  @Input() openOnEnter = true;
  @Input() virtualScroll = false;
  @Input() inputAttrs: { [key: string]: string } = undefined;
  @Input() tabIndex: number = undefined;
  // tslint:disable-next-line:no-output-native
  @Output() blur: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-native
  @Output() focus: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-native
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-native
  @Output() open: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-native
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() search: EventEmitter<{ term: string; items: TreeEntity[]; }> = new EventEmitter<{ term: string; items: TreeEntity[]; }>();
  @Output() clear: EventEmitter<any> = new EventEmitter<any>();
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-native
  @Output() scroll: EventEmitter<{ start: number; end: number; }> = new EventEmitter<{ start: number; end: number; }>();
  @Output() scrollToEnd: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('ngSelectComponent') ngSelectComponent: NgSelectComponent;
  @ViewChild('wrapperControl') wrapperControl: TemplateRef<void>;
  @ViewChild('expandControl') expandControl: TemplateRef<{ enabled: boolean, click: () => void }>;
  @ViewChild('expandAllControl') expandAllControl: TemplateRef<{ click: () => void }>;
  @ViewChild('collapseControl') collapseControl: TemplateRef<{ enabled: boolean, click: () => void }>;
  @ViewChild('collapseAllControl') collapseAllControl: TemplateRef<{ click: () => void }>;
  @ViewChild('separatorControl') separatorControl: TemplateRef<void>;
  @ViewChild('showingControl') showingControl: TemplateRef<{ showing: number, total: number }>;
  /** the id callback function for the Input entities */
  @Input() entityIdCallback: (entity: any) => number = (entity: any) => entity.id;
  /** compare function for ng-select */
  @Input() compareWith: (a: any, b: any) => boolean = (a, b) => a === b;

  constructor(
    private entityTreeService: EntityTreeService
  ) {
    this.htmlId = uuidv4();
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

  ngOnInit(): void {
    this.labels = {...DEFAULT_LABELS, ...this.labels};
    this.entityTreeService.list({limit: 9999, depth: 10, ...this.query} as any).subscribe(entities => {
      this.flattenedEntities = this.flatten(this.entities);
      this.treeEntities = entities.ws_entity_list.map(entity => this.deepCopyEntity(entity as TreeEntity));
      this.setSelectable(this.treeEntities, this.flattenedEntities.map(entity => entity.id));
      this.clearUnselectableTrees(this.treeEntities);
      this.setParentsForEntities(this.treeEntities);
      this.setPathNames(this.treeEntities);
      this.loading = false;
      if (this.hasFocus) {
        setTimeout(() => this.update.next(null));
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

  private deepCopyEntity(entity: TreeEntity) {
    return {...entity, children: entity.children.map(e => this.deepCopyEntity(e))};
  }

  ngAfterViewInit(): void {
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

  private setPathNames(entities: Array<TreeEntity>) {
    entities.forEach(e => {
      const paths = [];
      let p = e;
      while (p) {
        paths.push(p.name.text.toLowerCase());
        p = p.parent;
      }
      e.allPaths = paths.reverse();
      e.paths = [...e.allPaths];
      e.paths.pop();
      this.setPathNames(e.children);
    });
  }

  private setSelectable(entities: Array<TreeEntity>, selectables: Array<number>) {
    entities.forEach(e => {
      e.filtered = true;
      e.selectable = selectables.includes(e.id);
      this.setSelectable(e.children, selectables);
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

  expandAll(entities: Array<TreeEntity>) {
    entities.forEach(entity => {
      if (this.isExpandable(entity) && !this.expanded.includes(entity.id)) {
        this.expanded.push(entity.id);
      }
      this.expandAll(entity.children);
    });
    this.update.next(null);
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

  collapseAll(entities: Array<TreeEntity>) {
    entities.forEach(entity => {
      if (this.isExpandable(entity) && this.expanded.includes(entity.id)) {
        this.expanded.splice(this.expanded.findIndex(e => e === entity.id), 1);
      }
      this.collapseAll(entity.children);
    });
    this.update.next(null);
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
    if (Array.isArray(entity)) {
      this.change.emit(entity.map(e => this.getEntityFromInput(e)));
    } else {
      this.change.emit(this.getEntityFromInput(entity));
    }
  }

  private getEntityFromInput(entity: TreeEntity) {
    return this.flattenedEntities.find(e => this.entityIdCallback(e) === entity.id);
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

  renderLabel(entity: TreeEntity) {
    const paths = [];
    paths.push(entity.name.text);

    let parent = entity.parent;
    while (parent) {
      paths.push(parent.name.text);
      parent = parent.parent;
    }

    return paths.reverse().join(' > ');
  }

  private getFiltered(entities: Array<TreeEntity>) {
    return entities.reduce((acc, e) => (e.filtered ? acc + 1 : acc) + this.getFiltered(e.children), 0);
  }

}

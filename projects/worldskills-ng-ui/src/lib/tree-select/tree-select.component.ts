import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  HostListener,
  ElementRef,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TreeSelectNode } from './tree-select-node';

export type TreeSelectMode = 'single' | 'multiple' | 'checkbox';

@Component({
  selector: 'ws-ng-ui-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.css'],
  standalone: true,
  imports: [NgTemplateOutlet, InputTextModule, IconFieldModule, InputIconModule, ProgressSpinnerModule, TreeModule],
})
export class TreeSelectComponent implements OnInit, OnChanges, OnDestroy {

  /** Flat or nested list of nodes to display. */
  @Input() items: TreeSelectNode[] = [];

  /** Selected id for single mode — supports two-way binding: [(selectedId)] */
  @Input() selectedId: number | string | null = null;

  /** Selected ids for multiple / checkbox mode — supports two-way binding: [(selectedIds)] */
  @Input() selectedIds: (number | string)[] = [];

  @Input() placeholder = 'Select...';
  @Input() loading = false;
  @Input() selectionMode: TreeSelectMode = 'single';

  /** Enable virtual scrolling for large trees. */
  @Input() virtualScroll = false;

  /** Row height in px used by virtual scroll (should match your node height). */
  @Input() virtualScrollItemSize = 32;

  /** Emits selected id for two-way binding in single mode. */
  @Output() selectedIdChange = new EventEmitter<number | string | null>();

  /** Emits selected ids for two-way binding in multiple / checkbox mode. */
  @Output() selectedIdsChange = new EventEmitter<(number | string)[]>();

  /** Emits the full TreeSelectNode on single selection. */
  @Output() nodeSelect = new EventEmitter<TreeSelectNode>();

  /** Emits all selected TreeSelectNodes on multi selection. */
  @Output() nodesSelect = new EventEmitter<TreeSelectNode[]>();

  /** Emits when the selection is cleared. */
  @Output() nodeClear = new EventEmitter<void>();

  /**
   * Optional node label template. Context: { $implicit: TreeSelectNode, selected: boolean, selectable: boolean }
   *
   * Usage:
   *   <ws-ng-ui-tree-select ...>
   *     <ng-template #wsTreeNode let-node let-selected="selected">
   *       <strong>{{ node.label }}</strong>
   *     </ng-template>
   *   </ws-ng-ui-tree-select>
   */
  @ContentChild('wsTreeNode') nodeTemplate: TemplateRef<unknown> | null = null;

  allNodes: TreeNode[] = [];
  displayNodes: TreeNode[] = [];
  selection: TreeNode | TreeNode[] | null = null;
  isOpen = false;
  term = '';
  triggerLabel: string | null = null;

  private searchTerm$ = new Subject<string>();
  private searchSub: Subscription;

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement) {
    if (!this.el.nativeElement.contains(target)) {
      this.isOpen = false;
    }
  }

  ngOnInit() {
    this.searchSub = this.searchTerm$.pipe(
      debounceTime(150),
      distinctUntilChanged(),
    ).subscribe(value => {
      this.term = value;
      this.displayNodes = value
        ? this.filterTree(this.allNodes, value.toLowerCase().split(/\s+/).filter(t => t))
        : this.allNodes;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.allNodes = this.toTreeNodes(this.items ?? []);
      this.displayNodes = this.allNodes;
      this.resolveSelection();
    }
    if ((changes['selectedId'] || changes['selectedIds']) && this.allNodes.length > 0) {
      this.resolveSelection();
    }
  }

  ngOnDestroy() {
    this.searchSub?.unsubscribe();
  }

  // ── Conversion ────────────────────────────────────────────────────────────

  private toTreeNodes(nodes: TreeSelectNode[]): TreeNode[] {
    return nodes.map(node => ({
      key: String(node.id),
      label: node.label,
      data: node,
      selectable: node.selectable !== false,
      expanded: true,
      leaf: !node.children?.length,
      children: node.children?.length ? this.toTreeNodes(node.children) : undefined,
    }));
  }

  // ── Selection ─────────────────────────────────────────────────────────────

  resolveSelection() {
    if (this.selectionMode === 'single') {
      if (this.selectedId == null) {
        this.selection = null;
        this.triggerLabel = null;
        return;
      }
      const found = this.findByKey(this.allNodes, String(this.selectedId));
      this.selection = found ?? null;
      this.triggerLabel = found?.label ?? null;
    } else {
      const keys = (this.selectedIds ?? []).map(String);
      if (!keys.length) {
        this.selection = [];
        this.triggerLabel = null;
        return;
      }
      const nodes = keys.map(k => this.findByKey(this.allNodes, k)).filter(Boolean) as TreeNode[];
      this.selection = nodes;
      this.triggerLabel = this.buildMultiLabel(nodes);
    }
  }

  onSelectionChange(event: TreeNode | TreeNode[]) {
    this.selection = event;

    if (this.selectionMode === 'single') {
      const node = event as TreeNode;
      this.selectedId = node?.data?.id ?? null;
      this.triggerLabel = node?.label ?? null;
      this.isOpen = false;
      this.selectedIdChange.emit(this.selectedId);
      if (node?.data) { this.nodeSelect.emit(node.data as TreeSelectNode); }
    } else {
      const nodes = (event as TreeNode[]) ?? [];
      this.selectedIds = nodes.map(n => n.data?.id).filter(id => id != null);
      this.triggerLabel = this.buildMultiLabel(nodes);
      this.selectedIdsChange.emit(this.selectedIds);
      this.nodesSelect.emit(nodes.map(n => n.data as TreeSelectNode).filter(Boolean));
    }
  }

  clear() {
    this.selectedId = null;
    this.selectedIds = [];
    this.selection = this.selectionMode === 'single' ? null : [];
    this.triggerLabel = null;
    this.isOpen = false;
    this.selectedIdChange.emit(null);
    this.selectedIdsChange.emit([]);
    this.nodeClear.emit();
  }

  // ── Search ────────────────────────────────────────────────────────────────

  onTermChange(value: string) {
    this.searchTerm$.next(value);
  }

  filterTree(nodes: TreeNode[], terms: string[], ancestorPath = ''): TreeNode[] {
    const results: TreeNode[] = [];
    for (const node of nodes) {
      const fullPath = ancestorPath ? `${ancestorPath} ${node.label}` : (node.label ?? '');
      const filteredChildren = node.children ? this.filterTree(node.children, terms, fullPath) : [];
      const matches = terms.every(t => fullPath.toLowerCase().includes(t));
      if (matches || filteredChildren.length > 0) {
        results.push({ ...node, children: filteredChildren, expanded: true });
      }
    }
    return results;
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => this.scrollToSelected(), 0);
    }
  }

  scrollToSelected() {
    const panel = this.el.nativeElement.querySelector('.tree-body');
    const selected = this.el.nativeElement.querySelector('.p-tree-node-selected');
    if (panel && selected) {
      const offset = selected.offsetTop - panel.clientHeight / 2 + selected.offsetHeight / 2;
      panel.scrollTop = offset;
    }
  }

  isMultiMode(): boolean {
    return this.selectionMode !== 'single';
  }

  private findByKey(nodes: TreeNode[], key: string): TreeNode | null {
    for (const node of nodes) {
      if (node.key === key) { return node; }
      if (node.children) {
        const found = this.findByKey(node.children, key);
        if (found) { return found; }
      }
    }
    return null;
  }

  private buildMultiLabel(nodes: TreeNode[]): string | null {
    if (!nodes.length) { return null; }
    if (nodes.length <= 2) { return nodes.map(n => n.label).join(', '); }
    return `${nodes.slice(0, 2).map(n => n.label).join(', ')} +${nodes.length - 2} more`;
  }
}

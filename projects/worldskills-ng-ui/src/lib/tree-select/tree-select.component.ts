import {
  Component,
  computed,
  ContentChild,
  effect,
  ElementRef,
  HostListener,
  inject,
  input,
  model,
  output,
  signal,
  TemplateRef,
  untracked,
  ChangeDetectionStrategy,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgTemplateOutlet } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TreeSelectNode } from './tree-select-node';

export type TreeSelectMode = 'single' | 'multiple' | 'checkbox';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.css'],
  standalone: true,
  imports: [NgTemplateOutlet, TranslatePipe, InputTextModule, IconFieldModule, InputIconModule, ProgressSpinnerModule, TreeModule],
})
export class TreeSelectComponent {

  // ── Inputs ────────────────────────────────────────────────────────────────

  /** Flat or nested list of nodes to display. */
  items = input<TreeSelectNode[]>([]);

  /** Selected id for single mode — supports two-way binding: [(selectedId)] */
  selectedId = model<number | string | null>(null);

  /** Selected ids for multiple / checkbox mode — supports two-way binding: [(selectedIds)] */
  selectedIds = model<(number | string)[]>([]);

  placeholder = input('Select...');
  loading = input(false);
  selectionMode = input<TreeSelectMode>('single');

  /** Enable virtual scrolling for large trees. */
  virtualScroll = input(false);

  /** Row height in px used by virtual scroll (should match your node height). */
  virtualScrollItemSize = input(32);

  // ── Outputs ───────────────────────────────────────────────────────────────
  // selectedIdChange / selectedIdsChange are emitted automatically by model()

  /** Emits the full TreeSelectNode on single selection. */
  nodeSelect = output<TreeSelectNode>();

  /** Emits all selected TreeSelectNodes on multi selection. */
  nodesSelect = output<TreeSelectNode[]>();

  /** Emits when the selection is cleared. */
  nodeClear = output<void>();

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

  // ── State ─────────────────────────────────────────────────────────────────

  allNodes = computed(() => this.toTreeNodes(this.items()));
  displayNodes = signal<TreeNode[]>([]);
  selection = signal<TreeNode | TreeNode[] | null>(null);
  isOpen = signal(false);
  term = signal('');
  triggerLabel = signal<string | null>(null);

  private el = inject(ElementRef);
  private searchTerm$ = new Subject<string>();

  constructor() {
    // Search debounce — takeUntilDestroyed replaces OnDestroy
    this.searchTerm$.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      takeUntilDestroyed(),
    ).subscribe(value => {
      this.term.set(value);
      const nodes = this.allNodes();
      this.displayNodes.set(value
        ? this.filterTree(nodes, value.toLowerCase().split(/\s+/).filter(t => t))
        : nodes);
    });

    // When items change: reset displayNodes and re-resolve selection
    effect(() => {
      const nodes = this.allNodes(); // tracks items() via computed
      untracked(() => {
        this.term.set('');
        this.displayNodes.set(nodes);
        this.resolveSelection();
      });
    });

    // When selectedId/selectedIds change from parent: re-resolve selection
    effect(() => {
      this.selectedId(); // track
      this.selectedIds(); // track
      untracked(() => {
        if (this.allNodes().length > 0) {
          this.resolveSelection();
        }
      });
    });
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement) {
    if (!this.el.nativeElement.contains(target)) {
      this.isOpen.set(false);
    }
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

  resolveSelection(): void {
    const nodes = this.allNodes();
    if (this.selectionMode() === 'single') {
      const id = this.selectedId();
      if (id == null) {
        this.selection.set(null);
        this.triggerLabel.set(null);
        return;
      }
      const found = this.findByKey(nodes, String(id));
      this.selection.set(found ?? null);
      this.triggerLabel.set(found?.label ?? null);
    } else {
      const keys = (this.selectedIds() ?? []).map(String);
      if (!keys.length) {
        this.selection.set([]);
        this.triggerLabel.set(null);
        return;
      }
      const found = keys.map(k => this.findByKey(nodes, k)).filter(Boolean) as TreeNode[];
      this.selection.set(found);
      this.triggerLabel.set(this.buildMultiLabel(found));
    }
  }

  onSelectionChange(event: TreeNode | TreeNode[]) {
    this.selection.set(event);

    if (this.selectionMode() === 'single') {
      const node = event as TreeNode;
      const id = node?.data?.id ?? null;
      this.selectedId.set(id); // model() emits selectedIdChange to parent
      this.triggerLabel.set(node?.label ?? null);
      this.isOpen.set(false);
      if (node?.data) { this.nodeSelect.emit(node.data as TreeSelectNode); }
    } else {
      const nodes = (event as TreeNode[]) ?? [];
      const ids = nodes.map(n => n.data?.id).filter(id => id != null);
      this.selectedIds.set(ids); // model() emits selectedIdsChange to parent
      this.triggerLabel.set(this.buildMultiLabel(nodes));
      this.nodesSelect.emit(nodes.map(n => n.data as TreeSelectNode).filter(Boolean));
    }
  }

  clear() {
    this.selectedId.set(null);
    this.selectedIds.set([]);
    this.selection.set(this.selectionMode() === 'single' ? null : []);
    this.triggerLabel.set(null);
    this.isOpen.set(false);
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
    this.isOpen.update(v => !v);
    if (this.isOpen()) {
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

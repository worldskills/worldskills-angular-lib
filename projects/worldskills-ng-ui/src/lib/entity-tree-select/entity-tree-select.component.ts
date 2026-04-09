import {
  Component, Input, Output, EventEmitter,
  OnInit, OnChanges, OnDestroy, SimpleChanges,
  forwardRef, inject,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TreeSelectComponent, TreeSelectMode } from '../tree-select/tree-select.component';
import { TreeSelectNode } from '../tree-select/tree-select-node';
import { EntityService } from './entity.service';

@Component({
  selector: 'ws-ng-ui-entity-tree-select',
  standalone: true,
  imports: [TreeSelectComponent, TranslatePipe],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EntityTreeSelectComponent),
      multi: true,
    },
  ],
  template: `
    <ws-ng-ui-tree-select
      [items]="resolvedNodes"
      [loading]="isLoading"
      [placeholder]="placeholder || ('ws_ui.entity_tree_select.placeholder' | translate)"
      [selectionMode]="selectionMode"
      [selectedId]="selectedId"
      [selectedIds]="selectedIds"
      [virtualScroll]="virtualScroll"
      (selectedIdChange)="onSelectedIdChange($event)"
      (selectedIdsChange)="onSelectedIdsChange($event)"
      (nodeSelect)="nodeSelect.emit($event)"
      (nodesSelect)="nodesSelect.emit($event)"
      (nodeClear)="onClear()"
    />
  `,
})
export class EntityTreeSelectComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
  /**
   * Scope the tree to a specific entity (member_of). Omit for the full root tree.
   * Ignored when [nodes] is provided.
   */
  @Input() entityId?: number;

  /**
   * Passthrough mode — provide nodes directly and bypass the EntityService entirely.
   * Useful once the consuming app manages its own entity loading.
   */
  @Input() nodes?: TreeSelectNode[];

  @Input() placeholder = '';
  @Input() selectionMode: TreeSelectMode = 'single';
  @Input() selectedId: number | string | null = null;
  @Input() selectedIds: (number | string)[] = [];
  @Input() virtualScroll = false;

  @Output() selectedIdChange = new EventEmitter<number | string | null>();
  @Output() selectedIdsChange = new EventEmitter<(number | string)[]>();
  @Output() nodeSelect = new EventEmitter<TreeSelectNode>();
  @Output() nodesSelect = new EventEmitter<TreeSelectNode[]>();
  @Output() nodeClear = new EventEmitter<void>();

  private entityService = inject(EntityService);
  private translate = inject(TranslateService, { optional: true });

  resolvedNodes: TreeSelectNode[] = [];
  isLoading = false;

  private sub?: Subscription;
  private cvaOnChange: (value: unknown) => void = () => {};
  private cvaOnTouched: () => void = () => {};

  ngOnInit(): void {
    if (this.nodes != null) {
      this.resolvedNodes = this.nodes;
    } else {
      this.load();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nodes'] && !changes['nodes'].isFirstChange()) {
      if (this.nodes != null) {
        this.resolvedNodes = this.nodes;
        this.isLoading = false;
      }
    }
    if (changes['entityId'] && !changes['entityId'].isFirstChange() && this.nodes == null) {
      this.load();
    }
  }

  private load(): void {
    this.isLoading = true;
    this.sub?.unsubscribe();
    this.sub = this.entityService.getTree(this.entityId).subscribe({
      next: nodes => {
        this.resolvedNodes = nodes;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  onSelectedIdChange(id: number | string | null): void {
    this.selectedId = id;
    this.selectedIdChange.emit(id);
    this.cvaOnChange(id);
    this.cvaOnTouched();
  }

  onSelectedIdsChange(ids: (number | string)[]): void {
    this.selectedIds = ids;
    this.selectedIdsChange.emit(ids);
    this.cvaOnChange(ids);
    this.cvaOnTouched();
  }

  onClear(): void {
    this.nodeClear.emit();
    this.cvaOnChange(this.selectionMode === 'single' ? null : []);
    this.cvaOnTouched();
  }

  // ── ControlValueAccessor ──────────────────────────────────────────────────

  writeValue(value: unknown): void {
    if (this.selectionMode === 'single') {
      this.selectedId = value as number | string | null;
    } else {
      this.selectedIds = (value as (number | string)[]) ?? [];
    }
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.cvaOnChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.cvaOnTouched = fn;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}

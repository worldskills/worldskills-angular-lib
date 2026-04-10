import {
  Component, DestroyRef, effect, forwardRef, inject, input, model, output, signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
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
      [items]="resolvedNodes()"
      [loading]="isLoading()"
      [placeholder]="placeholder() || ('ws_ui.entity_tree_select.placeholder' | translate)"
      [selectionMode]="selectionMode()"
      [selectedId]="selectedId()"
      [selectedIds]="selectedIds()"
      [virtualScroll]="virtualScroll()"
      (selectedIdChange)="onSelectedIdChange($event)"
      (selectedIdsChange)="onSelectedIdsChange($event)"
      (nodeSelect)="nodeSelect.emit($event)"
      (nodesSelect)="nodesSelect.emit($event)"
      (nodeClear)="onClear()"
    />
  `,
})
export class EntityTreeSelectComponent implements ControlValueAccessor {

  // ── Inputs ────────────────────────────────────────────────────────────────

  /**
   * Scope the tree to a specific entity (member_of). Omit for the full root tree.
   * Ignored when [nodes] is provided.
   */
  entityId = input<number | undefined>(undefined);

  /**
   * Passthrough mode — provide nodes directly and bypass the EntityService entirely.
   * Useful once the consuming app manages its own entity loading.
   */
  nodes = input<TreeSelectNode[] | undefined>(undefined);

  placeholder = input('');
  selectionMode = input<TreeSelectMode>('single');
  virtualScroll = input(false);

  /** Supports two-way binding [(selectedId)] and reactive-forms writeValue. */
  selectedId = model<number | string | null>(null);

  /** Supports two-way binding [(selectedIds)] and reactive-forms writeValue. */
  selectedIds = model<(number | string)[]>([]);

  // ── Outputs ───────────────────────────────────────────────────────────────
  // selectedIdChange / selectedIdsChange are emitted automatically by model()

  nodeSelect = output<TreeSelectNode>();
  nodesSelect = output<TreeSelectNode[]>();
  nodeClear = output<void>();

  // ── State ─────────────────────────────────────────────────────────────────

  resolvedNodes = signal<TreeSelectNode[]>([]);
  isLoading = signal(false);

  private entityService = inject(EntityService);
  private destroyRef = inject(DestroyRef);
  private loadSub?: Subscription;

  private cvaOnChange: (value: unknown) => void = () => {};
  private cvaOnTouched: () => void = () => {};

  constructor() {
    // Load or passthrough nodes whenever nodes/entityId inputs change
    effect(() => {
      const passthrough = this.nodes();
      const entityId = this.entityId();

      if (passthrough != null) {
        this.resolvedNodes.set(passthrough);
        this.isLoading.set(false);
      } else {
        this.load(entityId);
      }
    });
  }

  private load(entityId: number | undefined): void {
    this.loadSub?.unsubscribe();
    this.isLoading.set(true);
    this.loadSub = this.entityService.getTree(entityId).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: nodes => {
        this.resolvedNodes.set(nodes);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      },
    });
  }

  onSelectedIdChange(id: number | string | null): void {
    this.selectedId.set(id); // model() emits selectedIdChange to parent
    this.cvaOnChange(id);
    this.cvaOnTouched();
  }

  onSelectedIdsChange(ids: (number | string)[]): void {
    this.selectedIds.set(ids); // model() emits selectedIdsChange to parent
    this.cvaOnChange(ids);
    this.cvaOnTouched();
  }

  onClear(): void {
    this.nodeClear.emit();
    this.cvaOnChange(this.selectionMode() === 'single' ? null : []);
    this.cvaOnTouched();
  }

  // ── ControlValueAccessor ──────────────────────────────────────────────────

  writeValue(value: unknown): void {
    if (this.selectionMode() === 'single') {
      this.selectedId.set(value as number | string | null);
    } else {
      this.selectedIds.set((value as (number | string)[]) ?? []);
    }
  }

  registerOnChange(fn: (value: unknown) => void): void { this.cvaOnChange = fn; }
  registerOnTouched(fn: () => void): void { this.cvaOnTouched = fn; }
}

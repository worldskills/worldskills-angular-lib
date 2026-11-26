import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  computed,
  contentChild,
  contentChildren,
  input,
  output,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { WsLoadErrorComponent } from './load-error.component';
import { LoadState } from './loadable';

/**
 * Shows a spinner while loading, `<ws-ng-ui-load-error>` when loading failed, and the projected
 * template with the value once loaded. Pairs with `loadable()`.
 *
 * ```html
 * <ws-ng-ui-loadable [state]="awards.state()" errorMessage="The awards could not be loaded." (retry)="awards.reload()">
 *   <ng-template let-awards>…</ng-template>
 * </ws-ng-ui-loadable>
 * ```
 *
 * To show the shape of the content while it loads (e.g. `<ws-ng-ui-skeleton-list>`) instead of the
 * spinner, add a `#wsLoading` template:
 *
 * ```html
 * <ws-ng-ui-loadable [state]="members.state()">
 *   <ng-template #wsLoading><ws-ng-ui-skeleton-list avatar="circle" /></ng-template>
 *   <ng-template let-members>…</ng-template>
 * </ws-ng-ui-loadable>
 * ```
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-loadable',
  standalone: true,
  imports: [NgTemplateOutlet, SpinnerComponent, TranslatePipe, WsLoadErrorComponent],
  template: `
    @let s = state();
    @switch (s.status) {
      @case ('loading') {
        @if (loadingTemplate(); as loadingTpl) {
          <ng-container *ngTemplateOutlet="loadingTpl" />
        } @else {
          <div role="status" [attr.aria-label]="'ws_ui.spinner.loading' | translate">
            <ws-ng-ui-spinner [message]="loadingMessage()" />
          </div>
        }
      }
      @case ('error') {
        <ws-ng-ui-load-error
          [message]="errorMessage()"
          [severity]="severity()"
          (retry)="retry.emit()" />
      }
      @case ('loaded') {
        @if (s.status === 'loaded' && content(); as tpl) {
          <ng-container *ngTemplateOutlet="tpl; context: { $implicit: s.value }" />
        }
      }
    }
  `,
})
export class WsLoadableComponent<T> {

  /** The `state()` of a `loadable()`. */
  state = input.required<LoadState<T>>();

  /** Message when loading failed. Defaults to the translated "This could not be loaded." */
  errorMessage = input<string>();

  /** Spinner text. Defaults to the spinner's own. */
  loadingMessage = input<string>();

  /** "warn" when part of a page failed, "error" when the whole page could not load. */
  severity = input<'warn' | 'error'>('warn');

  /** Emitted by the Try again button; usually calls the loadable's `reload()`. */
  retry = output<void>();

  /** Optional `#wsLoading` template, shown instead of the spinner while loading. */
  protected readonly loadingTemplate = contentChild<TemplateRef<unknown>>('wsLoading');

  private readonly templates = contentChildren(TemplateRef);

  /**
   * The template rendered with the loaded value as `$implicit`: the one that isn't `#wsLoading`.
   * Each query gets its own TemplateRef object, so they're compared by their template node.
   */
  protected readonly content = computed(() => {
    const loading = this.loadingTemplate()?.elementRef.nativeElement;
    return this.templates().find(t => t.elementRef.nativeElement !== loading) as
      TemplateRef<{ $implicit: T }> | undefined;
  });
}

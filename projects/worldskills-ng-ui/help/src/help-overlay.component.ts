import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

import { WsHelpPoint, WsHelpService } from './help.service';

/**
 * Applied to <body> while help is open: on wide screens the page makes room for the legend
 * instead of being covered by it (rule in ng-ui theme.css).
 */
const OPEN_CLASS = 'ws-help-open';

interface PlacedPoint extends WsHelpPoint {
  top: number;
  left: number;
  width: number;
  height: number;
}

/** Box of an element; custom elements are inline by default, so use their children then. */
function rectOf(element: HTMLElement): DOMRect {
  const rect = element.getBoundingClientRect();
  if (rect.width && rect.height) return rect;
  const children = Array.from(element.children).map((c) => c.getBoundingClientRect());
  if (!children.length) return rect;
  const top = Math.min(...children.map((r) => r.top));
  const left = Math.min(...children.map((r) => r.left));
  const bottom = Math.max(...children.map((r) => r.bottom));
  const right = Math.max(...children.map((r) => r.right));
  return new DOMRect(left, top, right - left, bottom - top);
}

/**
 * The floating help button and, when open, every help point of the page at once without
 * covering it: each section gets an outline and a small numbered badge on its corner, and a
 * legend docked to the side (the page slides over to make room) lists every title and description. Hovering a badge or a legend
 * entry highlights the pair. No steps or extra clicks; Esc, the X or a click on the page closes it.
 */
@Component({
  selector: 'ws-ng-ui-help-overlay',
  imports: [ButtonModule, TranslatePipe],
  templateUrl: './help-overlay.component.html',
  styleUrl: './help-overlay.component.css',
  host: { '(document:keydown.escape)': 'close()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WsHelpOverlayComponent {
  protected readonly help = inject(WsHelpService);
  private readonly closeButton =
    viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  protected readonly available = computed(() => this.help.points().length > 0);
  protected readonly placed = signal<PlacedPoint[]>([]);
  /** The point hovered in the legend or on the page. */
  protected readonly active = signal<string | null>(null);

  /** Badges sit on the section's top-left corner, kept inside the window. */
  protected badgeTop(p: PlacedPoint): number {
    return Math.max(4, p.top - 12);
  }

  protected badgeLeft(p: PlacedPoint): number {
    return Math.max(4, p.left - 12);
  }

  constructor() {
    const measure = () =>
      this.placed.set(
        this.help.points().map((point) => {
          const r = rectOf(point.element);
          return {
            ...point,
            top: r.top,
            left: r.left,
            width: r.width,
            height: r.height,
          };
        }),
      );
    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    // while open: make room for the legend, and follow the page as it moves (the slide,
    // scrolling anywhere, resizing)
    effect((onCleanup) => {
      if (!this.help.open()) return;
      this.help.points();
      document.body.classList.add(OPEN_CLASS);
      schedule();
      window.addEventListener('scroll', schedule, true);
      window.addEventListener('resize', schedule);
      document.body.addEventListener('transitionend', schedule);
      requestAnimationFrame(() => this.closeButton()?.nativeElement.focus());
      onCleanup(() => {
        cancelAnimationFrame(frame);
        document.body.classList.remove(OPEN_CLASS);
        window.removeEventListener('scroll', schedule, true);
        window.removeEventListener('resize', schedule);
        document.body.removeEventListener('transitionend', schedule);
      });
    });
    inject(DestroyRef).onDestroy(() => cancelAnimationFrame(frame));
  }

  protected close(): void {
    this.active.set(null);
    this.help.open.set(false);
  }
}

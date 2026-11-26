import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { WsDialogComponent } from '../dialog/dialog.component';

function gcd(a: number, b: number): number {
  return b ? gcd(b, a % b) : a;
}

/** Proportions national flags use (width:height), to compare a flag against the nearest one. */
const FLAG_RATIOS: [number, number][] = [
  [1, 1], [5, 4], [4, 3], [11, 8], [3, 2], [8, 5], [5, 3], [7, 4], [9, 5], [19, 10], [2, 1],
];

/** How far off (relative) a flag may be from its standard proportion before it's pointed out. */
const FLAG_TOLERANCE = 0.01;

/**
 * An image (logo, flag, photo) that opens large in a lightbox: on a checkerboard, so white edges
 * show against the page, with its size and ratio (e.g. 480 × 320 px · ratio 3:2). The size comes
 * from `width` / `height` when known, otherwise from the image itself.
 *
 * With `flag`, it also compares the image with the nearest standard flag proportion and points
 * out flags that are more than 1% off.
 *
 * ```html
 * <ws-ng-ui-image-lightbox [src]="flag.thumbnail" alt="Flag of Finland" imgClass="h-12" [flag]="true" />
 * ```
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-image-lightbox',
  standalone: true,
  imports: [WsDialogComponent, TranslatePipe],
  templateUrl: './image-lightbox.component.html',
  styleUrls: ['./image-lightbox.component.css'],
})
export class WsImageLightboxComponent {

  /** Image URL. */
  src = input.required<string>();

  /** Image description, also the lightbox title. */
  alt = input('');

  /** Classes for the small image on the page (its usual size). */
  imgClass = input('');

  /** The original size in pixels, when known (e.g. from the API). */
  width = input<number | null | undefined>(null);
  height = input<number | null | undefined>(null);

  /** A flag: also compare it with the nearest standard flag proportion. */
  flag = input(false);

  protected readonly open = signal(false);
  private readonly natural = signal<{ width: number; height: number } | null>(null);

  protected readonly size = computed(() => {
    const width = this.width() || this.natural()?.width;
    const height = this.height() || this.natural()?.height;
    if (!width || !height) {
      return null;
    }
    const d = gcd(width, height);
    return {
      width,
      height,
      ratio: `${width / d}:${height / d}`,
      decimal: (width / height).toFixed(2),
    };
  });

  /** Flags only: the nearest standard proportion and how far off it is. */
  protected readonly nearest = computed(() => {
    const s = this.size();
    if (!this.flag() || !s) {
      return null;
    }
    const actual = s.width / s.height;
    const [w, h] = FLAG_RATIOS.reduce((best, r) =>
      Math.abs(r[0] / r[1] - actual) < Math.abs(best[0] / best[1] - actual) ? r : best,
    );
    const offBy = Math.abs(actual / (w / h) - 1);
    return {
      ratio: `${w}:${h}`,
      exact: s.width * h === s.height * w,
      off: offBy > FLAG_TOLERANCE,
      percent: (offBy * 100).toFixed(1),
    };
  });

  protected measure(event: Event): void {
    const img = event.target as HTMLImageElement;
    this.natural.set({ width: img.naturalWidth, height: img.naturalHeight });
  }
}

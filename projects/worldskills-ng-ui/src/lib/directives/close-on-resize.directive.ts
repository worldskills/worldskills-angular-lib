import { Directive, HostListener, inject } from '@angular/core';
import { Menu } from 'primeng/menu';

/** Hides a popup `p-menu` when the window resizes, so it doesn't float detached from its trigger. */
@Directive({
  selector: 'p-menu[wsCloseOnResize]',
  standalone: true,
})
export class WsCloseOnResizeDirective {
  private readonly menu = inject(Menu);

  @HostListener('window:resize')
  onResize() {
    this.menu.hide();
  }
}

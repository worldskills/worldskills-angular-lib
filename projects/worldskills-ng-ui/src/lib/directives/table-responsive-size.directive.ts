import { ChangeDetectorRef, Directive, HostListener, inject, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

/** Switches a `p-table` to `size="small"` below 1024px window width. */
@Directive({
  selector: 'p-table[wsResponsiveSize]',
  standalone: true,
})
export class WsTableResponsiveSizeDirective implements OnInit {
  private readonly table = inject(Table);
  private readonly cd = inject(ChangeDetectorRef);

  ngOnInit() {
    this.updateSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSize();
  }

  private updateSize() {
    this.table.size = window.innerWidth < 1024 ? 'small' : undefined;
    this.cd.markForCheck();
  }
}

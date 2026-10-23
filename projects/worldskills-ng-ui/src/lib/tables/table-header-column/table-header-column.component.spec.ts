import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { WsTableColumn } from '../table-column';
import { WsTableHeaderColumnComponent } from './table-header-column.component';

@Component({
  standalone: true,
  imports: [TableModule, WsTableHeaderColumnComponent],
  template: `
    <p-table [value]="rows">
      <ng-template #header>
        <tr>
          @for (col of columns; track col.key) {
            <th wsTableHeaderColumn [column]="col" class="keep-me"><button class="projected">f</button></th>
          }
        </tr>
      </ng-template>
    </p-table>
  `,
})
class HostComponent {
  rows = [{ name: 'b' }, { name: 'a' }];
  columns: WsTableColumn<never>[] = [
    { key: 'name', headerText: () => 'Name', sortable: true },
    { key: 'plain', headerText: () => 'Plain' },
  ];
}

describe('WsTableHeaderColumnComponent', () => {
  it('is the th itself and sorts on click, except from projected content', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const [name, plain] = Array.from(el.querySelectorAll<HTMLElement>('thead tr > th'));

    expect(el.querySelectorAll('th th').length).toBe(0);
    expect(name.classList).toContain('keep-me');
    expect(name.classList).toContain('p-datatable-sortable-column');
    expect(name.getAttribute('aria-sort')).toBe('none');

    name.querySelector<HTMLElement>('.projected')!.click();
    fixture.detectChanges();
    expect(name.getAttribute('aria-sort')).toBe('none');

    name.click();
    fixture.detectChanges();
    expect(name.getAttribute('aria-sort')).toBe('ascending');
    expect(name.classList).toContain('p-datatable-column-sorted');

    plain.click();
    fixture.detectChanges();
    expect(plain.hasAttribute('tabindex')).toBeFalse();
    expect(name.getAttribute('aria-sort')).toBe('ascending');
  });
});

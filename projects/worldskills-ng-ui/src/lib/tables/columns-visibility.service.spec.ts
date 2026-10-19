import { TestBed } from '@angular/core/testing';
import { WsColumnsVisibilityService } from './columns-visibility.service';
import { initializeLocalTableSort, WsTableColumn } from './table-column';

describe('WsColumnsVisibilityService', () => {
  const key = 'ws-test-table';
  const columns: WsTableColumn<never>[] = [
    { key: 'id', headerText: () => 'ID', pinned: true },
    { key: 'name', headerText: () => 'Name' },
    { key: 'notes', headerText: () => 'Notes', hidden: true },
  ];
  let service: WsColumnsVisibilityService;

  beforeEach(() => {
    localStorage.removeItem(key);
    service = TestBed.inject(WsColumnsVisibilityService);
  });

  afterEach(() => localStorage.removeItem(key));

  it('defaults to the hidden columns and persists changes', () => {
    const hidden = service.load(key, columns);
    expect(hidden()).toEqual(['notes']);

    service.save(key, ['name']);
    expect(hidden()).toEqual(['name']);
    expect(JSON.parse(localStorage.getItem(key)!)).toEqual(['name']);

    service.clear(key, columns);
    expect(hidden()).toEqual(['notes']);
  });

  it('never hides pinned columns, even from saved settings', () => {
    localStorage.setItem(key, JSON.stringify(['id', 'name']));
    expect(service.load(key, columns)()).toEqual(['name']);
  });

  it('sorts locally with the column compare function', () => {
    const cols: WsTableColumn<{ n: number }>[] = [{ key: 'n', headerText: () => 'N', sortable: (a, b) => a.n - b.n }];
    const data = [{ n: 2 }, { n: 1 }, { n: 3 }];
    initializeLocalTableSort({ field: 'n', order: -1, data }, cols);
    expect(data.map(d => d.n)).toEqual([3, 2, 1]);
  });
});

import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { WsTableColumn } from './table-column';

/** Hidden column keys per table, persisted in localStorage under `tableKey`. */
@Injectable({
  providedIn: 'root',
})
export class WsColumnsVisibilityService {
  private loadedSettings: Record<string, WritableSignal<string[]>> = {};

  /** Hidden column keys of a table; cached, so every caller shares one signal. */
  load(tableKey: string, columns: WsTableColumn<never>[]): Signal<string[]> {
    if (this.loadedSettings[tableKey] !== undefined) {
      return this.loadedSettings[tableKey];
    }

    let hidden = this.loadFromStorage(tableKey);

    // Nothing saved yet: start with the columns hidden by default
    if (hidden.length === 0) {
      hidden = columns.filter(c => c.hidden).map(c => c.key);
    }

    // Pinned columns can't be hidden, even by settings saved before they were pinned
    const pinnedKeys = columns.filter(c => c.pinned).map(c => c.key);

    this.loadedSettings[tableKey] = signal(hidden.filter(key => !pinnedKeys.includes(key)));

    return this.loadedSettings[tableKey];
  }

  save(tableKey: string, hiddenKeys: string[]) {
    (this.loadedSettings[tableKey] ??= signal([])).set(hiddenKeys);
    localStorage.setItem(tableKey, JSON.stringify(hiddenKeys));
  }

  /** Back to the columns' default `hidden` flags. */
  clear(tableKey: string, columns: WsTableColumn<never>[]) {
    this.save(
      tableKey,
      columns.filter(c => c.hidden).map(c => c.key),
    );
  }

  private loadFromStorage(tableKey: string): string[] {
    try {
      const value = JSON.parse(localStorage.getItem(tableKey) ?? '[]');
      return Array.isArray(value) ? value : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  }
}

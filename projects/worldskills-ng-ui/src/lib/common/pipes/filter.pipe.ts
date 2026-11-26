import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'wsFilter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform<T>(items: T[], search: string | null, keys: Array<keyof T>): T[];
  transform<T>(items: T[], predicate: (item: T, index: number, items: T[]) => boolean): T[];

  transform<T>(
    items: T[],
    searchTermOrPredicate: string | null | ((item: T, index: number, items: T[]) => boolean),
    keys?: Array<keyof T>
  ): T[] {
    if (!items || !items.length || !searchTermOrPredicate) {
      return items;
    }

    if (typeof searchTermOrPredicate === 'string' && Array.isArray(keys)) {
      const search = searchTermOrPredicate.toLowerCase();
      return items.filter(item =>
        keys.some(key => String(item[key]).toLowerCase().includes(search))
      );
    }

    if (typeof searchTermOrPredicate === 'function') {
      return items.filter(searchTermOrPredicate);
    }

    return items;
  }
}

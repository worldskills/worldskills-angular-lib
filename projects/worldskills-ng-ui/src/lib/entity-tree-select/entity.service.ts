import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UI_LIBRARY_CONFIG } from '../ui-lib-config';
import { I18nText } from '../common/models/i18n-text';
import { TreeSelectNode } from '../tree-select/tree-select-node';

interface EntityTreeView {
  id: number;
  name: I18nText;
  children?: EntityTreeView[];
}

interface EntityListView {
  ws_entity_list: EntityTreeView[];
}

@Injectable({ providedIn: 'root' })
export class EntityService {
  private http = inject(HttpClient);
  private config = inject(UI_LIBRARY_CONFIG);

  private cache = new Map<string, Observable<TreeSelectNode[]>>();

  private get url(): string {
    return (this.config.api?.apiEndpoint ?? '') + '/auth/ws_entities';
  }

  /**
   * Returns a cached observable of the entity tree as TreeSelectNode[].
   * @param entityId Optional — scope the tree to a specific entity (member_of param).
   *                 Omit to fetch the full root tree.
   */
  getTree(entityId?: number): Observable<TreeSelectNode[]> {
    const key = entityId != null ? String(entityId) : 'root';
    if (!this.cache.has(key)) {
      let params = new HttpParams()
        .set('depth', '10')
        .set('limit', '9999');
      if (entityId != null) {
        params = params.set('member_of', entityId);
      }
      const obs: Observable<TreeSelectNode[]> = this.http
        .get<EntityListView>(this.url, { params })
        .pipe(
          map(res => this.toNodes(res.ws_entity_list ?? [])),
          shareReplay(1),
        );
      this.cache.set(key, obs);
    }
    return this.cache.get(key)!;
  }

  /**
   * Evict one or all cached trees so the next call re-fetches from the API.
   * @param entityId Omit to clear the entire cache.
   */
  clearCache(entityId?: number): void {
    if (entityId != null) {
      this.cache.delete(String(entityId));
    } else {
      this.cache.clear();
    }
  }

  private toNodes(entities: EntityTreeView[]): TreeSelectNode[] {
    return entities.map(e => ({
      id: e.id,
      label: e.name?.text ?? String(e.id),
      selectable: true,
      children: e.children?.length ? this.toNodes(e.children) : undefined,
    }));
  }
}

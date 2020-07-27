import { Injectable } from '@angular/core';
import { KeyValue } from '@angular/common';
import { Breadcrumb } from './breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { GenericUtil } from '../util/generic.util';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  protected breadcrumbs: Breadcrumb[];

  public breadcrumbsSubject: BehaviorSubject<Breadcrumb[]>;

  public homeItemRoute: string;

  public isAtHome: boolean;

  public targetOutlet: string;

  public replacements: KeyValue<string, string>[];

  constructor() {
    this.breadcrumbs = [];
    this.replacements = [];
    this.breadcrumbsSubject = new BehaviorSubject([]);
  }

  public build(route: ActivatedRoute, url: string = ''): void {
    if (route.outlet === this.targetOutlet) {
      const path = route.snapshot.url.map(segment => segment.path).join('/');
      url = `${url}/${path}`;
      this.isAtHome = path === this.homeItemRoute.replace('/', '');
      if (route.snapshot.data.hasOwnProperty('breadcrumb')) {
        const breadcrumb: Breadcrumb = {
          key: route.snapshot.data.breadcrumb.key,
          label: route.snapshot.data.breadcrumb.label,
          params: route.snapshot.params,
          url
        };

        // handle key replacements before breadcrumbs are initialized
        const replacementIndex = this.replacements.findIndex(r => r.key === breadcrumb.label);
        if (replacementIndex !== -1) {
          breadcrumb.label = this.replacements[replacementIndex].value;
        }

        this.breadcrumbs.push(breadcrumb);
        this.breadcrumbsSubject.next(this.breadcrumbs);
      }
      // nothing to do
      if (route.children.length === 0) {
        return;
      }

      route.children.forEach(
        child => {
          this.build(child, url);
        }
      );
    }
  }

  public createOrUpdateReplacement(key: string, value: string): number {
    let index = this.replacements.findIndex(x => x.key === key);
    if (index === -1) {
      const replacement = { key, value };
      this.replacements.push(replacement);
      index = this.replacements.findIndex(x => x.key === key);
    } else {
      this.replacements[index].value = value;
    }

    return index;
  }

  public replace(key: string, value: string): void {
    const replacementIndex = this.createOrUpdateReplacement(key, value);
    if (GenericUtil.isNullOrUndefined(this.breadcrumbs)) {
      return;
    }

    if (this.breadcrumbs.length === 0) {
      return;
    }

    this.breadcrumbs.forEach((b, i) => {
      if (b.key === key) {
        this.breadcrumbs[i].label = value;
      }
    });

    this.breadcrumbsSubject.next(this.breadcrumbs);
  }
}
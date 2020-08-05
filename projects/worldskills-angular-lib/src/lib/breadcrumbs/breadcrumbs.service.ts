import { Injectable } from '@angular/core';
import { KeyValue } from '@angular/common';
import { Breadcrumb } from './breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { GenericUtil } from '../common/util/generic.util';

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

  public build(route: ActivatedRoute, url: string = '', first = true): void {
    if (first) {
      this.breadcrumbs = [];
    }
    if (route.outlet === this.targetOutlet) {
      const path = route.snapshot.url.map(segment => segment.path).join('/');
      url = `${url}/${path}`;
      this.isAtHome = GenericUtil.isNullOrUndefined(this.homeItemRoute) ? false :  path === this.homeItemRoute.replace('/', '');
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
          this.build(child, url, false);
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

  public replaceLabel(key: string, value: string): void {
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

  // this method should only be used after the breadcrumb is initialized
  public remove(key: string): void {
    const index = this.breadcrumbs.findIndex(x => x.key === key);
    if (index !== -1) {
      this.breadcrumbs.splice(index, 1);
      this.breadcrumbsSubject.next(this.breadcrumbs);
    }
  }

  // this method should only be used after the breadcrumb is initialized
  public add(breadcrumb: Breadcrumb): void {
    const index = this.breadcrumbs.findIndex(x => x.key === breadcrumb.key);
    if (index !== -1) {
      throwError(`key "${breadcrumb.key}" already exists`);
      return;
    }

    this.breadcrumbs.push(breadcrumb);
    this.breadcrumbsSubject.next(this.breadcrumbs);
  }
}

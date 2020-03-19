import { Injectable } from '@angular/core';
import { IBreadcrumb } from '../interfaces/breadcrumb.interface';
import { ActivatedRoute } from '@angular/router';
import { KeyValue } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  public breadcrumbs: IBreadcrumb[];

  public homeItemRoute: string;

  public isAtHome: boolean;

  public targetOutlet: string;

  public replacements: KeyValue<string, string>[];

  constructor() {
    this.replacements = [];
  }

  public build(route: ActivatedRoute, url: string = '') {
    if (route.outlet === this.targetOutlet) {
      const path = route.snapshot.url.map(segment => segment.path).join('/');
      url = `${url}/${path}`;
      this.isAtHome = path === this.homeItemRoute.replace('/', '');
      if (route.snapshot.data.hasOwnProperty('breadcrumb')) {
        const breadcrumb: IBreadcrumb = {
          label: route.snapshot.data.breadcrumb,
          params: route.snapshot.params,
          url
        };

        // handle key replacements before breadcrumbs are initialized
        const replacementIndex = this.replacements.findIndex(r => r.key === breadcrumb.label);
        if (replacementIndex !== -1) {
          breadcrumb.label = this.replacements[replacementIndex].value;
        }

        this.breadcrumbs.push(breadcrumb);
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

  public replace(key: string, value: string) {
    if (this.breadcrumbs) {
      // if breadcrumbs already initialized perform a live replacement
      const index = this.breadcrumbs.findIndex(x => x.label === key);
      if (index !== -1) {
        this.breadcrumbs[index].label = value;
      }
    } else {
      // if breadrcrumbs are not yet initialized
      const replacement = { key, value };
      this.replacements.push(replacement);
    }

  }

}

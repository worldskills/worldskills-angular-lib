import { Injectable } from '@angular/core';
import { IBreadcrumb } from '../interfaces/breadcrumb.interface';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  public breadcrumbs: IBreadcrumb[];

  public homeItemRoute: string;

  public isAtHome: boolean;

  public targetOutlet: string;

  constructor() {
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

  public inject(key: string, value: string) {
    const index = this.breadcrumbs.findIndex(x => x.label === key);
    if (index !== -1) {
      this.breadcrumbs[index].label = value;
    }
  }

}

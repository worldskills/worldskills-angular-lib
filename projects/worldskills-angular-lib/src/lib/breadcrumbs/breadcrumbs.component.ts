import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { IBreadcrumb } from '../interfaces/breadcrumb.interface';

@Component({
  selector: 'ws-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() showHomeItem: boolean;
  @Input() homeItemRoute: string;
  @Input() homeItemText: string;

  public breadcrumbs: IBreadcrumb[];

  public routeDataTag: string;

  public hiddenDataTag: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = [];
    this.routeDataTag = 'breadcrumb';
    this.hiddenDataTag = 'hidden';
    this.showHomeItem = false;
    this.homeItemRoute = '/';
    this.homeItemText = 'Home';
  }

  ngOnInit() {
    // subscribe to the NavigationEnd event
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
      }
    });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string= '', breadcrumbs: IBreadcrumb[]= []): IBreadcrumb[] {
    // get the child routes
    const children: ActivatedRoute[] = route.children;

    // return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    // iterate over each children
    for (const child of children) {
      // verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      // if the child component contains the hidden tag - skip the breadcrumb display
      if (child.snapshot.data.hasOwnProperty(this.hiddenDataTag)) {
        continue;
      }

      // verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(this.routeDataTag)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // get the route's URL segment
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      // append route URL to URL
      url += `/${routeURL}`;

      // add breadcrumb
      const breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[this.routeDataTag],
        params: child.snapshot.params,
        url
      };
      breadcrumbs.push(breadcrumb);

      // recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }


}

import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbsService } from '../breadcrumbs.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Breadcrumb } from '../breadcrumb';
import { Subscription } from 'rxjs';
import { ArrayUtil } from '../../common/util/array.util';
import { GenericUtil } from '../../common/util/generic.util';

@Component({
  selector: 'ws-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() showHomeItem: boolean;
  @Input() homeItemRoute: string;
  @Input() homeItemText: string;

  replacementSubscription: Subscription;
  rebuildSubscription: Subscription;

  breadcrumbs: Breadcrumb[];

  isAtHome: boolean;

  constructor(public service: BreadcrumbsService, private router: Router, private route: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // listen for dev changes to the breadcrumbs
    this.replacementSubscription = this.service.breadcrumbsSubject.subscribe(
      next => {
        this.breadcrumbs = [];
        ArrayUtil.pushMany(this.breadcrumbs, next);
      }
    );

    // init
    this.isAtHome = false;
    this.service.homeItemRoute = this.homeItemRoute;
    this.service.targetOutlet = 'primary';
    this.service.build(this.route.root);

    if (!GenericUtil.isNullOrUndefined(this.showHomeItem)) {
      this.service.showHomeItem = true;
    }

    // rebuild on nav change
    this.rebuildSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.service.build(this.route.root);
        this.isAtHome = this.service.isAtHome;
      }
    });
  }

  // tslint:disable-next-line:use-lifecycle-interface typedef
  ngOnChanges() {
    if (!GenericUtil.isNullOrUndefined(this.showHomeItem)) {
      this.service.showHomeItem = true;
    } else {
      this.service.showHomeItem = this.showHomeItem;
    }
  }

  // tslint:disable-next-line:use-lifecycle-interface typedef
  ngOnDestroy() {
    if (this.replacementSubscription) {
      this.replacementSubscription.unsubscribe();
    }
    if (this.rebuildSubscription) {
      this.rebuildSubscription.unsubscribe();
    }
  }
}

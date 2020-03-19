import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BreadcrumbService } from '../services/breadcrumb.service';

@Component({
  selector: 'ws-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() showHomeItem: boolean;
  @Input() homeItemRoute: string;
  @Input() homeItemText: string;

  mySubscription: any;

  constructor(public service: BreadcrumbService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.homeItemRoute = this.homeItemRoute;
    this.service.targetOutlet = 'primary';
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadData();
      }
    });
  }

  loadData() {
    this.service.breadcrumbs = [];
    this.service.build(this.route.root);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}

import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Breadcrumb } from './breadcrumb.model';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'ws-ng-ui-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  standalone: true,
  imports: [AsyncPipe],
})
export class BreadcrumbComponent implements OnInit, OnChanges {

  /** Label for the home item. Defaults to 'Home'. */
  @Input() homeLabel = 'Home';

  /** URL for the home item. Defaults to '/'. */
  @Input() homeRoute = '/';

  /**
   * Optional static override — when provided the router-derived breadcrumbs
   * are ignored. Useful for Storybook stories, unit tests, or server-rendered pages.
   */
  @Input() crumbs: Breadcrumb[] | null = null;

  items$: Observable<Breadcrumb[]>;

  // Optional — absent in Storybook / test environments without a router outlet.
  private router = inject(Router, { optional: true });

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.items$ = this.buildItems$();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['crumbs']) {
      this.items$ = this.buildItems$();
    }
  }

  navigate(url: string, event: Event) {
    event.preventDefault();
    if (this.router) {
      this.router.navigateByUrl(url);
    } else {
      window.location.href = url;
    }
  }

  private buildItems$(): Observable<Breadcrumb[]> {
    return this.crumbs != null
      ? of(this.crumbs)
      : this.breadcrumbService.breadcrumbs$;
  }
}

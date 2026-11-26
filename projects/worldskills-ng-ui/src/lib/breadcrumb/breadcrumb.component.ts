import { Component, computed, inject, input , ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Breadcrumb } from './breadcrumb.model';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  standalone: true,
})
export class BreadcrumbComponent {

  /** Whether to show the home item. Defaults to true. */
  showHome = input(true);

  /** Label for the home item. Defaults to 'Home'. */
  homeLabel = input('Home');

  /** URL for the home item. Defaults to '/'. */
  homeRoute = input('/');

  /**
   * Optional static override — when provided the router-derived breadcrumbs
   * are ignored. Useful for Storybook stories, unit tests, or server-rendered pages.
   */
  crumbs = input<Breadcrumb[] | null>(null);

  private router = inject(Router, { optional: true });
  private breadcrumbService = inject(BreadcrumbService);

  private serviceCrumbs = toSignal(this.breadcrumbService.breadcrumbs$, { initialValue: [] });

  items = computed<Breadcrumb[]>(() => this.crumbs() ?? this.serviceCrumbs());

  navigate(url: string, event: Event) {
    event.preventDefault();
    if (this.router) {
      this.router.navigateByUrl(url);
    } else {
      window.location.href = url;
    }
  }
}

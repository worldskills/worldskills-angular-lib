import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../../../worldskills-angular-lib/src/lib/breadcrumbs/breadcrumbs.service';

@Component({
    selector: 'app-another-page',
    templateUrl: './subpage-one.component.html',
    styleUrls: ['./subpage-one.component.css'],
    standalone: false
})
export class SubpageOneComponent implements OnInit {

  constructor(public breadcrumbs: BreadcrumbsService) { }

  ngOnInit(): void {
    this.breadcrumbs.linkHomeItem = false;
  }

}

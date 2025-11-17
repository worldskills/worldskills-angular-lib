import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../../../worldskills-angular-lib/src/lib/breadcrumbs/breadcrumbs.service';

@Component({
    selector: 'app-nested-page',
    templateUrl: './nested-page.component.html',
    styleUrls: ['./nested-page.component.css'],
    standalone: false
})
export class NestedPageComponent implements OnInit {

  constructor(private breadcrumbs: BreadcrumbsService) { }

  ngOnInit(): void {
    this.breadcrumbs.replaceLabel('nested', 'Nested Key Replaced');
  }

}

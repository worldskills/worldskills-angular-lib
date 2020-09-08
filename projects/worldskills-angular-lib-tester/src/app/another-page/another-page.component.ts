import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../../../worldskills-angular-lib/src/lib/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-another-page',
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.css']
})
export class AnotherPageComponent implements OnInit {

  constructor(public breadcrumbs: BreadcrumbsService) { }

  ngOnInit(): void {
    this.breadcrumbs.linkHomeItem = false;
  }

}

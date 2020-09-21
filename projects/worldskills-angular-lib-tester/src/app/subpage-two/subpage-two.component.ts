import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../../../worldskills-angular-lib/src/lib/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-another-page',
  templateUrl: './subpage-two.component.html',
  styleUrls: ['./subpage-two.component.css']
})
export class SubpageTwoComponent implements OnInit {

  constructor(public breadcrumbs: BreadcrumbsService) { }

  ngOnInit(): void {
    this.breadcrumbs.linkHomeItem = false;
  }

}

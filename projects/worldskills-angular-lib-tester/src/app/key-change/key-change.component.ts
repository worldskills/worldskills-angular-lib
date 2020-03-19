import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../../worldskills-angular-lib/src/lib/services/breadcrumb.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-key-change',
  templateUrl: './key-change.component.html',
  styleUrls: ['./key-change.component.css']
})
export class KeyChangeComponent implements OnInit {

  constructor(public breadcrumbs: BreadcrumbService, public router: Router) {
  }

  ngOnInit() {
    this.breadcrumbs.replace('[key]', 'The Key has changed');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectHandler } from '../../../../worldskills-angular-lib/src/lib/auth/handlers/redirect.handler';
import { NgAuthService } from '../../../../worldskills-angular-lib/src/lib/auth/ng-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // selected: AddVoteView;

  constructor(protected ngAuthService: NgAuthService, protected router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const handler = new RedirectHandler(this.ngAuthService, this.router);
    handler.redirectOrReturn(['/nest'], error => console.log(error));
  }

}

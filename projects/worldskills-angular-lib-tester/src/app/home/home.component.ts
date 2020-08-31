import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectHandler } from '../../../../worldskills-angular-lib/src/lib/auth/handlers/redirect.handler';
import { AuthService } from '../../../../worldskills-angular-lib/src/lib/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // selected: AddVoteView;

  constructor(protected authService: AuthService, protected router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const handler = new RedirectHandler(this.authService, this.router);
    handler.redirectOrReturn(['/nest'], error => console.log(error));
  }

}

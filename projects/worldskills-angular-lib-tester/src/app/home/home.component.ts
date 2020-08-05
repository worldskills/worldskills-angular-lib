import { Component, OnInit } from '@angular/core';
import { WorldskillsAngularLibService } from '../../../../worldskills-angular-lib/src/lib/worldskills-angular-lib.service';
import { Poll } from '../../../../worldskills-angular-lib/src/lib/polls/models/poll';
import { Result } from '../../../../worldskills-angular-lib/src/lib/polls/models/result';
import { Vote } from '../../../../worldskills-angular-lib/src/lib/polls/models/vote';
import { VoteEntry } from '../../../../../dist/worldskills-angular-lib/lib/polls/models/vote-entry';
import { NgAuthService } from '../../../../worldskills-angular-lib/src/lib/auth/ng-auth.service';
import { Router } from '@angular/router';
import { RedirectHandler } from '../../../../worldskills-angular-lib/src/lib/auth/handlers/redirect.handler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // selected: AddVoteView;

  constructor(protected service: NgAuthService, protected router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {

    const handler = new RedirectHandler(this.service, this.router);
    handler.redirectOrReturn(['/nest'], error => console.log(error));
  }

}

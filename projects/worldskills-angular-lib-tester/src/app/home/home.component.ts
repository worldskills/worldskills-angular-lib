import {Component, OnInit} from '@angular/core';
import {RedirectHandler} from '../../../../worldskills-angular-lib/src/lib/auth/handlers/redirect.handler';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // selected: AddVoteView;

    constructor(
        private redirectHandler: RedirectHandler,
        private route: ActivatedRoute,
    ) {
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.redirectHandler.redirectOrReturn({
            url: ['/nest'],
            onlyIfExact: this.route,
        }).subscribe({
            error: error => console.log(error)
        });
    }

}

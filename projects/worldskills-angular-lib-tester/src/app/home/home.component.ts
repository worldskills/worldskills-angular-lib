import {Component, OnInit} from '@angular/core';
import { RedirectEventHandler } from '../../../../worldskills-angular-lib/src/lib/auth/handlers/redirect-event.handler';
import { GenericUtil } from '../../../../worldskills-angular-lib/src/lib/common/util/generic.util';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {

    // selected: AddVoteView;

    url: string;

    constructor(
        // private redirectHandler: RedirectHandler,
        private redirectEvent: RedirectEventHandler
    ) {
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.redirectEvent.listen().subscribe(
            next => {
                console.log(next);
                this.url = next;
            },
            error => console.log(error),
            () => {
                console.log(this.url);
                const url = GenericUtil.isNullOrUndefined(this.url) ? '/home/nested' : this.url;
                console.log(url);
                this.redirectEvent.getUser(true).subscribe(user => {
                    console.log(user);
                    this.redirectEvent.redirectUserToUrl(url);
                });

            }
        );
    }

}

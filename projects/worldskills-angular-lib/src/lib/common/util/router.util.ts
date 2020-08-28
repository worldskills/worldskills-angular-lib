import {NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, map, startWith} from 'rxjs/operators';

export class RouterUtil {
    static lastNavigationEventWithOrInitialObservable(router: Router, name = null): Observable<any> {
        const result = router.events.pipe(filter(event => event instanceof NavigationEnd),
            startWith(true), map(v => name !== null ? name : v));
        return result;
    }
}

import {ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, map, startWith} from 'rxjs/operators';

export class RouterUtil {
    static lastNavigationEventWithOrInitialObservable(router: Router, name = null): Observable<any> {
        const result = router.events.pipe(filter(event => event instanceof NavigationEnd),
            startWith(true), map(v => name !== null ? name : v));
        return result;
    }

    static getResolvedUrl(route: ActivatedRouteSnapshot): string {
        const result = route.pathFromRoot
            .map(v => v.url.map(segment => segment.toString()).join('/'))
            .join('/');
        return result;
    }

    static getConfiguredUrl(route: ActivatedRouteSnapshot): string {
        const result = '/' + route.pathFromRoot
            .filter(v => v.routeConfig)
            .map(v => v.routeConfig.path)
            .join('/');
        return result;
    }

}

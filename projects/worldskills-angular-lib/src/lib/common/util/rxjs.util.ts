import {combineLatest, Observable, Subscribable} from 'rxjs';
import {map} from 'rxjs/operators';
import {WsService} from '../services/ws.service';

export class RxjsUtil {
    static loaderSubscriber(...subscribables: Array<Subscribable<boolean> | WsService<any, any>>): Observable<boolean> {
        const sources: Array<Subscribable<boolean>> = subscribables
            .map((s: Subscribable<boolean> | WsService<any, any>) => s instanceof WsService ? s.loading : s);
        return combineLatest(sources).pipe(map(ls => !ls.every(l => !l)));
    }
}

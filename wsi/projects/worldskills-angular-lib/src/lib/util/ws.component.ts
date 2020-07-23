import { Subscription, TeardownLogic } from 'rxjs';
import { OnDestroy, Directive } from '@angular/core';


@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class WsComponent implements OnDestroy {
  protected subscriptions: Subscription = new Subscription();

  constructor() {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // tslint:disable-next-line:typedef
  protected subscribe(...teardowns: Array<TeardownLogic>) {
    teardowns.forEach(teardown => this.subscriptions.add(teardown));
  }

}

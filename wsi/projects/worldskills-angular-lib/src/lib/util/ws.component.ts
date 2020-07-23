import { Subscription, TeardownLogic } from 'rxjs';
import { OnDestroy } from '@angular/core';

export abstract class WsComponent implements OnDestroy {
  protected subscriptions: Subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // tslint:disable-next-line:typedef
  protected subscribe(...teardowns: Array<TeardownLogic>) {
    teardowns.forEach(teardown => this.subscriptions.add(teardown));
  }

}

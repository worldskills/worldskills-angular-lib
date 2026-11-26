import { Directive, ElementRef, effect, inject, input } from '@angular/core';

import { WsHelpService } from './help.service';

/**
 * Marks an element as a help point of the current page: `<p-card wsHelp="filters">`.
 * The id must be in the page's points (see `provideWsHelp`). An element that isn't rendered
 * (e.g. inside `@if (isAdmin())`) has no help either, so help follows permissions for free.
 */
@Directive({ selector: '[wsHelp]' })
export class WsHelpDirective {
  readonly wsHelp = input.required<string>();

  constructor() {
    const help = inject(WsHelpService);
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    effect((onCleanup) => {
      const id = this.wsHelp();
      help.register(id, element);
      onCleanup(() => help.unregister(id, element));
    });
  }
}

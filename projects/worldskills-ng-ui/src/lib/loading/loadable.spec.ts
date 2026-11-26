import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService } from '@ngx-translate/core';
import { Subject, of, throwError } from 'rxjs';
import { loadable } from './loadable';
import { WsLoadableComponent } from './loadable.component';
import { WsSkeletonListComponent } from './skeleton-list.component';

describe('loadable()', () => {
  const create = <T>(factory: () => T) => TestBed.runInInjectionContext(factory);
  const flush = () => TestBed.tick();

  it('goes from loading to loaded', () => {
    const response = new Subject<string>();
    const data = create(() => loadable(() => response));
    flush();
    expect(data.state().status).toBe('loading');

    response.next('Finland');
    flush();
    expect(data.value()).toBe('Finland');
  });

  it('reports an error and loads again on reload', () => {
    let fail = true;
    const data = create(() => loadable(() => (fail ? throwError(() => new Error('x')) : of(1))));
    flush();
    expect(data.state().status).toBe('error');

    fail = false;
    data.reload();
    flush();
    expect(data.value()).toBe(1);
  });

  it('waits while the params are null and re-fetches when they change', () => {
    const id = signal<number | null>(null);
    const fetched: number[] = [];
    const data = create(() => loadable(id, value => {
      fetched.push(value);
      return of(value * 10);
    }));
    flush();
    expect(data.state().status).toBe('loading');
    expect(fetched).toEqual([]);

    id.set(2);
    flush();
    expect(data.value()).toBe(20);

    id.set(3);
    flush();
    expect(data.value()).toBe(30);
    expect(fetched).toEqual([2, 3]);
  });

  it('keeps the value during and after a failed refresh', () => {
    let response: Subject<string> | null = null;
    const data = create(() => loadable(() => (response ? response : of('first'))));
    flush();
    expect(data.value()).toBe('first');

    response = new Subject<string>();
    data.refresh();
    flush();
    expect(data.value()).toBe('first');

    response.error(new Error('x'));
    flush();
    expect(data.value()).toBe('first');
  });
});

@Component({
  imports: [WsLoadableComponent],
  template: `
    <ws-ng-ui-loadable [state]="data.state()" errorMessage="Could not load the name." (retry)="data.reload()">
      <ng-template let-name><p id="value">{{ name }}</p></ng-template>
    </ws-ng-ui-loadable>
  `,
})
class HostComponent {
  fail = signal(true);
  data = loadable(() => (this.fail() ? throwError(() => new Error('x')) : of('Austria')));
}

describe('WsLoadableComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideNoopAnimations(), provideTranslateService({ lang: 'en' })] });
  });

  it('shows the error with a retry, then the value', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.textContent).toContain('Could not load the name.');
    expect(el.querySelector('#value')).toBeNull();

    fixture.componentInstance.fail.set(false);
    el.querySelector('button')!.click();
    fixture.detectChanges();

    expect(el.querySelector('#value')?.textContent).toBe('Austria');
  });
});

@Component({
  imports: [WsLoadableComponent, WsSkeletonListComponent],
  template: `
    <ws-ng-ui-loadable [state]="data.state()">
      <ng-template #wsLoading><ws-ng-ui-skeleton-list [rows]="3" avatar="circle" [lines]="2" [meta]="true" /></ng-template>
      <ng-template let-name><p id="value">{{ name }}</p></ng-template>
    </ws-ng-ui-loadable>
  `,
})
class SkeletonHostComponent {
  response = new Subject<string>();
  data = loadable(() => this.response);
}

describe('WsLoadableComponent with a loading template', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideNoopAnimations(), provideTranslateService({ lang: 'en' })] });
  });

  it('shows the loading template instead of the spinner, then the value', () => {
    const fixture = TestBed.createComponent(SkeletonHostComponent);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('ws-ng-ui-skeleton-list')).not.toBeNull();
    expect(el.querySelector('ws-ng-ui-spinner')).toBeNull();
    expect(el.querySelector('#value')).toBeNull();

    fixture.componentInstance.response.next('Finland');
    fixture.detectChanges();
    expect(fixture.componentInstance.data.state().status).toBe('loaded');

    expect(el.querySelector('ws-ng-ui-skeleton-list')).toBeNull();
    expect(el.querySelector('#value')?.textContent).toBe('Finland');
  });
});

describe('WsSkeletonListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideTranslateService({ lang: 'en' })] });
  });

  it('draws the rows with avatar, lines and tag, hidden from screen readers but announced as busy', () => {
    const fixture = TestBed.createComponent(WsSkeletonListComponent);
    fixture.componentRef.setInput('rows', 4);
    fixture.componentRef.setInput('avatar', 'square');
    fixture.componentRef.setInput('lines', 2);
    fixture.componentRef.setInput('meta', true);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.getAttribute('aria-busy')).toBe('true');
    expect(el.querySelector('ul')?.getAttribute('aria-hidden')).toBe('true');
    expect(el.querySelectorAll('li').length).toBe(4);
    // avatar + 2 lines + tag per row
    expect(el.querySelectorAll('li:first-child p-skeleton').length).toBe(4);
  });

  it('leaves out the avatar and second line by default', () => {
    const fixture = TestBed.createComponent(WsSkeletonListComponent);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelectorAll('li').length).toBe(8);
    expect(el.querySelectorAll('li:first-child p-skeleton').length).toBe(1);
  });
});

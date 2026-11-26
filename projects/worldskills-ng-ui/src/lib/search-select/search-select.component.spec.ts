import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService } from '@ngx-translate/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { WsSearchSelectComponent } from './search-select.component';

interface Item { id: number; name: string; }

describe('WsSearchSelectComponent', () => {
  function create(search: (term: string) => Observable<Item[]>) {
    TestBed.configureTestingModule({
      imports: [WsSearchSelectComponent],
      providers: [provideNoopAnimations(), provideTranslateService({ lang: 'en' })],
    });
    const fixture = TestBed.createComponent(WsSearchSelectComponent<Item>);
    fixture.componentRef.setInput('search', search);
    fixture.detectChanges();
    return fixture.componentInstance;
  }

  it('loads suggestions for the typed term', () => {
    const search = jasmine.createSpy('search').and.returnValue(of([{ id: 1, name: 'Finland' }]));
    const component = create(search);

    component.onComplete('fin');

    expect(search).toHaveBeenCalledWith('fin');
    expect(component.suggestions()).toEqual([{ id: 1, name: 'Finland' }]);
  });

  it('ignores results of an earlier search that is still pending', () => {
    const first = new Subject<Item[]>();
    const component = create(term => term === 'f' ? first : of([{ id: 2, name: 'France' }]));

    component.onComplete('f');
    component.onComplete('fr');
    first.next([{ id: 1, name: 'Finland' }]);

    expect(component.suggestions()).toEqual([{ id: 2, name: 'France' }]);
  });

  it('shows no suggestions when the search fails and keeps searching afterwards', () => {
    let fail = true;
    const component = create(() => fail ? throwError(() => new Error('500')) : of([{ id: 1, name: 'Finland' }]));

    component.onComplete('x');
    expect(component.suggestions()).toEqual([]);

    fail = false;
    component.onComplete('fin');
    expect(component.suggestions()).toEqual([{ id: 1, name: 'Finland' }]);
  });

  it('reports the selected item to forms and the output', () => {
    const component = create(() => of([]));
    const onChange = jasmine.createSpy('onChange');
    const emitted: unknown[] = [];
    component.registerOnChange(onChange);
    component.selectionChange.subscribe(v => emitted.push(v));

    component.onValueChange({ id: 1, name: 'Finland' });

    expect(onChange).toHaveBeenCalledWith({ id: 1, name: 'Finland' });
    expect(emitted).toEqual([{ id: 1, name: 'Finland' }]);
  });

  it('treats free text as no selection', () => {
    const component = create(() => of([]));
    const onChange = jasmine.createSpy('onChange');
    component.registerOnChange(onChange);

    component.onValueChange('fin' as unknown as Item);

    expect(component.value()).toBeNull();
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it('writes form values and disabled state', () => {
    const component = create(() => of([]));
    component.writeValue({ id: 3, name: 'Germany' });
    component.setDisabledState(true);

    expect(component.value()).toEqual({ id: 3, name: 'Germany' });
    expect(component.disabled()).toBeTrue();
  });
});

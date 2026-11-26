import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { wsFeatures } from './features';
import { provideWsNoAutofill } from './no-autofill';

@Component({ template: '' })
class PageComponent {}

describe('wsFeatures()', () => {
  const features = wsFeatures({ merge: true, reviewTasks: false });

  it('reports which features are on', () => {
    expect(features.isOn('merge')).toBeTrue();
    expect(features.isOn('reviewTasks')).toBeFalse();
  });

  it('guards the pages of switched-off features', async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: 'home', component: PageComponent },
          { path: 'merge', component: PageComponent, canActivate: [features.guard('merge')] },
          { path: 'tasks', component: PageComponent, canActivate: [features.guard('reviewTasks', '/home')] },
        ]),
      ],
    });
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/merge');
    expect(router.url).toBe('/merge');

    await router.navigateByUrl('/tasks');
    expect(router.url).toBe('/home');
  });
});

@Component({
  template: `
    <input id="name" />
    <input id="password" type="password" />
    <input id="email" data-allow-autofill />
    <textarea id="notes"></textarea>
  `,
})
class FormComponent {}

describe('provideWsNoAutofill()', () => {
  it('turns autofill off on text inputs, except passwords and opted-in fields', async () => {
    TestBed.configureTestingModule({ providers: [provideWsNoAutofill()] });
    const fixture = TestBed.createComponent(FormComponent);
    document.body.appendChild(fixture.nativeElement);
    fixture.detectChanges();
    // the observer runs after the DOM change
    await new Promise(resolve => setTimeout(resolve));
    const el = (id: string) => fixture.nativeElement.querySelector(`#${id}`) as HTMLElement;

    expect(el('name').getAttribute('autocomplete')).toBe('off');
    expect(el('name').hasAttribute('data-1p-ignore')).toBeTrue();
    expect(el('notes').getAttribute('autocomplete')).toBe('off');
    expect(el('password').hasAttribute('autocomplete')).toBeFalse();
    expect(el('email').hasAttribute('autocomplete')).toBeFalse();

    fixture.nativeElement.remove();
  });
});

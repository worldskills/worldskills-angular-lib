import { async, ComponentFixture, TestBed, ComponentFixtureNoNgZone } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  template: `Home`
})
class TestHomeComponent {
}

@Component({
  template: `Other`
})
class TestOtherComponent {
}

@Component({
  template: `OtherChild`
})
class TestOtherChildComponent {
}


@Component({
  template: `<router-outlet #routerOutlet="outlet"></router-outlet><router-outlet name="popup"></router-outlet>`
})
export class TestAppComponent {
}


describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let router: Router;
  let fixture: ComponentFixture<BreadcrumbsComponent>;


  const routes: Routes = [
    { path: 'home', component: TestHomeComponent },
    { path: 'other', component: TestOtherComponent, data: { breadcrumb: 'other' }, children: [
      { path: 'child', component: TestOtherChildComponent, data: { breadcrumb: 'childs' } },
      { path: 'child2', component: TestOtherChildComponent }
    ] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'popup', outlet: 'popup', component: TestOtherComponent, data: { breadcrumb: 'other' } }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ BreadcrumbsComponent, TestHomeComponent, TestOtherComponent, TestOtherChildComponent, TestAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    component.showHomeItem = true;
    component.homeItemRoute = '/home';
    component.homeItemText = 'Home';
    fixture.detectChanges();
  });

  it('should create - basic', () => {
    router.initialNavigation();
    expect(component).toBeTruthy();
  });

  it('should create - default redirect', () => {
    router.navigate(['']);
    expect(component).toBeTruthy();
  });

  it('should create - navigate', () => {
    router.navigate(['/other']);
    expect(component).toBeTruthy();
  });

  it('should create - navigate child', () => {
    router.navigate(['/other/child']);
    router.navigate(['other/child2']);
    expect(component).toBeTruthy();
  });

  it('should create - navigate child with no breadcrumb', () => {
    router.navigate(['other/child2']);
    expect(component).toBeTruthy();
  });

  it('should create - navigate invalid route', () => {
    router.navigate([{ outlets: { popup: ['popup'] } }]);
    expect(component).toBeTruthy();
  });
});

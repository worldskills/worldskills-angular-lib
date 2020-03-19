import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRouterComponent } from './simple-router.component';

describe('SimpleRouterComponent', () => {
  let component: SimpleRouterComponent;
  let fixture: ComponentFixture<SimpleRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

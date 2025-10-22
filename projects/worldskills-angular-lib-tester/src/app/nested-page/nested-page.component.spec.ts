import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedPageComponent } from './nested-page.component';

describe('NestedPageComponent', () => {
  let component: NestedPageComponent;
  let fixture: ComponentFixture<NestedPageComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ NestedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

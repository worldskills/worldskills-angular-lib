import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageOneComponent } from './subpage-one.component';

describe('AnotherPageComponent', () => {
  let component: SubpageOneComponent;
  let fixture: ComponentFixture<SubpageOneComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

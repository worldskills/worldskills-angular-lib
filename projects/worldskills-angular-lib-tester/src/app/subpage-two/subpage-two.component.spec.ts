import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageTwoComponent } from './subpage-two.component';

describe('AnotherPageComponent', () => {
  let component: SubpageTwoComponent;
  let fixture: ComponentFixture<SubpageTwoComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ SubpageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

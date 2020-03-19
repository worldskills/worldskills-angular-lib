import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyChangeComponent } from './key-change.component';

describe('KeyChangeComponent', () => {
  let component: KeyChangeComponent;
  let fixture: ComponentFixture<KeyChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

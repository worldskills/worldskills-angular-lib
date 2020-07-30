import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteControlComponent } from './vote-control.component';

describe('VoteControlComponent', () => {
  let component: VoteControlComponent;
  let fixture: ComponentFixture<VoteControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

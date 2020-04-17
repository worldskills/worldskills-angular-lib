import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollResultGraphComponent } from './poll-result-graph.component';

describe('PollResultGraphComponent', () => {
  let component: PollResultGraphComponent;
  let fixture: ComponentFixture<PollResultGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollResultGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollResultGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

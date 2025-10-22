import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteControlComponent } from './vote-control.component';
import { WSTranslate } from '../../i18n/ws-translate-pipe';

describe('VoteControlComponent', () => {
  let component: VoteControlComponent;
  let fixture: ComponentFixture<VoteControlComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ VoteControlComponent, WSTranslate ]
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

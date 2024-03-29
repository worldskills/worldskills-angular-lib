import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WsSpinnerComponent} from './ws-spinner.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('WsSpinnerComponent', () => {
  let component: WsSpinnerComponent;
  let fixture: ComponentFixture<WsSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WsSpinnerComponent],
      providers: [],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

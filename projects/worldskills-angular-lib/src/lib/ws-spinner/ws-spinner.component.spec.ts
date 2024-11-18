import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WsSpinnerComponent} from './ws-spinner.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('WsSpinnerComponent', () => {
  let component: WsSpinnerComponent;
  let fixture: ComponentFixture<WsSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [WsSpinnerComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WsSpinnerComponent} from './ws-spinner.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { WSTranslate } from '../i18n/ws-translate-pipe';
import { WsiTranslateService } from '../i18n/wsi-translate.service';

describe('WsSpinnerComponent', () => {
  let component: WsSpinnerComponent;
  let fixture: ComponentFixture<WsSpinnerComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
    declarations: [WsSpinnerComponent, WSTranslate],
    imports: [RouterTestingModule, WsiTranslateService],
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

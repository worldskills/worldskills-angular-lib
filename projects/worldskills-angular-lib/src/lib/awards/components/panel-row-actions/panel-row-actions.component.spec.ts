import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PanelRowActionsComponent} from './panel-row-actions.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PanelRowActionsComponent', () => {
  let component: PanelRowActionsComponent;
  let fixture: ComponentFixture<PanelRowActionsComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
    declarations: [PanelRowActionsComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelRowActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

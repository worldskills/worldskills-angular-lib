import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PanelRowActionsComponent} from './panel-row-actions.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('PanelRowActionsComponent', () => {
  let component: PanelRowActionsComponent;
  let fixture: ComponentFixture<PanelRowActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [],
      declarations: [PanelRowActionsComponent]
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

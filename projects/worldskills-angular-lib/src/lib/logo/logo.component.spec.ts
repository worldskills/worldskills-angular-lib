import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    component.mode = 'default';
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnChanges();
    expect(component).toBeTruthy();
  });

  it('should create - default check', () => {
    component.mode = '';
    fixture.detectChanges();
    component.ngOnChanges();
    expect(component).toBeTruthy();
  });
});

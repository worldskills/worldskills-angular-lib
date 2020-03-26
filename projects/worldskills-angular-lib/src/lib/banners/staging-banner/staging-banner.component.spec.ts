import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagingBannerComponent } from './staging-banner.component';

describe('StagingBannerComponent', () => {
  let component: StagingBannerComponent;
  let fixture: ComponentFixture<StagingBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagingBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

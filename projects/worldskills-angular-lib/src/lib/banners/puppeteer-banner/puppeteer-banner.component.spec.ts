import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppeteerBannerComponent } from './puppeteer-banner.component';

describe('PuppeteerBannerComponent', () => {
  let component: PuppeteerBannerComponent;
  let fixture: ComponentFixture<PuppeteerBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppeteerBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppeteerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

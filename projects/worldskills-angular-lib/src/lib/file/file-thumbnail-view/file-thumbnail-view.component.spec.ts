import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileThumbnailViewComponent } from './file-thumbnail-view.component';

describe('FileThumbnailViewComponent', () => {
  let component: FileThumbnailViewComponent;
  let fixture: ComponentFixture<FileThumbnailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileThumbnailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileThumbnailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

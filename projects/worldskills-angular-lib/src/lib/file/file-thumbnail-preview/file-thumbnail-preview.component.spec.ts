import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileThumbnailPreviewComponent } from './file-thumbnail-preview.component';

describe('FileThumbnailViewComponent', () => {
  let component: FileThumbnailPreviewComponent;
  let fixture: ComponentFixture<FileThumbnailPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileThumbnailPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileThumbnailPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

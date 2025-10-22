import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceThumbnailComponent } from './resource-thumbnail.component';
import { FileSizePipe } from '../file-size.pipe';

describe('FileThumbnailViewComponent', () => {
  let component: ResourceThumbnailComponent;
  let fixture: ComponentFixture<ResourceThumbnailComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceThumbnailComponent, FileSizePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

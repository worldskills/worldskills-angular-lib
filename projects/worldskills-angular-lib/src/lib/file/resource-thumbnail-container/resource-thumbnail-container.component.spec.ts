import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceThumbnailContainerComponent } from './resource-thumbnail-container.component';

describe('ResourceThumbnailContainerComponent', () => {
  let component: ResourceThumbnailContainerComponent;
  let fixture: ComponentFixture<ResourceThumbnailContainerComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceThumbnailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceThumbnailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

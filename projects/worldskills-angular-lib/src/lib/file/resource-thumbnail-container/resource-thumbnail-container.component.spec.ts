import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceThumbnailContainerComponent } from './resource-thumbnail-container.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ResourceThumbnailContainerComponent', () => {
  let component: ResourceThumbnailContainerComponent;
  let fixture: ComponentFixture<ResourceThumbnailContainerComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgbModule, DatePipe],
      providers: [HttpClient, HttpHandler, DatePipe],
      declarations: [ ResourceThumbnailContainerComponent]
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

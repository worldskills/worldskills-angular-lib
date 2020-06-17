import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EntityTreeSelectComponent} from './entity-tree-select.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NgSelectModule} from '@ng-select/ng-select';

describe('EntityTreeSelectComponent', () => {
  let component: EntityTreeSelectComponent;
  let fixture: ComponentFixture<EntityTreeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgSelectModule],
      declarations: [EntityTreeSelectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

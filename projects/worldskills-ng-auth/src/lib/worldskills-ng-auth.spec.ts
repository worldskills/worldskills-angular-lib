import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldskillsNgAuth } from './worldskills-ng-auth';

describe('WorldskillsNgAuth', () => {
  let component: WorldskillsNgAuth;
  let fixture: ComponentFixture<WorldskillsNgAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldskillsNgAuth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldskillsNgAuth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

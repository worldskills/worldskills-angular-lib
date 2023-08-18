import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientAwardListComponent } from './recipient-award-list.component';

describe('AwardRecipientListComponent', () => {
  let component: RecipientAwardListComponent;
  let fixture: ComponentFixture<RecipientAwardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientAwardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientAwardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

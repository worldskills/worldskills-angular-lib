import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientAwardFormComponent } from './recipient-award-form.component';

describe('RecipientAwardFormComponent', () => {
  let component: RecipientAwardFormComponent;
  let fixture: ComponentFixture<RecipientAwardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientAwardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientAwardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

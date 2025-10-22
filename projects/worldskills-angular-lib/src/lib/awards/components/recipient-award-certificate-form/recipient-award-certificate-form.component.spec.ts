import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientAwardCertificateFormComponent } from './recipient-award-certificate-form.component';
import { WSTranslate } from 'worldskills-angular-lib';

describe('PersonAwardCertificateFormComponent', () => {
  let component: RecipientAwardCertificateFormComponent;
  let fixture: ComponentFixture<RecipientAwardCertificateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientAwardCertificateFormComponent, WSTranslate]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientAwardCertificateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

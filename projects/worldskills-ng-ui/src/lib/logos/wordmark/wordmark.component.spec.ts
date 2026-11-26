import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordmarkComponent } from './wordmark.component';

describe('WordmarkComponent', () => {
  let component: WordmarkComponent;
  let fixture: ComponentFixture<WordmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordmarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

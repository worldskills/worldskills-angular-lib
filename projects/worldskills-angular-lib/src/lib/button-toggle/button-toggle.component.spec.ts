import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleComponent } from './button-toggle.component';
import { ToggleButtonModel } from '../models/toggle-button-model';

describe('ButtonToggleComponent', () => {
  let component: ButtonToggleComponent;
  let fixture: ComponentFixture<ButtonToggleComponent>;
  const buttons = [
    new ToggleButtonModel({name: 'yes', text: 'yes', active: true}),
    new ToggleButtonModel({name: 'no', text: 'no', active: false})
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggleComponent);
    component = fixture.componentInstance;
    component.buttons = buttons;
    component.activeButtonName = 'yes';
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnChanges();
    expect(component).toBeTruthy();
  });

  it('should change active to: no', () => {
    // spy on event emitter
    spyOn(component.buttonClickedEvent, 'emit');
    // trigger the click
    const noButton = fixture.nativeElement.querySelectorAll('.btn')[1];
    console.log(noButton);
    noButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    console.log(component.buttonClickedEvent.emit);
    expect(component.buttonClickedEvent.emit).toHaveBeenCalled();
    expect(component.activeButtonName).toBe('no');
 });

  it('should not change active', () => {
    // spy on event emitter
    spyOn(component.buttonClickedEvent, 'emit');
    // trigger the click
    const yesButton = fixture.nativeElement.querySelectorAll('.btn')[0];
    console.log(yesButton);
    yesButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    console.log(component.buttonClickedEvent.emit);
    expect(component.buttonClickedEvent.emit).toHaveBeenCalled();
    expect(component.activeButtonName).toBe('yes');
  });
});

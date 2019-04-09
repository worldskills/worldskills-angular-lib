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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change active to: no', () => {

    const expected = {name: 'no', active: true};
    // spy on event emitter
    spyOn(component.buttonClickedEvent, 'emit');
    // trigger the click
    const noButton = fixture.nativeElement.querySelectorAll('.btn')[1];
    console.log(noButton);
    noButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    console.log(component.buttonClickedEvent.emit);
    expect(component.buttonClickedEvent.emit).toHaveBeenCalled();
    expect(component.buttons.find(x => x.name === 'yes').active).toBe(false);
    expect(component.buttons.find(x => x.name === 'no').active).toBe(true);
 });
});

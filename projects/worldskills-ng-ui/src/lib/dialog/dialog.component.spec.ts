import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService } from '@ngx-translate/core';
import { WsDialogComponent } from './dialog.component';

@Component({
  imports: [WsDialogComponent],
  template: `
    <ws-ng-ui-dialog [(visible)]="open" title="Add contact" formId="test-form" [saving]="saving()">
      <form id="test-form" (submit)="$event.preventDefault(); submitted = submitted + 1">
        <input name="email" />
      </form>
    </ws-ng-ui-dialog>
  `,
})
class HostComponent {
  open = signal(true);
  saving = signal(false);
  submitted = 0;
}

describe('WsDialogComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideNoopAnimations(), provideTranslateService({ lang: 'en' })],
    });
  });

  const footerButtons = () =>
    Array.from(document.querySelectorAll<HTMLButtonElement>('.p-dialog-footer button'));

  afterEach(() => document.querySelectorAll('.p-dialog-mask').forEach(el => el.remove()));

  it('shows a Cancel / Save footer and Save submits the form', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const buttons = footerButtons();
    expect(buttons.length).toBe(2);

    buttons[1].click();
    expect(fixture.componentInstance.submitted).toBe(1);
  });

  it('Cancel closes the dialog', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    footerButtons()[0].click();
    expect(fixture.componentInstance.open()).toBeFalse();
  });

  it('blocks Save while saving', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.saving.set(true);
    fixture.detectChanges();

    expect(footerButtons()[1].disabled).toBeTrue();
  });
});

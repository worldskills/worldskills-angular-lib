import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TranslateService, provideTranslateService } from '@ngx-translate/core';
import { WsFieldComponent } from './field.component';
import { editDialog } from './edit-dialog';

@Component({
  imports: [WsFieldComponent, ReactiveFormsModule],
  template: `
    <ws-ng-ui-field label="Code" inputId="code" [control]="code" hint="Two letters" [messages]="{ taken: 'test.taken' }">
      <input id="code" [formControl]="code" />
    </ws-ng-ui-field>
  `,
})
class HostComponent {
  code = new FormControl('', [Validators.required, Validators.minLength(2)]);
}

describe('WsFieldComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideNoopAnimations(), provideTranslateService({ lang: 'en' })] });
    TestBed.inject(TranslateService).setTranslation('en', {
      ws_ui: { field: { errors: { required: 'Required.', minlength: 'At least {{requiredLength}}.' } } },
      test: { taken: 'Already used.' },
    });
    TestBed.inject(TranslateService).use('en');
  });

  function setup() {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    return { fixture, el: fixture.nativeElement as HTMLElement, code: fixture.componentInstance.code };
  }

  it('marks a required field and links the label', () => {
    const { el } = setup();
    const label = el.querySelector('label')!;

    expect(label.textContent).toContain('Code *');
    expect(label.getAttribute('for')).toBe('code');
    expect(el.textContent).toContain('Two letters');
  });

  it('shows the first error only once touched, with its params', () => {
    const { fixture, el, code } = setup();
    expect(el.textContent).not.toContain('Required.');

    code.markAsTouched();
    fixture.detectChanges();
    expect(el.textContent).toContain('Required.');

    code.setValue('A');
    fixture.detectChanges();
    expect(el.textContent).toContain('At least 2.');
  });

  it('uses a field-specific message', () => {
    const { fixture, el, code } = setup();
    code.setValue('FI');
    code.setErrors({ taken: true });
    code.markAsTouched();
    fixture.detectChanges();

    expect(el.textContent).toContain('Already used.');
  });
});

describe('editDialog()', () => {
  it('opens for adding and for editing', () => {
    const dialog = editDialog<{ id: number }>();
    dialog.openEdit({ id: 3 });
    expect(dialog.visible()).toBeTrue();
    expect(dialog.isEdit()).toBeTrue();

    dialog.close();
    dialog.openAdd();
    expect(dialog.visible()).toBeTrue();
    expect(dialog.editing()).toBeNull();
  });
});

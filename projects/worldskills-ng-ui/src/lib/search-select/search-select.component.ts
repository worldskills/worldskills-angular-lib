import { ChangeDetectionStrategy, Component, forwardRef, input, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { catchError, Observable, of, Subject, switchMap } from 'rxjs';

/** Search function passed to `ws-ng-ui-search-select`. Receives the typed text, returns the matching items. */
export type WsSearchFn<T> = (term: string) => Observable<T[]>;

/**
 * Select whose options are loaded from the server as the user types.
 * Replaces `[wsSelect]` + ng-select from worldskills-angular-lib.
 * Form-compatible (ControlValueAccessor); the value is the selected item, or an array when `multiple` is set.
 *
 * ```html
 * <ws-ng-ui-search-select formControlName="country" [search]="searchCountries" optionLabel="name.text" />
 * ```
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-search-select',
  templateUrl: './search-select.component.html',
  standalone: true,
  imports: [AutoCompleteModule, FormsModule, TranslatePipe],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WsSearchSelectComponent),
      multi: true,
    },
  ],
})
export class WsSearchSelectComponent<T = any> implements ControlValueAccessor {

  // ── Inputs ────────────────────────────────────────────────────────────────
  /** Loads the options for the typed text. Earlier requests are cancelled when the user keeps typing. */
  search = input.required<WsSearchFn<T>>();
  /** Property path (e.g. `name.text`) or function used as the option label. */
  optionLabel = input<string | ((item: T) => string)>('name');
  /** Defaults to the translated "Type to search..." text. */
  placeholder = input<string>();
  multiple = input(false);
  /** Characters required before searching. */
  minLength = input(1);
  /** Debounce in milliseconds. */
  delay = input(300);
  /** Shows a dropdown button that searches with an empty term. */
  dropdown = input(false);
  showClear = input(true);
  inputId = input<string>();

  // ── Outputs ───────────────────────────────────────────────────────────────
  /** Emits whenever the selection changes. */
  selectionChange = output<T | T[] | null>();

  // ── State ─────────────────────────────────────────────────────────────────
  // disabled is a signal (not input) because setDisabledState() also writes to it
  disabled = signal(false);
  value = signal<T | T[] | null>(null);
  suggestions = signal<T[]>([]);

  private query$ = new Subject<string>();

  private cvaOnChange = (_: T | T[] | null) => {};
  private cvaOnTouched = () => {};

  constructor() {
    this.query$.pipe(
      switchMap(term => this.search()(term).pipe(catchError(() => of([] as T[])))),
      takeUntilDestroyed(),
    ).subscribe(items => this.suggestions.set([...items]));
  }

  onComplete(term: string): void {
    this.query$.next(term);
  }

  onValueChange(value: T | T[] | null): void {
    // With forceSelection, typed text that was not picked from the list is cleared
    const next = typeof value === 'string' ? null : value ?? null;
    this.value.set(next);
    this.cvaOnChange(next);
    this.selectionChange.emit(next);
  }

  onBlur(): void { this.cvaOnTouched(); }

  // ── ControlValueAccessor ──────────────────────────────────────────────────
  writeValue(value: T | T[] | null): void {
    this.value.set(value ?? null);
  }

  registerOnChange(fn: (_: T | T[] | null) => void): void { this.cvaOnChange = fn; }
  registerOnTouched(fn: () => void): void { this.cvaOnTouched = fn; }
  setDisabledState(disabled: boolean): void { this.disabled.set(disabled); }
}

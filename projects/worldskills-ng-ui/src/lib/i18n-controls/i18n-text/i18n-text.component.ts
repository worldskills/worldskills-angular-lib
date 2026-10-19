import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  forwardRef,
  inject,
  input,
  output,
  signal,
  untracked,
  viewChildren,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { I18nText } from '../../common/models/i18n-text';
import { Language } from '../../common/models/language';
import { LangUtil } from '../../common/util/lang.util';
import { WsI18nTranslationsMenuComponent } from '../i18n-translations-menu/i18n-translations-menu.component';

/**
 * Text input (or textarea with `multiline`) bound to a single `I18nText` with a
 * `translations` map. The language menu switches the edited language and opens a
 * dialog to add/edit/remove translations. Optional server-side autocomplete.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-i18n-text',
  standalone: true,
  templateUrl: './i18n-text.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WsI18nTextComponent),
      multi: true,
    },
  ],
  imports: [InputText, InputGroupAddon, InputGroup, Textarea, WsI18nTranslationsMenuComponent],
})
export class WsI18nTextComponent implements ControlValueAccessor {
  // Native input props
  readonly placeholder = input('');
  readonly readonly = input(false);
  readonly required = input(false);
  readonly autofocus = input(false);
  readonly autocomplete = input('');
  readonly maxlength = input<number | null>(null);
  readonly minlength = input<number | null>(null);
  readonly pattern = input<string | null>(null);
  readonly name = input('');
  readonly inputId = input('');
  readonly fluid = input(false);
  readonly availableLanguages = input<Language[]>(LangUtil.getDefaultLanguages());
  readonly multiline = input(false);
  readonly rows = input(3);
  readonly autoResize = input(true);

  // If provided, drives the initial/selected language and is followed on change.
  // If not provided, the component follows the translate service's current language.
  readonly language = input<Language | undefined>(undefined);

  // PrimeNG specific
  readonly variant = input<'filled' | 'outlined' | undefined>(undefined);
  readonly invalid = input(false);

  readonly autoComplete = input(false);
  readonly suggestions = input<string[]>([]);
  readonly minQueryLength = input(1);
  readonly completeDelay = input(300);

  /** Emitted (debounced) when the user types; the parent returns matching `suggestions`. */
  readonly completeMethod = output<{ query: string; lang: string }>();

  // Internal state.
  readonly translations = signal<Record<string, string>>({});
  readonly selectedLangCode = signal('');
  readonly disabled = signal(false);

  // Autocomplete state.
  private readonly wantSuggestions = signal(false);
  readonly activeIndex = signal(-1);
  private completeTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly optionItems = viewChildren<ElementRef<HTMLLIElement>>('suggestionOptionItem');

  readonly autocompleteEnabled = computed(() => this.autoComplete() && !this.multiline());
  readonly suggestionsVisible = computed(
    () => this.autocompleteEnabled() && this.wantSuggestions() && this.suggestions().length > 0,
  );
  readonly listboxId = computed(() => (this.inputId() || 'ws-i18n-text') + '-listbox');
  readonly activeDescendant = computed(() =>
    this.suggestionsVisible() && this.activeIndex() >= 0 ? this.optionId(this.activeIndex()) : null,
  );

  readonly supportsFieldSizing = typeof CSS !== 'undefined' && CSS.supports('field-sizing', 'content');

  // Inline input text = selected language's slice of the map.
  readonly value = computed(() => this.translations()[this.selectedLangCode()] ?? '');
  readonly dir = computed(() => LangUtil.getDirection(this.selectedLangCode()));

  private onChange: (value: I18nText) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    effect(() => {
      const items = this.optionItems();
      const index = this.activeIndex();
      untracked(() => items[index]?.nativeElement.scrollIntoView({ block: 'nearest' }));
    });

    inject(DestroyRef).onDestroy(() => {
      if (this.completeTimer) clearTimeout(this.completeTimer);
    });
  }

  writeValue(value: I18nText | null): void {
    this.translations.set(value ? { ...value.translations, [value.lang_code]: value.text } : {});
  }

  registerOnChange(fn: (value: I18nText) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onInput(event: Event): void {
    const text = (event.target as HTMLInputElement).value;
    this.translations.update(prev => ({ ...prev, [this.selectedLangCode()]: text }));
    this.emit();

    if (this.autocompleteEnabled()) {
      this.queueComplete(text);
    }
  }

  // Not a touch: this also fires when the app language changes.
  onLanguageChange(code: string): void {
    this.selectedLangCode.set(code);
    this.closeSuggestions();
  }

  onTranslationsSaved(translations: Record<string, string>): void {
    this.translations.set(translations);
    this.onTouched();
    this.emit();
  }

  onBlur(): void {
    this.onTouched();
    this.closeSuggestions();
  }

  // --- Autocomplete ---

  optionId(index: number): string {
    return `${this.listboxId()}-option-${index}`;
  }

  onKeydown(event: KeyboardEvent): void {
    if (!this.suggestionsVisible()) return;

    const items = this.suggestions();
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.activeIndex.update((i) => Math.min(i + 1, items.length - 1));
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.activeIndex.update((i) => Math.max(i - 1, 0));
        break;
      case 'Enter': {
        const i = this.activeIndex();
        if (i >= 0 && i < items.length) {
          event.preventDefault();
          this.selectSuggestion(items[i]);
        }
        break;
      }
      case 'Escape':
        this.closeSuggestions();
        break;
    }
  }

  selectSuggestion(text: string): void {
    this.translations.update(prev => ({ ...prev, [this.selectedLangCode()]: text }));
    this.emit();
    this.closeSuggestions();
    this.onTouched();
  }

  closeSuggestions(): void {
    this.wantSuggestions.set(false);
    this.activeIndex.set(-1);
  }

  private queueComplete(query: string): void {
    if (this.completeTimer) clearTimeout(this.completeTimer);

    if (query.trim().length < this.minQueryLength()) {
      this.closeSuggestions();
      return;
    }

    this.completeTimer = setTimeout(() => {
      this.wantSuggestions.set(true);
      this.activeIndex.set(-1);
      this.completeMethod.emit({ query, lang: this.selectedLangCode() });
    }, this.completeDelay());
  }

  private emit(): void {
    const map = this.translations();
    const primary = this.selectedLangCode();
    this.onChange({ lang_code: primary, text: map[primary] ?? '', translations: map });
  }
}

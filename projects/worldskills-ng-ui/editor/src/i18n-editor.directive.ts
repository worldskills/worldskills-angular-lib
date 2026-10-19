import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  signal,
  ViewContainerRef,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { Editor } from 'primeng/editor';
import { I18nText, Language, LangUtil, WsI18nTranslationsMenuComponent } from '@worldskills/ng-ui';

/**
 * Adds multi-language editing to an existing PrimeNG editor:
 *
 * ```html
 * <p-editor wsI18n formControlName="body" />
 * ```
 *
 * The form control value becomes an `I18nText` (HTML per language) instead of an HTML string,
 * and a language button is appended to the editor's toolbar (default or custom `#header`).
 * Requires `ngModel`, `formControl` or `formControlName` on the same element.
 */
@Directive({
  selector: 'p-editor[wsI18n]',
  standalone: true,
})
export class WsI18nEditorDirective implements ControlValueAccessor {
  private readonly editor = inject(Editor);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly availableLanguages = input<Language[]>(LangUtil.getDefaultLanguages());
  /** If provided, drives the selected language; otherwise the ngx-translate language does. */
  readonly language = input<Language | undefined>(undefined);

  readonly translations = signal<Record<string, string>>({});
  readonly selectedLang = signal('');
  readonly disabled = signal(false);
  private readonly primaryLang = signal('');
  private readonly quill = signal<{ root: HTMLElement; enable(enabled: boolean): void } | null>(null);

  private onChange: (value: I18nText) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    // Replace p-editor's own (HTML string) value accessor with this one.
    inject(NgControl, { self: true }).valueAccessor = this;

    const menu = inject(ViewContainerRef).createComponent(WsI18nEditorMenuComponent);
    menu.setInput('plugin', this);

    const subs = [
      this.editor.onEditorInit.subscribe(({ editor }) => {
        // Without a toolbar (modules.toolbar: false) the button stays next to the editor.
        const toolbar = this.host.nativeElement.querySelector('.ql-toolbar');
        if (toolbar) {
          const group = document.createElement('span');
          group.className = 'ql-formats';
          group.appendChild(menu.location.nativeElement);
          toolbar.appendChild(group);
        }
        this.quill.set(editor);
        this.render();
      }),
      this.editor.onTextChange.subscribe(({ source, htmlValue }) => {
        if (source !== 'user') return;
        this.translations.update(prev => ({ ...prev, [this.selectedLang()]: htmlValue ?? '' }));
        this.emit();
      }),
      this.editor.onBlur.subscribe(() => this.onTouched()),
    ];
    inject(DestroyRef).onDestroy(() => subs.forEach(s => s.unsubscribe()));

    effect(() => this.quill()?.enable(!this.disabled()));
  }

  writeValue(value: I18nText | null): void {
    this.translations.set(value ? { ...value.translations, [value.lang_code]: value.text } : {});
    this.primaryLang.set(value?.lang_code ?? '');
    this.render();
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

  onLanguageChange(code: string): void {
    this.selectedLang.set(code);
    this.render();
  }

  onTranslationsSaved(translations: Record<string, string>): void {
    this.translations.set(translations);
    this.render();
    this.onTouched();
    this.emit();
  }

  /**
   * Loads the selected language's HTML into the editor and sets its text direction.
   * Not called on user typing: re-setting the content would move the cursor.
   */
  private render(): void {
    this.editor.writeValue(this.translations()[this.selectedLang()] ?? '');
    const quill = this.quill();
    if (quill) {
      const dir = LangUtil.getDirection(this.selectedLang());
      quill.root.setAttribute('dir', dir);
      quill.root.style.textAlign = dir === 'rtl' ? 'right' : 'left';
    }
  }

  private emit(): void {
    const map = this.translations();
    // The value keeps its original language; edits to others go into `translations`.
    const primary = this.primaryLang() || this.selectedLang();
    this.onChange({ lang_code: primary, text: map[primary] ?? '', translations: map });
  }
}

/** Toolbar button + dialog for `WsI18nEditorDirective`; dialog rows are rich-text editors too. */
@Component({
  selector: 'ws-ng-ui-i18n-editor-menu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WsI18nTranslationsMenuComponent, Editor, FormsModule],
  // Undo Quill's toolbar button sizing (28x24px, floated) for the language button.
  styles: `
    :host-context(.ql-toolbar) ::ng-deep button.ws-i18n-trigger {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      width: auto;
      height: auto;
      float: none;
      padding: 0.25rem 0.5rem;
      font-family: var(--font-sans, inherit);
    }
  `,
  template: `
    <ws-ng-ui-i18n-translations-menu
      [translations]="plugin().translations()"
      (translationsChange)="plugin().onTranslationsSaved($event)"
      [selectedLang]="plugin().selectedLang()"
      (selectedLangChange)="plugin().onLanguageChange($event)"
      [availableLanguages]="plugin().availableLanguages()"
      [language]="plugin().language()"
      [disabled]="plugin().disabled()"
      [html]="true"
      size="small"
    >
      <ng-template #draft let-row let-update="update">
        <p-editor [ngModel]="row.text" (onTextChange)="update($event.htmlValue ?? '')" [style]="{ height: '10rem' }" />
      </ng-template>
    </ws-ng-ui-i18n-translations-menu>
  `,
})
export class WsI18nEditorMenuComponent {
  readonly plugin = input.required<WsI18nEditorDirective>();
}

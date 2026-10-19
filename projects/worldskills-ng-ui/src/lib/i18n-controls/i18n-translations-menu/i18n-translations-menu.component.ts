import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  effect,
  inject,
  input,
  model,
  signal,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Button, ButtonDirective, ButtonIcon, ButtonLabel } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { Menu } from 'primeng/menu';
import { Tag } from 'primeng/tag';
import { Textarea } from 'primeng/textarea';
import { Tooltip } from 'primeng/tooltip';
import { map } from 'rxjs';
import { Language } from '../../common/models/language';
import { LangUtil } from '../../common/util/lang.util';

export interface WsI18nDraftRow {
  code: string;
  label: string;
  text: string;
}

/** Context of the `#draft` template that replaces the dialog's default textarea. */
export interface WsI18nDraftContext {
  $implicit: WsI18nDraftRow;
  update: (text: string) => void;
}

/**
 * Language button + menu + "Add / Edit Translations" dialog shared by the i18n controls.
 * Holds no form state: the host owns `translations` and `selectedLang` and binds both two-way.
 * `selectedLang` follows `language` (or the ngx-translate language) whenever that changes.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ws-ng-ui-i18n-translations-menu',
  standalone: true,
  templateUrl: './i18n-translations-menu.component.html',
  imports: [
    NgTemplateOutlet,
    TranslatePipe,
    Button,
    ButtonDirective,
    ButtonIcon,
    ButtonLabel,
    Dialog,
    Menu,
    Tag,
    Textarea,
    Tooltip,
  ],
})
export class WsI18nTranslationsMenuComponent {
  private static nextId = 0;
  private readonly translate = inject(TranslateService);
  protected readonly uid = `ws-i18n-${WsI18nTranslationsMenuComponent.nextId++}`;

  readonly translations = model.required<Record<string, string>>();
  readonly selectedLang = model('');
  readonly availableLanguages = input<Language[]>(LangUtil.getDefaultLanguages());
  /** If provided, drives the selected language; otherwise the ngx-translate language does. */
  readonly language = input<Language | undefined>(undefined);
  readonly disabled = input(false);
  readonly size = input<'small' | 'large' | undefined>(undefined);
  /** Values are HTML: previews and empty checks use the plain text. */
  readonly html = input(false);
  /** Rows of the dialog's default textarea. */
  readonly draftRows = input(1);
  readonly placeholder = input('');

  readonly draftTemplate = contentChild<TemplateRef<WsI18nDraftContext>>('draft');

  private readonly serviceLang = toSignal(
    this.translate.onLangChange.pipe(map(e => e.lang)),
    { initialValue: this.translate.getCurrentLang() },
  );
  private readonly externalLangCode = computed(() => this.language()?.code ?? this.serviceLang());

  readonly dialogVisible = signal(false);
  readonly drafts = signal<WsI18nDraftRow[]>([]);
  readonly supportsFieldSizing = typeof CSS !== 'undefined' && CSS.supports('field-sizing', 'content');

  readonly addLangItems = computed<MenuItem[]>(() => {
    const present = new Set(this.drafts().map(r => r.code));
    return this.availableLanguages()
      .filter(l => !present.has(l.code))
      .map(l => ({ label: `${l.code}  ${l.name ?? l.code}`, command: () => this.addDraft(l) }));
  });

  // One group with an item per filled-in translation + a static Add/Edit action.
  readonly menuItems = computed<MenuItem[]>(() => {
    this.serviceLang(); // re-translate labels on language change
    const map = this.translations();
    const selected = this.selectedLang();

    const translationItems: MenuItem[] = this.availableLanguages()
      .filter(l => this.hasText(map[l.code]))
      .map(l => {
        const text = this.html() ? this.stripHtml(map[l.code]) : map[l.code];
        return {
          label: `${l.code} ${text}`,
          state: { code: l.code, text, active: l.code === selected },
          command: () => this.selectedLang.set(l.code),
        };
      });

    return [
      {
        label: this.translate.instant('ws_ui.i18n_controls.available_translations'),
        items: [
          ...translationItems,
          { separator: true },
          {
            label: this.translate.instant('ws_ui.i18n_controls.add_edit_translations'),
            icon: 'pi pi-language',
            state: { action: true },
            command: () => this.openDialog(),
          },
        ],
      },
    ];
  });

  constructor() {
    // Internal menu picks persist until the next external language change.
    effect(() => {
      const code = this.externalLangCode();
      if (code) {
        this.selectedLang.set(code);
      }
    });
  }

  openDialog(): void {
    const map = this.translations();
    this.drafts.set(
      this.availableLanguages()
        .filter(l => this.hasText(map[l.code]))
        .map(l => ({ code: l.code, label: l.name ?? l.code, text: map[l.code] })),
    );
    this.dialogVisible.set(true);
  }

  updateDraft(code: string, text: string): void {
    this.drafts.update(rows => rows.map(r => (r.code === code ? { ...r, text } : r)));
  }

  draftContext(row: WsI18nDraftRow): WsI18nDraftContext {
    return { $implicit: row, update: (text: string) => this.updateDraft(row.code, text) };
  }

  addDraft(lang: Language): void {
    this.drafts.update(rows => [...rows, { code: lang.code, label: lang.name ?? lang.code, text: '' }]);
  }

  removeDraft(code: string): void {
    this.drafts.update(rows => rows.filter(r => r.code !== code));
  }

  saveDialog(): void {
    const next: Record<string, string> = {};
    for (const row of this.drafts()) {
      if (this.hasText(row.text)) {
        next[row.code] = this.html() ? row.text : row.text.trim();
      }
    }
    this.translations.set(next);
    this.dialogVisible.set(false);
  }

  private hasText(text: string | undefined): boolean {
    return (this.html() ? this.stripHtml(text) : (text ?? '').trim()).length > 0;
  }

  private stripHtml(html: string | undefined): string {
    if (!html) {
      return '';
    }
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent ?? '').trim();
  }

  protected readonly getLanguageDirection = LangUtil.getDirection;
}
